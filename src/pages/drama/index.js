import React, { Component } from 'react'
import { 
    DramaTitle ,
    DramaChange,
    DramaChangeBtn
}  from './styled-components'
import { Route, withRouter, Link, NavLink, Switch, Redirect } from 'react-router-dom';

import DramaChanged from './dramaFirst'
import DramaKindOf from './dramaKindOf'
import DramaNewTime from './dramaNewTime'

class Drama extends Component {

    render () {
        return (
            <div>

                

                <Switch>
                    <Route
                        path = '/drama' exact
                        render = {()=> <DramaChanged/>}
                    />
                    <Route
                        path = '/drama/time' exact
                        render = {()=> <DramaNewTime/>}
                    />
                    <Route
                        path = '/drama/kind' exact
                        render = {()=> <DramaKindOf/>}
                    />
                </Switch>
            </div>
        )
    }

}

export default Drama