
import { combineReducers } from 'redux';

import cafalogs from './cafalogs'
import main from './main';
// recommend reducer
import recommend from './recommend';

import channels from './channels';
export default combineReducers({
    main,
    cafalogs,
    recommend,
    channels
})