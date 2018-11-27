import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Carousel } from 'antd-mobile';
import connect from '@connect';
import { RecommendSwiperWrapper } from './styled-components';

import RecommendSection from '@c/commons/recommend/recommend-section';
import RecommendContent from './recommend-content';
import RecommendChannel from './recommend-channel';
import RecommendSound from './recommend-sound';
class AppRecommend extends Component {
    componentDidMount() {
        //获取数据
        this.props.recommend_actions.getTopListAsync();

        this.props.recommend_actions.getCataListAsync();

    }

    componentWillReceiveProps(props, state) {
        // console.log(props);

    }

    render() {
        
        return (
            <React.Fragment >
                
                

                <RecommendSwiperWrapper>

                    <Carousel
                        autoplay={false}
                        infinite
                    >
                        {this.renderSwiperList()}

                    </Carousel>

                </RecommendSwiperWrapper>


                <RecommendSound>
                    
                </RecommendSound>
                <RecommendChannel>


                </RecommendChannel>
                {/* <RecommendSection>
                    
                </RecommendSection> */}

                <RecommendContent>

                </RecommendContent>

            </React.Fragment>
        )
    }

    renderSwiperList() {
        let { bannerList } = this.props.recommend;

        if (!bannerList.length) {
            return '';
        }
        return bannerList.map((item, index) => (
            <NavLink to={item.url.replace('http://www.missevan.com', '')} key={index}>
                <img src={item.pic.replace('http', 'https')} />
            </NavLink>
        ))




    }

}

export default connect(AppRecommend, [
    {
        name: 'recommend',
        states: [
            'bannerList'
        ]
    }
]);