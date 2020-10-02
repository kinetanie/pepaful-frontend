import React from "react";
import { Box, Typography, makeStyles } from "@material-ui/core";
import DefaultItemHeader from "./DefaultItemHeader";

type DefaultItemProps = {
  location: string;
  callback: () => void;
  itemName: string;
};

const defaultItemStyles = makeStyles({
  box: {
    marginBottom: 30,
  },
  title: {
    paddingTop: 10,
  },
});

function DefaultItem({ location, callback, itemName }: DefaultItemProps) {
  const classes = defaultItemStyles();
  return (
    <>
      <Box className={classes.box}>
        <DefaultItemHeader location={location} callback={callback} />
        <Typography variant="h6" className={classes.title}>
          {itemName}
        </Typography>
      </Box>
    </>
  );
}

export default DefaultItem;
