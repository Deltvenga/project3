import React from "react";
import axios from "axios";
import './CreateEventsForm/CreateEventsForm.css'

export default class CreateEventsForm extends React.Component {

    state = {
        eventTitle: "shr",
        startDate: '2020-01-12',
        c1Date: '2020-01-13',
        cPlus1Date: '2020-01-15',
        finishDate: '2020-01-16'
    }

    constructor(props) {
        super(props);
        this.onInputChange = this.onInputChange.bind(this);
        this.createEventsFunction = this.createEventsFunction.bind(this);
    }

    onInputChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }


    createEventsFunction = () => {
        if (this.state.startDate < this.state.c1Date && this.state.c1Date < this.state.cPlus1Date && this.state.cPlus1Date < this.state.finishDate) {
            axios.post('http://localhost:9000/createEventsFunction', null, {
                params: {
                    title: this.state.eventTitle,
                    startDate: this.state.startDate,
                    c1Date: this.state.c1Date,
                    cPlus1Date: this.state.cPlus1Date,
                    finishDate: this.state.finishDate
                }
            }).then(() => {
                this.setState({eventTitle: "test"});
                console.log("success");

            });
        }
        this.props.createEventHandler();
    }

    render() {
        return (
            <div className="createEvents-block">
                <label>Event Title</label><input
                type="text"
                className="createEvents-block_input_title"
                onChange={this.onInputChange}
                name="title"/>
                <p>
                    <label>Start Date</label>
                    <input
                        type="date"
                        className="createEvents-block_input_start"
                        value={this.state.startDate}/>
                </p>
                <p>
                    <label>C1 Date</label>
                    <input
                        type="date"
                        className="createEvents-block_input_c1Date"
                        value={this.state.c1Date}/>
                </p>
                <p>
                    <label>C+1 Date</label>
                    <input
                        type="date"
                        className="createEvents-block_input_cNext"
                        value={this.state.cPlus1Date}/>
                </p>
                <p>
                    <label>Finish Date</label>
                    <input
                        type="date"
                        className="createEvents-block_input_finish"
                        value={this.state.finishDate}/>
                </p>

                <div className="createEvents-block_buttonDiv">
                    <button
                        onClick={this.createEventsFunction}>
                        OK
                    </button>
                    <button onClick={this.props.cancelHandler}>Cancel</button>
                </div>
            </div>
        );
    }
}