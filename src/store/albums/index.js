
import defaultState from "./defaultState"
import * as types from "./actionTypes"
const reducer=(preState=defaultState,action)=>{
    let new_state=Object.assign({},preState)
    switch(action.type){
        case types.GET_ALBUMS_INFO+"_FULFILLED":
             new_state.albumsInfo=action.payload.data.info;
            break;

        case types.GET_ALBUMS_SOUND+"_FULFILLED":
            new_state.albumsSound.data=action.payload.data;
            break;
        
        case types.GET_TYPE_ID :
            new_state.typeid=action.value;
            break;
    }
    return new_state;
}

export default reducer