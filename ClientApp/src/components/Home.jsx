import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    root: {
        flexGrow: 1
    }
});

class Home extends Component {
    displayName = Home.name

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <Typography variant="h2" align="center" gutterBottom>
                    {`This is the main window`}
                </Typography>
            </div>
        );
    }
}

export default withStyles(styles)(Home);