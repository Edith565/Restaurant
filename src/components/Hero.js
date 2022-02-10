import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import "./Hero.css";
import Food from "../static/Food.jpg";
import { Box } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,

    backgroundColor: "black",
  },
}));


export default function Hero() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={0}>
        <Grid item xs={5}>
          <Paper style={{ height: "50vh" }} className={classes.paper}>
            xs=12
            <div className="div1">
              <h1> WELCOME</h1>
            </div>
          </Paper>
        </Grid>
        <Box
            class="Food"
            style={{
            backgroundImage: `url(${Food})`,
            backgroundSize: "cover",
            height: "50vh",
            width:"50%",
            marginTop: 30
            
            // color: "#f5f5f5"
        }}>
        <Grid item xs={7}>
          
        </Grid>
        </Box>
       

        <div></div>
      </Grid>
    </div>
  );
}
