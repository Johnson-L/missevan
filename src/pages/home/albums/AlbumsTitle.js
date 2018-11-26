import React,{ Component} from "react";
import { AlbumsTitle,TitleLeft,TitleRight } from "./styledComponent"

class Albumstitle extends Component {
    render(){
        return (
            <AlbumsTitle>
                <TitleLeft>
                   运动听
                </TitleLeft>
                <TitleRight>
                    <span>类型</span>
                </TitleRight>
            </AlbumsTitle>
        )
    }
}

export default Albumstitle