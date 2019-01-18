import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


const styles = theme => ({
    root: {
        flexGrow: 1
    },
    button: {
        margin: theme.spacing.unit
    }
});

class Home extends Component {
    displayName = Home.name

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <Button variant="contained" color="secondary" className={classes.button}>
                    Primary
                </Button>
            </div>
        );
    }
}

export default withStyles(styles)(Home);