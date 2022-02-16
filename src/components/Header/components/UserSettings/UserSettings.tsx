import { FC } from 'react'
import { Menu, Dropdown, Avatar, Typography } from 'antd'
import { CaretDownOutlined } from '@ant-design/icons'
import { useQuery } from '@apollo/client'

import { GetUserDocument } from './data/getUser.github.gql.generated'
const { Link } = Typography

export interface IUserSettingProps {
    tmp?: string
}

const UserSettings: FC<IUserSettingProps> = () => {
    const { data } = useQuery(GetUserDocument)

    const DropdownMenu = (
        <Menu>
            <Menu.Item key="0">
                <Link href={`/${data?.viewer.login}`}>Signed in as {data?.viewer.login}</Link>
            </Menu.Item>
            <Menu.Divider />
            <Menu.Item key="3">Sign out</Menu.Item>
        </Menu>
    );

    return (
        <Dropdown overlay={DropdownMenu} placement="bottomRight" arrow trigger={['click']}>
            <Link className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                <Avatar src={data?.viewer.avatarUrl} size="small" />
                <CaretDownOutlined style={{ fontSize: 12 }} />
            </Link>
        </Dropdown>)
}
export default UserSettings