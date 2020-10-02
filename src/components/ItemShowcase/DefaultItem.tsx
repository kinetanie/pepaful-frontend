import React from "react";
import { Box, Typography, makeStyles } from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";
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
        <RouterLink to="/detail">
          <Typography variant="h6" className={classes.title}>
            {itemName}
          </Typography>
        </RouterLink>
      </Box>
    </>
  );
}

export default DefaultItem;
