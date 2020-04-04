import React from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import SearchBar from './search/search_bar_container';

class Navbar extends React.Component {
    constructor(props) {
        super(props)
        // this.unreads = 0;
        this.state = { unreads: 0, messages: "" }
        this.modalClickHandler = this.modalClickHandler.bind(this)
        this.profileClickHandler = this.profileClickHandler.bind(this)
        this.inboxClickHandler = this.inboxClickHandler.bind(this)
    }

    modalClickHandler() {
        document.getElementById('login-form-container').style.display = 'block'
        document.getElementById('login-blackout').style.display = 'block'
        document.body.style.position = 'fixed';
    }

    profileClickHandler() {
        this.props.fetchProfile(this.props.currentProfileId)
            .then(profile => this.props.history.replace(`/profiles/${profile.profile.id}`))
    }

    inboxClickHandler() {
        this.props.fetchAllConversations(this.props.currentProfileId)
            .then(() => this.props.history.replace(`/profiles/${this.props.currentProfileId}/inbox`))
    }

    componentDidMount() {
        this.setState({ unreads: 0, messages: "" })
        // this.props.fetchAllConversations(this.props.currentProfileId)
        //     .then(conversations => {
        //         let convos = Object.values(conversations.conversations);
        //         
        //         let idsArray = [];
        //         convos.forEach(convo => {
        //             idsArray.push(convo.messageId)
        //         });
        //         return this.props.fetchAllMessages("none", idsArray)
        //             .then(messages => {
        //                 let unreads = 0;
        //                 Object.values(messages.messages).forEach(message => {
        //                     
        //                     if (message.profile_id !== this.props.currentProfileId && message.status === "unread") {
        //                         
        //                         unreads += 1;
        //                     }
        //                 });
        //                 this.setState({ unreads: unreads })
        //             })
        //     })
    }

    componentDidUpdate() {
        
        let unreads = 0;
        
        if (this.state.messages !== this.props.messages) {
            Object.values(this.props.messages).forEach(message => {
                
                if (message.profile_id !== this.props.currentProfileId && message.status === "unread") {
                    
                    unreads += 1;
                }
            });
            
            this.setState({ unreads: unreads, messages: this.props.messages })
        }
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
                            <p>Inbox</p>
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
                    <SearchBar/>
                    <div className="icons-container">
                        <Link to="/dashboard">
                            <img src={window.dashboardLogo} alt="" />
                            <p>Dashboard</p>
                        </Link>
                        <a onClick={this.inboxClickHandler}>
                            <img src={window.bookingsLogo} alt="" />
                            <p>Inbox</p>
                        </a>
                        {/* <Link to={`/profiles/${this.props.currentProfileId}`}>
                            <img src={window.profileIcon} alt="" />
                            <p>Profile</p>
                        </Link> */}
                        <a onClick={this.profileClickHandler}>
                            <img src={window.profileIcon} alt="" />
                            <p>Profile</p>
                        </a>
                        <span>{this.state.unreads}</span>
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