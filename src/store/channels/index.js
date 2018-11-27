
import default_state from './defaultState'
import * as types from './actionTypes'

import connect from '@connect'
// 给connect添加可以配置的atcionCreators
import actionCreators from './actionCreators'
connect.addActions({
    channels : actionCreators
})

const reducer = (
    previous_state = default_state,
    action
) => {
    let new_state = Object.assign({}, previous_state)
    switch (action.type) {
       
        case types.GET_ALL_LIST_ASYNC+'_FULFILLED':
            
            new_state.allList = new_state.allList.concat(action.payload.data.info);
            break;
        case types.GET_SOUND_LIST_ASYNC + '_FULFILLED':
            new_state.soundList = new_state.soundList.concat(action.payload.data.info);
            break;
        case types.GET_RING_LIST_ASYNC + '_FULFILLED':
            new_state.ringList = new_state.ringList.concat(action.payload.data.info);
            break;
        default:return previous_state;
    }
    return new_state;
}

export default reducer