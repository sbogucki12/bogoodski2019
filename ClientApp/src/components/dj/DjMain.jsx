import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import cheatCodeVol1Cover from './images/CheatCodeVol1Cover.jpg';
import Button from '@material-ui/core/Button';
import CheatCodeVol1 from './CheatCodeVol1';
import { Link } from 'react-router-dom';

const styles = theme => ({
    root: {
        width: '100vw',
        minHeight: '100vh',
        backgroundColor: theme.palette.secondary.main,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    },
    paperRoot: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
        minWidth: '70%',
        marginTop: '25vh',
        marginBottom: '2%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    },
    topBox: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    titleBox: {
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        flexDirection: 'row',
        fontFamily: `'Nova Flat', cursive`,
        fontSize: '5vw',
        textShadow: `2px 2px #BB00AA`,
        color: "#00FF00",
        marginTop: 0,
        paddingTop: 0
    },
    bogoodskiStyle: {
        color: '#AA00AA',
        fontFamily: `'Bungee Inline', cursive`,
        fontSize: '4vw',
        marginBottom: 0,
        paddingBottom: 0,
        alignItems: 'flex-end'
    },
    imgStyle: {
        width: '300px',
        height: '450px',
        marginTop: '2%',
        marginBottom: '2%'
    },
    button: {
        margin: theme.spacing.unit,
    },
});

class DjMain extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showTracklist: false
        }
    }

    toggleTrackList = () => {
        this.setState(prevState => ({
            showTracklist: !prevState.showTracklist
        }))
    };

    render() {
        const { classes } = this.props;
        let showTracklist = this.state.showTracklist;
        let trackList = showTracklist ? <CheatCodeVol1 /> : null;

        return (
            <div className={classes.root}>
                <Paper className={classes.paperRoot} elevation={6}>
                    <div className={classes.topBox}>
                        <span className={classes.bogoodskiStyle}>
                            {`BoGoodSki `}
                        </span>
                        {` `}
                        <span style={{ fontStyle: 'italic', marginLeft: '2%', fontSize: '2vw' }}>
                            {` presents...`}
                        </span>
                    </div>
                    <div className={classes.titleBox}>
                        {`Cheat Code Radio. Vol. 1`}
                    </div>
                    <img src={cheatCodeVol1Cover} alt="Cheat Code Radio Volume 1" className={classes.imgStyle} />
                    <iframe
                        style={{ marginBottom: '2%' }}
                        title="Cheat Code Radio Volume 1"
                        width="100%"
                        height="166"
                        scrolling="no"
                        frameBorder="no"
                        allow="autoplay"
                        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/602485644&color=%2384569a&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true">
                    </iframe>
                    <Button
                        variant="outlined"
                        color="secondary"
                        className={classes.button}
                        onClick={this.toggleTrackList}
                    >
                        {`Tracklist`}
                    </Button>
                    {trackList}
                    <a
                        href="https://soundcloud.com/sbogucki12"
                        target="_blank"
                        style={{ textDecoration: 'none' }}
                    >
                        <Button
                            variant="contained"
                            color="inherit"
                            className={classes.button}
                            style={
                                {
                                    background: 'linear-gradient(45deg, #00FF77 30%, #A7569a 90%)',
                                    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
                                    color: '#FFFFFF',
                                    borderRadius: 3,
                                    border: 0
                                }
                            }
                        >
                            {`More Music`}
                        </Button>
                    </a>
                </Paper>
                <Button
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    style={{ marginBottom: '2%' }}
                    component={Link}
                    to="/"
                >
                    {`Home`}
                </Button>
            </div>
        );
    }
}

export default withStyles(styles)(DjMain);