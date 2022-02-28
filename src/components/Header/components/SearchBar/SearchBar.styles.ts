import { AutoComplete } from "antd";
import styled from "styled-components";

export const StyledAutoComplete = styled(AutoComplete)`
  width: 270px;
  &:hover .ant-select-selector {
    border-color: #434343 !important;
  }
  &.ant-select-focused:not(.ant-select-customize-input) {
    .ant-select-selector {
      border-color: #1f6feb !important;
    }
  }
  &.has-expanded {
    width: 540px;
  }
`;
