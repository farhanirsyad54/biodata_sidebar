import * as React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { Avatar } from "@material-ui/core";
import useStyles from "./Style";
import { ImageList } from "@material-ui/icons";
import { Row, Image } from "react-bootstrap";

export default function Beranda() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        <div className={classes.heroContent}>
          <Container maxWidth="md">
            <div class="container mt-4">
              <Row>
                <Image src="https://st2.depositphotos.com/3591429/5245/i/950/depositphotos_52453715-stock-photo-hands-holding-word-welcome.jpg" fluid />
              </Row>
            </div>
          </Container>
        </div>
      </main>
      <Container></Container>
    </React.Fragment>
  );
}
