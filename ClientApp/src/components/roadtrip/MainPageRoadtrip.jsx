import React from 'react';
import { withStyles } from '@material-ui/styles';

const styles = {
    root: {
        display: 'flex', 
        justifyContent: 'center',
        alignItems: 'center', 
        width: '100vw'
    },
};

const MainPageRoadtrip = props => {
    const { classes } = props;


    const content =
        <div className={classes.root}>
            <h1 style={{ marginTop: '17vh' }}>{`Test`}</h1>
        </div>;

    return content; 
};

export default withStyles(styles)(MainPageRoadtrip); 