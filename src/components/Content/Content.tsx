import { FC } from 'react'
import { Layout } from 'antd'

const Content: FC = ({ children }) => {
    return (
        <Layout.Content>
            <div className="container">
                {children}
            </div>
        </Layout.Content>
    )
}
export default Content