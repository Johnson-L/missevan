import React, { Component } from 'react'
import { BodyItemChannel } from './styled-components';
import { Link } from 'react-router-dom';
class RecomendItem extends Component {

    render() {
        
        return (
            <BodyItemChannel>
                <Link className="Thumbnail sound" to={'/channel/' + this.props.info.id}>
                    <div className="cover" 
                        style={
                            {
                                'backgroundImage' : `url(https://static.missevan.com/mtags/${this.props.info.icon})`
                            }
                        }
                    >
                        <div className="follow">
                            <span>{this.props.info.follow_num}</span>
                        </div>
                    </div>
                    <div className="title">
                        {this.props.info.name}
                    </div>
                </Link>
            </BodyItemChannel>
        )
    }

}

export default RecomendItem;