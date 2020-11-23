import React from "react";
import "./style.css";
import {NavLink} from 'react-router-dom'
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

function Navbar() {
  const useStyles = makeStyles((theme) => ({
    root: {
      "& > *": {
        margin: theme.spacing(1),
      },
    },
  }));

  const classes = useStyles();
  
  return (
    <nav className={classes.root} style={{position: "absolute", top: "0px", marginRight: "0px"}}>
      <ul className="navigation">
        <li><NavLink to="/"><Button color="primary">Home</Button></NavLink></li>
        <li><NavLink to="/projects"><Button color="primary">Projects</Button></NavLink></li>
        <li><NavLink to="/about"><Button color="primary">About</Button></NavLink></li>
        <li><NavLink to="/contact"><Button color="primary">Contact</Button></NavLink></li>
      </ul>
    </nav>
  );
}

export default Navbar;

