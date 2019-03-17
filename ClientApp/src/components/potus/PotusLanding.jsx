import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import BackgroundFlag from './images/potusLandingBG.jpg';
import Button from '@material-ui/core/Button';
import { withRouter } from 'react-router-dom';

const arrayOfScreenText = [
    {
        "id": 0,
        "text1": "BoGoodSki",
        "text2": "2020",
        "text3": "", 
        "buttonText": "Learn More"
    },
    {
        "id": 1,
        "text1": "Spoiler:",
        "text2": "(there is no BoGoodSki 2020)",
        "text3": "😂",
        "buttonText": "Learn More"
    },
    {
        "id": 2,
        "text1": "",
        "text2": "But, let's pretend there was...",
        "text3": "",
        "buttonText": "BoGoodSki 2020"
    }
];

const styles = theme => ({
    root: {
        minWidth: '100vw',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#FFFFFF'
    },
    contentBox: {
        marginTop: '25vh',
        width: '70%',         
    },
    logoBox: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column', 
        minHeight: '100%'
    },
    logoText: {       
        textShadow: '2px 2px #008800'  
    },
    button: {
        margin: theme.spacing.unit,
    }
});

class PotusLanding extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isFlagBackground: true,
            screenNumber: 0
        }
    }

    handleLearnMore = () => {
        let screenNumber = this.state.screenNumber;
        let totalNumberOfScreens = arrayOfScreenText.length - 1;
        if (screenNumber >= totalNumberOfScreens) {
            this.setState({
                screenNumber: 0
            })
            this.props.history.push('/potus/home');
        } else {
            this.setState(prevState => ({
                screenNumber: prevState.screenNumber + 1
            }))
        }

        if (screenNumber === totalNumberOfScreens) {
            this.setState({
                isFlagBackground: true
            })
        } else {
            this.setState({
                isFlagBackground: false
            })
        }
    }

    render() {
        const { classes } = this.props;

        const isFlagBackground = this.state.isFlagBackground;

        let flagBackground = null;
        if (!isFlagBackground) {
            flagBackground = 'rgba(0,100,0,0.6)';
        } else {
            flagBackground = `linear-gradient(rgba(0,100,0,0.6),rgba(0,100,0,0.6)),url(${BackgroundFlag})`
        }

        let backgroundFont = `'Lobster', cursive`;
        let fontSize = '8vw';
        let contentBoxHeight = '400px';

        if (this.state.screenNumber !== 0) {
            backgroundFont = `'Roboto', sans-serif`;
            fontSize = '4vw';            
            contentBoxHeight = '400px'
        };

        const index = this.state.screenNumber;

        return (
            <div className={classes.root}>
                <div className={classes.contentBox}>
                    <div style={{ background: `${flagBackground}`, backgroundRepeat: 'no-repeat', backgroundSize: '100%', height: `${contentBoxHeight}` }}>
                        <div className={classes.logoBox} >
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
                <Button variant="outlined" color="secondary" className={classes.button} onClick={this.handleLearnMore}>
                    {arrayOfScreenText[index].buttonText}
                </Button>
            </div>
        );
    }
}

export default withRouter(withStyles(styles)(PotusLanding));