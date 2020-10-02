import React from "react";
import { Button, Grid, makeStyles, Paper, TextField } from "@material-ui/core";
import FormHeader from "./FormHeader";

const formTemplateStyles = makeStyles({
  root: {
    marginTop: 30,
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 25,
    paddingBottom: 25,
  },
  button: {
    alignSelf: "center",
    marginTop: 30,
  },
});

function FormTemplate() {
  const classes = formTemplateStyles();
  return (
    <>
      <FormHeader />
      <Paper className={classes.root}>
        <Grid container direction="column" spacing={2}>
          <Grid item>
            <TextField label="姓" required />
          </Grid>
          <Grid item>
            <TextField label="名" required/>
          </Grid>
          <Grid item className={classes.button}>
            <Button variant="contained" color="primary">
              生成する
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
}

export default FormTemplate;
