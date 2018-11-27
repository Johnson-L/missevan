import React, { Component } from 'react'
import { BodyItem } from './styled-components';
import { Link } from 'react-router-dom';
class RecomendItem extends Component {

    render() {
        return (
            <BodyItem>
                <Link className="Thumbnail sound" to={'/sound/' + this.props.info.id}>
                    <div className="cover" 
                        style={
                            {
                                'backgroundImage' : `url(https://static.missevan.com/coversmini/${this.props.info.cover_image})`
                            }
                        }
                    >
                   
                    </div>
                    <div className="title">{this.props.info.soundstr}</div>
                    <div className="detail">
                        <span className="item play-times">{this.props.info.view_count}</span>
                        <span className="item comments">{this.props.info.comment_count}</span>
                    </div>
                </Link>
            </BodyItem>
        )
    }

}

export default RecomendItem;