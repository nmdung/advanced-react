import { Layout, Col } from "antd";
import styled from "styled-components";

export const HeaderContainer = styled(Layout.Header)`
  padding: 16px 32px;
  color: var(--color-header-text);
  background-color: var(--color-header-bg);
  max-height: 62px;
`;

export const HeaderItem = styled(Col)`
  line-height: initial;
  margin-right: 16px;
  display: grid;
  align-items: center;
  a {
    font-weight: 600;
    color: var(--color-header-text);
  }
  &.flex-auto {
    flex: auto;
  }
  .ant-menu {
    background: transparent;
    border-bottom-width: 0;
    line-height: initial;
  }
  .ant-menu-horizontal > .ant-menu-item::after,
  .ant-menu-horizontal > .ant-menu-submenu::after {
    display: none;
  }
  .ant-menu-horizontal > .ant-menu-item {
  }
`;
