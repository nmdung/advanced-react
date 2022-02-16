import { FC } from 'react'
import { Layout } from 'antd'
import { useRoutes } from 'react-router-dom'
import routes from './routes'
import { ApolloProvider } from '@apollo/client'
import { GetApolloClient } from './services/graphql'
import './App.less'

const App: FC = () => {
  const routeElement = useRoutes(routes)
  const client = GetApolloClient()

  return (
    <ApolloProvider client={client}>
      <Layout>
        {routeElement}
      </Layout>
    </ApolloProvider>
  )
}
export default App

