import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import GetBlogPosts from './GetBlogPosts';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const styles = theme => ({
    root: {
        width: '100vw',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
    },
    paperRoot: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
        marginTop: '25vh',
        width: '90%'
    },
    button: {
        margin: '2%',
    }
});

function WhatHappenedInDec(props) {
    const { classes } = props;

    return (
        <div className={classes.root}>
            <Paper className={classes.paperRoot} elevation={1}>
                <GetBlogPosts />
            </Paper>
            <Button
                variant="contained"
                color="primary"
                className={classes.button}
                component={Link}
                to="/"
            >
                {`Home`}
            </Button>
        </div>
    );
}

export default withStyles(styles)(WhatHappenedInDec);