import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as form } from 'redux-form';
import userReducer from './user/userReducer';
import web3Reducer from './util/web3/web3Reducer';
import { reducer as files } from './layouts/files-list';

const reducer = combineReducers({
  routing: routerReducer,
  user: userReducer,
  web3: web3Reducer,
  form,
  files,
})

export default reducer
