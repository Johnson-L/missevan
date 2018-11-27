
import * as types from './actionTypes'
import axios from 'axios'
export default {
    getAllListAsync () {
        return {
            type: types.GET_ALL_LIST_ASYNC,
            payload: axios.get('/mobileWeb/channels?type=2')
        }
    },
    getSoundListAsync () {
        return {
            type: types.GET_SOUND_LIST_ASYNC,
            payload: axios.get('/mobileWeb/channels?type=0')
        }
    },
    getRingListAsync () {
        return {
            type: types.GET_RING_LIST_ASYNC,
            payload: axios.get('/mobileWeb/channels?type=1')
        }
    }
}