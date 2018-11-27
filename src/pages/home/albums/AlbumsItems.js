import React,{ Component} from "react";
import { AlbumsItems,AlbumsItem,ItemTitle,ItemCover,ItemCoverSound } from "./styledComponent"
import connect from "@connect"
import {withRouter} from "react-router-dom"
class Albumsitems extends Component {
    constructor(props){
        super(props)
        this.state={
            items:[]
        }
    }
    componentWillMount(){
        let {id}=this.props.match.params;
        id = id? id :"0"
        this.props.albums_actions.getListSound(id,1);
    }
    componentWillReceiveProps(props){
        this.getDatas();
        let {id}=props.match.params;
        id = id? id :"0";
        if(id!=this.props.match.params.id){
            this.props.albums_actions.getListSound(id,1);
            this.getDatas();
        }
    }
    getDatas(){ 
        var soundDatas=this.props.albums.albumsSound.data;
        if(!soundDatas) return "";
        var  {albums,pagination}=soundDatas;
        let items=[...albums]
        this.setState({items})
    }
 
    render(){
        console.log("render")
        console.log(this.state.items)
        return (
            <AlbumsItems>
                {this.renderSoundList()}
            </AlbumsItems>
        )
    }
    renderSoundList(){
       if(!this.state.items) return "";
        return(
            this.state.items.map((item,index)=>(
                <AlbumsItem key={index}>
                <ItemCover className="cover">
                     <img src={item.front_cover} />
                    <ItemCoverSound>
                        <span>
                            {item.music_count}
                        </span>
                    </ItemCoverSound>
                </ItemCover>
                <ItemTitle className="title">{item.title}</ItemTitle>

            </AlbumsItem>
            ))
           
        )
    }
}

export default withRouter(connect(Albumsitems,[{ name: "albums", state: ["albumsSound"] }]));