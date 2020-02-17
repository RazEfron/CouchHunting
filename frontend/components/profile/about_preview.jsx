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
                                    {`Fluent in ${this.props.profile.spoken_languages}`}
                            </li>
                            <li>
                                <img src={window.genderLogo} alt=""/>
                                {this.props.profile.gender}
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <img src={window.jobLogo} alt=""/>
                                {this.props.profile.occupation}
                            </li>
                            <li>
                                <img src={window.locationLogo} alt=""/>
                            </li>
                            <li>
                                <img src="" alt="" />
                                {`Member since ${this.props.memberSince}`}
                            </li>

                        </ul>
                    </div>
                </div>
                <div className="profile-overview">
                    qqfdsafd
                </div>
            </>
        )
    }
}

export default AboutPreview;