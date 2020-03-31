import React from 'react';
import { closeModal } from '../actions/modal_actions';
import { connect } from 'react-redux';
import HomePhotosForm from './profile/home_photos_form_container';
import ProfilePhotosForm from './profile/profile_photos_form_container';
import MessageForm from './booking/message_form';

class Modal extends React.Component {
    constructor(props) {
        super(props)
    }
render() {
    debugger
    const { modal, closeModal } = this.props;
    if (!modal) {
        return null;
    }
    let component;
    switch (modal) {
        case 'home':
            component = <HomePhotosForm
                            home={this.props.home} />;
            break;
        case 'profile':
            component = <ProfilePhotosForm
                            profile={this.props.profile} />;
            break;
        case 'message':
            component = <MessageForm/>

            break;
        default:
            return null;
    }
    return (
        <>
        <div className="modal-blackout" onClick={closeModal}>
        </div>
            <div id="photos-form-container" onClick={e => e.stopPropagation()}>
                {component}
            </div>
            </>
    );
}
}

const mapStateToProps = state => {
    return {
        modal: state.ui.modal
    };
};

const mapDispatchToProps = dispatch => {
    return {
        closeModal: () => dispatch(closeModal())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
