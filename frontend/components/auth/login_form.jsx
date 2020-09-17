import React from 'react';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.closeModalClickHandler = this.closeModalClickHandler.bind(this);
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.login(user);
    }

    renderErrors() {
        if (this.props.errors !== undefined) {
            return (
                <ul className="session-erros-list">
                    {this.props.errors.map((error, i) => (
                        <li key={`error-${i}`}>
                            {error}
                        </li>
                    ))}
                </ul>
            );
        } else {
            return <div></div>
        }
    }

    closeModalClickHandler() {
        document.getElementById('login-form-container').style.display = 'none'
        document.getElementById('login-blackout').style.display = 'none'
        document.body.style.position = '';
    }

    render() {
        return (
            <>
            <div id="login-form-container">
                    <span className="close" onClick={this.closeModalClickHandler}>&times;</span>
                <header>
                    <h1>
                        Log in to Couchhunting
                    </h1>
                    <div className="login-errors">
                        {this.renderErrors()}
                    </div>
                </header>
                <form onSubmit={this.handleSubmit} className="login-form-box">
                    <div className="login-form">
                            <input type="text"
                                    value={this.state.email}
                                    onChange={this.update('email')}
                                    className="login-input"
                                    placeholder="Email"
                                    required
                                />
                            <input type="password"
                                    value={this.state.password}
                                    onChange={this.update('password')}
                                    className="login-input"
                                    placeholder="Password"
                                    required

                                />
                        <input className="login-submit" type="submit" value="Log In" />
                    </div>
                </form>
                <div className="login-bottom">
                    <p>
                        Don’t have an account?
                    </p>
                        <button onClick={this.closeModalClickHandler} className="join-form-button-link">join</button>
                </div>
            </div>
                <div id="login-blackout"></div>
            </>
        );
    }
}

export default LoginForm;
