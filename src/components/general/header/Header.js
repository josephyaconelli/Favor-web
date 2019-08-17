import React from 'react'
import { headerStyle } from './styles'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import screenIds from '../../../constants/screenIds'
import { Link } from 'react-router-dom'


const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));
  
  const changeScreen = (screen, goToScreen) => {
    const nextScreen = screen === screenIds.Main ? screenIds.Profile : screenIds.Main
    goToScreen(nextScreen)
}

const Header = (props) => {
    const classes = useStyles()
    
    return (
    <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Find a job
          </Typography>
          <Link to="/">
            <Button color="inherit">Home</Button>
          </Link>
          <Link to="/signin">
            <Button color="inherit">Login</Button>
          </Link>
        </Toolbar>
    </AppBar>
)}

export default Header