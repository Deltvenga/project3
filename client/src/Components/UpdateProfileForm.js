import React from "react";
import axios from "axios";
import './UserinfoForm/UpdateProfileForm.css';

export default class UpdateProfileForm extends React.Component {

    state = {
        firstName: "Мышб",
        lastName: this.props.lastName,
        country: this.props.country,
        about: "loh"
    }

    constructor(props) {
        super(props);
        this.onInputChange = this.onInputChange.bind(this);
        this.saveProfileUpdateFunction = this.saveProfileUpdateFunction.bind(this);
    }

    onInputChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    saveProfileUpdateFunction = () => {
        axios.post('http://localhost:9000/saveProfileUpdateFunction', null, {
            params: {
                email: this.props.currentLogin,
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                country: this.state.country,
                about: this.state.about
            }
        }).then((data) => {
            console.log(data);
            this.props.saveProfileUpdateHandler(this.props.currentLogin, this.props.password, this.state.firstName, this.state.lastName, this.state.country, this.state.about);
        })

    }

    render() {
        return (
            <div className="updateProfileForm-block">
                <label>First Name</label><input
                type="text"
                className="updateProfileForm-block_input"
                value={this.state.firstName}
                onChange={this.onInputChange}
                name="firstName"/>
                <p><label>Last Name</label><input
                    type="text"
                    className="updateProfileForm-block_input"
                    value={this.props.lastName}
                    onChange={this.onInputChange}
                    name="lastName"/></p>
                <p><label>Country</label><input
                    type="text"
                    className="updateProfileForm-block_input_country"
                    value={this.props.country}
                    onChange={this.onInputChange}
                    name="country"/></p>
                <p><label>About</label><textarea
                    className="updateProfileForm-block_about"
                    value={this.state.about}
                    onChange={this.onInputChange}
                    name="about">
            </textarea></p>
                <div className="updateProfileForm-block_buttonDiv">
                    <button
                        onClick={this.saveProfileUpdateFunction}
                        className="updateProfileForm-block_button">ОК
                    </button>
                    <button
                        onClick={this.props.cancelHandler}
                        className="updateProfileForm-block_button">Cancel
                    </button>
                </div>
            </div>
        );
    }
}