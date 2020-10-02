import React from "react";
import { Container, Grid, Paper, Typography } from "@material-ui/core";
import EyeCatch from "../components/EyeCatch";
import ItemFolder from "../components/ItemFolder";

function Home() {
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={9}>
          <EyeCatch />
          <Paper>
            <Typography>foo</Typography>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <ItemFolder/>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Home;
