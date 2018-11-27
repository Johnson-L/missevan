import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import connect from '@connect'
import {
    CataLogsContainer ,
    CataLogsContainerItem,
    CataLogsContainerItemImg,
    CataLogsContainerItemText
} from './styled-components.js'

class AppCatalogs extends Component {
    componentDidMount () {
        this.props.cafalogs_actions.getCatalogsItem()
    }

    render () {
        return (
            <CataLogsContainer>
                {this.randerItem()}
            </CataLogsContainer>
        )
    }
    randerItem () {
        let {cafalogslist} = this.props.cafalogs
        if ( !cafalogslist.length ) return ''
        return cafalogslist.map(val => (
            <CataLogsContainerItem
                key = { val.id }
                onClick = {()=>this.changePage(val.id)}
            >
                <CataLogsContainerItemImg pic = {val.pic}/>
                <CataLogsContainerItemText>
                    {val.title}
                </CataLogsContainerItemText>
            </CataLogsContainerItem>
        ))
    }
    changePage (id) {
        this.props.cafalogs_actions.getchangeId(id)
        this.props.cafalogs_actions.getCafalogsSon()
        console.log(this.props)
        if (id != '5'){
            this.props.history.push({pathname: "/cafalogs-detail" + '/' + id })
        }else {
            this.props.history.push({pathname: "/drama" })
        }
    }

}

export default withRouter(connect(AppCatalogs, [{name: 'cafalogs', state: ['cafalogslist']}]))