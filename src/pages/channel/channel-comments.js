import React, { Component } from 'react'

class ChannelComments extends Component {


    componentDidMount () {
        if( !this.props.data.list.length){
            this.props.handler()
        }
    }
    render () {
        console.log(this.props)
        return (
            <div>
                { this.renderList() }
                <button onClick={ () => this.loadMore() }>加载更多</button>
            </div>
        )
    }

    renderList () {
        let { list } = this.props.data
        return (
            <div>
                { list.map( item => {
                    return <div key={item.id}>
                        {item.comment_content}
                    </div>
                })}
            </div>
        )
    }
    
    loadMore () {
        this.props.handler();
    }
}

export default ChannelComments