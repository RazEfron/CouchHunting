import React from 'react';

class MyHomePreview extends React.Component {



    render() {
         
        return (
            <>
                <div className="profile-overview">
                    <header>
                        MY HOME
                        </header>
                    <div className="about-list-container">
                        <ul className="list-home-preview">
                            <li>
                                Max Number of Guests:
                                <span>{this.props.home.max_guest_num}</span>
                            </li>
                            <li>
                                Last-Minute Requests Okay? 
                                <span>{this.props.home.last_minute_ok ? 'Yes' : 'No'}</span>
                            </li>
                            <li>
                                Kid Friendly? 
                                <span>{this.props.home.kid_friendly ? 'Yes' : 'No'}</span>
                            </li>
                            <li>
                                Pet Friendly? 
                                <span>{this.props.home.pet_friendly ? 'Yes' : 'No'}</span>
                            </li>
                            <li>
                                Smoking Allowed? 
                                <span>{this.props.home.smoking_allowed ? 'Yes' : 'No'}</span>
                            </li>
                        </ul>
                    </div>
                        <div className="sleeping-arrangments">
                        <h1 className="sleeping-arrangments-h1">Sleeping Arrangments</h1>
                            <div>
                                {this.props.home.sleeping_arrangments}
                            </div>
                            <div>
                                {this.props.home.sleeping_arrangment_descreption}
                            </div>
                        </div>
                </div>
            </>
        )
    }
}

export default MyHomePreview;