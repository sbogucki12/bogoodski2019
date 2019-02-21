import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { blogList } from './blogList';

const styles = {
    root: {
        width: '100%',
        maxWidth: 360, 
        color: `#dcedc8`        
    },
    listContainer: {
        display: `flex`, 
        flexDirection: `column`, 
        justifyContent: `flex-start`,
        textDecoration: `none`,
        color: `#dcedc8` 
    }, 
    text: {
        margin: 0, 
        padding: 0, 
        fontFamily: `'Nova Flat', cursive`, 
        fontSize: `1.5vh`
    }
};

function BlogArchiveListMainWindow(props) {
    const { classes } = props;
    return (
        <div className={classes.root}>
            <List component="nav" dense>
                {blogList.map(blog => (
                    <ListItem button key={blog.id} >
                        <a
                            href={blog.url}
                            target="_blank"
                            className={classes.listContainer}
                        >
                            <p className={classes.text}> 
                                {blog.name}
                            </p>
                            <p className={classes.text}>
                                {blog.date}  
                            </p>
                        </a>
                    </ListItem>)
                )}                
            </List>           
        </div>
    );
}

export default withStyles(styles)(BlogArchiveListMainWindow);