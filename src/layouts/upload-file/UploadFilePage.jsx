import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import UploadForm from './components/UploadForm';
import * as uploadFileActions from './uploadFile.actions';
import './styles.scss';

class UploadFilePage extends Component {
    render() {
        console.log(`AAAAA: ${this.props.uploadedContract}`)
        return (
            <section className="container">
                <UploadForm onSubmit={this.props.onFileUpload} />
            </section>
        );
    }
}

UploadFilePage.propTypes = {
    onFileUpload: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    uploadedContract: state.files.uploadedContract,
});

const mapDispatchToProps = {
    onFileUpload: uploadFileActions.onFileUpload,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(UploadFilePage);
