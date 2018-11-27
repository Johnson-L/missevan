
import { combineReducers } from 'redux';

import main from './main';
// recommend reducer
import recommend from './recommend';

import channels from './channels';
export default combineReducers({
    main,
    recommend,
    channels
})