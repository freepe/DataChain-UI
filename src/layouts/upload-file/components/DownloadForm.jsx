import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class DownloadForm extends Component {
  render() {
    const { handleSubmit, pristine, submitting } = this.props;
    return (
		    <div className="col-md-6">
          <h3 style={{textAlign:"center"}}>Download file</h3>
          <form
            onSubmit={handleSubmit}>
            <div className="form-group">
              <Field
                className="form-control"
                name="file_id"
                type="text"
                component="input"
                placeholder="Enter the id of the file"
              />
            </div>
            <div className="form-group">
              <button
                type="submit"
                className="btn btn-default col-xs-12"
                disabled={pristine || submitting}
              >
                Access file
              </button>
            </div>
          </form>  
        </div>
    );
  }
}

export default reduxForm({
  form: 'downloadForm',
})(DownloadForm);
