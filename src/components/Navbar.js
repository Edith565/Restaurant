import * as React from 'react';
import AppBar from "@material-ui/core/AppBar";
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Menu as MenuIcon } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  purpleButton: {

    backgroundColor: "#900020", // you can add your specific CSS here.

  }
}));

export default function ButtonAppBar() {


    const classes = useStyles();
  return (
    <Box style={{background:'black'}} sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ background: 'transparent', boxShadow: 'none'}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Button  className={classes.purpleButton} color="secondary"  variant="contained">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}