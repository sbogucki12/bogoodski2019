import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    background: {
        minWidth: '100%',
        minHeight: '100%'        
    },
    topBar: {
        marginTop: '18vh',
        minWidth: '100%',
        backgroundColor: '#FFC0CB',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    topBarLeftBox: {
        margin: theme.spacing.unit,
        padding: theme.spacing.unit,
        marginLeft: '5vw',
        background: 'rgba(0, 0, 0, 0.5)',
        color: '#FFFF00'
    }
});

function BlogPostTopBar(props) {
    const { classes } = props;

    return (
        <div className={classes.background}>
            <div className={classes.topBar}>
                <div className={classes.topBarLeftBox}>
                    {`Thoughts On...`}
                </div>
            </div>
        </div>
    );
}

export default withStyles(styles)(BlogPostTopBar);