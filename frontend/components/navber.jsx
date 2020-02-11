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
        return(
            <header className="header-nav">
                        <a href="">
                            Logo goes here
                        </a>
                        <a onClick={() => this.modalClickHandler()} className="login-form-button-link">Log in</a>
            </header>
        )
    }
}

export default Navbar;