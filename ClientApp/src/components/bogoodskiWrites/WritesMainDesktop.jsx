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

const WritesMainDesktop = props => {
    const { classes } = props;
    const content = (
        <div className={classes.root}>
            <p>
                {`Desktop`}
            </p>
            <button onClick={e => props.makeDefault(e)}>
                {`Make Default`}
            </button>
        </div>
    ); 
    return content;
}

export default withStyles(styles)(WritesMainDesktop);