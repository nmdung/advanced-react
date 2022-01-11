import { FC } from 'react'
import { Layout } from 'antd'
import { useRoutes } from 'react-router-dom'
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client'
import { setContext } from '@apollo/client/link/context'

import './App.less'
import Header from './components/Header'
import SideBar from './components/SideBar'
import routes from './routes'

const httpLink = createHttpLink({
  uri: 'https://api.github.com/graphql',
})

console.log(process.env)

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = process.env.REACT_APP_GITHUB_AUTH_TOKEN
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  }
})

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
})

const App: FC = () => {
  const routeElement = useRoutes(routes)

  return (
    <ApolloProvider client={client}>
      <Layout>
        <SideBar />
        <Layout className='site-layout' style={{ marginLeft: 200 }}>
          <Header />
          {routeElement}
          <Layout.Footer style={{ textAlign: 'center' }}>
            Fun with Github ©2021 Created by 200lab
          </Layout.Footer>
        </Layout>
      </Layout>
    </ApolloProvider>
  )
}
export default App
