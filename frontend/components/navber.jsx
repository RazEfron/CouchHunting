import React from 'react';

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
        debugger
        if (this.props.location.pathname === '/signup') {
            return(
                <header className="header-nav">
                            <a href="">
                                Logo goes here
                            </a>
                            <a onClick={() => this.modalClickHandler()} className="login-form-button-link">Log in</a>
                </header>
            )
        } else if (this.props.location.pathname === '/profile/new') {
            return (
                <header className="header-nav">
                    <a href="">
                        Logo goes here
                    </a>
                    <div className="icons-container">
                        <a>
                            <img src={window.profileIcon} alt=""/>
                            <p>Profile</p>
                        </a>
                        <a>
                            <img src={window.githubIcon} alt="" />
                            <p>Github</p>
                        </a>
                        <a>
                            <img src={window.bookingsLogo} alt="" />
                            <p>Bookings</p>
                        </a>
                        <a>
                            <img src={window.profileIcon} alt="" />
                            <p>Profile</p>
                        </a>
                    </div>
                </header>
            )
        }
    }
}

export default Navbar;