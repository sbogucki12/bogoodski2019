import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import RunnerIcon from './RunnerIcon';
import './RunStyle.css';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import RunMoreInfo from './RunMoreInfo';

const styles = theme => ({
    root: {
        backgroundColor: 'white',
        minHeight: '100vh',
        minWidth: '100vw',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center', 
        flexDirection: 'column'
    },
    paperRoot: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
        minWidth: '80vw',
        minHeight: '80%', 
        marginTop: '15vh'
    },
    content: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%'
    },
    image: {
        maxHeight: '600px',
        marginTop: theme.spacing.unit * 5,
        marginBottom: theme.spacing.unit * 5,
        maxWidth: '290px',
        position: 'relative',
        //transform: 'rotate(90deg)'
    },
    contentMobile: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },
    paperRootMobile: {
        ...theme.mixins.gutters(),
        marginTop: "50%",
        paddingBottom: theme.spacing.unit * 2,
        maxWidth: '95vw',
        minHeight: '50%'
    },
    date: {
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        margin: theme.spacing.unit,
        paddingTop: theme.spacing.unit
    },
    button: {
        margin: theme.spacing.unit,
        marginTop: theme.spacing.unit * 3,
        marginBottom: theme.spacing.unit * 3
    }
});

class RunLogMain extends React.Component {
    constructor(props) {
        super(props);
        const screenWidth = window.screen.availWidth;
        if (screenWidth < 450) {
            this.state = {
                isMobile: true
                //image: ''
            }
        } else {
            this.state = {
                isMobile: false
                //image: ''
            }
        }
    }

    //componentDidMount() {
    //    fetch("/api/runlog/getimage")
    //        .then(response => {
    //            const reader = response.body.getReader();
    //            return new ReadableStream({
    //                start(controller) {
    //                    return pump();
    //                    function pump() {
    //                        return reader.read().then(({ done, value }) => {
    //                            // When no more data needs to be consumed, close the stream
    //                            if (done) {
    //                                controller.close();
    //                                return;
    //                            }
    //                            // Enqueue the next data chunk into our target stream
    //                            controller.enqueue(value);
    //                            return pump();
    //                        });
    //                    }
    //                }
    //            })
    //        })
    //        .then(stream => new Response(stream))
    //        .then(response => response.blob())
    //        .then(blob => URL.createObjectURL(blob))
    //        .then(url => {
    //            this.setState({
    //                image: url
    //            })
    //        })
    //        .catch(err => console.error(err));
    //}

    render() {
        const { classes } = this.props;
        const RunPic = `https://bogoodski.blob.core.windows.net/runlog/runpic.jpg`        

        const mobile =
            <div className={classes.root}>
                <Paper className={classes.paperRootMobile} elevation={6}>
                    <div className={classes.date}>
                        <Typography variant="h4" gutterBottom>
                            {`Feb. 13, 2019`}
                        </Typography>
                    </div>                    
                    <div className={classes.contentMobile}>
                        <span className="runnerAnimated">{RunnerIcon}</span>
                        <span><img src={RunPic} className={classes.image} alt="Run Pic" /></span>
                    </div>
                    <RunMoreInfo />
                </Paper>
                <Button
                    variant="contained"
                    color="secondary"
                    className={classes.button}
                    component={Link}
                    to="/"
                >
                    {`Home`}
                </Button>
            </div>

        const desktop =
            <div className={classes.root}>
                <Paper className={classes.paperRoot} elevation={6}>
                        <div className={classes.date}>
                        <Typography variant="h2" gutterBottom>
                            {`Feb. 13, 2019`}
                        </Typography>
                        </div>                    
                    <div className={classes.content}>
                        <span className="runnerAnimated">{RunnerIcon}</span>
                        <span><img src={RunPic} className={classes.image} alt="Run Pic" /></span>
                    </div>
                    <RunMoreInfo />
                </Paper>
                <Button
                    variant="contained"
                    color="secondary"
                    className={classes.button}
                    size="large"
                    component={Link}
                    to="/"
                >
                    {`Home`}
                </Button>
            </div>

        const isMobile = this.state.isMobile;

        return (
            isMobile ? mobile : desktop 
        );
    }
}

export default withStyles(styles)(RunLogMain);