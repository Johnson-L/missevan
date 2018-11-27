import React, { Component, Fragment} from 'react';

import RecommendHeader from './recommend-header';

import RecommendBody from './recommend-body';

import { CommonSection } from './styled-components';
class RecommendSection extends Component {
    constructor ( props ) {
        super( props );

    }
    componentWillMount () {
        // console.log(this.props.info);
    }
    render () {
        // console.log(this.props)
        
        return (
            <CommonSection>
                <RecommendHeader info={this.props.info}>

                </RecommendHeader>

                <RecommendBody info={this.props.info}>
                    
                </RecommendBody>
            </CommonSection>
        )
    }
}



export default RecommendSection;