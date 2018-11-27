import React, { Componen, Fragment, PureComponent } from 'react'
import StackIcon from '@commons/stack-icon';
import { RankList, RankItem } from './styled-components';
class RankPart extends PureComponent {

    render () {
       
        return (
            <Fragment>
                <StackIcon data={this.props.info.album} ></StackIcon>
                <RankList>
                    { this.renderList() }
                </RankList>
            </Fragment>
        )
    }

    renderList () {
        return this.props.info.sounds.map( (item, index)=> {
            return <RankItem key={item.id}>
                {index + 1 + ' ' + item.soundstr}
            </RankItem>
        })
    }

}

export default RankPart