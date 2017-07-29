import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import FilesList from './components/FilesList';
import * as filesListActions from './filesList.actions';
import './styles.scss';

class FilesListPage extends Component {
    componentWillMount() {
        this.props.getFilesList();
    }

    render() {
        const { filesList } = this.props;
        return (
            <section className="container">
                <FilesList filesList={filesList} />
            </section>
        );
    }
}

FilesList.propTypes = {
    filesList: PropTypes.arrayOf(PropTypes.shape({})),
    getFilesList: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    filesList: state.files.filesList,
});

const mapDispatchToProps = {
    getFilesList: filesListActions.getFilesList,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(FilesListPage);
