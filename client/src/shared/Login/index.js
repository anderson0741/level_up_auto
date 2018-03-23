import React, { Component } from 'react';
import LoginForm from "./LoginForm";

import { connect } from "react-redux";
import { login } from '../../redux/auth';

import './Login.css';

class LoginFormContainer extends Component {
    constructor() {
        super();
        this.state = {
            inputs: {
                username: "",
                password: ""
            }
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        e.persist();
        this.setState((prevState) => {
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
                username: "",
                password: ""
            }
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.login(this.state.inputs, this.props.history);
        this.clearInputs();
    }

    render() {
        return (
            <div className="outerlog">
                <div className='log'>
                    <LoginForm
                        handleChange={this.handleChange}
                        handleSubmit={this.handleSubmit}
                        {...this.state.inputs} />
                </div>
            </div>
        )
    }
}

export default connect(null, { login })(LoginFormContainer)