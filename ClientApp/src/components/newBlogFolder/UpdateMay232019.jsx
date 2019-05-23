import React, { useState, useEffect } from 'react';
import RunArchive from './images/runArchive.JPG';
import ToDoApp from './images/2DoApp.JPG';
import TicTacToe from './images/tictactoe.gif';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import { Link } from 'react-router-dom';

const styles = theme => ({
    paperRoot: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
        width: '90%',
        marginTop: '25vh'
    },
    button: {
        margin: theme.spacing.unit * 2,
    }
});

function useFetch(url) {
    const [data, setData] = useState([]);

    async function fetchUrl() {
        const response = await fetch(url);
        const json = await response.json();
        setData(json);
    }
    useEffect(() => {
        fetchUrl();
    }, []);

    return [data];
}

function UpdateMay232019(props) {
    const { classes } = props;
    const data = useFetch('api/getblog?id=0');
    let body = data[0].blogContent;
    let bodyPart2 = data[0].blogContentPart2;
    let bodyPart3 = data[0].blogContentPart3;
    let bodyPart4 = data[0].blogContentPart4;

    const html = { __html: body };
    const htmlPart2 = { __html: bodyPart2 };
    const htmlPart3 = { __html: bodyPart3 };
    const htmlPart4 = { __html: bodyPart4 };

    const title = data[0].blogTitle;

    return (
        <div style={{ width: '100vw', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
            <Paper className={classes.paperRoot} elevation={6}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: `'Bungee Inline', cursive`, fontSize: '3vw', textAlign: 'center' }}>
                    <b>{title}</b>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: `font-family: 'Roboto', sans-serif`, fontSize: 10, textAlign: 'center' }}>
                    <i>{`May 23, 2019`}</i>
                </div>
                <div dangerouslySetInnerHTML={html} style={{ fontFamily: `font-family: 'Roboto', sans-serif` }} />
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                    <img src={RunArchive} alt="Run Archive" style={{ height: 275, width: 285 }} />
                    <p style={{ fontStyle: 'italic', fontSize: 10, textAlign: 'center' }}>
                        {`New Run Archive`}
                    </p>
                </div>
                <div dangerouslySetInnerHTML={htmlPart2} style={{ fontFamily: `font-family: 'Roboto', sans-serif` }} />
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                    <img src={ToDoApp} alt="Two Do App" style={{ height: 225, width: 225, alignSelf: 'center' }} />
                    <p style={{ fontStyle: 'italic', fontSize: 10, textAlign: 'center' }}>
                        {`2Do App`}
                    </p>
                </div>
                <div dangerouslySetInnerHTML={htmlPart3} style={{ fontFamily: `font-family: 'Roboto', sans-serif` }} />
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                    <img src={TicTacToe} alt="Roller Coaster" style={{ height: 275, width: 285, alignSelf: 'center' }} />
                    <p style={{ fontStyle: 'italic', fontSize: 10, textAlign: 'center' }}>
                        {`Tic Tac Toe`}
                    </p>
                </div>
                <div dangerouslySetInnerHTML={htmlPart4} style={{ fontFamily: `font-family: 'Roboto', sans-serif` }} />
            </Paper>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Button variant="contained" color="primary" className={classes.button} component={Link} to="/">
                    {`Home`}
                </Button>
            </div>
        </div>
    );
}

export default withStyles(styles)(UpdateMay232019);

