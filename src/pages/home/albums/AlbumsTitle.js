import React,{ PureComponent} from "react";
import { AlbumsTitle,TitleLeft,TitleRight } from "./styledComponent"
class Albumstitle extends PureComponent {
   
    render(){
        let title=this.props.location.state ? this.props.location.state:"全部音单"
        console.log("render")
        return (
            <AlbumsTitle>
                <TitleLeft>
                   {title}
                </TitleLeft>
                <TitleRight>
                    <span onClick={this.props.show}>类型</span>
                </TitleRight>
            </AlbumsTitle>
        )
    }
}

export default Albumstitle