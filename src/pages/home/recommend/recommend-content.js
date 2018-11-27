import React, { Component } from 'react'

import connect from '@connect';

import RecommendSection from '@commons/recommend/recommend-section';


class RecommendContent extends Component {



    componentWillReceiveProps ( props, state) {
        // console.log(props);
    }
    shouldComponentUpdate (props, state) {

        // 确保只渲染一次

        let reRenderFlag = !(this.props.recommend.cataList === props.recommend.cataList);

        return reRenderFlag;

    }
    render () {
        return (
            <div>
                {
                    this.renderLists()
                }
            </div>
        )
    }

    renderLists () {
        let { cataList } = this.props.recommend;
        if(!cataList.length){
            // console.log('无数据');
            return '';
        }else {
            
            // console.log('已有数据');
            return cataList.map((item, index) => {
                return (
                    <RecommendSection info={item} key={index}>

                    </RecommendSection>
                )
            })
        
        }
    }

}

export default connect(RecommendContent, [{
    name : 'recommend',
    states : [
        'cataList'
    ]
}])