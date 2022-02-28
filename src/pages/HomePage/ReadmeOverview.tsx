import { FC } from "react"
import { Skeleton } from "antd"
import { useQuery } from "@apollo/client"
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { GetReadmeDocument } from "./data/getReadme.github.gql.generated"

const ReadmeOverview: FC = () => {
    const { loading, error, data } = useQuery(GetReadmeDocument)

    if (error) throw new Error('Something bad happened');

    const object = data?.repository?.object
    return <>
        {!loading ?
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {object && 'text' in object ? object.text || '' : ''}
            </ReactMarkdown>
            : <Skeleton />
        }
    </>
}

export default ReadmeOverview