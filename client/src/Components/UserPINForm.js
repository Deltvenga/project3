import React from "react";

export default class UserPINForm extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <label>Enter PIN</label>
                <input type="text"/>
                <button onClick={this.props.savePINHandler}>ОК</button>
                <button onClick={this.props.cancelHandler}>Cancel</button>
            </div>
        );
    }
}