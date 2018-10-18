import React from 'react';
import { Link } from 'react-router-dom';




export default class SiteHeader extends React.Component {
    render() {
        return (
            <div>
                <Link to="/">
                    <h1 className="title" id="headerTitle"><span id="logo1">Marbletown</span><span id="logo2">info</span>
                    </h1>
                </Link>
            </div>
        );
    }
}