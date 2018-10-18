// Tab.js

import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';


export default class Tab extends Component {

    render() {
        const { onClick, props: { activeTab, label }} = this;

        let className = 'nav-item nav-link';

        if (activeTab === label) {
            className += ' active';
        }

        return (
            <NavLink
                activeClassName="active"
                className={className}
                to={ label }
                onClick={onClick}
            >
                {label}
            </NavLink>
        );
    }
}