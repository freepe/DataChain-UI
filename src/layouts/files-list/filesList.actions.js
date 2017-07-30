import hash from 'hash.js';
import contract from 'truffle-contract';
import store from '../../store';
import FileFactoryContract from '../../../build/contracts/FilesFactory.json';
import FileContract from '../../../build/contracts/File.json';

export const actionTypes = {
    FILES_RECEIVED: Symbol('FILES_RECEIVED'),
    PAYMENT_SUCCESS: Symbol('PAYMENT_SUCCESS'),
};

export const filesReceived = filesList => ({
    type: actionTypes.FILES_RECEIVED,
    filesList,
});

export const getFilesList = () => (dispatch) => {
    let web3 = store.getState().web3.web3Instance

    if (typeof web3 !== 'undefined') {

        // Using truffle-contract we create the authentication object.
        const file = contract(FileFactoryContract)
        file.setProvider(web3.currentProvider)

        // Declaring this for later so we can chain functions on Authentication.
        var fileFactoryInstance

        // Get current ethereum wallet.
        web3.eth.getCoinbase((error, coinbase) => {
            // Log errors, if any.
            if (error) {
                console.error(error);
            }

            file.deployed().then(function (instance) {
                fileFactoryInstance = instance

                // Attempt to sign up user.
                fileFactoryInstance.getContractsList.call()
                    .then((list) => {
                        console.log(list);
                        dispatch(filesReceived(list));
                    });
                fileFactoryInstance.getContractCount.call()
                    .then(num => console.log(num))
            })
        })
    } else {
        console.error('Web3 is not initialized.');
    }
};

export const paymentSuccess = () => ({
    type: actionTypes.PAYMENT_SUCCESS,
});

export const payForFile = address => (dispatch) => {
    let web3 = store.getState().web3.web3Instance

    if (typeof web3 !== 'undefined') {
        const file = contract(FileContract)
        file.setProvider(web3.currentProvider)
        var fileInstance
        web3.eth.getCoinbase((error, coinbase) => {
            if (error) {
                console.error(error);
            }

            file.at(address).then(function (instance) {
                fileInstance = instance

                fileInstance.fee.call()
                    .then(fee => fileInstance.buyContent({ from: coinbase }))
                    .then(fileHash => dispatch(paymentSuccess()));  
            })
        })
    } else {
        console.error('Web3 is not initialized.');
    }
};
