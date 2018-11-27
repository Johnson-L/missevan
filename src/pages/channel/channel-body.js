import React, { Component } from 'react'
import { runInThisContext } from 'vm';

class ChannelBody extends Component {

    render () {
        return (
            <div>
                ChannelBody
                { this.props.children }
            </div>
        )
    }

}

export default ChannelBody