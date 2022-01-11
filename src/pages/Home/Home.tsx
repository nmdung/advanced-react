import { Typography } from 'antd'
import ReactMarkdown from 'react-markdown'
import Content from '../../components/Content'

const Home = () => (
  <Content>
    <Typography.Text>
      <ReactMarkdown
        children={
          "# Welcome to React Router &middot; [![npm package][npm-badge]][npm] [![build][build-badge]][build]\n\n[npm-badge]: https://img.shields.io/npm/v/react-router-dom.svg?style=flat-square\n[npm]: https://www.npmjs.org/package/react-router-dom\n[build-badge]: https://img.shields.io/github/workflow/status/remix-run/react-router/test/dev?style=flat-square\n[build]: https://github.com/remix-run/react-router/actions/workflows/test.yml\n\nReact Router is a lightweight, fully-featured routing library for the [React](https://reactjs.org) JavaScript library. React Router runs everywhere that React runs; on the web, on the server (using node.js), and on React Native.\n\nIf you're new to React Router, we recommend you start with [the getting started guide](/docs/getting-started/installation.md).\n\nIf you're migrating to v6 from v5 (or v4, which is the same as v5), check out [the migration guide](/docs/upgrading/v5.md). If you're migrating from Reach Router, check out [the migration guide for Reach Router](/docs/upgrading/reach.md). If you need to find the code for v5, [it is on the `v5` branch](https://github.com/remix-run/react-router/tree/v5).\n\nWhen v6 is stable we will publish the docs on our website.\n\n## Contributing\n\nThere are many different ways to contribute to React Router's development. If you're interested, check out [our contributing guidelines](CONTRIBUTING.md) to learn how you can get involved.\n\n## Packages\n\nThis repository is a monorepo containing the following packages:\n\n- [`react-router`](/packages/react-router)\n- [`react-router-dom`](/packages/react-router-dom)\n- [`react-router-native`](/packages/react-router-native)\n\n## Changes\n\nDetailed release notes for a given version can be found [on our releases page](https://github.com/remix-run/react-router/releases).\n\n## Funding\n\nYou may provide financial support for this project by donating [via Open Collective](https://opencollective.com/react-router). Thank you for your support!\n\n## About\n\nReact Router is developed and maintained by [Remix Software](https://remix.run) and many [amazing contributors](https://github.com/remix-run/react-router/graphs/contributors).\n"
        }
      />
    </Typography.Text>
  </Content>
)

export default Home
