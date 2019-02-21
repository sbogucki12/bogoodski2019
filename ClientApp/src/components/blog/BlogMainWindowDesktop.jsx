import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import CurrentPostMainWindowDesktop from './CurrentPostMainWindowDesktop';
import BlogArchiveListMainWindow from './BlogArchiveListMainWindow';

const styles = theme => ({
    root: {        
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        backgroundColor: "black", 
        width: '100%'              
    },
    content: {
        border: `1px solid #1b5e20`, 
        borderRadius: `5px`,
        width: '90%',        
        marginTop: theme.spacing.unit * 2,
        marginBottom: theme.spacing.unit * 2, 
        display: 'flex', 
        justifyContent: `center`,
        alignItems: `center`
    }, 
    title: {
        height: `50%`,
        fontFamily: `'Nova Flat', cursive`, 
        margin: theme.spacing.unit * 2
    },
    currentPost: {
        height: `90%`
    },
    archiveList: {
        height: `75%`
    }
});

class BlogMainWindowDesktop extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }        
    };
   
    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <div className={classes.content}>
                    <h2 className={classes.title}>
                        {`My Blog`}
                    </h2>
                    <div className={classes.currentPost}>
                        <CurrentPostMainWindowDesktop />
                    </div>
                    <div className={classes.archiveList}>
                        <BlogArchiveListMainWindow />
                    </div>
                </div>               
            </div>
        );
    }
}

export default withStyles(styles)(BlogMainWindowDesktop);