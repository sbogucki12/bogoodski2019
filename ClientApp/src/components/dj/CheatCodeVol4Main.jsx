import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import LeftArrow from '@material-ui/icons/NavigateBeforeSharp';
import CheatCodeVol4Cover from './images/cheatcodevol4soundcloud.jpg';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const dummyData = [
    { id: 0, artist: 'joe', title: 'joe song', link: 'link' },
    { id: 1, artist: 'joe', title: 'joe song', link: 'link' },
    { id: 2, artist: 'joe', title: 'joe song', link: 'link' },
    { id: 3, artist: 'joe', title: 'joe song', link: 'link' },
]

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
        fontSize: '4vw',
        marginRight: '1%',
        color: 'rgb(223, 174, 118)',
        
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
        fontSize: '5vw', 
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

function CheatCodeVol4Main(props) {
    const classes = useStyles();

    const [showTrackList, setShowTrackList] = useState(false);

    const trackRows = dummyData.map(track =>
        <ListItem key={track.id} style={{ display: 'flex', flexDirection: 'column' }}>
            <ListItemText primary={track.title} dense />
            <React.Fragment>
                {track.artist}
                <br />
                {track.link}
            </React.Fragment>
            
                </ListItem>);

const trackList =
        <div>
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
            <div style={{display: 'flex', flexDirection: 'row', marginTop: '30vh' }}>
                <span className={classes.bogoodskiStyle}>{`BoGoodSki `}</span><span style={{ display:'flex', alignItems: 'flex-end', paddingBottom: '5%' }}><i>{`presents...`}</i></span>
            </div>
            <div>
                <span className={classes.titleStyle}>{`Cheat Code Radio Vol. 4`}</span>
            </div>
            <p><img src={CheatCodeVol4Cover} className={classes.imageStyle} alt="Album Cover Art"  title= "Album Cover Art" /></p>            
            <p style={{width: '80%' }}>
                <iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/654152738&color=%23216631&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
            </p>  
            <Button variant="outlined" color="primary" className={classes.button} onClick={e => handleTrackListButton(e)}>
                {`Tracklist`}
            </Button>
            {isTrackListDisplayed ? trackList : null}
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                <span>
                    <Fab color="secondary" aria-label="Back to Volume Three" className={classes.button} size="small" >
                        <LeftArrow />
                    </Fab>
                    {`Vol. 3`}
                </span>
            </div>
            <hr style={{width: '90%', marginBottom: '1%', marginTop: '1%' }} />
            <Button variant="contained" color="secondary" className={classes.button} >
                {`Home`}
            </Button>
        </div>;


    return content; 
}

export default CheatCodeVol4Main;
