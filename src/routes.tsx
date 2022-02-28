import type { RouteObject } from 'react-router-dom'
import HomePage from './pages/HomePage'
//import PullRequests from './pages/PullRequests'

type Route = RouteObject & {
  title: string,
  showInMenu: boolean
}

const routes: Route[] = [
  {
    path: '/',
    element: <HomePage />,
    title: 'Home',
    showInMenu: false
  },
  {
    path: '/pulls',
    element: <HomePage />,
    title: 'Pull Requests',
    showInMenu: true
  },
  {
    path: '/issues',
    element: <HomePage />,
    title: 'Issues',
    showInMenu: true
  },
]

// const RenderRouter: FC = () => {
//   const element = useRoutes(routeList);

//   return element;
// };
export default routes
