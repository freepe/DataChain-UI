import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import UploadForm from './components/UploadForm';
import DownloadForm from './components/DownloadForm';
import * as uploadFileActions from './uploadFile.actions';
import './styles.scss';

class UploadFilePage extends Component {
    render() {
        return (
            <div className="container">
              <div className="row"> 
                <UploadForm onSubmit={this.props.onFileUpload} />
                <DownloadForm />
              </div>
            </div>
        );
    }
}

UploadFilePage.propTypes = {
    onFileUpload: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
    onFileUpload: uploadFileActions.onFileUpload,
};

export default connect(
    null,
    mapDispatchToProps,
)(UploadFilePage);
