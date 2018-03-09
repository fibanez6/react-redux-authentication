import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import renderField from '../../material-ui/form_input';

class Signup extends Component {
    renderAlert() {
        if (this.props.errorMessage) {
            return (
                <div className="alert alert-danger">
                    <strong>Oops!</strong> {this.props.errorMessage}
                </div>
            );
        }
    }

    handleFromSubmit(formProps) {
        // Call action creator to sign up the user
        this.props.signupUser(formProps);
    }

    render(){
        const { handleSubmit } = this.props;
        return (
            <form onSubmit={handleSubmit(this.handleFromSubmit.bind(this))}>
                <Field
                    label="Email:"
                    name="email"
                    type="text"
                    component={renderField}
                />
                <Field
                    label="Password:"
                    name="password"
                    type="password"
                    component={renderField}
                />
                <Field
                    label="Confirm Password:"
                    name="passwordConfirm"
                    type="password"
                    component={renderField}
                />
                {this.renderAlert()}
                <button action="submit" className="btn btn-primary">Sign Up</button>
            </form>
        );
    }
}

function validate(formProps) {
    const errors = {};

    if (!formProps.email) {
        errors.email = 'Please enter an email';
    }

    if (!formProps.password) {
        errors.password = 'Please enter a password';
    }

    if (!formProps.passwordConfirm) {
        errors.passwordConfirm = 'Please enter a password confirmation';
    }

    if (formProps.password !== formProps.passwordConfirm) {
        errors.password = 'Passwords must match';
    }
    return errors;
}

function mapStateToProps(state) {
    return { errorMessage: state.auth.error };
}

export default reduxForm({
    form: 'signup',
    validate
})(
    connect(mapStateToProps, actions)(Signup)
);