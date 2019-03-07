import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {
    width: '100%',
    maxWidth: 500,
  },
};

function Types(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Typography component="h2" variant="h1" gutterBottom>
        h1. Heading
      </Typography>
    </div>
  );
}

export default withStyles(styles)(ChatRoot);
