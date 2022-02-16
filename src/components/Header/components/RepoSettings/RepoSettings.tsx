import { FC } from 'react'
import { Menu, Dropdown } from 'antd'
import { PlusOutlined, CaretDownOutlined } from '@ant-design/icons'

export interface IRepoSettingProps {
    tmp?: string
}
// Todo: not done yet. Just build a layout
const RepoSettings: FC<IRepoSettingProps> = () => {
    const DropdownMenu = (
        <Menu>
            <Menu.Item key="0">
                <a href="/new">New repository</a>
            </Menu.Item>
            <Menu.Item key="1">
                <a href="/new/import">Import repository</a>
            </Menu.Item>
            <Menu.Item key="2">
                <a href="https://gist...">New gist</a>
            </Menu.Item>
            <Menu.Item key="3">
                <a href="/organizations/new">New organization</a>
            </Menu.Item>
            <Menu.Item key="4">
                <a href="/users/...">New project</a>
            </Menu.Item>
        </Menu>
    );
    return (
        <Dropdown overlay={DropdownMenu} placement="bottomRight" arrow trigger={['click']}>
            <span className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                <PlusOutlined style={{ marginRight: 2 }} />
                <CaretDownOutlined style={{ fontSize: 12 }} />
            </span>
        </Dropdown>)
}
export default RepoSettings