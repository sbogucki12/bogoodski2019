import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import MainWindowResume from './MainWindowResume';
import MainWindowRoux from './MainWindowRoux';
import MainWindowContact from './MainWindowContact';

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

        return (
            <div className={classes.root} >
                <MainWindowResume />
                <MainWindowRoux />
                {isContactBar ? <MainWindowContact toggleContact={this.toggleContact} /> : null}
            </div>
        );
    }
}

export default withStyles(styles)(MainWindowMain);