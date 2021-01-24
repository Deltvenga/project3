import React from "react";
import "./EventsForm/EventsListForm.css"

export default class EventsListForm extends React.Component {

    handleChangeEvent

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="eventsListForm-table">
                {console.log(this.props.eventsList[0])}
                <table>
                    <tr>
                        <th>Event</th>
                        <th>Dates</th>
                        <th>Participants</th>
                    </tr>
                    {this.props.eventsList[0].map((item) => {
                        return (
                            <tr>
                                <td>{item.eventTitle}</td>
                                <td>{item.eventStartDate} — {item.finishDate}</td>
                                <td>{item.participants}</td>
                            </tr>
                        )
                    })}
                    <tr className="eventsListForm-table_tr">
                        <td><select onChange={this.handleChangeEvent}>{this.props.eventsList[0].map((item) => {
                            return (
                                <option value={item.eventId}>{
                                    item._firstName} {item._lastName
                                }</option>
                            )
                        })}</select></td>
                        <td> </td>
                        <td> </td>
                    </tr>
                </table>
            </div>
        );
    }
}