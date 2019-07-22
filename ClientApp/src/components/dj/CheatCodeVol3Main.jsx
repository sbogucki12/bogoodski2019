import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import LeftArrow from '@material-ui/icons/NavigateBeforeSharp';
import RightArrow from '@material-ui/icons/NavigateNextSharp';
import CheatCodeVol3Cover from './images/cheatcodevol3cover.jpg';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from 'react-router-dom';
import * as vol3TrackListData from './cheatCode3TrackData';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100vw',
        backgroundColor: '#000000',
        color: '#FFFFFF',
        paddingBottom: '2%'
    },
    bogoodskiStyle: {
        fontFamily: `'Bungee Inline', cursive`,
        fontSize: '5vw',
        marginRight: '1%',
        color: 'rgb(223, 174, 118)'
    },
    imageStyle:
    {
        width: '270px',
        height: '400px',
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: theme.palette.primary.main
    },
    titleStyle: {
        fontFamily: `'Nova Flat', cursive`,
        fontSize: '6vw',
        color: theme.palette.secondary.main
    },
    listStyle:
    {
        minWidth: '60vw',
        borderStyle: 'solid',
        borderWidth: '1px',
        borderRadius: '5px',
        borderColor: theme.palette.secondary.main,
        marginTop: '3%',
        marginBottom: '3%'
    },
    button: {
        margin: theme.spacing(1),
    }
}));

function CheatCodeVol3Main(props) {
    const classes = useStyles();

    const [trackListData, setTrackListData] = useState(vol3TrackListData.default);

    {/*useEffect(() => {
        fetch('/api/getmusic?name=cheatcodevol2')
            .then(response => {
                return response.json();
            }).then(
                myJson => setTrackListData(myJson)
            );
    })*/}

    const [showTrackList, setShowTrackList] = useState(false);

    const trackRows = trackListData.map(track =>
        <ListItem key={track.Id} style={{ display: 'flex', flexDirection: 'column' }}>
            <React.Fragment>{track.Id + 1}</React.Fragment>
            <ListItemText primary={track.trackTitle} style={{ textAlign: 'center' }} dense />
            <React.Fragment>
                <i>{track.artist}</i>
                <br />
                <a href={track.trackLink} target="_blank" rel="noreferrer noopener" alt="Link to track on Beatport" title="Link to track on Beatport">{`Click to Purchase (Beatport)`}</a>
            </React.Fragment>
        </ListItem>);

    const trackList =
        <div style={{ maxWidth: '95%' }}>
            <List className={classes.listStyle} dense>
                {trackRows}
            </List>
        </div>;

    const isTrackListDisplayed = showTrackList;

    const handleTrackListButton = e => {
        e.preventDefault();
        const currentTrackListStatus = showTrackList;

        if (currentTrackListStatus === true) {
            setShowTrackList(false)
        } else {
            setShowTrackList(true)
        }
    }

    const content =
        <div className={classes.root}>
            <div style={{ display: 'flex', flexDirection: 'row', marginTop: '30vh' }}>
                <span className={classes.bogoodskiStyle}>{`BoGoodSki `}</span><span style={{ display: 'flex', alignItems: 'flex-end', paddingBottom: '5%' }}><i>{`presents...`}</i></span>
            </div>
            <div>
                <span className={classes.titleStyle}>{`Cheat Code Radio Vol. 3`}</span>
            </div>
            <p><img src={CheatCodeVol3Cover} className={classes.imageStyle} alt="Album Cover Art" title="Album Cover Art" /></p>
            <p style={{ width: '80%' }}>
                <iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/650844842&color=%23216631&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
            </p>
            <Button variant="outlined" color="primary" className={classes.button} onClick={e => handleTrackListButton(e)}>
                {`Tracklist`}
            </Button>
            {isTrackListDisplayed ? trackList : null}

            <div style={{ display: 'flex', flexDirection: 'row', marginTop: '2%' }}>
                <span>
                    <Fab color="secondary" aria-label="Back to Volume Two" className={classes.button} size="small" component={Link} to="/dj/djmain">
                        <LeftArrow />
                    </Fab>
                    {`Vol. 2`}{` | `}
                    {`Vol. 4`}
                    <Fab color="secondary" aria-label="To Volume Four" className={classes.button} size="small" component={Link} to="/dj/cheatcodevol4/main">
                        <RightArrow />
                    </Fab>
                </span>
            </div>
            <hr style={{ width: '90%', marginBottom: '1%', marginTop: '1%' }} />
            <Button variant="contained" color="secondary" size="small" component={Link} to="/" className={classes.button} >
                {`Home`}
            </Button>
        </div>;

    return content;
}

export default CheatCodeVol3Main;