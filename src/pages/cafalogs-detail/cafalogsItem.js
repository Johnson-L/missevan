import React, { Component } from 'react'
import axios from 'axios'
import connect from '@connect'
import {
    CataLogsLittleBox,
    CataLogsLittleBoxTittle,
    CataLogsLittleBoxCheck,
    CataLogsLittleBoxContent,
    CataLogsLittleBoxContentTitle,
    CataLogsLittleBoxContentBody,
    CataLogsLittleBoxContentItem,
    CataLogsLittleBoxContentItemImg,
    CataLogsLittleBoxContentItemImgImg,
    CataLogsLittleBoxContentItemA,
    CataLogsLittleBoxContentItemATitle,
    CataLogsLittleBoxContentItemAUser,
    CataLogsLittleBoxContentItemAVideo,

    CataLogsLittleBoxCheckUl,
    CataLogsLittleBoxCheckUlItem,
    CataLogsLittleBoxCheckUlA,
}from './styled-components'


class CafalogsItem extends Component {
    constructor (props) {
        super(props)
        this.state = {
            id: this.props.cafalogs.id,
            newmessage : [],
            title : '',
            sonbox : {},
            content : [],
            other : [],
            idbox : []
        }
    }
    componentDidMount () {
        setTimeout(()=>{
            let id = this.state.id
            console.log(this.props,17935)
            console.log(this.props.cafalogs.cafalogsson[id].son,11111111111111)
            let newid = this.props.cafalogs.cafalogsson[id].son
            let newidbox = []
            let otherbox = []
            for (var i in newid) {
                newidbox.push(i)
                console.log(newidbox)
            }
            newidbox.map((val)=>(
                //this.props.cafalogs_actions.getContentItem(val)
                axios.get(`/mobileWeb/catalogmenu?order=3&cid=${val}&page_size=4`).then(
                    (res)=>{
                            otherbox.push(res.data.info.Datas)       
                            console.log(otherbox)     
                            this.setState({other : otherbox})
                    }
                )
            ))
            //this.props.cafalogs_actions.getContentItem(33)
           
            this.setState({sonbox:  this.props.cafalogs.cafalogsson[this.state.id].son})
            
        },250)
        
        // console.log(this.props.cafalogs.cafalogsson[this.state.id].son,66666666)
        //console.log(this.state.sonbox,555555)
    }
    render () {
        return (
            <div>
                {this.rendercontent()}
            </div>
        )
    }
    rendercontent () {
        let newsn = []
        for (var i in this.state.sonbox){
            newsn.push(this.state.sonbox[i])
            console.log(newsn)
        }
        return this.state.other.map((item,index)=>(
            <CataLogsLittleBoxContent
                key  = {index}
            >

                <CataLogsLittleBoxContentTitle>
                   |&nbsp;&nbsp; {newsn[index].catalog_name}
                </CataLogsLittleBoxContentTitle>

                <CataLogsLittleBoxContentBody>

                    { this.renderItem(item)}

                </CataLogsLittleBoxContentBody>

            </CataLogsLittleBoxContent>
        ))
    }
    renderItem (newmessage) {
        return newmessage.map((val)=>(
            <CataLogsLittleBoxContentItem
               key = {val.id}
            >

               <CataLogsLittleBoxContentItemImg>
                   <CataLogsLittleBoxContentItemImgImg  src = {val.front_cover}/>
               </CataLogsLittleBoxContentItemImg>

               <CataLogsLittleBoxContentItemA>

                   <CataLogsLittleBoxContentItemATitle>
                       {val.soundstr}
                   </CataLogsLittleBoxContentItemATitle>

                   <CataLogsLittleBoxContentItemAUser>
                       UP主:{val.username}
                   </CataLogsLittleBoxContentItemAUser>

                   <CataLogsLittleBoxContentItemAVideo>
                       3248
                   </CataLogsLittleBoxContentItemAVideo>

               </CataLogsLittleBoxContentItemA>



           </CataLogsLittleBoxContentItem>

       ))
    }
}


export default  connect(CafalogsItem, [{name: 'cafalogs', state: ['cafalogslist']}])