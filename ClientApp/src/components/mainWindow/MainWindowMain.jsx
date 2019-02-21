import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import MainWindowResume from './MainWindowResume';
import MainWindowRoux from './MainWindowRoux';
import MainWindowContact from './MainWindowContact';
import MainWindowBlog from './MainWindowBlog';
import Fab from '@material-ui/core/Fab';
import MessageIcon from '@material-ui/icons/MessageTwoTone';
import MainWindowRun from './MainWindowRun';

const screenSize = window.screen.availWidth;
let marginTop; 
if (screenSize <= 320)  {
    marginTop = '25vh';
} else if (screenSize > 320 && screenSize < 415) {
    marginTop = '20vh';
} else {
    marginTop = '10vh';
};

const styles = theme => ({
    root: {        
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
        display: 'flex',
        justifyContent: 'center', 
        flexDirection: 'column', 
        marginTop: marginTop,  
        marginLeft: `2%`, 
        marginRight: `2%`
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
            <div className={classes.root} >
                <MainWindowResume />
                <MainWindowBlog />
                <MainWindowRun /> 
                <MainWindowRoux /> 
                {isContactBar ? <MainWindowContact toggleContact={this.toggleContact} /> : contactFab}
            </div>
        );
    }
}

export default withStyles(styles)(MainWindowMain);