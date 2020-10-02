import React from "react";
import { Box, makeStyles, Typography } from "@material-ui/core";

type DescriptionFieldProps = {
  url: string;
  description: string;
};

const descriptionFieldStyles = makeStyles({
  descriptionBox: {
    height: "100%",
  },
  sourceField: {
    marginTop: "auto",
    marginBottom: 0,
  },
});

function DescriptionField({url,description}:DescriptionFieldProps) {
  const classes = descriptionFieldStyles();
  return (
    <Box
      className={classes.descriptionBox}
      display="flex"
      justifyContent="space-between"
      flexDirection="column"
    >
      <Typography>{description}</Typography>
      <Box className={classes.sourceField}>
        <Typography>出典元</Typography>
        <Typography>
          <a href={url}>{url}</a>
        </Typography>
      </Box>
    </Box>
  );
}

export default DescriptionField;
