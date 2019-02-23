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
import Fab from '@material-ui/core/Fab';
import RightIcon from '@material-ui/icons/SkipNextTwoTone';
import LeftIcon from '@material-ui/icons/SkipPreviousTwoTone';

const miscSeries = [{
    "id": 0, "name": "Post Title", "date": "Post date", "url": "url", "seriesTitle": "BoGoodSki: Misc. Thoughts"
}]

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
        marginTop: theme.spacing.unit * 17,
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
    },
    navContainer: {         
        marginBottom: '2%', 
        marginTop: '2%'
    }
});

class BlogFullArchive extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            home: true
        }
    }

    toggleHome = () => {
        this.setState((prevState) => ({
            home: !prevState.home
        }))
    };



    render() {
        const { classes } = this.props;

        let displayList;
        if (this.state.home) {
            displayList = blogList
        } else {
            displayList = miscSeries
        }

        const seriesTitle = displayList[0].seriesTitle;

        return (            
                <div className={classes.background}>
                    <Paper className={classes.root} elevation={6}>
                        <div className={classes.navContainer}>
                            <Fab color="secondary" aria-label="Add" className={classes.fab} onClick={this.toggleHome}>
                                <LeftIcon />
                            </Fab>
                            <Button
                                variant="contained"
                                color="secondary"
                                className={classes.button}
                                component={Link}
                                to="/"
                            >
                                {`Home`}
                            </Button>
                            <Fab color="secondary" aria-label="Add" className={classes.fab} onClick={this.toggleHome}>
                                <RightIcon />
                            </Fab>
                        </div>
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
                                {displayList.map(blog => (
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
                    </Paper>
                </div>      
        );
    }
}

export default withStyles(styles)(BlogFullArchive);