import React, { Componen, PureComponent } from 'react'

import connect from '@connect';

import axios from 'axios';

import { Route, Link, NavLink, Redirect } from 'react-router-dom';

import ChannelHeader from './channel-header';

import ChannelBody from './channel-body';

import ChannelContent from './channel-content';

import ChannelSounds from './channel-sounds';

import ChannelComments from './channel-comments';

import ChannelAdmins from './channel-admins';

class AppChannel extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            type: this.props.match.params.type ? this.props.match.params.type : 'sounds',
            typeList: ['sounds', 'comments', 'admins'],
            sounds: {
                list: [],
                hasMore: true
            },
            comments: {
                list: [],
                hasMore: true
            },
            admins: {
                list: [],
                hasMore: true
            }
        }


        this.listInfo = {
            sounds: {
                pageSize: 10,
                p: 1,

            },
            comments: {
                pageSize: 10,
                p: 1
            },

        }


    }
    render() {
        console.log('channel render')
        return (
            <div className="channel-wrapper">
                <ChannelHeader ></ChannelHeader>
                <ChannelBody >
                    <ul>
                        <li className={this.state.type === 'sounds' ? 'active' : ''} type="sounds" onClick={(e) => {
                            this.tabClick(e.target.type)
                        }}>动态</li>
                        <li className={this.state.type === 'comments' ? 'active' : ''} type='comments' onClick={(e) => {
                            this.tabClick(e.target.type)
                        }}>评论</li>
                        <li className={this.state.type === 'admins' ? 'active' : ''} type='admins' onClick={(e) => {
                            this.tabClick(e.target.type)
                        }}>成员</li>
                    </ul>
                    <ChannelContent>
                        {
                            this.renderContent(this.state.type)
                        }
                    </ChannelContent>
                </ChannelBody>
            </div>
        )
    }

    tabClick(type) {

        this.props.history.push({
            pathname : '/channel/' + this.props.match.params.cid + '/' + type
        })
        this.setState((prevState, props) => (
            {
                type: type
            }
        ))
    }

    renderContent(type) {
        switch (type) {
            case 'sounds':
                return <ChannelSounds handler={this.getChannelDetail.bind(this)} data={this.state.sounds}></ChannelSounds>;
                break;
            case 'comments':
                return <ChannelComments handler={this.getComment.bind(this)} data={this.state.comments}></ChannelComments>;
                break;
            case 'admins':
                return <ChannelAdmins handler={this.getChannelAdmin.bind(this)} data={this.state.admins}></ChannelAdmins>;
                break;

        }
    }

    getChannelDetail() {
       
        if (this.state.sounds.hasMore) {
            axios({
                type: 'get',
                url: '/mobileWeb/getchanneldetail',
                params: {
                    order: 3,
                    channel_id: this.props.match.params.cid,
                    p: this.listInfo.sounds.p + 1
                }
            }).then(result => {
                this.setState( (prevState) => {
                    return {
                        sounds : {
                            list : prevState.sounds.list.concat(result.data.info.Datas),
                            hasMore : result.data.info.pagination.hasMore
                        }
                    }
                })
                this.listInfo.sounds.p ++;
            })
        } else {
            alert('无更多数据')
        }

    }

    getComment() {
        if (this.state.comments.hasMore) {
            axios({
                method: 'post',
                url: '/site/getcomment',
                headers: {
                    'Content-type': 'application/x-www-form-urlencoded'
                },
                data: {
                    type: 4,
                    eId: this.props.match.params.cid,
                    p: this.listInfo.comments.p,
                    pagesize: this.listInfo.comments.pageSize
                },
                transformRequest: [function (data) {
                    let ret = ''
                    for (let it in data) {
                        ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
                    }
                    return ret
                }]
            }).then(result => {
                console.log(result);

                this.setState( (prevState) => {
                    return {
                        comments : {
                            list : prevState.comments.list.concat(result.data.successVal.comment.Datas),
                            hasMore : result.data.successVal.comment.pagination.hasMore
                        }
                    }
                })
                this.listInfo.comments.p ++;
            })
        }else {
            alert('无更多数据')
        }

    }

    getChannelAdmin() {
        axios({
            type: 'get',
            url: '/mobileWeb/channeladmin',
            params: {
                channel_id: 23292
            }
        }).then(result => {
            console.log(result);
        })
    }



}

export default AppChannel;