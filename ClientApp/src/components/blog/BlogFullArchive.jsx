import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { blogList } from './blogList'; 
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from 'react-router-dom';

const styles = theme => ({
    root: {
        ...theme.mixins.gutters(),
        width: '70%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        padding: theme.spacing.unit,
        marginTop: '10%',
        marginBottom: '5%'
    },
    background: {
        backgroundColor: theme.palette.secondary.main, 
        width: '100vw',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center', 
        alignItems: 'center'        
    }, 
    text: {
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        padding: theme.spacing.unit * 1,
        textDecoration: 'none'
    },
    blogPaper: {
        width: '60%',
        margin: theme.spacing.unit * 2
    },
    button: {
        margin: theme.spacing.unit
    }
});

function BlogFullArchive(props) {
    const { classes } = props;
    const seriesTitle = 'Live Blogging the Development of a New Feature';

    return (
        <div className={classes.background}>
            <Paper className={classes.root} elevation={6}>
                <Paper className={classes.blogPaper} elevation={6}>
                    <Typography
                        variant="subtitle1"
                        className={classes.text}
                        align="center"
                    >
                        {seriesTitle}
                    </Typography>
                </Paper>
                <Paper className={classes.blogPaper} elevation={6}>
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
                <Button
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    component={Link}
                    to="/"
                >
                    {`Home`}
                </Button>
            </Paper>
        </div>
    );
}

export default withStyles(styles)(BlogFullArchive);