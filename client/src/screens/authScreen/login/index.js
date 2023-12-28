import React, { useState } from "react";
import "./login.scss";
import { Form, Field } from "react-final-form";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { classNames } from "primereact/utils";

export default function Login() {
  const [formData, setFormData] = useState({});

  const onSubmit = (data, form) => {
    setFormData(data);

    form.restart();
  };

  const isFormFieldValid = (meta) => !!(meta.touched && meta.error);
  const getFormErrorMessage = (meta) => {
    return (
      isFormFieldValid(meta) && <small className="p-error">{meta.error}</small>
    );
  };

  const validate = (data) => {
    let errors = {};

    return errors;
  };

  return (
    <div className="login-container">
      <div className="flex justify-content-center">
        <div className="card">
          <h5 className="text-center">Login</h5>
          <Form
            onSubmit={onSubmit}
            initialValues={formData}
            validate={validate}
            render={({ handleSubmit }) => (
              <form onSubmit={handleSubmit} className="p-fluid">
                <Field
                  name="email"
                  render={({ input, meta }) => (
                    <div className="field">
                      <span className="p-float-label p-input-icon-right">
                        <i className="pi pi-envelope" />
                        <InputText
                          id="email"
                          {...input}
                          className={classNames({
                            "p-invalid": isFormFieldValid(meta),
                          })}
                        />
                        <label
                          htmlFor="email"
                          className={classNames({
                            "p-error": isFormFieldValid(meta),
                          })}
                        >
                          Email*
                        </label>
                      </span>
                      {getFormErrorMessage(meta)}
                    </div>
                  )}
                />
                <Field
                  name="password"
                  render={({ input, meta }) => (
                    <div className="field">
                      <span className="p-float-label">
                        <InputText
                          id="password"
                          {...input}
                          toggleMask
                          className={classNames({
                            "p-invalid": isFormFieldValid(meta),
                          })}
                        />
                        <label
                          htmlFor="password"
                          className={classNames({
                            "p-error": isFormFieldValid(meta),
                          })}
                        >
                          Password*
                        </label>
                      </span>
                      {getFormErrorMessage(meta)}
                    </div>
                  )}
                />

                <Button type="submit" label="Submit" className="login-button" />
              </form>
            )}
          />
        </div>
      </div>
    </div>
  );
}
