
import * as types from './actionTypes'
import axios from 'axios'
export default {
    // getListAsync () {
    //     return {
    //         type: types.GET_LIST_ASYNC,
    //         payload: axios.get('/mock/cookbook-list.json')
    //     }
    // }

    getTopListAsync () {
        return {
            type : types.GET_TOP_LIST,
            payload : axios({
                method : 'get',
                url : '/mobileWeb/newHomepage3'
            })
        }

    },

    getCataListAsync () {
        return {
            type : types.GET_CATA_LIST,
            payload : axios({
                method : 'get',
                url : '/sound/newhomepagedata'
            })
        }
    }
}