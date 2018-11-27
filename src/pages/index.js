import React, { Component, Fragment } from 'react';
import { Route, withRouter, Link, NavLink, Switch, Redirect } from 'react-router-dom';
import { AppContainerWrapper } from './styled-components';
import AppHomeContainer from '@pages/home';
import CafalogsLittle from '@pages/cafalogs-detail';
import Drama from '@pages/drama';
import AppNotFound from '@pages/not-found';

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
                        path = '/cafalogs-detail/:id'
                        component = {CafalogsLittle}
                    />

                    <Route
                        path = '/drama'
                        component = {Drama}
                    />

                    <Route path="/not-found" render={() => <AppNotFound />} />
                    
                    <Redirect to="/not-found" />

                    
                    
                    
                </Switch>
               
            </AppContainerWrapper>
        )
    }

}

export default AppContainer;