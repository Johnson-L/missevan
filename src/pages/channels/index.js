import React, { Componen, PureComponent } from 'react'

import connect from '@connect';

import { Route,Link, NavLink, Redirect } from 'react-router-dom';

import ChannelsAll from './channels-all';

import ChannelsSound from './channels-sound';

import ChannelsRing from './channels-ring';

import { ChannelsTabWrapper } from './styled-components'

import axios from 'axios';

class AppChannels extends PureComponent {
    constructor (props) {
        super(props);
    }
    
    render () {
       
        
        return (

            <React.Fragment>
                <header
                    style={
                        {
                            display: 'block',
                            lineHeight: '40px',
                            backgroundColor: '#fff',
                            color: '#000',
                            textAlign: 'center',
                            fontSize: '16px',
                           
                            borderBottom: '1px solid #e0e0e0'
                        }
                    }
                >频道</header>
                <ChannelsTabWrapper className="channels-tabs-wrap">
                    <NavLink to="/channels/all">全部</NavLink>
                    <NavLink to="/channels/sound">M 音</NavLink>
                    <NavLink to="/channels/ring">铃声</NavLink>
                </ChannelsTabWrapper>
                <div className = "channels-content" style={
                    {
                        display: 'flex',
                        justifyContent: 'space-around',
                        flexWrap : 'wrap',
                        alignItems: 'center',
                        padding: '10px'              
                    }
                }>
                    <Route path="/channels/" exact
                        render = { () => (
                            <Redirect to="/channels/all" />
                        )}
                    />
                    <Route 
                        path = "/channels/all"
                        component = { ChannelsAll }
                    />
                    <Route 
                        path = "/channels/sound"
                        component = { ChannelsSound }
                    />
                    <Route 
                        path = "/channels/ring"
                        component = { ChannelsRing }
                    />
                </div>
            </React.Fragment>
            
            
        )
    }


}

export default connect(AppChannels,[
    {
        name : 'channels',
        states : ['allList', 'soundList', 'ringList']
    }
]);