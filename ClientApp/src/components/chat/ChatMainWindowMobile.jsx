import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import ChatBitmoji from './images/chatlogo.png';
import Icon from '@material-ui/core/Icon';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

const styles = theme => ({
    root: {
        minWidth: '95%',
        minHeight: '100%',
        backgroundColor: theme.palette.secondary.main,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: theme.palette.primary.main
    },
    chatBitmoji: {
        maxWidth: '225px',
        maxHeight: '40%',
        margin: theme.spacing.unit * 1,
        borderWidth: '1px',
        borderColor: theme.palette.primary.main,
        borderStyle: "solid",
        borderRadius: "15%"
    },
    arrowBox: {
        minHeight: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    icon: {
        textShadow: '2px 2px #000000',
        fontSize: '15vh',
        color: theme.palette.primary.main,
        margin: theme.spacing.unit
    },
    topBox: {
        maxWidth: '98%',
        backgroundColor: "#FFFFFF",
        boxShadow: `0 0 0 2px #000000, 0 0 0 4px #008811`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    bottomBox: {
        minWidth: '100%',
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

class ChatMainWindowMobile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOnline: ""
        }
    }

    componentDidMount() {
        fetch("http://localhost:62236/api/chat/isonline")
            .then(res => res.json())
            .then(data => data.isOnline)
            .then(onlineStatus => {
                this.setState({
                    isOnline: onlineStatus
                })
            })
            .catch(err => console.error(err));
    }

    render() {
        const { classes } = this.props;

        const isOnline = this.state.isOnline
        let styleColor;
        let not;
        let disabled;
        const green = "#00AA33";
        const red = "#AA3333";

        {console.log(isOnline)}
        if (isOnline === "yes") {
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
                <div className={classes.topBox}>
                    <Typography variant="caption" gutterBottom className={classes.text} align="center">
                        {`I am currently`}
                    </Typography>
                    <Typography variant="caption" gutterBottom className={classes.text} style={{ color: `${styleColor}` }} align="center">
                        {`${not} Online.`}
                    </Typography>
                    <Typography variant="caption" gutterBottom className={classes.text} align="center">
                        {`When I am, you can send me an instant message here.`}
                    </Typography>
                </div>
                <div className={classes.arrowBox}>
                    <Icon className={classes.icon}>
                        arrow_downward
                    </Icon>
                    <Icon className={classes.icon}>
                        arrow_downward
                    </Icon>
                </div>
                <div className={classes.bottomBox} >
                    <Button variant="outlined" color="primary" disabled={disabled} className={classes.button}>
                        {`Chat`}
                    </Button>
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(ChatMainWindowMobile);