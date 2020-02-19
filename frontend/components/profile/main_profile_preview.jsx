import React from 'react'
import AboutPreview from './about_preview'
import MyHomePreview from './MyHomePreview'
import PhotosPreview from './photos_preview_container';


class MainProfilePreview extends React.Component {
    constructor(props) {
        super(props)

    }


    render() {
          
        switch (this.props.activeTab) {
            case 'aboutMe':
                return (<AboutPreview
                    profile={this.props.profile}
                    memberSince={this.props.memberSince.slice(0, 4)}
                    location={this.props.location}
                />)
            case 'myHome':
                return (<MyHomePreview
                    home={this.props.home}
                />)
            case 'myPhotos':
                return (<PhotosPreview
                            profile={this.props.profile}
                            home={this.props.home}
                            openModal={this.props.openModal}
                            // allPhotos={this.props.allPhotos}
                                />)
            default:
                return (<AboutPreview
                    profile={this.props.profile}
                    memberSince={this.props.memberSince.slice(0, 4)}
                    location={this.props.location}
                />)
        
        }
    }
}

export default MainProfilePreview;

