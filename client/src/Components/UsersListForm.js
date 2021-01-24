import React from "react";
import axios from "axios";
import './AdminListForm/AdminsListForm.css'

export default class UsersListForm extends React.Component {

    state = {
        selectUserId: "",
        selectEventId: "",
        selectUser: "",
        selectEvent: "",
        selectRole: "",
    }

    constructor(props) {
        super(props);
        this.handleChangeUser = this.handleChangeUser.bind(this)
        this.handleChangeEvent = this.handleChangeEvent.bind(this)
        this.handleChangeRole = this.handleChangeRole.bind(this)

    }


    handleChangeUser(e) {
        this.setState({selectUserId: e.target.value, selectUser: e.target.options[e.target.selectedIndex].text})
    }

    handleChangeEvent(e) {
        this.setState({selectEventId: e.target.value, selectEvent: e.target.options[e.target.selectedIndex].text})
    }

    handleChangeRole(e) {
        this.setState({selectRole: e.target.options[e.target.selectedIndex].text})
    }


    assignFunction = () => {
        console.log(this.state.selectUser, this.state.selectUserId, this.state.selectEvent)
        axios.post('http://localhost:9000/assignUser', null, {
            params: {
                userId: this.state.selectUserId,
                userName: this.state.selectUser,
                eventId: this.state.selectEventId,
                eventTitle: this.state.selectEvent,
                role: this.state.selectRole,
                assign: "Assign"
            }
        }).then(() => {
        })
    }

    render() {
        return (
            <div className="usersListForm-table">
                <table>
                    <tr>
                        <th>User</th>
                        <th>Event</th>
                        <th>Role</th>
                        <th>Assign</th>
                    </tr>
                    {this.props.list[0].map((item) => {
                        return (
                            <tr>{
                                Object.values(item).map(value => {
                                    return (
                                        <td>{value}</td>
                                    )
                                })}</tr>
                        )
                    })}
                    <tr className="usersListForm-table_tr">
                        {console.log(this.props.usersList[0])}
                        <td><select onChange={this.handleChangeUser}>{this.props.usersList[0].map((item) => {
                            return (
                                <option value={item._id}>{
                                    item._firstName} {item._lastName
                                }</option>
                            )
                        })}</select></td>
                        <td><select onChange={this.handleChangeEvent}>{this.props.eventsList[0].map((item) => {
                            return (
                                <option value={item._id}>{
                                    item._eventTitle
                                }</option>
                            )
                        })}</select></td>
                        <td><select onChange={this.handleChangeRole}>
                            <option value="1">Expert</option>
                            <option value="2">Competitor</option>
                        </select></td>
                        <td>
                            <button onClick={this.assignFunction}>Assign</button>
                        </td>
                    </tr>
                </table>
                <div className="usersListForm-table_buttonDiv">
                    <button onClick={this.props.handlerAssign}>OK</button>
                    <button onClick={this.props.handlerAssign}>Cancel</button>
                </div>
            </div>
        );
    }
}