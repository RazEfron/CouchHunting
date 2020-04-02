import React from 'react';
import { withRouter } from 'react-router';


class BookingForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = { body: "" }
        this.clickHandler = this.clickHandler.bind(this);
    }

    clickHandler() {
        debugger
        const { currentProfileId, match, createMessage, fetchConversation } = this.props;
        this.props.fetchSearchResults("all", [match.params.profileId, currentProfileId])
            .then(() => fetchConversation("none", { author_id: currentProfileId, receiver_id: match.params.profileId }))
            .then(conversation => createMessage({ body: this.state.body, conversation_id: conversation.conversation.id, profile_id: currentProfileId }))
            .then(message => this.props.history.replace(`/conversations/${message.message.conversation_id}`))
            .then(() => this.props.closeModal)
    }

    render() {

        return (
            <div className="message-form-container">
                <span className="close" onClick={this.props.closeModal}>&times;</span>
                <form>
                    <div>
                        <div>
                            <label>Arrival Date</label>
                            <input type="date" name="" id="" required/>
                        </div>
                        <div>
                            <label>Departure Date</label>
                            <input type="date" name="" id="" required/>
                        </div>
                    </div>
                    <div>
                        <input type="checkbox" name="" id="" required/>
                        <label htmlFor="">Dates are flexible</label>
                    </div>
                    <div>
                        <select required>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                        </select>
                    </div>
                    <div>
                    <textarea placeholder="Write a message.." onChange={(e) => {
                        
                        return this.setState({ body: e.target.value })
                    }} required></textarea>
                    <button onClick={this.clickHandler}>Send</button>
                    </div>
                </form>
            </div>
        )
    }
}


export default withRouter(BookingForm);