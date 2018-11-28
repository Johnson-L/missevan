
import React, { PureComponent } from "react";
import { AlbumMask, MaskTitle, MaskRows, MaskType, MaskItem } from "./styledComponent"
import connect from "@connect"
import uuid from "uuid"
import {withRouter} from "react-router-dom"

class Albummask extends PureComponent {
    componentDidMount() {
        this.props.albums_actions.getListInfo();
        // this.props.albums_actions.getTypeId(this.props.match.params.id);
    }
    state={
        props_state:this.props.location.state ? this.props.location.state : "全部音单"
    }
    componentWillReceiveProps(props){
        this.setState({props_state:(props.location.state ? props.location.state : "全部音单")})
    }
    render() {
        return (
            <AlbumMask isShow={this.props.isShow}>
                <MaskTitle>
                    <span onClick={this.props.unshow}>取消</span>
                    类型选择
                </MaskTitle>
                <MaskRows isactive= {this.state.props_state==="全部音单" }>
                    < span 
                        onClick={()=>this.renderOtherData(0,"全部音单")}
                        >全部音单</span>
                </MaskRows>
                {this.renderItem(this.state.props_state)}
            </AlbumMask>
        )
    }
    renderItem(props_state) {
        let itemsInfo = [];
        let datas = this.props.albums;
        if(!datas.albumsInfo) return "";
        for (var key in datas.albumsInfo) {
            let item = {
                name: key,
                value: datas.albumsInfo[key]
            }
            itemsInfo.push(item)
        }
        return (
            itemsInfo.map(item => (
                <MaskRows key={uuid()} className="type">
                    <MaskType >{item.name}</MaskType>
                   { item.value.map(val=>
                   < MaskItem 
                        onClick={()=>this.renderOtherData(val[0],val[1])}
                         key={uuid()}
                         isactive={props_state===val[1]}
                        className="item">
                        {val[1]}
                        </MaskItem>)}
                </MaskRows>
            ))
        )
    }
    renderOtherData(path,val){
        this.props.history.push({pathname:"/home/albums/"+path,state:val});
        this.props.unshow();
        this.props.albums_actions.getTypeId(path);
        this.props.albums_actions.getListSound(path,1);

    }

}

export default withRouter(connect(Albummask, [{ name: "albums", state: ["albumsInfo"] }]));