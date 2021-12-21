import * as React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { Avatar } from "@material-ui/core";
import useStyles from "./Style";
import { Carousel, Row } from "react-bootstrap";

export default function Beranda() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Home
            </Typography>
            <Typography variant="h6" align="center" color="textSecondary" paragraph>
              Tugas formulir dengan menggunakan sidebar dan route path
            </Typography>
          </Container>
        </div>
      </main>
      <Container></Container>
    </React.Fragment>
  );
}
