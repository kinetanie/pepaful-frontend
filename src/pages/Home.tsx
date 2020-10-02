import React from "react";
import { Container, Grid } from "@material-ui/core";
import EyeCatch from "../components/EyeCatch";
import DefaultItemFolder from "../components/ItemShowcase/DefaultItemFolder";
import SelectedItemFolder from "../components/ItemShowcase/SelectedItemFolder";

function Home() {
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={9}>
          <EyeCatch />
          <DefaultItemFolder />
        </Grid>
        <Grid item xs={3}>
          <SelectedItemFolder />
        </Grid>
      </Grid>
    </Container>
  );
}

export default Home;
