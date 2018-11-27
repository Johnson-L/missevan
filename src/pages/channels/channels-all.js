import React, { Component } from 'react'
import connect from '@connect';
import ChannelsItem from '@commons/recommend/recommend-channel-item';
class ChannelsAll extends Component {

    constructor ( props ) {
        super(props);
    
    }
    componentDidMount () {
        
        if(!this.props.channels.allList.length){
            this.props.channels_actions.getAllListAsync();
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
        let { allList } = this.props.channels;
        if(!allList.length){
            return '';
        }else {
            return allList.map(item => {
                return <ChannelsItem key={item.id} info={item}></ChannelsItem>
            })
        }
    }

}



export default connect(ChannelsAll, [
    {
        name : 'channels',
        states : [
            'allList'
        ]
    }
])