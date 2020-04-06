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
            // .then(message => this.props.history.replace(`/conversations/${message.message.conversation_id}`))
            .then(() => this.props.closeModal())
            .then(() => alert("request succesfully sent"))
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
            <div className="booking-form-container">
                <span className="close" onClick={this.props.closeModal}>&times;</span>
                <div>
                    <h1>
                        {`Requset to stay with ${this.props.profile.username}`}
                    </h1>
                </div>
                <form>
                    <div className="booking-form-dates">
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
                    <div className="booking-form-checkbox">
                        <input 
                            type="checkbox" 
                            checked={this.state.flexible_dates} 
                            onChange={this.update('flexible_dates')}
                            />
                        <label htmlFor="">Dates are flexible</label>
                    </div>
                    <div className="booking-form-guests">
                        <label>Number of Travelers</label>
                        <select value={this.state.num_guests} onChange={this.update('num_guests')} required>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                        </select>
                    </div>
                    <div className="booking-form-message-container">
                        <label>
                            Message
                            </label>
                        <textarea onChange={(e) => {

                            return this.setState({ body: e.target.value })
                        }} required></textarea>
                    </div>
                    <div id="booking-form-button" className="message-form-button-container">
                        <button onClick={this.clickHandler}>Send</button>
                        <button onClick={this.props.closeModal}>Cancel</button>
                    </div>
                </form>
            </div>
        )
    }
}


export default withRouter(BookingForm);