import React from 'react';
import { NavLink } from 'react-router-dom';

export function RouterTabs(props) {

    const tabs = ["Zoning", "Census", "TownBoard", "EventLaw", "Petition"];
    const tabList = tabs.map( (tab) =>
        <li className="nav-item">
            <NavLink exact to={tab} className="nav-link" activeClassName="active"> {tab} </NavLink>
        </li>
    );

    return (
        <ul className="siteNav nav nav-tabs">
            { tabList }
        </ul>
    )
}

// this is hardcoding values following egghead tutorial
export const RouterLinks = () => (
    <div className="col">
        <ul className="siteNav nav nav-tabs">
            <li className="nav-item">
                <NavLink exact activeStyle={ {backgroundColor: "#40617F", fontWeight: "bold"}} className="nav-link" to="/Zoning">
                    Zoning
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink activeStyle={ {backgroundColor: "#40617F"}} to="/Census">
                    Census
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink exact activeClassName="active" to="/TownBoard">
                    Town Board
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink exact activeClassName="active" to="/EventLaw">
                    Event Law
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink exact activeClassName="active" to="/Petition">
                    Petition
                </NavLink>
            </li>
        </ul>
    </div>
);