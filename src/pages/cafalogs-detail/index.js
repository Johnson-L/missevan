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
import CafalogsItem from './cafalogsItem'
class CafalogsLittle extends Component {
    constructor (props) {
        super(props)
        this.state = {
            id: this.props.cafalogs.id,
            newmessage : [],
            title : '',
            sonbox : {},
            content : []
        }
    }
    componentDidMount () {
        console.log(this.props.cafalogs.cafalogsson,159753)
        let url = `/mobileWeb/catalogrank?cid=${this.state.id}`
        axios.get(url).then((res)=>{
            
            let contentbox = []
            let smallbox = []
            for (var i in res.data.info){
                smallbox.push(res.data.info[i])
            }

            contentbox.push(smallbox)
            console.log(typeof contentbox[0],542264)
            this.setState({content : contentbox})

            this.setState({newmessage : this.props.cafalogs.cafalogslist})
            
            let titlebox = this.state.newmessage.find((obj)=> {
                return obj.id == this.state.id
            })
            let newbox = {...titlebox}
            this.setState({title:newbox.title})
            this.setState({sonbox:  this.props.cafalogs.cafalogsson[this.state.id].son})
            // let cafalogssonbox = this.props.cafalogs.cafalogsson[this.state.id]
            // console.log(this.state.newmessage)
            // console.log(this.props.cafalogs.cafalogsson[this.state.id].son)
        })
        console.log(this.state,548864)
        //console.log(this.props.cafalogs_actions)
        //console.log(this.props.cafalogs)
    }
    render () {
        return (
            <CataLogsLittleBox>
                <CataLogsLittleBoxTittle>
                    {this.state.title}
                </CataLogsLittleBoxTittle>
                <CataLogsLittleBoxCheck>
                    <CataLogsLittleBoxCheckUl>
                    <CataLogsLittleBoxCheckUlItem>
                        <CataLogsLittleBoxCheckUlA>
                            全区动态
                        </CataLogsLittleBoxCheckUlA>
                    </CataLogsLittleBoxCheckUlItem>
                        {this.renderli()}
                    </CataLogsLittleBoxCheckUl>
                </CataLogsLittleBoxCheck>

                <CataLogsLittleBoxContent>

                    <CataLogsLittleBoxContentTitle>
                        |&nbsp;&nbsp;全区动态
                    </CataLogsLittleBoxContentTitle>

                    <CataLogsLittleBoxContentBody>

                        { this.renderContentItem()}

                    </CataLogsLittleBoxContentBody>

                </CataLogsLittleBoxContent>

                <CafalogsItem/>


               
            </CataLogsLittleBox>
        )
    }
    renderli () {
        
     
        console.log(this.state.sonbox)
        // Object.key(this.state.sonbox).forEach((key)=>{
        //     console.log(key,this.state.sonbox[key])
        // })
        //console.log( this.state.sonbox.length)
        let datacheck = (JSON.stringify(this.state.sonbox) == "{}")
        if (!datacheck){
            let newsn = []
            console.log(123)
            for (var i in this.state.sonbox){
                newsn.push(this.state.sonbox[i])
                console.log(newsn)
            }
            console.log(newsn[0].id,12456)
            return newsn.map((item)=> (
                <CataLogsLittleBoxCheckUlItem
                    key = {item.id}
                >
                    <CataLogsLittleBoxCheckUlA>
                        {item.catalog_name}
                    </CataLogsLittleBoxCheckUlA>
                </CataLogsLittleBoxCheckUlItem>
            ))
        }
        this.renderContentItem()
    }
    renderContent () {

        
    }
    renderContentItem () {
        let itemmessage = this.state.content[0];
        console.log( itemmessage,159789)
        let itembox = []
        for(var i in itemmessage){
            itembox.push(itemmessage[i])
        }
        let newitembox = itembox.slice(0,4)

        return newitembox.map((val)=>(
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
        //console.log(itemmessage,46524,itembox)
    }

}

export default connect(CafalogsLittle, [{name: 'cafalogs', state: ['cafalogslist']}])