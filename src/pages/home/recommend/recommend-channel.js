import React, { Componnet , PureComponent, Fragment } from 'react';
import connect from '@connect';
import RecommendSection from '@commons/recommend/recommend-section';


class RecommendChannel extends PureComponent {
    constructor ( props ) {
        super(props);
    }

    render () {
        
        
        let { channelList } = this.props.recommend;
        let postData = {
            title : '频道',
            linkTo : '/channels',
            dataList : channelList,
            cata : 'channel'
        }
       
        if(!channelList.length){
            return '';
        }else{
            return <RecommendSection info={postData}></RecommendSection>
        }
        
    }
} 



export default connect(RecommendChannel, [
    {
        name : 'recommend',
        states : [ 'channelList' ]
    }
])