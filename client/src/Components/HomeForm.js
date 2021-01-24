import React from "react";
import './HomeForm/HomeForm.css';
import axios from "axios"

export default class HomeForm extends React.Component {

    state = {
        list: [],
        usersList: [],
        eventsList: []
    }
    newList = []
    newEventsList = []

    constructor(props) {
        super(props);
        this.getEventsListFunction = this.getEventsListFunction.bind(this)
    }

    getEventsListFunction = () => {

        axios.get('http://localhost:9000/getAdminListFunction').then((res) => {
            for (let i = 0; i < res.data.length; i++) {
                this.newList.push({
                    user: res.data[i].userName,
                    event: res.data[i].eventTitle,
                    role: res.data[i].role,
                    assign: res.data[i].assign
                })
            }
            this.state.list.push(this.newList)

            axios.get('http://localhost:9000/getUsers').then((res) => {
                this.state.usersList.push(res.data)
                console.log("usersList", this.state.usersList)

                axios.get('http://localhost:9000/getEvents').then((res) => {
                    this.state.eventsList.push(res.data)
                    this.props.browseUsersHandler(this.state.list, this.state.usersList, this.state.eventsList)
                })

            })
        });
    }

    getEventsFunction = () => {
        axios.get('http://localhost:9000/getEvents').then((res) => {
            for (let i = 0; i < res.data.length; i++) {
                const dateStart = res.data[i]._startDate.split('T');
                const newDateFormatArr = dateStart[0].split('-');
                const newDateFormat = newDateFormatArr[2] + '/' + newDateFormatArr[1] + '/' + newDateFormatArr[0];
                const dateFinish = res.data[i]._finishDate.split('T');
                const newDateFormatArr1 = dateFinish[0].split('-');
                const newDateFormat1 = newDateFormatArr1[2] + '/' + newDateFormatArr1[1] + '/' + newDateFormatArr1[0];
                this.newEventsList.push({
                    eventId: res.data[i]._id,
                    eventTitle: res.data[i]._eventTitle,
                    eventStartDate: newDateFormat,
                    participants: res.data[i]._participants,
                    cPlus1Date: res.data[i]._cPlus1Date,
                    finishDate: newDateFormat1
                })
            }
            console.log(this.state.eventsList)
            this.state.eventsList.push(this.newEventsList)
            console.log(this.newEventsList)
            this.props.browseEventsHandler(this.state.list, this.state.usersList, this.state.eventsList)
        })
    }

    render() {
        return (
            <div className="homeForm-block">
                <div className="homeForm-block_users">
                    <div className="homeForm-block_header">
                        Users
                    </div>
                    <p onClick={this.getEventsListFunction}>Browse</p>
                    <p>Create</p>
                    <p>Assign</p>
                </div>
                <div className="homeForm-block_events">
                    <div className="homeForm-block_header">
                        Events
                    </div>
                    <p onClick={this.getEventsFunction}>Browse</p>
                    <p onClick={this.props.createEventsHandler}>Create</p>
                    <p>Assign</p>
                </div>
                <div className="homeForm-block_documents">
                    <div className="homeForm-block_header">
                        Documents
                    </div>
                    <p>Browse</p>
                    <p>Create</p>
                    <p>Download</p>
                </div>
            </div>
        );
    }
}