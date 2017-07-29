import { actionTypes as filesActionTypes } from './filesList.actions';

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
        default:
            return state;
    }
}

export default userReducer
