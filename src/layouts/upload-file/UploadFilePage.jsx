import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import UploadForm from './components/UploadForm';
import * as uploadFileActions from './uploadFile.actions';
import './styles.scss';

class UploadFilePage extends Component {
    componentWillMount() {
        console.log('Add file');
    }

    uploadFile = (formData) => {
        this.props.uploadFile(formData);
    }

    render() {
        return (
            <section className="container">
                <UploadForm onSubmit={this.uploadFile} />
            </section>
        );
    }
}

UploadFilePage.propTypes = {
    uploadFile: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
    uploadFile: uploadFileActions.uploadFile,
};

export default connect(
    null,
    mapDispatchToProps,
)(UploadFilePage);
