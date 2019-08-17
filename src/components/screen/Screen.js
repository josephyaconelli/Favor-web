import React from 'react'

import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

import screenIds from '../../constants/screenIds'
import StuffListContainer from '../StuffListContainer'
import SignIn  from '../pages/signin/SignIn'

import { BrowserRouter as Router, Route, Link } from 'react-router' 

const whichScreen = (screen) => {
    switch(screen) {
        case screenIds.Main:
            return (<div>
                Currently on {screen}
                <StuffListContainer />
            </div>)
        case screenIds.Profile:
            return (<SignIn/>)
        default:
            return <div>I'm sorry! There seems to be an error...</div>
    }
}

const Screen = ({ screen }) => {
    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            {whichScreen(screen)}
        </Container>
    )
}

export default Screen