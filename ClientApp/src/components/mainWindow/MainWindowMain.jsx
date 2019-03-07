import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import MainWindowResume from './MainWindowResume';
import MainWindowRoux from './MainWindowRoux';
import MainWindowContact from './MainWindowContact';
import MainWindowBlog from './MainWindowBlog';
import Fab from '@material-ui/core/Fab';
import MessageIcon from '@material-ui/icons/MessageTwoTone';
import MainWindowRun from './MainWindowRun';
import MainWindowDating from './MainWindowDating';
import MainWindowChat from './MainWindowChat';

const screenSize = window.screen.availWidth;
let paddingTop; 
if (screenSize <= 320)  {
    paddingTop = '25vh';
} else if (screenSize > 320 && screenSize < 415) {
    paddingTop = '20vh';
} else {
    paddingTop = '10vh';
};

const styles = theme => ({
    background: {
        background: 'linear-gradient(#dcedc8 70%, #e4ff54)'       
    },
    root: {        
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
        display: 'flex',
        justifyContent: 'center', 
        flexDirection: 'column',
        marginLeft: '2%', 
        marginRight: '2%',
        paddingTop: paddingTop
    },
    fab: {
        margin: theme.spacing.unit *1,
        position: 'sticky',
        bottom: theme.spacing.unit * 2,
        right: theme.spacing.unit * 2,        
    },
    icon: {
        color: '#dcedc8'
    }
});

class MainWindowMain extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showContactBar: true
        }
    };

    toggleContact = () => {
        this.setState((prevState) => ({
            showContactBar: !prevState.showContactBar
        }))
    };

    render() {
        const { classes } = this.props;

        const isContactBar = this.state.showContactBar;

        const contactFab =
                <Fab color="secondary" size="small" aria-label="Add" className={classes.fab} onClick={this.toggleContact}>
                    <MessageIcon className={classes.icon} />
                </Fab >

        return (
            <div className={classes.background}>
                <div className={classes.root} >
                    <MainWindowResume />
                    <MainWindowChat />
                    <MainWindowBlog />
                    <MainWindowRun /> 
                    <MainWindowDating />
                    <MainWindowRoux /> 
                    {isContactBar ? <MainWindowContact toggleContact={this.toggleContact} /> : contactFab}
                </div>
            </div>

        );
    }
}

export default withStyles(styles)(MainWindowMain);