import React from "react";
import './EventsForm/EventsForm.css'

export default class EventsForm extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="eventsInfo">
                <div className="eventsInfo-block">
                    <div className="eventsInfo-block_panel">
                        Events information
                        <button onClick={this.props.updateEventInfoHandler}/>
                    </div>
                    <p>Event title:<input type="text"/></p>
                </div>
                <div className="eventsInfo-block">
                    <div className="eventsInfo-block_panel">
                        Dates information
                        <button>edit</button>
                    </div>
                    <p>Start Date: <input type="text"/></p>
                    <p>C1 Date: <input type="text"/></p>
                    <p>C+1 Date: <input type="text"/></p>
                    <p>Finish Date: <input type="text"/></p>
                </div>
                <div className="eventsInfo-block">
                    <div className="eventsInfo-block_panel">
                        Participants
                        <button>edit</button>
                    </div>
                    <p>Participants: <input type="text"/>
                        <button className="eventsInfo-block_participants">Assign</button>
                    </p>
                </div>
                <div className="eventsInfo-block_buttonDiv">
                    <button>OK</button>
                    <button>Cancel</button>
                </div>
            </div>
        )
    }
}