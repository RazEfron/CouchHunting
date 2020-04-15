import React from 'react';

class AboutPreview extends React.Component {
    
    render() {
        debugger
        return(
            <>
                <div className="profile-overview">
                        <header>
                            OVERVIEW
                        </header>
                    <div className="overview-list-container">
                        <ul>
                            <li>
                                    <img src={window.referenceLogo} alt="" />
                                    0 references
                            </li>
                            <li>
                                    <img src={window.languageLogo} alt=""/>
                                {this.props.profile.spoken_languages ? `Fluent in ${this.props.profile.spoken_languages}`: "Please add language"}
                            </li>
                            <li>
                                <img src={window.genderLogo} alt=""/>
                                {this.props.profile.gender}
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <img src={window.jobLogo} alt=""/>
                                {this.props.profile.occupation ? this.props.profile.occupation : "Please add occupation"}
                            </li>
                            <li>
                                <img src={window.locationLogo} alt=""/>
                                {`${this.props.location.city}, ${this.props.location.country}`}
                            </li>
                            <li>
                                <img className="logo-small" src={window.logoLogo} alt="" />
                                {`Member since ${this.props.memberSince}`}
                            </li>

                        </ul>
                    </div>
                </div>
                <div className="profile-overview">
                    <header>
                        ABOUT ME
                    </header>
                    <div className="about-me-profile">
                        {this.props.profile.about_me ? this.props.profile.about_me : "Tell us about yourself"}
                    </div>
                    <div className="interests">
                        Interests
                        <div>
                            {/* gfnjkafdnjkfkdafd */}
                            {this.props.profile.interests}
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default AboutPreview;