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
                                {`Max Number of Guests: ${this.props.home.max_guest_num}`}
                            </li>
                            <li>
                                {`Last-Minute Requests Okay? ${this.props.home.last_minute_ok ? 'Yes' : 'No'}`}
                            </li>
                            <li>
                                {`Kid Friendly? ${this.props.home.kid_friendly ? 'Yes' : 'No'}`}
                            </li>
                            <li>
                                {`Pet Friendly? ${this.props.home.pet_friendly ? 'Yes' : 'No'}`}
                            </li>
                            <li>
                                {`Smoking Allowed? ${this.props.home.smoking_allowed ? 'Yes' : 'No'}`}
                            </li>
                        </ul>
                    </div>
                        <div className="sleeping-arrangments">
                        <h1 className="sleeping-arrangments-h1">Sleeping Arrangments</h1>
                            {this.props.home.sleeping_arrangments}
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