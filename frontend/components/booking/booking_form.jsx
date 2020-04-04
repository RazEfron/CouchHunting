import React from 'react';
import { withRouter } from 'react-router';


class BookingForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = { body: "" }
        this.state = { 
            start_date: "",
            end_date: "",
            flexible_dates: false,
            num_guests: 1,
            body: ""
            
        }
        this.clickHandler = this.clickHandler.bind(this);
        this.update = this.update.bind(this);
        this.isValidDate = this.isValidDate.bind(this);
    }

    clickHandler() {
        
        const { currentProfileId, match, createMessage, fetchConversation, fetchSearchResults, createBooking } = this.props;
        fetchSearchResults("all", [match.params.profileId, currentProfileId])
            .then(() => fetchConversation("none", { author_id: currentProfileId, receiver_id: match.params.profileId }))
            .then(conversation => createBooking({ 
                traveler_id: currentProfileId, 
                host_id: match.params.profileId,
                conversation_id: conversation.conversation.id, 
                start_date: this.state.start_date,
                end_date: this.state.end_date,
                flexible_dates: this.state.flexible_dates,
                num_guests: this.state.num_guests}))
            .then(booking => createMessage({ body: this.state.body, conversation_id: booking.booking.conversation_id, profile_id: currentProfileId }))
            .then(message => this.props.history.replace(`/conversations/${message.message.conversation_id}`))
    }

    componentWillUnmount() {
        this.props.closeModal()
    }

    update(field) {
        
        return (e) => {
            
            if (e.target.type === "checkbox") {
                this.setState({ [field]: e.target.checked })
            } else if (e.target.type === "date") {
                if (this.isValidDate(e)) {
                    this.setState({ [field]: e.target.value })
                } else {
                    alert("start date can't be before today or after the end date")
                }
            } else {
                this.setState({ [field]: e.target.value })
            }
        }
    }

    isValidDate(event) {
        
        if (event.target.value < new Date().toJSON().slice(0, 10)) {
            return false;
        }
        if (event.target.id === "start_date") {
            
            if (!document.getElementById("end_date").value) {
                return true;
            } else if (document.getElementById("end_date").value <= event.target.value) {
                return false;
            }
        } else {
            
            if (!document.getElementById("start_date").value) {
                return true;
            } else if (document.getElementById("start_date").value >= event.target.value) {
                return false;
            }
        }
        return true;
    }


    render() {
        
        return (
            <div className="message-form-container">
                <span className="close" onClick={this.props.closeModal}>&times;</span>
                <form>
                    <div>
                        <div>
                            <label>Arrival Date</label>
                            <input 
                                id="start_date"
                                type="date" 
                                value={this.state.start_date} 
                                onChange={this.update('start_date')}
                                required/>
                        </div>
                        <div>
                            <label>Departure Date</label>
                            <input 
                                id="end_date"
                                type="date" 
                                value={this.state.end_date} 
                                onChange={this.update('end_date')}
                                required/>
                        </div>
                    </div>
                    <div>
                        <input 
                            type="checkbox" 
                            checked={this.state.flexible_dates} 
                            onChange={this.update('flexible_dates')}
                            />
                        <label htmlFor="">Dates are flexible</label>
                    </div>
                    <div>
                        <select value={this.state.num_guests} onChange={this.update('num_guests')} required>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                        </select>
                    </div>
                    <div>
                    <textarea placeholder="Write a message.." onChange={this.update('body')} required></textarea>
                    <button onClick={this.clickHandler}>Send</button>
                    </div>
                </form>
            </div>
        )
    }
}


export default withRouter(BookingForm);