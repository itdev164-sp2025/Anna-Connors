import React from "react";
import { BaseContainer } from "../BaseContainer";
import PropTypes from 'prop-types';

export const ListItem = ({ children, ...rest }) => (
    <BaseContainer as='li' {...rest}>
        {children}
    </BaseContainer>
)

ListItem.propTypes = {
    children: PropTypes.node.isRequired
}