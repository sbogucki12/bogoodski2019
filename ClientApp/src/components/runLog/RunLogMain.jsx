﻿import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import RunnerIcon from './RunnerIcon';
import './RunStyle.css';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import RunMoreInfo from './RunMoreInfo';
import RunArchiveListPrimary from './archive/RunArchiveListPrimary';
import igicon from '../appbar/socialImages/igicon.png'

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
    topPaper: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
        width: '100%',
        marginBottom: '2%'
    },
    titleBox: {
        border: `2px solid ${theme.palette.primary.main}`,
        borderRadius: 5,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    logoStyle: {
        color: theme.palette.secondary.main,
        fontFamily: `'Bungee Inline', cursive`,
        textShadow: `2px 2px ${theme.palette.primary.main}`,
        marginTop: '1%'
    },
    linkStyle: {
        textDecoration: 'none',
        color: '#000000',
        textShadow: `1px 1px ${theme.palette.primary.main}`
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
        maxWidth: '270px',
        position: 'relative',
        border: `5px solid ${theme.palette.primary.main}`,
        borderRadius: 5
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
                isMobile: true,
                date: ''
            }
        } else {
            this.state = {
                isMobile: false,
                date: ''
            }
        }
    }

    componentDidMount() {
        fetch("/api/run/getdate")
            .then(response => {
                response.text().then(text => {
                    this.setState({
                        date: text
                    })
                })
            })
            .catch(err => console.error(err));
    }

    render() {
        const { classes } = this.props;
        const RunPic = `https://bogoodski.blob.core.windows.net/runlog/runpic.jpg`
        const date = this.state.date;

        //Removes animation if Android:
        let runnerIconStyle = "runnerAnimated";
        const deviceString = navigator.userAgent;
        if (deviceString.includes("Android") && !deviceString.includes("Mobile Safari")) {
            runnerIconStyle = "runnerIcon";
        };

        const mobile =
            <div className={classes.root}>
                <Paper className={classes.paperRootMobile} elevation={6}>
                    <Paper className={classes.topPaper} elevation={6}>
                        <div className={classes.titleBox}>
                            <Typography variant="h2" className={classes.logoStyle} style={{ fontSize: '15vw', textAlign: 'center' }} gutterBottom>
                                {`Run Log`}
                            </Typography>
                            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginBottom: '1%' }}>
                                <span><img src={igicon} alt="BoGoodSki Runs on Instagram" style={{ height: 28, width: 28 }} /></span>
                                <span><a href="https://www.instagram.com/bogoodskiruns/" target="_blank" rel="noreferrer noopener" className={classes.linkStyle}>{` -BoGoodSkiRuns`}</a></span>
                            </div>
                        </div>
                    </Paper>
                    <Paper className={classes.topPaper} elevation={6}>
                        <div className={classes.date}>
                            <Typography variant="h4" gutterBottom>
                                {date}
                            </Typography>
                        </div>
                        <div className={classes.contentMobile}>
                            <span className={runnerIconStyle}>{RunnerIcon}</span>
                            <span><img src={RunPic} className={classes.image} alt="Run Pic" /></span>
                        </div>
                    </Paper>
                    <RunArchiveListPrimary />
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
                    <Paper className={classes.topPaper} elevation={6}>
                        <div className={classes.titleBox}>
                            <Typography variant="h2" className={classes.logoStyle} gutterBottom>
                                {`Run Log`}
                            </Typography>
                            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginBottom: '1%' }}>
                                <span><img src={igicon} alt="BoGoodSki Runs on Instagram" style={{ height: 28, width: 28 }} /></span>
                                <span><a href="https://www.instagram.com/bogoodskiruns/" target="_blank" rel="noreferrer noopener" className={classes.linkStyle}>{` -BoGoodSkiRuns`}</a></span>
                            </div>
                        </div>
                    </Paper>
                    <Paper className={classes.topPaper} elevation={6}>
                        <div className={classes.date}>
                            <Typography variant="h2" gutterBottom>
                                {date}
                            </Typography>
                        </div>
                        <div className={classes.content}>
                            <span className="runnerAnimated">{RunnerIcon}</span>
                            <span><img src={RunPic} className={classes.image} alt="Run Pic" /></span>
                        </div>
                    </Paper>
                    <RunArchiveListPrimary />
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
            <div>
                {isMobile ? mobile : desktop}
            </div>
        );
    }
}

export default withStyles(styles)(RunLogMain);