import React from 'react';
import { Link } from 'react-router-dom';

const NavItem = props => {
    const pageURI = window.location.pathname+window.location.search;
    const liClassName = (props.path === pageURI) ? "nav-item active" : "nav-item";
    const aClassName = props.disabled ? "nav-link disabled" : "nav-link align-text-bottom";
    return(
        <li className={liClassName}>
            <a href={props.path} className={aClassName}>
                {props.name}
                {(props.path === pageURI) ? (<span className="sr-only">(current)</span>) : ''}
            </a>
        </li>
    )
}

class NavDropdown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isToggleOn : false
        };
    }

    showDropdown(e) {
        e.preventDefault();
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }
    render() {
        const classDropdownMenu = 'dropdown-menu' + (this.state.isToggleOn ? ' show' : '')
        return (
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown"
                   aria-haspopup="true" aria-expanded="false"
                   onClick={(e) => {this.showDropdown(e)}}>
                    {this.props.name}
                </a>
                <div className={classDropdownMenu} aria-labelledby="navbarDropdown">
                    {this.props.children}
                </div>
            </li>
        )
    }
}


class NavBar extends React.Component{
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light">
                <a className="navbar-brand" href="/"><h1 className="title" id="headerTitle"><span id="logo1">Marbletown</span><span id="logo2">info</span></h1></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <NavItem path="/" name="Interactive Zoning Map" />
                        <NavItem path="/censusdata" name="Census Data" />
                        <NavItem path="/townboard" name="Town Board" />
                        <NavItem path="/eventlaw" name="Event Law" />
                    </ul>

                </div>
            </nav>
        );
    }
}






// this is hidden for hamburger menu toggle
class MobileNav extends React.Component {
    render() {
        return (
            <nav id="sub-header-nav" className="collapse navbar navbar-expand-md">
                <ul className="nav nav-pills nav-fill">
                    <NavItem path="/" name="Interactive Zoning Map" />
                    <NavItem path="/censusdata" name="Census Data" />
                    <NavItem path="/townboard" name="Town Board" />
                    <NavItem path="/eventlaw" name="Event Law" />
                </ul>
            </nav>
        );
    }
}


class MainNav extends React.Component {
    render() {
        return (
            <div className="row">
                <div id="mainCol" className="col">
                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                        <li className="nav-item">
                            <Link className="nav-link active" id="home-tab" data-toggle="tab" to="/" role="tab"
                               aria-controls="home" aria-selected="true">Zoning</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" id="census-tab" data-toggle="tab" to="/censusdata" role="tab"
                               aria-controls="profile" aria-selected="false">Census</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" id="contact-tab" data-toggle="tab" to="/townboard" role="tab"
                               aria-controls="contact" aria-selected="false">Town Board</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" id="events-law" data-toggle="tab" to="/eventslaw" role="tab"
                               aria-controls="contact" aria-selected="false">Event Law</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" id="sign-petition" data-toggle="tab" to="/petition" role="tab"
                               aria-controls="contact" aria-selected="false">Sign Petition</Link>
                        </li>
                    </ul>
                </div>
            </div>

        );
    }
}


class Navigation extends React.Component {
    render() {
        return (
          <header>
              <MobileNav/>
              <MainNav/>
          </header>
        );
    }

}




export default Navigation;