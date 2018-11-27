import React, { Component } from 'react'
import { 
    DramaTitle ,
    DramaChange,
    DramaChangeBtn,
    DramaList,
    DramaListTitle,
    DramaListBox,
    DramaListItem,
    DramaListItemImg,
    DramaListItemTitle,
    DramaListItemProcess
}  from './styled-components'
import { withRouter } from 'react-router-dom'
import axios from 'axios'

class DramaChanged extends Component {
    constructor (props) {
        super(props)
        this.state = {
           change : [],
           itembox : []
        }
    }
    componentDidMount () {
        axios.get("/drama/rest/mobile/homepage").then((res)=>{
            let newbox = []
            let box = []
            for (var i in res.data.info){
                newbox.push(res.data.info[i])
            }
            this.setState({change : res.data.info})

            for(var j in this.state.change){
                box.push(this.state.change[j])
            }
            this.setState({itembox : box.slice(0,3)})
            console.log(this.state.change)
            
            
            
            console.log(this.state.itembox)
        })
    }

    render () {
            return (
                <div>
                    <DramaTitle>
                        广播剧
                    </DramaTitle>
                    <DramaChange>
                        <DramaChangeBtn onClick = {()=>this.changeRouteTime()}>
                            更新时间
                        </DramaChangeBtn>

                        <DramaChangeBtn onClick = {()=>this.changeRouteKind()}>
                            分类筛选
                        </DramaChangeBtn>
                    </DramaChange>
                    {/* {this.renderlist()} */}
                    <DramaList>
                        <DramaListTitle>
                            新作速递
                        </DramaListTitle>
                        <DramaListBox>
                            {this.renderItem(0)}
                        </DramaListBox>
                    </DramaList>
                    <DramaList>
                        <DramaListTitle>
                            小编推荐
                        </DramaListTitle>
                        <DramaListBox>
                            {this.renderItem(1)}
                        </DramaListBox>
                    </DramaList>
                    <DramaList>
                        <DramaListTitle>
                            经典作品
                        </DramaListTitle>
                        <DramaListBox>
                            {this.renderItem(2)}
                        </DramaListBox>
                    </DramaList>
                </div>
            )

    }
    changeRouteTime (){
        this.props.history.push({pathname: "/drama/time" })
    }
    changeRouteKind (){
        this.props.history.push({pathname: "/drama/kind" })
    }
    renderlist() {
    //    let newobject = Object.assign({},this.state.change)
        for(var i in this.state.change)
        return Object.keys(this.state.change).slice(0,3).map(
            (item,index) => (
            <div>
                <DramaList
                    key = {item}
                >
                    <DramaListTitle>
                        {item}
                    </DramaListTitle>
                    <DramaListBox>
                        {this.renderItem(index)}
                    </DramaListBox>
                </DramaList>
            </div>
                
            )
        )
    }
    renderItem(index) {
        if (this.state.itembox[index]){
            console.log(index)
            console.log(this.state.itembox[index])
            let makebox = this.state.itembox[index]
            return makebox.map((val)=>(
                <DramaListItem
                    key = {val.id}
                >
                    <DramaListItemImg>
                        <img src = { '//static.missevan.com/dramacoversmini/' + val.cover} />
                    </DramaListItemImg>
                    <DramaListItemTitle>
                        {val.name}
                    </DramaListItemTitle>
                    <DramaListItemProcess>
                        更新至 ： {val.newest}
                    </DramaListItemProcess>
                </DramaListItem>
            ))
        }
            
            
            
        // console.log(index)
        // console.log(this.state.itembox[index])
    }
}

export default withRouter(DramaChanged) 