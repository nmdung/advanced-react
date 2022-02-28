import React, { FC } from 'react';
import Logo, { ILogoProps } from './components/Logo'
import SearchBar, { ISearchBarProps } from './components/SearchBar'
import Navigation, { INavigationProps } from './components/Navigation'
import Notifications, { INotificationProps } from './components/Notifications'
import RepoSettings, { IRepoSettingProps } from './components/RepoSettings'
import UserSettings, { IUserSettingProps } from './components/UserSettings'
import HeaderItems from "./HeaderItems"
import { HeaderContainer } from './Header.styles'
interface HeaderComposition {
    Logo: React.FC<ILogoProps>
    SearchBar: React.FC<ISearchBarProps>
    Navigation: React.FC<INavigationProps>
    Notifications: React.FC<INotificationProps>
    RepoSettings: React.FC<IRepoSettingProps>
    UserSettings: React.FC<IUserSettingProps>
}

const Header: FC & HeaderComposition = ({ children }) => {
    return (
        <HeaderContainer>
            <HeaderItems>{children}</HeaderItems>
        </HeaderContainer>
    )
}

export default Header

Header.Logo = Logo
Header.SearchBar = SearchBar
Header.Navigation = Navigation
Header.Notifications = Notifications
Header.RepoSettings = RepoSettings
Header.UserSettings = UserSettings