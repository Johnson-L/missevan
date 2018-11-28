import React,{ PureComponent} from "react";
import { AlbumsItems,AlbumsItem,ItemTitle,ItemCover,ItemCoverSound,ItemCoverMore } from "./styledComponent"
import connect from "@connect"
import {withRouter} from "react-router-dom"
class Albumsitems extends PureComponent {
    constructor(props){
        super(props);
        this.pageNum=1;
        this.dataSource=[];
        this.dataSource2=[];
        this.maxPage='';
        this.getMoreData=this.getMoreData.bind(this)
    }
    componentDidMount(){
        // console.log(this.props)
        let {id}=this.props.match.params;
        id = id? id :"0"
        this.props.albums_actions.getListSound(id,this.pageNum);
    }
 
    render(){
        console.log("render")
        return (
            <AlbumsItems>
                {this.renderSoundList()} 
                <ItemCoverMore onClick={this.getMoreData}>更多</ItemCoverMore>
            </AlbumsItems>
        )
    }
    getMoreData(){
        this.pageNum++;
        this.maxPage=this.props.albums.albumsSound.data.pagination.maxpage;
        if(this.pageNum>this.maxPage)    return "" ;
        var id=this.props.match.params.id;
        this.props.albums_actions.getListSound(id,this.pageNum);
    }
   componentWillReceiveProps(props,state){
        if(props.match.params.id!==this.props.match.params.id){
            this.dataSource=[];
        }
        if(!this.dataSource) return "";
        var a=[];
        a=this.dataSource;
        var b=[];
        b=this.dataSource2;
        if(props.match.params.id===this.props.match.params.id) {
            this.dataSource=props.albums.albumsSound.data.albums;
            this.dataSource2=props.albums.albumsSound.data.albums;
           if(JSON.stringify(a)!=JSON.stringify(this.dataSource))
           {
               if(JSON.stringify(b)!=JSON.stringify(this.dataSource2)){
                   this.dataSource=[...a,...this.dataSource]
               }else{
                   this.dataSource=a;
               }
           }
        //    console.log(this.dataSource,"as")
        }

    }
    renderSoundList(){
    //    if(!this.state.items) return "";
        var soundDatas=this.props.albums.albumsSound.data;
        if(!soundDatas) return "";
        var  {albums,pagination}=soundDatas;
        return(
            this.dataSource.map((item,index)=>(
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