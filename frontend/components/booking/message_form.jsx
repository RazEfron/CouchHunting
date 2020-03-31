import React from 'react';

class MessageForm extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        debugger
        return (
            <div className="message-form-container">
                <form>
                    <textarea placeholder="Write a message.." onChange={(e) => {
                        debugger
                        return this.setState({ body: e.target.value })
                    }}></textarea>
                    <button onClick={this.clickHandler}>Send</button>
                </form>
            </div>
        )
    }
}


export default MessageForm;