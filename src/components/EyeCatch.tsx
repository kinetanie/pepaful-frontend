import React from "react";
import { Box, Typography, makeStyles } from "@material-ui/core";
import { GetApp } from "@material-ui/icons";

const eyeCatchStyles = makeStyles({
  container: {
    marginTop: 47,
  },
  icon: {
    width: 60,
    height: 60,
  },
  title: {
    marginTop: 20,
  },
  bodyText: {
    marginTop: 20,
  },
});

function EyeCatch() {
  const classes = eyeCatchStyles();
  return (
    <Box className={classes.container}>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        alignItems="center"
      >
        <GetApp color="primary" className={classes.icon} />
        <Typography variant="h4" align="center" className={classes.title}>
          PDFジェネレーターPepaful（ペパフル）
        </Typography>
        <Typography align="center" className={classes.bodyText}>
          フォームを使ってPDFファイルを一括生成、ダウンロードできます。
        </Typography>
      </Box>
    </Box>
  );
}

export default EyeCatch;
