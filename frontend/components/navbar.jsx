import React from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
    constructor(props) {
        super(props)
        this.modalClickHandler = this.modalClickHandler.bind(this)
    }

    modalClickHandler() {
        document.getElementById('login-form-container').style.display = 'block'
        document.getElementById('login-blackout').style.display = 'block'
        document.body.style.position = 'fixed';
    }

    render() {
        if (this.props.location.pathname === '/') {
            return(
                <header className="header-nav">
                            <a href="">
                                <img className="logo" src={window.logoLogo} alt=""/>
                            </a>
                            <a onClick={() => this.modalClickHandler()} className="login-form-button-link-top">Log in</a>
                </header>
            )
        } else if (this.props.location.pathname === '/profile/new') {
            return (
                <header className="header-nav">
                    <Link to="/dashboard">
                        <img className="logo" src={window.logoLogo} alt=""/>
                    </Link>
                    <div className="icons-container">
                        <a onClick={() => alert('profile must be completed to start hunting')}>
                            <img src={window.dashboardLogo} alt=""/>
                            <p>Dashboard</p>
                        </a>
                        <a onClick={() => alert('profile must be completed to start hunting')}>
                            <img src={window.bookingsLogo} alt="" />
                            <p>Bookings</p>
                        </a>
                        <a onClick={() => alert('profile must be completed to start hunting')}>
                            <img src={window.profileIcon} alt="" />
                            <p>Profile</p>
                        </a>
                        <a onClick={() =>this.props.logout()}>
                            <img src={window.logoutLogo} alt="" />
                            <p>Logout</p>
                        </a>
                    </div>
                </header>
            )
        } else {
            return (
                <header className="header-nav">
                    <Link to="/dashboard">
                        <img className="logo" src={window.logoLogo} alt=""/>
                    </Link>
                    <div className="search-bar-container">
                        <input type="text"/>
                    </div>
                    <div className="icons-container">
                        <Link to="/dashboard">
                            <img src={window.dashboardLogo} alt="" />
                            <p>Dashboard</p>
                        </Link>
                        <a onClick={() => alert('profile must be completed to start hunting')}>
                            <img src={window.bookingsLogo} alt="" />
                            <p>Bookings</p>
                        </a>
                        <Link to={`/profiles/${this.props.currentProfileId}`}>
                            <img src={window.profileIcon} alt="" />
                            <p>Profile</p>
                        </Link>
                        <a onClick={() =>{
                            //  
                             return this.props.logout()}}>
                            <img src={window.logoutLogo} alt="" />
                            <p>Logout</p>
                        </a>
                    </div>
                </header>
            )
        }
    }
}
                        

export default withRouter(Navbar);