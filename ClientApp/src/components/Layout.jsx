import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
    root: {
        flexGrow: 1
    }
});

class Layout extends Component {
    displayName = Layout.name

    render() {
        const { classes } = this.props;
        return (
            <Grid container className={classes.root} spacing={16}>
                <Grid item sm={3}>
                    <Typography variant="h3" align="center" gutterBottom>
                        {`This is the left column`}
                    </Typography>
                </Grid>
                <Grid item sm={9}>
                    {this.props.children}
                </Grid>
            </Grid>
        );
    }
}
export default withStyles(styles)(Layout);
