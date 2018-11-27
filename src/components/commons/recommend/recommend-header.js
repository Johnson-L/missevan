import React, { Component } from 'react';

import { Link } from 'react-router-dom'
import {HeaderWrapper, HeaderTitle, HeaderNav} from './styled-components';
class RecommendHeader extends Component {

    render () {

        return (
            <HeaderWrapper>
                <HeaderTitle>
                    <i></i>
                    { this.props.info.title }
                </HeaderTitle>
                <Link className="header-link" to={this.props.info.cata ? this.props.info.linkTo :  ('/catalogs/' + this.props.info.id)}>
                    更多
                </Link>
            </HeaderWrapper>
        )
    }

}

export default RecommendHeader