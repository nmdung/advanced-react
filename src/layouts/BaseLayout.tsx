import { Divider } from "antd"
import { FC } from "react"
import { Header, Footer, Content } from "../components"

interface BaseLayoutComposition {
    Content: React.FC
}

const BaseLayout: FC & BaseLayoutComposition = ({ children }) => {
    const { Logo, SearchBar, Navigation, Notifications, RepoSettings, UserSettings } = Header
    return (
        <>
            <Header>
                <Logo />
                <SearchBar />
                <Navigation />
                <Notifications />
                <RepoSettings />
                <UserSettings />
            </Header>
            {children}
            <Divider />
            <Footer>Fun with Github ©2021 Created by 200lab</Footer>
        </>
    )
}

BaseLayout.Content = Content
export default BaseLayout