import { FC, useState } from 'react';
import { Link } from 'react-router-dom'
import routes from '../../../../routes'
import { Menu } from 'antd';

export interface INavigationProps {
    tmp?: string
}
// Todo: not done yet. Just build a layout
const Navigation: FC<INavigationProps> = () => {
    const [current, setcurrent] = useState<string>('/')
    const menuItems = routes.filter(({ showInMenu }) => showInMenu)
    return (
        <Menu selectedKeys={[current]} mode="horizontal">
            {menuItems.map(({ title, path }) => (
                <Menu.Item key={path}>
                    <Link to={path || ''}>{title}</Link>
                </Menu.Item>
            ))}
        </Menu>
    )
}
export default Navigation