import React from "react";
import { Paper, makeStyles } from "@material-ui/core";
import DefaultItem from "./DefaultItem";

const defaultItemFolderStyles = makeStyles({
  root: {
    marginTop: 30,
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 25,
    paddingBottom: 25,
  },
});

function DefaultItemFolder() {
  const classes = defaultItemFolderStyles();
  const itemProps = [
    {
      location: "福岡県北九州市",
      itemName: "サンプルアイテム",
      callback: () => console.log("clicked"),
    },
    {
      location: "福岡県北九州市",
      itemName: "サンプルアイテム",
      callback: () => console.log("clicked"),
    },
    {
      location: "福岡県北九州市",
      itemName: "サンプルアイテム",
      callback: () => console.log("clicked"),
    },
  ];
  return (
    <Paper className={classes.root}>
      {itemProps.map((props) => (
        <DefaultItem
          location={props.location}
          itemName={props.itemName}
          callback={props.callback}
        />
      ))}
    </Paper>
  );
}

export default DefaultItemFolder;
