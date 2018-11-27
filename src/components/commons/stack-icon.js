import React, { Component } from 'react';

import styled from 'styled-components';


const StackWrapper = styled.div`
    position: relative;
    display: inline-block;
    width: 106px;
    margin: 5px 3px;
    z-index: 0;
    padding: 0;
    .cover{
        width: 106px;
        height: 106px;
        border: 1px solid #bdbdbd;
        border-radius: 4px;
        background-color: #fff;
        background-repeat: no-repeat;
        background-position: 50%;
        background-size: 100%;
        position: relative;
        box-sizing: border-box;
        .sound-num{
            bottom: 0;
            right: 0;
            left: 0;
            height: 18px;
            line-height: 18px;
            position: absolute;
            background: linear-gradient(90deg,transparent,rgba(0,0,0,.02) 30%,rgba(0,0,0,.8));
            border-bottom-right-radius: 4px;
            span{
                display: block;
                position: absolute;
                right: 5px;
                padding-left: 14px;
                font-size: 12px;
                color: #fff;
                &::before{
                    background-size: 56px 55px;
                    background-position: 0 -44px;
                    content: "";
                    display: block;
                    position: absolute;
                    margin: 4px 0 3px;
                    left: 0;
                    height: 11px;
                    width: 13px;
                    background-image: url(https://static.missevan.com/assets/m/images/build/sprite-icons-thumbnails@2x.f1c29abf.png);

                }
            }
        }

        &::before, &::after{
            content: "";
            display: block;
            position: absolute;
            width: 106px;
            height: 106px;
            border: 1px solid #bdbdbd;
            border-radius: 4px;
            background-color: #fff;
            box-sizing: content-box;
        }
        &::before{
            bottom: 0;
            left: 0;
            z-index: -1;
        }
        &::after{
            bottom: 3px;
            left: 3px;
            z-index: -2;
        }
    }
`;

class StackIcon extends Component {
    constructor ( props ) {
        super(props);
    }

    render () {
       
        return (
            <StackWrapper className = "stack-icon">
              
                <div className="cover" style={{
                    backgroundImage :`url(https://static.missevan.com/coversmini/${this.props.data.cover_image})`
                }}>
                    <div className="sound-num">
                        <span>
                            { this.props.data.music_count}
                        </span>
                    </div>
                </div>
                
            </StackWrapper>
        )
    }
}

// export default StackIcon;

export default StackIcon;