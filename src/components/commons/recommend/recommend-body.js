
import React, { Component } from 'react'
import { BodyWrapper } from './styled-components';
import RecommendItem from './recommend-item';
import RecommendItemChannel from './recommend-channel-item';
class RecommendBody extends Component {

    render () {
        return (
            <BodyWrapper className={this.props.info.cata === 'channel' ? 'channel' : ''}>
                {this.renderList()}
            </BodyWrapper >
        )
    }

    renderList () {
    
        let dataArray = this.props.info.objects_point ? this.props.info.objects_point : this.props.info.dataList;
        
        return dataArray.map((item) => {
            if(this.props.info.cata === 'channel'){
                return <RecommendItemChannel className={this.props.info.cata === 'channel' ? 'channel' : ''} key={item.id} info={item}></RecommendItemChannel>
            }else {
                return <RecommendItem className={this.props.info.cata === 'channel' ? 'channel' : ''} key={item.id} info={item}></RecommendItem>
            }
           
        })
    }

}

export default RecommendBody;