import React from "react";
import axios from "axios";
import './UserinfoForm/UpdateLoginForm.css';

export default class UpdateLoginForm extends React.Component {

    state = {
        currentPassword: this.props.password,
        newPassword: "12345",
        repeatPassword: "12345"
    }

    constructor(props) {
        super(props);
        this.updatePasswordFunction = this.updatePasswordFunction.bind(this);
    };

    updatePasswordFunction = () => {
        console.log(this.props.password, this.state.currentPassword, this.state.newPassword, this.state.repeatPassword);
        if (this.state.currentPassword !== "" || this.state.newPassword !== "" || this.state.repeatPassword !== "") {
            if (this.props.password === this.state.currentPassword) {
                console.log("wag")
                axios.post('http://localhost:9000/updatePasswordFunction', null, {
                    params: {
                        email: this.props.currentLogin,
                        password: this.state.newPassword
                    }
                }).then((data) => {
                    console.log(data);
                    if (data === "успешно")
                        this.setState({currentPassword: this.state.newPassword});
                    this.props.saveLoginUpdateHandler(this.props.currentLogin, this.state.currentPassword)
                });
            }
        }
    }

    render() {
        return (
            <div className="updateLoginForm-block">
                <label>E-mail:</label><input
                type="text"
                value={this.props.currentLogin}/>
                <p><label className="updateLoginForm-block_label">Current password:</label><input
                    type="password"
                    className="updateLoginForm-block_input"
                    value={this.state.currentPassword}/>
                </p>
                <p><label className="updateLoginForm-block_label">New password:</label><input
                    type="password"
                    className="updateLoginForm-block_input"
                    value={this.state.newPassword}/>
                </p>
                <p><label className="updateLoginForm-block_label">Repeat password:</label><input
                    type="password"
                    className="updateLoginForm-block_input"
                    value={this.state.repeatPassword}/>
                </p>
                <div className="updateLoginForm-block_buttonDiv">
                    <button
                        onClick={this.updatePasswordFunction}
                        className="updateLoginForm-block_button">ОК
                    </button>
                    <button
                        onClick={this.props.cancelHandler}
                        className="updateLoginForm-block_button">Cancel
                    </button>
                </div>
            </div>
        );
    }
}