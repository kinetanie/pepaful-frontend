import React from "react";
import { Paper, makeStyles, Typography } from "@material-ui/core";

const formHeaderStyles = makeStyles({
  root: {
    marginTop: 30,
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 25,
    paddingBottom: 25,
  },
  title: {
      marginBottom: 12
  }
});

function FormHeader() {
  const classes = formHeaderStyles();
  return (
    <Paper className={classes.root}>
      <Typography variant="h5" className={classes.title}>入力フォーム</Typography>
      <Typography color="secondary">* 必須</Typography>
    </Paper>
  );
}

export default FormHeader;
