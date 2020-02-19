import React from 'react';
import  FormData  from 'form-data';

class PhotosForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            photoFile: null,
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
        formData.append('photo[caption]', this.state.caption);
        formData.append('photo[photoable_id]', this.state.photoable_id);
        formData.append('photo[photoable_type]', this.state.photoable_type);
        formData.append('photo[main]', this.state.main);

        if (this.state.photoFile) {
               
            formData.append('photo[photo]', this.state.photoFile);
        }
           
        $.ajax({
            url: '/api/photos',
            method: 'POST',
            data: formData,
            contentType: false,
            processData: false
        })
        .then(() => this.props.closeModal())

    }

    update(field) {
         
        return (e) => {
            let newState = this.state;
            newState[field] = e.target.value;
    }
}

    handleFile(e) {
         
        this.setState({ photoFile: e.currentTarget.files[0]})
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
                        <button onClick={this.handleSubmit}>Upload</button>
                    </div>
                </div>
            </>
        )
    }
}


export default PhotosForm;