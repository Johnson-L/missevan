
import default_state from './defaultState'
import * as types from './actionTypes'

import connect from '@connect'
// 给connect添加可以配置的atcionCreators
import actionCreators from './actionCreators'
connect.addActions({
    cafalogs: actionCreators
})

const reducer = (
    previous_state = default_state,
    action
) => {
    let new_state = Object.assign({}, previous_state)

    switch (action.type) {
       

        case types.GET_CATALOGS_ITEM + '_FULFILLED': 
            new_state.cafalogslist = action.payload.data.info;break;
            
        case types.GETCHANGE_ID : 
            new_state.id = action.payload;break;
            console.log(new_state.id)

        case types.GET_CAFALOGS_SON + '_FULFILLED': 
            new_state.cafalogsson = action.payload.data.info;break;

        
            
        default:return previous_state;
    }
    return new_state
}

export default reducer