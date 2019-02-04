import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import RunnerIcon from './RunnerIcon';
import './RunStyle.css';
import RunPic from './images/runfeb32019.jpg';

const styles = theme => ({
    root: {
        backgroundColor: 'white',
        minHeight: '100vh',
        minWidth: '100vw',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    paperRoot: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,

        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minWidth: '80vw',
        minHeight: '80%'
    },
    content: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        width: '80%'
    },
    image: {
        maxHeight: '600px',
        marginTop: theme.spacing.unit * 5,
        marginBottom: theme.spacing.unit * 5,
        //height: '90%',
        maxWidth: '290px',
        position: 'relative',
        transform: 'rotate(90deg)'
    },
    contentMobile: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '80%', 
    },
    paperRootMobile: {
        ...theme.mixins.gutters(),
        marginTop: "50%",
        paddingBottom: theme.spacing.unit * 2,

        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        //minWidth: '80vw',
        maxWidth: '95vw',
        minHeight: '50%'
    },
});

class RunLogMain extends React.Component {
    constructor(props) {
        super(props);
        const screenWidth = window.screen.availWidth;
        if (screenWidth < 450) {
            this.state = {
                isMobile: true
            }
        } else {
            this.state = {
                isMobile: false
            }
        }
    }

    render() {
        const { classes } = this.props;
        const mobile =
            <div className={classes.root}>
                <Paper className={classes.paperRootMobile} elevation={6}>
                    <div className={classes.contentMobile}>
                        <span className="runnerAnimated">{RunnerIcon}</span>
                        <span><img src={RunPic} className={classes.image} /></span>
                    </div>
                </Paper>
            </div>

        const desktop =
            <div className={classes.root}>
                <Paper className={classes.paperRoot} elevation={6}>
                    <div className={classes.content}>
                        <span className="runnerAnimated">{RunnerIcon}</span>
                        <span><img src={RunPic} className={classes.image} /></span>
                    </div>
                </Paper>
            </div>

        const isMobile = this.state.isMobile;




        return (
            isMobile ? mobile : desktop
        );
    }
}

export default withStyles(styles)(RunLogMain);