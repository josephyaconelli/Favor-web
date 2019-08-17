import React from 'react'

import HeaderContainer from '../header/HeaderContainer'
import ScreenContainer from '../../screen/ScreenContainer'
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    }
  }));

const Main = ({ screen }) => {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <HeaderContainer />
        </div>
    )
}

export default Main