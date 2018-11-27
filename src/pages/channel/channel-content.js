import React, { Component } from 'react'

class ChannelContent extends Component {

    render () {
        return (
            <div>
                { this.props.children }
            </div>
        )
    }

}

export default ChannelContent