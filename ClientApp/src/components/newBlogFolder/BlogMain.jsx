import React, { useState, useEffect } from 'react';
import PicOfMe from './images/picofme.jpg';
import DrumRoll from './images/drumroll.gif';
import RollerCoaster from './images/rollercoaster.png';
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

function BlogMain(props) {
    const { classes } = props;
    const data = useFetch('api/getblog?id=1');
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
                    <i>{`Apr. 27, 2019`}</i>
                </div>
                <div dangerouslySetInnerHTML={html} style={{ fontFamily: `font-family: 'Roboto', sans-serif` }} />
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                    <img src={PicOfMe} alt="Me" style={{ height: 400, width: 225 }} />
                    <p style={{ fontStyle: 'italic', fontSize: 10, textAlign: 'center' }}>
                        {`Unfortunately, for the poor soul at Trader Joe's, "How is your day?" was a loaded question.`}
                    </p>
                </div>
                <div dangerouslySetInnerHTML={htmlPart2} style={{ fontFamily: `font-family: 'Roboto', sans-serif` }} />
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <img src={DrumRoll} alt="Drum Roll" style={{ height: 225, width: 225, alignSelf: 'center' }} />
                </div>
                <div dangerouslySetInnerHTML={htmlPart3} style={{ fontFamily: `font-family: 'Roboto', sans-serif` }} />
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <img src={RollerCoaster} alt="Roller Coaster" style={{ height: 225, width: 225, alignSelf: 'center' }} />
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

export default withStyles(styles)(BlogMain);

