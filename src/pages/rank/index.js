import React, { Componen, PureComponent } from 'react'

import { Link } from 'react-router-dom';

import axios from 'axios';

import { RankWrapper, RankHeader, RankContent } from './styled-components';

import RankPart from './rank-part';


class AppRank extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            rankList: []
        }
    }
    componentDidMount() {
     

        axios({
            type: 'get',
            url: '/mobileWeb/albumList'
        }).then(result => {
    
            if (result.data.info.length) {
                this.setState((prevState, props) => (
                    {
                        rankList: result.data.info
                    }
                ))
            }
        })

    }
    
    render() {
        return (
            <RankWrapper className="rank-wrapper">
                <RankHeader className="rank-header">
                    排行榜
                </RankHeader>
                <RankContent className="rank-content">

                    { this.renderList( ) }

                </RankContent>
            </RankWrapper>
        )
    }

    renderList() {
        return this.state.rankList.map((item, index) => {
            return (<Link  key={item.album.id} to={ '/album/' + item.album.id }>
                <RankPart info={item}>

                </RankPart>
            </Link>)
        })
    }

}

export default AppRank