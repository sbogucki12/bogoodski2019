import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { blogList } from './blogList';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
    root: {
        width: '100%',
        backgroundColor: 'black',
        display: 'flex',
        justifyContent: 'center',
        paddingBottom: theme.spacing.unit * 2
    },
    text: {
        textDecoration: 'none !important',
        color: 'black'
    },
    paperRoot: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
        width: '90%'
    }
});

function BlogArchiveListMobile(props) {
    const { classes } = props;

    return (
        <div className={classes.root}>
            <Paper className={classes.paperRoot} elevation={6}>
                <List component="nav" dense>
                    {blogList.map(blog => (
                        <a
                            href={blog.url}
                            target="_blank"
                            className={classes.text}
                            key={blog.id}
                        >
                            <ListItem button >
                                <ListItemText primary={blog.name} secondary={blog.date} />
                            </ListItem>
                        </a>
                    ))}
                </List>
            </Paper>
        </div>
    );
};

export default withStyles(styles)(BlogArchiveListMobile);