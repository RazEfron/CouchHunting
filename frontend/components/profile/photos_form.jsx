import React from 'react';

class PhotosForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            photo_url: null,
            caption: '',
            photoable_id: this.props.formObject.id,
            photoable_type: this.props.formType,
            main: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.update = this.update.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append('post[caption]', this.state.title);
        formData.append('post[photoable_id]', this.state.photoable_id);
        formData.append('post[photoable_type]', this.state.photoable_type);
        formData.append('post[main]', this.state.main);

        if (this.state.photoFile) {

            formData.append('post[photo_url]', this.state.photoFile);
        }
        $.ajax({
            url: '/api/photos',
            method: 'POST',
            data: formData,
            contentType: false,
            processData: false
        });

    }

    update(field) {
        return (e) => {
            let newState = this.state;
            newState.profile[field] = e.target.value;
            this.props.handleChange(newState);
    }
}

    handleFile(e) {
        this.setState({ photo_url: e.currentTarget.files[0]})
    }

    render() {
        console.log(this.state)
        return (
            <>
                <div id="login-blackout"></div>
                <div id="photos-form-container">
                    <span className="close" onClick={this.props.closeModal}>&times;</span>
                    <header>
                        <h1>
                            UPLOAD A PHOTO
                            </h1>
                    </header>
                    <div className="select-image">
                        <p>
                            Select an Photo:
                            </p>
                        <input 
                            type="file"
                            onChange={this.handleFile.bind(this)}
                        />
                    </div>
                    <div className="select-image">
                        <p>
                            Caption
                            </p>
                        <input
                            type="text"
                            placeholder="Describe the photo..."
                            onChange={this.update('caption')}
                        />
                    </div>
                    <div className="photo-upload-buttons">
                        <button onClick={this.props.closeModal}>Cancel</button>
                        <button>Upload</button>
                    </div>
                </div>
            </>
        )
    }
}


export default PhotosForm;