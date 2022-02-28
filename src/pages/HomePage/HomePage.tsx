import { FC } from "react"
import { BaseLayout } from "../../layouts"
import ReadmeOverview from "./ReadmeOverview"

const HomePage: FC = () => {
    return (
        <BaseLayout>
            <BaseLayout.Content>
                <ReadmeOverview />
            </BaseLayout.Content>
        </BaseLayout>
    )
}

export default HomePage
