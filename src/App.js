import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Helmet } from "react-helmet";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './Styles/App.css';
import NavBar from './components/Navigation';
import ZoningMap from './components/ZoningMap';
import TabContent from './components/TabContent';
import SiteHeader from "./components/SiteHeader";
import RouterTabs from "./components/RouterTabs";

class App extends Component {
  render() {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
                <meta name="description" content="Marbletown NY Information and Analysis"/>
                <meta name="author" content="FutureSense Technologies"/>
                <title>Marbletown Info</title>
                {/*mapbox*/}
                {/*<script src='https://api.mapbox.com/mapbox-gl-js/v0.47.0/mapbox-gl.js'></script>*/}
                <link href='https://api.mapbox.com/mapbox-gl-js/v0.47.0/mapbox-gl.css' rel='stylesheet' />
            </Helmet>

            <div role="main" className="container">

                <SiteHeader/>
                <RouterTabs/>
                <TabContent/>

                <div className="row">
                    <div className="col">
                        <div className="tab-content" id="mainTab">

                            <Route exact path="/" component={ZoningMap}/>
                            <Route exact path="/Zoning" component={ZoningMap}/>

                            <Route path="/census" render={() => (
                                    <h1>censusdata</h1>
                                )}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
  }
}

export default App;
