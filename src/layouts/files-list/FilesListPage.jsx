import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// import FilesList from './components/FilesList';
import * as filesListActions from './filesList.actions';
import './styles.scss';

class FilesListPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            address: '',
        };
    }
    componentWillMount() {
        this.props.getFilesList();
    }

    onPayForFile = () => {
        const { payForFile } = this.props;
        payForFile(this.state.address);
    };

    render() {
        const { paymentSuccess, filesList } = this.props;
        return (
            <section className="container">
                <input type="text" onChange={e => this.setState({ address: e.target.value })} />
                <button onClick={this.onPayForFile}>Pay</button>
                {
                    paymentSuccess ? (
                        <div style={{ margin: "30px"}}>Thank you!</div>
                    ) : null
                }
                <div>
                    {
                        filesList && filesList.map(file => (
                            <div key={file}>{file}</div>
                        ))
                    }
                </div>
            </section>
        );
    }
}

FilesListPage.propTypes = {
    filesList: PropTypes.arrayOf(PropTypes.shape({})),
    getFilesList: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    filesList: state.files.filesList,
    paymentSuccess: state.files.paymentSuccess,
});

const mapDispatchToProps = {
    getFilesList: filesListActions.getFilesList,
    payForFile: filesListActions.payForFile,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(FilesListPage);
