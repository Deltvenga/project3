import React from "react";
import axios from "axios";
import './RegisterForm/RegisterForm.css';

export default class RegisterForm extends React.Component {

    state = {
        firstName: "Aaron",
        lastName: "Lostovich",
        country: "noname ostrov",
        email: "1234@gmail.com",
        password: "123",
        repeatPassword: "123"
    }

    constructor(props) {
        super(props);
        this.registerNewUserFunction = this.registerNewUserFunction.bind(this);
        this.onInputChange = this.onInputChange.bind(this);
    }

    onInputChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    registerNewUserFunction = () => {
        if (this.state.password !== this.state.repeatPassword) alert("пароли не совпадают");
        else if (this.state.firstName !== "") {
            axios.post('http://localhost:9000/registerNewUserFunction', null, {
                params: {
                    firstName: this.state.firstName,
                    lastName: this.state.lastName,
                    country: this.state.country,
                    email: this.state.email,
                    password: this.state.password,
                    repeatPassword: this.state.repeatPassword
                }
            }).then(() => {
                this.setState({firstName: "dazed"})
            });
            console.log(this.state.firstName)
            this.props.registerHandler(this.state.email, this.state.password, this.state.firstName, this.state.lastName, this.state.country, this.state.about);
        } else alert("заполните пустые поля");
    }

    render() {
        return (
            <div>
                <h1>Registration</h1>
                <div className="registerForm-right">
                    <p className="registerForm-right_p">
                        <label>First Name</label>
                        <input
                            type="text"
                            onChange={this.onInputChange}
                            name="firstName"
                            value={this.state.firstName}/>
                    </p>
                    <p className="registerForm-right_p">
                        <label>Last Name</label>
                        <input
                            type="text"
                            name="lastName"
                            onChange={this.onInputChange}
                            value={this.state.lastName}/>
                    </p>
                    <p className="registerForm-right_p">
                        <label>Country</label>
                        <input
                            type="text"
                            name="country"
                            onChange={this.onInputChange}
                            value={this.state.country}/>
                    </p>
                    <p className="registerForm-right_p">
                        <label>E-mail</label>
                        <input
                            type="email"
                            name="email"
                            onChange={this.onInputChange}
                            value={this.state.email}/>
                    </p>
                    <p className="registerForm-right_p">
                        <label>Password</label>
                        <input
                            type="password"
                            name="password"
                            onChange={this.onInputChange}
                            value={this.state.password}/>
                    </p>
                    <p className="registerForm-right_p">
                        <label>Repeat password</label>
                        <input
                            type="password"
                            name="repeatPassword"
                            onChange={this.onInputChange}
                            value={this.state.repeatPassword}/>
                    </p>

                    <div className="registerForm-right_buttonDiv">
                        <button onClick={this.registerNewUserFunction}>ОК</button>
                        <button onClick={this.props.cancelHandler}>Cancel</button>
                    </div>
                </div>
            </div>
        );
    }
}