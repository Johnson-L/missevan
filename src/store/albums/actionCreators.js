
import * as types from './actionTypes'
import axios from 'axios'
export default {
    getListInfo () {
        return {
            type: types.GET_ALBUMS_INFO,
            payload: axios.get('/malbum/recommand')
        }
    },
    getListSound(typeid,pageNum){
        return {
            type:types.GET_ALBUMS_SOUND,
            payload:axios.get(`/explore/tagalbum?order=0&tid=${typeid}&p=${pageNum}`)
        }
    },
    getTypeId(val){
        return{
            type:types.GET_TYPE_ID,
            value:val
        }
    }
}