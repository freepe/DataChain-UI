import { actionTypes as filesActionTypes } from './filesList.actions';
import { actionTypes as someActionTypes } from '../upload-file/uploadFile.actions';

const initialState = {
  filesList: null,
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case (filesActionTypes.FILES_RECEIVED):
            return {
                ...state,
                filesList: action.filesList,
            };
        case (filesActionTypes.PAYMENT_SUCCESS):
            return {
                ...state,
                paymentSuccess: true,
            };
        case (someActionTypes.FILE_UPLOADED):
            return {
                ...state,
                uploadedContract: action.fileContract,
            };
        default:
            return state;
    }
}

export default userReducer
