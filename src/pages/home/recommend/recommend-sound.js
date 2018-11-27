import React, { Component, PureComponent, Fragment } from 'react'
import connect from '@connect';
import RecommendSection from '@commons/recommend/recommend-section';
class RecommendSound extends PureComponent {

    render () {
        let { soundList } = this.props.recommend;
        
        let postData = {
            title : '人气 M 音',
            linkTo : '/rank',
            dataList : soundList.slice(0,3),
            cata : 'sound'
        }
       
        if(!soundList.length){
            return '';
        }else{
            return <RecommendSection info={postData}></RecommendSection>
        }
        
    }

}

export default connect(RecommendSound, [
    {
        name : 'recommend',
        states : [
            'soundList'
        ]
    }
]);