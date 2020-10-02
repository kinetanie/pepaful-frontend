import React from "react";
import { Container, Grid } from "@material-ui/core";
import DetailTemplate from "../components/DetailTemplate";
import SelectedItemFolder from "../components/ItemShowcase/SelectedItemFolder";

function Detail() {
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={9}>
          <DetailTemplate/>
        </Grid>
        <Grid item xs={3}>
          <SelectedItemFolder />
        </Grid>
      </Grid>
    </Container>
  );
}

export default Detail;
