import React from 'react';
import { NavLink } from 'react-router-dom';

export default function RouterTabs(props) {

    const activeStyling = {
        fontWeight: "bold",
        color: "red"
    };

    const tabs = ["Zoning", "Census", "TownBoard", "EventLaw", "Petition"];
    const tabList = tabs.map( (tab) =>
        <li className="nav-item">
            <NavLink to={tab} activeStyle={ activeStyling }> {tab} </NavLink>
        </li>
    );

    return (
        <ul className="nav nav-pills nav-fill" id="routerTabs">
            { tabList }
        </ul>
    )
}