import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class UploadForm extends Component {
  render() {
    const { handleSubmit, pristine, submitting } = this.props;
    return (
      <form
        className="dc-uploadForm"
        onSubmit={handleSubmit}>
        <div className="dc-uploadForm__formGroup">
          <label
            className="dc-uploadForm__descriptionLabel"
            htmlFor="description"
            id="description"
          >
            Description
          </label>
          <Field
            className="dc-uploadForm__description"
            name="description"
            component="textarea"
            required
          />
        </div>
        <div className="dc-uploadForm__formGroup">
          <div className="dc-uploadForm__fileInputWrapper">
            Choose file ...
            <Field
              className="dc-uploadForm__fileInput"
              name="picture"
              component="input"
              type="file"
              required
            />
          </div>
        </div>
        <button
          type="submit"
          className="dc-uploadForm__submitButton"
          disabled={pristine || submitting}
        >
          Publish
        </button>
      </form>
    );
  }
}

export default reduxForm({
  form: 'uploadForm',
})(UploadForm);
