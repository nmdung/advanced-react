import { FC } from 'react'
import { Layout, PageHeader, Button, Space } from 'antd'
import { EyeOutlined, StarFilled } from '@ant-design/icons'
import { yellow } from '@ant-design/colors'
import User from '../User'

const Header: FC = () => (
  <Layout.Header className='site-layout-background' style={{ padding: 0 }}>
    <PageHeader
      ghost={false}
      title={
        <Space>
          react-router-dom
          <Button size='small' icon={<EyeOutlined />}>
            Watch 78
          </Button>
          <Button size='small' icon={<StarFilled />}>
            Star 12
          </Button>
        </Space>
      }
      extra={<User />}
    />
  </Layout.Header>
)

export default Header
