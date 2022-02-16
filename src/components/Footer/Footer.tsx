import { FC } from "react"
import { Layout } from 'antd'

const Footer: FC = ({ children }) => {
    return (
        <Layout.Footer>
            {children}
        </Layout.Footer>
    )
}
export default Footer