
import default_state from './defaultState'
import * as types from './actionTypes'

import connect from '@connect'
// 给connect添加可以配置的atcionCreators
import actionCreators from './actionCreators'
connect.addActions({
    recommend : actionCreators
})

const reducer = (
    previous_state = default_state,
    action
) => {
    let new_state = Object.assign({}, previous_state)
    
    switch (action.type) {
       
        case types.GET_TOP_LIST+'_FULFILLED':

            new_state.bannerList = action.payload.data.info.banner;
            new_state.channelList = action.payload.data.info.channel;
            new_state.soundList  = action.payload.data.info.sound;
        
            break;

        case types.GET_CATA_LIST+'_FULFILLED':
            new_state.cataList = action.payload.data.music;
            break;
            
        default:return previous_state;
    }
    return new_state
}

export default reducer