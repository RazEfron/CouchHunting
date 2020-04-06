import React from 'react';
import Modal from '../modal'
import { withRouter } from 'react-router-dom';

class PhotosPreview extends React.Component {
    constructor(props) {
        super(props)
        this.homePhotos = this.homePhotos.bind(this);
        this.profilePhotos = this.profilePhotos.bind(this);
        this.state = { 
            photos: this.props.photos,
            state: ''
         };
        this.handleDelete = this.handleDelete.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        }

homePhotos() {
    
    return (
        this.props.home.photoids.length > 0 ? this.props.home.photoids.map((photoId, idx) => {
            return (
                <li id={this.props.photos[photoId] ? this.props.photos[photoId].id : ''} className="image-preview-container" key={`homePhoto-${idx}`}>
                        <img id={this.props.photos[photoId] ? this.props.photos[photoId].id : ''} src={this.props.photos[photoId] ? this.props.photos[photoId].photoUrl : ''} alt=""/>
                    <div>
                        <h1>{this.props.photos[photoId] ? this.props.photos[photoId].caption : ''}</h1>
                    </div>
                    {parseInt(this.props.match.params.profileId, 10) === this.props.loggedInId ? <a id="delete-logo" onClick={this.handleDelete}><img src={window.deleteLogo} alt="" /></a> : ''}
                </li>
                
                )}) : []
    )
}

    profilePhotos() {
        return (
            this.props.profile.photoids.length > 0 ? this.props.profile.photoids.map((photoId, idx)=> {
                return (
                    <li id={this.props.photos[photoId] ? this.props.photos[photoId].id : ''} className="image-preview-container" key={`profilePhoto-${idx}`}>
                            <img className="profile-overview-img" id={this.props.photos[photoId] ? this.props.photos[photoId].id : '' } src={this.props.photos[photoId] ? this.props.photos[photoId].photoUrl : ''} alt="" />                        <div>
                            <h1>{this.props.photos[photoId] ? this.props.photos[photoId].caption : ''}</h1>
                        </div>
                        {parseInt(this.props.match.params.profileId, 10) === this.props.loggedInId ? <a id="delete-logo" onClick={this.handleDelete}><img  src={window.deleteLogo} alt="" /></a> : ''}
                        {parseInt(this.props.match.params.profileId, 10) === this.props.loggedInId ? <a className="gold-star" onClick={this.handleUpdate}><img src={window.goldStarLogo} /></a> : ''}
                    </li>

                )
            }) : []
        )
    }


    handleDelete(e) {
                
        e.preventDefault();
        this.props.deletePhoto(e.currentTarget.parentElement.id)
            .then(() => this.props.fetchAllPhotos())
            .then(() => this.props.fetchProfile(this.props.profile.id))
            .then(() => this.props.fetchHome(this.props.home.id))

    }

    handleUpdate(e) {
                
        e.preventDefault();
        let currentPhoto = this.props.photos[e.currentTarget.parentElement.id];
        currentPhoto.main = true;
        this.props.updatePhoto(currentPhoto)
            .then(() => this.props.fetchAllPhotos())
            .then(() => this.props.fetchProfile(this.props.profile.id))
    }

    render() {
        
        return(
            <>
            <div className="profile-photos-overview">
                <header>
                    PROFILE PHOTOS
                </header>
                    <div className="profile-photos-overview-inner">
                <div >
                    <ul >
                        {this.profilePhotos()}
                    </ul>
                </div>
                <div>
                            {this.props.sessionId === parseInt(this.props.match.params.profileId, 10) ? <button onClick={() => this.props.openModal('profile')}>Add Photo</button> : ''}
                </div>
                </div>
                    <header>
                    PHOTOS OF MY HOME
                </header>
                    <div className="profile-photos-overview-inner">
                        <div>
                            <ul>
                                {this.homePhotos()}
                            </ul>
                        </div>
                        <div>
                            {this.props.sessionId === parseInt(this.props.match.params.profileId, 10) ? <button onClick={() => this.props.openModal('home')}>Add Photo</button> : ''}
                        </div>
                    </div>
            </div>
                {/* <Modal 
                    profile={this.props.profile}
                    home={this.props.home}
                /> */}
                
            </>
        )
    }
}


export default withRouter(PhotosPreview);