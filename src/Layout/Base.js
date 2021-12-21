import React, { useState } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import LayoutStyles from "./LayoutStyle";
import { Route } from "react-router-dom";
import Formulir from "../Components/Formulir";
import Beranda from "../Components/Beranda";

//Halaman base untuk layout
const Base = ({ match }) => {
  const classes = LayoutStyles();
  const [open, setOpen] = useState(true);
  const toggleDrawer = () => {
    // console.log("this")
    setOpen(!open);
  };
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header toggleDrawer={toggleDrawer} open={open} />
      <Sidebar toggleDrawer={toggleDrawer} open={open} />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Route path={`${match.url}/home`} component={Beranda} />
        <Route path={`${match.url}/formulir`} component={Formulir} />
        <Footer />
      </main>
    </div>
  );
};

export default Base;
