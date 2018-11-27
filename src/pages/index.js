import React, { Component, Fragment } from 'react';
import { Route, withRouter, Link, NavLink, Switch, Redirect } from 'react-router-dom';
import { AppContainerWrapper } from './styled-components';
import AppHomeContainer from '@pages/home';
import AppNotFound from '@pages/not-found';
import AppRank from '@pages/rank';
import AppChannels from '@pages/channels';
import AppChannel from '@pages/channel';
class AppContainer extends Component {

    render () {
        return (
            <AppContainerWrapper>
                <Switch >
                    <Route 
                        path = '/' exact

                        render={
                            () => <Redirect to="/home"/>
                        }
                       
                    />
                    <Route
                        path = '/home'
                        component={AppHomeContainer}
                    />

                    <Route
                        path = '/rank'
                        component = { AppRank }
                    />   

                    
                    <Route
                        path = '/channels'
                        component = { AppChannels }
                    />

                    <Route 
                        path = '/channel/:cid/:type'
                        component = { AppChannel }
                    />

                    <Route 
                        path = '/channel/:cid'
                        component = { AppChannel }
                    />

                    <Route path="/not-found" render={() => <AppNotFound />} />
                    
                    <Redirect to="/not-found" />

                    
                    
                    
                </Switch>
               
            </AppContainerWrapper>
        )
    }

}

export default AppContainer;