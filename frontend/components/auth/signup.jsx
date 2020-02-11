import React from 'react';
import LoginFormContainer from './login_form_container';
import SignupFormContainer from './SignupFormContainer';
import { withRouter } from 'react-router';

class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.modalClickHandler = this.modalClickHandler.bind(this);
    }

    modalClickHandler() {
        document.getElementById('login-form-container').style.display = 'block'
        document.getElementById('login-blackout').style.display = 'block'
        document.body.style.position = 'fixed';
    }

    render() {
        const RouterSignupForm = withRouter(SignupFormContainer)
        const demoUser = { email: 'razefron01@gmail.com', password: '123456' }
        return (
            <div className="main-signup">
                <header className="header-main-signup">
                    <h1>Stay with Locals and Meet Travelers</h1>
                    <h2>Share Authentic Travel Experiences</h2>
                </header>
                <div className="signup-content">
                    <div className="demo-user-login"> 
                        <div>
                            <h1>Sign in with a demo user</h1>
                            <a onClick={() => this.props.login(demoUser)} className="login-submit">Sign in as Raz</a>
                        </div>
                        <div>
                            <h1>Or login with your user</h1>
                            <button onClick={this.modalClickHandler} className="login-form-button-link">Log in</button>
                        </div>
                    </div>
                    <div className="signup-content-separator">
                        <p>
                            or
                        </p>
                    </div>
                    <div className="signup-form-container">
                        <RouterSignupForm/>
                    </div>
                </div>
                <LoginFormContainer/>
            </div>
        )
    }
}

export default Signup;