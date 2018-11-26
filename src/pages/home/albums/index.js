import React, { Component } from 'react'
import { AlbumsWrapper,AlbumsContent} from "./styledComponent"
import AlbumsTitle from "./AlbumsTitle"
import AlbumsItems from "./AlbumsItems"

class AppAlbums extends Component {

    render () {
        return (
            <AlbumsWrapper>
                <AlbumsContent>
                    <AlbumsTitle />
                    <AlbumsItems />
                </AlbumsContent>
            </AlbumsWrapper>
        )
    }

}

export default AppAlbums