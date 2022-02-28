import { FC } from 'react';
import { GithubOutlined } from '@ant-design/icons'

export interface ILogoProps {
    size?: string
}
// Todo: not done yet. Just build a layout
const Logo: FC<ILogoProps> = ({ size = 'sm' }) => {
    return (
        <GithubOutlined style={{ fontSize: '32px' }} />
    )
}

export default Logo