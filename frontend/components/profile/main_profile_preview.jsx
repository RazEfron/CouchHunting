import React from 'react'
import AboutPreview from './about_preview'
import MyHomePreview from './MyHomePreview'


class MainProfilePreview extends React.Component {
    constructor(props) {
        super(props)
        // this.state = { activeTab: this.props.activeTab }
    }

    // componentDidUpdate() {
    //      
    //     if (this.props.activeTab !== this.state.activeTab) {
    //         this.setState({ activeTab: this.props.activeTab });
    //     }
    // }

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

