import React, { Component } from 'react'
import { AlbumsWrapper,AlbumsContent} from "./styledComponent"
import AlbumsTitle from "./AlbumsTitle"
import AlbumsItems from "./AlbumsItems"
import AlbumMask from "./AlbumMask"
import { withRouter} from "react-router-dom"
import createactions from "../../../store/albums/actionCreators"
import connect from "@connect"

connect.addActions({
    albums: createactions
})
class AppAlbums extends Component {
    constructor(props){
        super(props)
        this.state={
            isShow:false
        }
        this.showMask=this.showMask.bind(this)
        this.unShowMask=this.unShowMask.bind(this)

    }
    showMask(){
        this.setState({isShow:true})
    }
    unShowMask(){
        this.setState({isShow:false})
    }
  
    render () {
        return (
            <AlbumsWrapper className="wrapper">
               <AlbumMask unshow={this.unShowMask} isShow={this.state.isShow}/>
                <AlbumsContent>
                    <AlbumsTitle show={this.showMask} {...this.props}/>
                    <AlbumsItems />
                </AlbumsContent>
            </AlbumsWrapper>
        )
    }

}

export default withRouter(AppAlbums)