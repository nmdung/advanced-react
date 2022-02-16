import React, { FC, useState } from 'react'
import { useLazyQuery } from '@apollo/client'
import { StyledAutoComplete } from './SearchBar.styles'
import { IHintOption, ISearchBarProps } from './SearchBar.types'
import { SearchRepoDocument, RepoSearchTextMatchFragment } from './data/searchRepo.github.gql.generated'
import currentRepoVar from '../../../../services/graphql/localStates/currentRepo'

const getOptionText = (
    textMatches?: (RepoSearchTextMatchFragment | null | undefined)[] | null,
) => {
    return textMatches?.find((match) => match?.property === 'name')?.fragment
}

const SearchBar: FC<ISearchBarProps> = ({ expandable = true }) => {
    const currentRepo = currentRepoVar()
    const [searchText, setSearchText] = useState(currentRepo.name)
    const [hintOptions, setHintOptions] = useState<IHintOption[]>([])
    const [hasExpanded, setHasExpanded] = useState<boolean>(!expandable)
    const [searchRepo, { data }] = useLazyQuery(SearchRepoDocument)

    const handleSearch = (repoName: string) => {
        setSearchText(repoName)
        searchRepo({ variables: { name: searchText } })
    }

    const handleSelect = (repoName: string) => {
        const selectedRepo = data?.search.edges?.find((edge) => {
            if (edge?.node && 'id' in edge.node) {
                return edge.node.nameWithOwner === repoName
            }

            return false
        })

        if (selectedRepo?.node && 'id' in selectedRepo.node) {
            const [owner, name] = selectedRepo.node.nameWithOwner.split('/')
            currentRepoVar({ owner, name })
            setSearchText(repoName)
        }
    }

    const getHintOptions = React.useCallback(() => {
        if (!data?.search.edges) return []

        return data?.search.edges.reduce((options: IHintOption[], edge) => {
            if (!edge?.node) return options

            const option: IHintOption = {
                value: 'nameWithOwner' in edge.node ? edge.node.nameWithOwner : "",
                label: edge?.textMatches ? getOptionText(edge?.textMatches) : ""
            }
            options.push(option)
            return options
        }, [])
    }, [data?.search.edges])

    React.useEffect(() => {
        const newOptions = getHintOptions()
        setHintOptions(newOptions)
    }, [data?.search.edges, getHintOptions])

    return (
        <StyledAutoComplete
            value={searchText}
            options={hintOptions}
            onFocus={() => setHasExpanded(true)}
            onBlur={() => setHasExpanded(false)}
            className={hasExpanded ? " has-expanded" : ""}
            onSelect={handleSelect}
            onSearch={handleSearch}
            placeholder="Search or jump to…"
        />
    )
}
export default SearchBar