import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import {connect} from "react-redux";
import * as actions from '../../actions';
import renderField from '../../material-ui/form_input';

class Signin extends Component {
    handleFromSubmit({ email, password }){
        this.props.signinUser({ email, password });
    }

    renderAlert() {
        if (this.props.errorMessage) {
            return (
                <div className="alert alert-danger">
                    <strong>Oops!</strong> {this.props.errorMessage}
                </div>
            );
        }
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
                {this.renderAlert()}
                <button action="submit" className="btn btn-primary">Sign In</button>
          </form>
        );
    }
}

function mapStateToProps(state) {
    return { errorMessage: state.auth.error };
}

export default reduxForm({
    form: 'signin'
})(
    connect(mapStateToProps, actions)(Signin)
);