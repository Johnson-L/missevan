import React, { Component } from 'react';
import { AppNotFoundContainer, AppNotFoundContent } from './styled-components'
class AppNotFound extends Component {

    render () {
        return (
            <AppNotFoundContainer>
                <AppNotFoundContent></AppNotFoundContent>
                <p>好像没有了呢～</p>
            </AppNotFoundContainer>
        )
    }

}

export default AppNotFound;