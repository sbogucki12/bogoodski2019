import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Thumbnail from './images/thumbnail.JPG';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

const styles = theme => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        backgroundColor: 'rgba(236, 180, 85, .9)',
        width: '99%',
        height: '95%',
        border: '5px solid rgba(247, 170, 192, 1)',
        borderRadius: 5
    },
    paperRoot: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
        width: '80%',
        height: '90%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        margin: theme.spacing.unit,
    }
});

const ToDoMainWindowContent = props => {
    const { classes } = props;

    return (
        <div className={classes.root}>
            <Paper className={classes.paperRoot} elevation={6}>
                <img src={Thumbnail} style={{ width: 85, height: '85%', margin: '2%', border: '2px solid rgba(247, 170, 192, 1)', borderRadius: 5 }} alt="2Do Thumbnail" />
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }} >
                    <Typography variant="h6" style={{ fontSize: '3vw', color: `rgba(247, 170, 192, 1)`, textShadow: '1px 1px rgba(118, 199, 29, 1)' }} gutterBottom>
                        {`2Do App`}
                    </Typography>
                    <Button variant="contained" color="primary" size="small" className={classes.button} component={Link} to="/todo/switch">
                        {`Open`}
                    </Button>
                </div>
            </Paper>
        </div>
    )
}
export default withStyles(styles)(ToDoMainWindowContent);