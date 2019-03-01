import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    mainContentTopBar: {
        display: 'flex',
        justifyContent: 'flex-start',
        marginTop: '2%',
        marginBottom: '2%'
    },
    dateBox: {
        backgroundColor: theme.palette.secondary.main,
        color: '#FFFFFF',
        fontStyle: 'italic',
        borderColor: '#000000',
        borderWidth: '1px',
        borderStyle: 'solid',
        padding: theme.spacing.unit
    }
});

function MainContentTopBar(props) {
    const { classes } = props;

    return (
        <div class={classes.mainContentTopBar}>
            <div className={classes.dateBox}>
                {`Feb. 28, 2019`}
            </div>
        </div>
    );
}

export default withStyles(styles)(MainContentTopBar);