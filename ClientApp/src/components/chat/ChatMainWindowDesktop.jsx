import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import ChatBitmoji from './images/chatlogo.png';
import Icon from '@material-ui/core/Icon';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

const styles = theme => ({
    root: {
        minWidth: '100%',
        minHeight: '100%',
        backgroundColor: theme.palette.secondary.main,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: theme.palette.primary.main
    },
    chatBitmoji: {
        maxWidth: '225px',
        maxHeight: '90%',
        margin: theme.spacing.unit * 1,
        borderWidth: '1px',
        borderColor: theme.palette.primary.main,
        borderStyle: "solid",
        borderRadius: "15%"
    },
    middleBox: {
        minHeight: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    icon: {
        textShadow: '2px 2px #000000',
        fontSize: '15vh',
        color: theme.palette.primary.main,
    },
    rightBox1: {
        minHeight: '100%',
        maxHeight: '100%',
        backgroundColor: "#FFFFFF",
        boxShadow: `0 0 0 2px #000000, 0 0 0 4px #008811`
    },
    rightBox2: {
        minHeight: '100%',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'column'
    },
    text: {
        color: '#000000',
        margin: theme.spacing.unit * 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        margin: theme.spacing.unit,
    },
});

class ChatMainWindowDesktop extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOnline: false
        }
    }

    render() {
        const { classes } = this.props;

        const isOnline = this.state.isOnline
        let styleColor;
        let not;
        let disabled;
        const green = "#00AA33";
        const red = "#AA3333";

        if (isOnline) {
            styleColor = green;
            not = '';
            disabled = false;
        } else {
            styleColor = red;
            not = 'NOT';
            disabled = true;
        }

        return (
            <div className={classes.root}>
                <img src={ChatBitmoji} alt="Greeting Bitmoji" className={classes.chatBitmoji} />
                <div className={classes.middleBox}>
                    <Icon className={classes.icon}>
                        arrow_right_alt
                    </Icon>
                </div>
                <div className={classes.rightBox1}>
                    <Typography variant="subtitle2" gutterBottom className={classes.text}>
                        {`I am currently`}
                    </Typography>
                    <Typography variant="subtitle2" gutterBottom className={classes.text} style={{ color: `${styleColor}` }}>
                        {`${not} Online.`}
                    </Typography>
                    <Typography variant="subtitle2" gutterBottom className={classes.text}>
                        {`When I am, you can send me an instant message here.`}
                    </Typography>
                </div>
                <div className={classes.middleBox}>
                    <Icon className={classes.icon}>
                        arrow_right_alt
                </Icon>
                </div>
                <div className={classes.rightBox2} >
                    <Button variant="outlined" color="primary" disabled={disabled} className={classes.button}>
                        {`Chat`}
                    </Button>
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(ChatMainWindowDesktop);