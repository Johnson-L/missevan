import React, { Component } from 'react'
import connect from '@connect';
import ChannelsItem from '@commons/recommend/recommend-channel-item';
class ChannelsRing extends Component {
    componentDidMount () {

        if(!this.props.channels.ringList.length){
            this.props.channels_actions.getRingListAsync();
        }

    }
    render () {

        return (
            <React.Fragment>
                { this.renderList() }
            </React.Fragment>
        )
    }

    renderList () {
        let { ringList } = this.props.channels;
        if(!ringList.length){
            return '';
        }else {
            return ringList.map(item => {
                return <ChannelsItem key={item.id} info={item}></ChannelsItem>
            })
        }
    }

}

export default connect(ChannelsRing, [
    {
        name : 'channels',
        states : [
            'ringList'
        ]
    }
])