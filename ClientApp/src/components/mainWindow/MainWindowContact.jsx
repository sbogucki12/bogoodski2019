import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import ContactFormMain from '../contactForm/ContactFormMain';

const styles = {
    root: {
        minHeight: 300,
        backgroundColor: "#e4ff54"
    }
};

function MainWindowContact(props) {
    const { classes } = props;

    return (
        <div className={classes.root}>
            <ContactFormMain />
        </div>
    );
}

export default withStyles(styles)(MainWindowContact);