import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import ContactFormMain from '../contactForm/ContactFormMain';

const styles = {
    root: {
        
       
    }
};

function MainWindowContact(props) {
    const { classes } = props;

    return (
        <div className={classes.root}>
            <ContactFormMain toggleContact={props.toggleContact} />
        </div>
    );
}

export default withStyles(styles)(MainWindowContact);