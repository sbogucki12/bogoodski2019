import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import { Link } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import NextIcon from '@material-ui/icons/NavigateNext';
import BackIcon from '@material-ui/icons/NavigateBefore';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Slide from '@material-ui/core/Slide';
import resumeData from './resumeData';

const styles = theme => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        paddingTop: '20vh',
        minWidth: '100vw',
        minHeight: '120vh',
        backgroundColor: theme.palette.secondary.main

    },
    paper: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 1,
        paddingBottom: theme.spacing.unit * 2,
        marginBottom: theme.spacing.unit * 4,        
        
        [theme.breakpoints.only('xs')]: {
            marginTop: '10vh'
        },
        width: '80%',
        height: '90%'
     
    },
    content: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
    },
    buttonContainer: {
        display: 'flex',
        justifyContent: 'flex-end'
    },
    button: {
        margin: theme.spacing.unit
    }
});

class ResumeMain extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 0
        }
    };

    render() {
        const { classes } = this.props;       

        const onNext = () => {
            this.setState((prevState) => ({
                page: prevState.page + 1
            }))
        };

        const onBack = () => {
            this.setState((prevState) => ({
                page: prevState.page - 1
            }))
        };
        const arrow =
            <Fab onClick={onNext} color="primary" className={classes.button} >
                <NextIcon />
            </Fab>;

        const backArrow =
            <Fab onClick={onBack} color="secondary" className={classes.button} >
                <BackIcon />
            </Fab>;

        const showArrow = () => {
            if (this.state.page < resumeData.length - 1) {
                return arrow;
            } else {
                return null;
            }
        }

        const showBackArrow = () => {
            if (this.state.page > 0) {
                return backArrow;
            } else {
                return null;
            }
        }

        const index = this.state.page;

        const dutiesList = resumeData[index].duties;

        const displayList = dutiesList.map(duty => {

            return (
                <List dense>
                    <ListItem key={duty}>
                        <ListItemText primary={duty} />
                    </ListItem>
                </List>
            )
        })

        const screenSize = window.screen.availWidth;

        const bigHeader = 
            <Typography variant="h2" align='center' gutterBottom>
                {resumeData[index].header}
            </Typography>

        const mobileHeader =
            <Typography variant="h4" align='center'  gutterBottom>
                {resumeData[index].header}
            </Typography>

        const showHeader = () => {
            if (screenSize > 321) {
                return bigHeader;
            } else {
                return mobileHeader;
            }
        }

        return (
            <div className={classes.root}>
                <Slide direction="up" in timeout={1000} >
                    <Paper className={classes.paper} elevation={6}>
                        <div className={classes.content}>
                            {showHeader()}
                            <Typography variant="body1" gutterBottom>
                                {resumeData[index].summary}
                            </Typography>
                            {displayList}
                        </div>
                        <div className={classes.buttonContainer}>
                            <Button
                                variant="outlined"
                                size="small"
                                color="secondary"
                                component={Link} to="/"
                                className={classes.button}

                            >
                                {`Home`}
                            </Button>
                            {showBackArrow()}
                            {showArrow()}
                        </div>
                    </Paper>
                </Slide>
            </div>
        );
    }
}

export default withStyles(styles)(ResumeMain);