// TabContent.js

import React, { Component } from 'react';
import TabList from './TabList';

import '../Styles/App.css';

export default class TabContent extends Component {
    render() {
        return (
            <div>
                <div id="siteNav" className="container up">
                    <TabList>
                        <div label="Zoning" className="tab-content">

                        </div>
                        <div label="Census" className="tab-content">

                        </div>
                        <div label="TownBoard" className="tab-content">

                        </div>
                        <div label="EventLaw" className="tab-content">

                        </div>
                        <div label="Petition" className="tab-content">

                        </div>
                    </TabList>
                </div>
            </div>
        );
    }
}