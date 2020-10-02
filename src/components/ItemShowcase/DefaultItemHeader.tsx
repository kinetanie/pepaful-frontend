import React from "react";
import { Box, Button, makeStyles, Typography } from "@material-ui/core";
import { LocationOn } from "@material-ui/icons";

type DefaultItemHeaderProps = {
  location: string;
  callback: () => void;
};

const defaultItemHeaderStyles = makeStyles({
  icon: {
    paddingRight: 12,
  },
});

function DefaultItemHeader({ location, callback }: DefaultItemHeaderProps) {
  const classes = defaultItemHeaderStyles();
  return (
    <Box display="flex" justifyContent="space-between" alignItems="center">
      <Box display="flex" alignItems="center">
        <LocationOn className={classes.icon} color="primary" />
        <Typography>{location}</Typography>
      </Box>
      <Button variant="outlined" color="primary" onClick={() => callback()}>
        追加
      </Button>
    </Box>
  );
}

export default DefaultItemHeader;
