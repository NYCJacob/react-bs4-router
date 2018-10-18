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


const  tabStyles = {
    borderColor: "#fff #fff #dee2e6"
};

const activeStyles = {
    fontWeight: "bold",
    borderColor: "#dee2e6 #dee2e6 #fff"
};

export const RouterLinks = () => (
    <div className="col">
        <ul className="siteNav nav nav-tabs" style={ {borderBottom: "#fff" } }>
            <li className="nav-item">
                <NavLink exact activeStyle={ { fontWeight: "bold", borderColor: "#dee2e6 #dee2e6 #fff" }} style={ tabStyles } className="nav-link" to="/Zoning">
                    Zoning
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink activeStyle={ activeStyles}  style={ tabStyles } className="nav-link" to="/Census">
                    Census
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink exact activeClassName="active"  style={ tabStyles } className="nav-link" to="/TownBoard">
                    Town Board
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink exact activeClassName="active"  style={ tabStyles } className="nav-link" to="/EventLaw">
                    Event Law
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink exact activeClassName="active"  style={ tabStyles } className="nav-link" to="/Petition">
                    Petition
                </NavLink>
            </li>
        </ul>
    </div>
);