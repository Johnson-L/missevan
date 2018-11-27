import React, { Component, PureComponent } from 'react'

class ChannelSounds extends PureComponent {
    constructor (props) {
        super(props)
    }
    componentDidMount () {
        if( !this.props.data.list.length){
            this.props.handler()
        }
        
    }
    render () {
        console.log('sounds render')
        console.log(this.props)
        return <div>
            {this.renderContent()}
            <button onClick={() => this.loadMore()}>加载更多</button>
        </div>
        return 

    }

    renderContent () {
        console.log(this.props.data.list)
        let { list } = this.props.data
        return (
            <div>
                { list.map( item => {
                    return <div key={item.id}>
                        {item.soundstr}
                    </div>
                })}
            </div>
        )
    }

    loadMore () {
        this.props.handler();
    }

}

export default ChannelSounds