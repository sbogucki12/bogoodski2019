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
        width: '95%',
        display: 'flex',
        minHeight: 600,
        alignItems: 'center',
        flexDirection: 'column',
        padding: theme.spacing.unit,
        marginBottom: '5%',
        marginTop: theme.spacing.unit * 18,
        backgroundImage: 'linear-gradient(#e4ff54, #1b5e20)'
    },
    background: {
        backgroundColor: theme.palette.secondary.main,
        width: '100vw',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
    },
    text: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: theme.spacing.unit * 1,
        textDecoration: 'none'
    },
    blogPaper: {
        maxWidth: '85%',
        margin: theme.spacing.unit * 2
    },
    button: {
        margin: theme.spacing.unit
    },
    fab: {
        margin: theme.spacing.unit,
        maxHeight: '2vh'
    }
});

class BlogFullArchive extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.background}>

                <Paper className={classes.root} elevation={6}>
                    <Paper style={{ margin: '2%', padding: '2%' }} elevation={6}>
                        <Typography variant="h4" align="center" gutterBottom>
                            {`Blog Archive`}
                        </Typography>
                        <Typography variant="caption" align="center" gutterBottom>
                            {`Posts Opens in New Window`}
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
                                    <ListItem button style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', textAlign: 'center' }}>
                                        <ListItemText primary={blog.seriesTitle} style={{ fontStyle: 'italic' }} />
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
}

export default withStyles(styles)(BlogFullArchive);