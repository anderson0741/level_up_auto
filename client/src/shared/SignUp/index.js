import React, { Component } from 'react';
import SignupForm from "./SignUpForm";

import { connect } from "react-redux";
import { signup } from '../../redux/auth';

import '../Login/Login.css';

class SignupFormContainer extends Component {
    constructor() {
        super();
        this.state = {
            inputs: {
                name: "",
                username: "",
                password: ""
            }
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        e.persist();
        this.setState(prevState => {
            return {
                inputs: {
                    ...prevState.inputs,
                    [e.target.name]: e.target.value
                }
            }
        })
    }

    clearInputs() {
        this.setState({
            inputs: {
                name: "",
                username: "",
                password: ""
            }
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.signup(this.state.inputs);
        //alert(JSON.stringify(this.state.inputs));
        this.clearInputs();
    }

    render() {
        return (
            <div className="outerlog">
                <div className="log">
                    <SignupForm
                        handleChange={this.handleChange.bind(this)}
                        handleSubmit={this.handleSubmit.bind(this)}
                        {...this.state.inputs} />
                </div>
            </div>
        )
    }
}

export default connect(null, { signup })(SignupFormContainer);



