import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import BackgroundFlag from './images/potusLandingBG.jpg';

const styles = theme => ({
    root: {
        minWidth: '100vw',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF'
    },
    contentBox: {
        marginTop: '25vh',
        width: '70%',
        background: `linear-gradient(rgba(0,100,0,0.6),rgba(0,100,0,0.6)),url(${BackgroundFlag})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100%',
        minHeight: '400px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textShadow: '2px 2px #008800',
        marginBottom: '5%'
    },
    logoBox: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
    },
    logoText: {
        maxWidth: '100%'
    }
});

class PotusLanding extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isFlagBackground: false,
            screenNumber: 2
        }
    }

    render() {
        const { classes } = this.props;

        const isFlagBackground = this.state.isFlagBackground;

        let noFlagBackground = null;
        if (!isFlagBackground) {
            noFlagBackground = 'rgba(0,100,0,0.6)';
        };

        let backgroundFont = `'Lobster', cursive`;
        let fontSize = '10vw';
        let textMarginTop = '9%';

        if (this.state.screenNumber != 0) {
            backgroundFont = `'Roboto', sans-serif`;
            fontSize = '4vw';
            textMarginTop = 0;
        };

        const arrayOfScreenText = [
            {
                "id": 0,
                "text1": "BoGoodSki",
                "text2": "2020",
                "text3": ""
            },
            {
                "id": 1,
                "text1": "Spoiler:",
                "text2": "(there is no BoGoodSki 2020)",
                "text3": "😂"
            },
            {
                "id": 2,
                "text1": "yet...",
                "text2": "",
                "text3": ""
            }
        ];

        const index = this.state.screenNumber;

        return (
            <div className={classes.root}>
                <div className={classes.contentBox} style={{ background: `${noFlagBackground}` }}>
                    <div className={classes.logoBox} style={{ marginTop: `${textMarginTop}` }}>
                        <div className={classes.logoText} style={{ color: '#FFFFFF', fontFamily: `${backgroundFont}`, fontSize: `${fontSize}` }}>
                            {arrayOfScreenText[index].text1}
                        </div>
                        <div className={classes.logoText} style={{ color: '#FFFFFF', fontFamily: `${backgroundFont}`, fontSize: `${fontSize}` }}>
                            {arrayOfScreenText[index].text2}
                        </div>
                        <div className={classes.logoText} style={{ color: '#FFFFFF', fontFamily: `${backgroundFont}`, fontSize: `${fontSize}` }}>
                            {arrayOfScreenText[index].text3}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(PotusLanding);