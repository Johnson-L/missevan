import React, { Component } from 'react'
import { 
    DramaTitle ,
    DramaTime,
    DramaTimeTitle,
    DramaTimeContent,
    DramaTimeItem,
    DramaTimeItemImg,
    DramaTimeItemTitle,
    DramaTimeItemKind,
    DramaTimeItemMore,
    DramaTimespace
   
}  from './styled-components'
import axios from 'axios'

class DramaNewTime extends Component {
    constructor (props) {
        super(props)
        this.state = {
           change : [],
           itembox : []
        }
    }
    componentDidMount () {
        axios.get('/dramaapi/timeline').then((res)=>{
            let firstbox = []
            let second = []
            firstbox.push(res.data.info.lastupdate)
            second.push(res.data.info.recent)
            this.setState({change:firstbox})
            this.setState({itembox:second})
          //  console.log(this.state)
        })
    }
    render () {
        return (
           <div>
                <DramaTitle>
                    剧集更新表
                </DramaTitle>
                <DramaTimespace>
                </DramaTimespace>
                <DramaTime>
                    <DramaTimeTitle>
                        &nbsp;&nbsp;最近
                    </DramaTimeTitle>
                    <DramaTimeContent>
                        {this.renderItem(this.state.change[0])}
                    </DramaTimeContent>
                </DramaTime>
                {this.renderList()}
           </div>
        )
    }
    renderList () {
        if (this.state.itembox[0]){
            console.log(this.state.itembox[0])
            return this.state.itembox[0].map((item)=>(
                <DramaTime
                    key = {item.time}
                >
                    <DramaTimeTitle>
                        &nbsp;&nbsp;{item.time}
                    </DramaTimeTitle>
                    <DramaTimeContent>
                        {this.renderItem(item.dramas)}
                    </DramaTimeContent>
                </DramaTime>
            ))
        }
        
    }
    renderItem (val){
        if (val){
            let makeItem = []
            for (var i in val){
                makeItem.push(val[i])
            }
            console.log(makeItem[0])
            //console.log(makeItem)
            return  makeItem.map((item)=>(
                <DramaTimeItem
                    key = {item.name}
                >
                    
                    <DramaTimeItemImg>
                        <img src = {item.cover}/>
                    </DramaTimeItemImg>
                    
                    <DramaTimeItemTitle>
                        {item.name}
                    </DramaTimeItemTitle>
                    
                    <DramaTimeItemKind>
                        {item.type_name}
                    </DramaTimeItemKind>
                    
                    <DramaTimeItemMore>
                        更新至 : {item.newest}
                    </DramaTimeItemMore>
            
                </DramaTimeItem>
            ))
        }
            
    }

}

export default DramaNewTime