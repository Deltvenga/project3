import React from "react";
import './EventsForm/UpdateEventInfoForm.css'

export default class EventsForm extends React.Component {

    state = {
        title: ""
    }

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="updateEventInfo-block">
                <label>Event Title: </label><input type="text"/>
                <div className="updateEventInfo-block_buttonDiv">
                    <button>OK</button>
                    <button>Cancel</button>
                </div>
            </div>
        )
    }
}