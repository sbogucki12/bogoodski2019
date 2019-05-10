import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import ToDoMainWindowContent from '../toDo/ToDoMainWindowContent';

const styles = theme => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        backgroundColor: theme.palette.secondary.main,
        width: '100%',
        height: 300,
        marginBottom: `2%`
    }
});

const MainWindow2Do = props => {
    const { classes } = props;

    return (
        <div className={classes.root}>
            <ToDoMainWindowContent />
        </div>
    )
}
export default withStyles(styles)(MainWindow2Do);