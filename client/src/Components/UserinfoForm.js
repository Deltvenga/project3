import React from "react";
import './UserinfoForm/UserinfoForm.css';

export default class UserinfoForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            role: 1,
            loginValue: ""
        };
    }

//componentDidMount = () => {
//    const res = axios.get('http://localhost:9000/', {
//  proxy: {
//    host: 'localhost',
//    port: 9000
//  }
//});
//    res.then((data) => {this.setState({role: data.data.role})})
//}

//componentDidMount = () => {
//    axios.get("localhost:9000").then(res => {
//        console.log(res)
//    });
//}{this.setState({role: res.data.role})})

    render() {
        return (
            <div>
                {this.state.role}
                <div className="userinfoForm-right">
                    <div className="userinfoForm-right_block">
                        <div className="userinfoForm-right_updatePanel">Login information
                            <button
                                className="userinfoForm-right_update"
                                onClick={this.props.updateLoginHandler}/></div>
                        <p className="userinfoForm-right_p">Email:
                            <input
                                type="text"
                                value={this.props.currentLogin}/></p>
                        <p className="userinfoForm-right_p">Password:
                            <input
                                type="password"
                                value={this.props.password}/></p>
                    </div>
                    <div>
                        <div className="userinfoForm-right_block">
                            <div className="userinfoForm-right_updatePanel">Profile information
                                <button onClick={this.props.updateProfileHandler}/></div>
                            <p className="userinfoForm-right_p">First Name:
                                <input
                                    type="text"
                                    value={this.props.firstName}/></p>
                            <p className="userinfoForm-right_p">Last Name:
                                <input
                                    type="text"
                                    value={this.props.lastName}/></p>
                            <p className="userinfoForm-right_p">Country:
                                <input
                                    type="text"
                                    value={this.props.country}/></p>
                            <p className="userinfoForm-right_p">About:
                                <input
                                    type="text"
                                    value={this.props.about}/></p>
                        </div>
                    </div>
                    <div>
                        <div className="userinfoForm-right_block">
                            <div className="userinfoForm-right_updatePanel">Personal Identification Number</div>
                            <p className="userinfoForm-right_p">PIN:
                                <div className="userinfoForm-right-block_setPIN">
                                    <button
                                        className="userinfoForm-right_setPIN"
                                        onClick={this.props.setPINHandler}>Set PIN
                                    </button>
                                </div></p>
                        </div>
                    </div>
                    <div className="userinfoForm-right-buttonDiv">
                        <button onClick={this.props.homePageHandler}>ОК</button>
                        <button>Cancel</button>
                    </div>
                </div>
            </div>
        );
    }
}