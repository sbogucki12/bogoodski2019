import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import BlogPostTopBar from './BlogPostTopBar';
import MainContentTopBar from './MainContentTopBar';

const styles = theme => ({
    background: {
        minWidth: '100vw', 
        minHeight: '100vh',
        backgroundColor: theme.palette.background.default, 
        display: 'flex', 
        alignItems: 'center',         
        flexDirection: 'column'
    }, 
    mainContent: {
        width: '80%'
    }
});

function BlogPostLayout(props) {
    const { classes } = props;

    return (
        <div className={classes.background}>
            <BlogPostTopBar />
            <div className={classes.mainContent}>
                <MainContentTopBar />
            </div>
        </div>
    );
}

export default withStyles(styles)(BlogPostLayout);