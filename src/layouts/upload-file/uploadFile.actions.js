import hash from 'hash.js';
import contract from 'truffle-contract';
import store from '../../store';
import FileFactoryContract from '../../../build/contracts/FilesFactory.json';

export const actionTypes = {
    FILE_UPLOADED: Symbol('FILE_UPLOADED'),
};

export const fileUploaded = fileContract => ({
    type: actionTypes.FILE_UPLOADED,
    fileContract,
});

export const uploadFile = formData => (dispatch) => {
    return Promise.resolve(hash.sha256().update(formData).digest('hex'))
        .then((fileHash) => {
            let web3 = store.getState().web3.web3Instance
            console.log(`File hashed: ${fileHash}`);
            if (typeof web3 !== 'undefined') {

                // Using truffle-contract we create the authentication object.
                const fileFactory = contract(FileFactoryContract)
                fileFactory.setProvider(web3.currentProvider)

                // Declaring this for later so we can chain functions on Authentication.
                var fileFactoryInstance

                // Get current ethereum wallet.
                web3.eth.getCoinbase((error, coinbase) => {
                    // Log errors, if any.
                    if (error) {
                        console.error(error);
                    }

                    fileFactory.deployed().then(function (instance) {
                        fileFactoryInstance = instance

                        // Attempt to sign up user.
                        fileFactoryInstance.newFile(1, fileHash, { from: coinbase })
                            .then(function (result) {
                                // If no error, login user.
                                console.log(`File contract deployed: ${JSON.stringify(result)}`);
                                return dispatch(fileUploaded(result));
                            })
                            .catch(function (result) {
                                // If error...
                            })
                    })
                })
            } else {
                console.error('Web3 is not initialized.');
            }
        });
};