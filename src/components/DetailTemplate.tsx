import React from "react";
import { Grid, makeStyles, Paper, Typography } from "@material-ui/core";
import DefaultItemHeader from "./ItemShowcase/DefaultItemHeader";
import DescriptionField from "./DescriptionField";

const detailTemplateStyles = makeStyles({
  root: {
    marginTop: 30,
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 25,
    paddingBottom: 25,
  },
  title: {
    marginTop: 24,
    marginBottom: 24,
  },
  thumbnail: {
    maxWidth: "100%",
    height: "auto",
  },
});

function DetailTemplate() {
  const classes = detailTemplateStyles();
  const location = "福岡県北九州市";
  const callback = () => console.log("clicked");
  const description = "サンプルタイトルの説明です。"
  const url = "https://example.com";
  return (
    <Paper className={classes.root}>
      <DefaultItemHeader location={location} callback={callback} />
      <Typography variant="h5" className={classes.title}>
        サンプルタイトル
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <img
            className={classes.thumbnail}
            src="https://placekitten.com/420/594"
            alt=""
          />
        </Grid>
        <Grid item xs={6}>
          <DescriptionField url={url} description={description} />
        </Grid>
      </Grid>
    </Paper>
  );
}

export default DetailTemplate;
