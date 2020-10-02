import React from "react";
import { Box, Button, makeStyles, Typography } from "@material-ui/core";

type SelectedItemProps = {
  title: string;
  callback: () => void;
};

const selectedItemStyles = makeStyles({
  item: {
    paddingTop: 13,
    paddingBottom: 13,
    marginBottom: 12,
  },
});

function SelectedItem({ title, callback }: SelectedItemProps) {
  const classes = selectedItemStyles();
  return (
    <Box
      className={classes.item}
      display="flex"
      justifyContent="space-between"
      alignItems="center"
    >
      <Typography>{title}</Typography>
      <Button color="secondary" variant="outlined" onClick={() => callback()}>
        削除
      </Button>
    </Box>
  );
}

export default SelectedItem;
