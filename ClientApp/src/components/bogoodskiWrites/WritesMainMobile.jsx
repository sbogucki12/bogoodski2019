import React from "react";
import { withStyles } from '@material-ui/core/styles';

const styles = ({
    root: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minWidth: '100vw',
        minHeight: '100vh',
        background: '#000000', 
        color: '#FFFFFF'
    },
});

const WritesMainMobile = props => {      
    const { classes } = props;
    const content =
        <div className={classes.root}>
            <p>
                {`Mobile`}
            </p>
            <button onClick={e => props.makeDesktop(e)}>
                {`Make Desktop`}
            </button>
    </div>;
    return content;
}

export default withStyles(styles)(WritesMainMobile);