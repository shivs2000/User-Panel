import React, { useState } from 'react';

import {
    makeStyles,
    AppBar,
    Toolbar,
    Typography,
    Button,
    IconButton,
    Grid

    
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
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
function Home(props) {
    const classes=useStyles();
    const [users,SetUser]=useState();
    return (
        <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            User-Panel
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <Grid className="container">
          
      </Grid>
    </div>
    );
}

export default Home;