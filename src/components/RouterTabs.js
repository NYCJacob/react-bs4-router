import React from 'react';
import { NavLink } from 'react-router-dom';

export default function RouterTabs(props) {

    const tabs = ["Zoning", "Census", "TownBoard", "EventLaw", "Petition"];
    const tabList = tabs.map( (tab) =>
        <NavLink to={tab} activeClassName='active'> {tab} </NavLink>);

    return (
        <div id="routerTabs">
            { tabList }
        </div>
    )
}