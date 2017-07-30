import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class UploadForm extends Component {
  render() {
    const { handleSubmit, pristine, submitting } = this.props;
    return (
      <div>
        <h1 style={{textAlign:"center", marginBottom: "40px"}}>
          Upload your private data and earn easily by providing a link to the friends
        </h1>
        <div className="col-md-6">
          <h3 style={{textAlign:"center"}}>Upload file</h3>
          <form
            onSubmit={handleSubmit}>
            <div className="form-group">
              <Field
                name="picture"
                component="input"
                type="file"
                required
              />
            </div>
            <div className="form-group">
                <Field
                  className="form-control"
                  name="description"
                  component="textarea"
                  placeholder="Description of the file"
                  rows="3"
               />
            </div>
            <div className="form-group">
               <div className="input-group">
                <div className="input-group-addon">$</div> 
                <Field 
                  component="input" 
                  id="exampleInputAmount" 
                  className="form-control"
                  placeholder="Amount"
                />
                <div className="input-group-addon">.00</div>
                </div>  
            </div>
			       <div className="form-group">
              <button
                type="submit"
                className="btn btn-default col-xs-12"
                disabled={pristine || submitting}
              >
                Publish file
              </button>
            </div> 
          </form>
        </div>
      </div>
    );
  }
}

export default reduxForm({
  form: 'uploadForm',
})(UploadForm);


