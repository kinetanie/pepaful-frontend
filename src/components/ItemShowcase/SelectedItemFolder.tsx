import React from "react";
import { Box, Button, makeStyles, Paper, Typography } from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";
import SelectedItem from "./SelectedItem";

const selectedItemFolderStyles = makeStyles({
  root: {
    marginTop: 30,
  },
  containerBox: {
    minHeight: 480,
    paddingTop: 23,
    paddingLeft: 27,
    paddingRight: 27,
    paddingBottom: 23,
  },
  title: {
    paddingBottom: 12,
  },
  item: {
    paddingTop: 13,
    paddingBottom: 13,
    marginBottom: 12,
  },
  formButton: {
    marginTop: "auto",
    marginBottom: 0,
  },
});

function SelectedItemFolder() {
  const classes = selectedItemFolderStyles();
  const itemProps = [
    {
      title: "サンプルアイテム",
      callback: () => console.log("clicked"),
    },
    {
      title: "サンプルアイテム",
      callback: () => console.log("clicked"),
    },
    {
      title: "サンプルアイテム",
      callback: () => console.log("clicked"),
    },
  ];
  return (
    <Paper className={classes.root}>
      <Box
        className={classes.containerBox}
        display="flex"
        flexDirection="column"
      >
        <Typography className={classes.title} variant="h6">
          選択したアイテム
        </Typography>
        {itemProps.map((props) => (
          <SelectedItem title={props.title} callback={props.callback} />
        ))}
        <Button
          className={classes.formButton}
          variant="contained"
          color="primary"
          component={RouterLink}
          to="/form"
        >
          入力フォームへ
        </Button>
      </Box>
    </Paper>
  );
}

export default SelectedItemFolder;
