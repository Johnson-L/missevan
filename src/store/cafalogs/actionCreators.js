
import * as types from './actionTypes'
import axios from 'axios'
export default {
    getCatalogsItem() {
        return {
            type : types.GET_CATALOGS_ITEM,
            payload : axios.get("/mobileWeb/catalogroot")
        }
    },
    getchangeId(val) {
        return {
            type : types.GETCHANGE_ID,
            payload :val
        }
    },
    getCafalogsSon () {
        return {
            type : types.GET_CAFALOGS_SON,
            payload : axios.get("/mobileWeb/catalogs")
        }
    }
   
}