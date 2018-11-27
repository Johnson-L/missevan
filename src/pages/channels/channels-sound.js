import React, { Component } from 'react'
import connect from '@connect';
import ChannelsItem from '@commons/recommend/recommend-channel-item';
class ChannelsSound extends Component {
    componentDidMount () {
        
        if(!this.props.channels.soundList.length){
            this.props.channels_actions.getSoundListAsync();
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
        let { soundList } = this.props.channels;
        if(!soundList.length){
            return '';
        }else {
            return soundList.map(item => {
                return <ChannelsItem key={item.id} info={item}></ChannelsItem>
            })
        }
    }

}

export default connect(ChannelsSound, [
    {
        name : 'channels',
        states : [
            'soundList'
        ]
    }
])