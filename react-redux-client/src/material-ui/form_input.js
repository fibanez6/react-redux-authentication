import React from 'react';

export default function renderField(field) {
    const { meta: { touched, error } } = field; // field.meta.touched and field.meta.error
    const className = `form-group ${touched && error ? 'has-danger' : ''}`;

    return (
        <div className={className}>
            <label>{field.label}</label>
            <input {...field.input} type={field.type} className="form-control" />
            <div className="text-help">
                {touched ? error : ''}
            </div>
        </div>
    );
}