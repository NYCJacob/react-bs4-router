import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';

function RouterTabs(props) {

    const activeStyling = {
        fontWeight: "bold",
        color: "red"
    };

    const tabs = ["Zoning", "Census", "TownBoard", "EventLaw", "Petition"];
    const tabList = tabs.map( (tab) =>
        <NavLink to={tab} activeStyle={ activeStyling }> {tab} </NavLink>);

    return (
        <div id="routerTabs">
            { tabList }
        </div>
    )
}


const RouterTabsConnected = withRouter(RouterTabs);

export default RouterTabsConnected;
