import React, { Component } from 'react';
import { AppHomeWrapper, AppHomeNav, AppHomeContent } from './styled-components';
import { Route, NavLink, Switch, Redirect ,matchPath} from 'react-router-dom';
import AppAlbums from './albums';
import AppRecommend from './recommend';
import AppCatalogs from './catalogs';
class AppHomeContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active_nav: 'recommend'
        }
    }
    render() {
        let pathname=this.props.location.pathname
        var getAlbumsParams= matchPath(pathname,{path: "/home/albums/:id",})
        if(getAlbumsParams){
            var id=getAlbumsParams.params.id;
        }
        id= id ? id : "0";
        console.log(id)
        return (
            <AppHomeWrapper>
                <AppHomeNav className="light">
                    <NavLink to={this.props.match.path + `/albums/${id}`} >音单</NavLink>
                    <NavLink to={this.props.match.path + '/recommend'} >推荐</NavLink>
                    <NavLink to={this.props.match.path + '/catalogs'}>分类</NavLink>
                </AppHomeNav>
                <AppHomeContent>
                    <Switch>
                        <Route path={this.props.match.path} exact render={
                            () => <Redirect to={this.props.match.path + '/recommend'} />
                        } />
                        <Route path={this.props.match.path + '/albums/:id'} exact render={
                            () => <AppAlbums />
                        } />
                        <Route path={this.props.match.path + '/recommend'} exact render={
                            () => <AppRecommend />
                        } />
                        <Route path={this.props.match.path + '/catalogs'} exact render={
                            () => <AppCatalogs />
                        } />
                        <Redirect to="/not-found" />
                    </Switch>


                    

                </AppHomeContent>
            </AppHomeWrapper>
        )
    }

}

export default AppHomeContainer