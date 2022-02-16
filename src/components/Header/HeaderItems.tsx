import React, { FC, ReactElement } from "react";
import { Row } from "antd";
import Navigation from './components/Navigation'
import { HeaderItem } from './Header.styles'

const HeaderItems: FC = ({ children }) => {
    return (
        <Row>
            {React.Children.map(children, child => {
                const element = child as ReactElement
                const classNames = element.type === Navigation ? "flex-auto" : ""
                return (
                    <HeaderItem className={classNames}>{React.cloneElement(element)}</HeaderItem>
                )
            })}
        </Row>
    )
}
export default HeaderItems