import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';

const styles = theme => ({
    root: {
        width: '100%',
        maxWidth: 360, 
        color: `#dcedc8`        
    },
    listContainer: {
        display: `flex`, 
        flexDirection: `column`, 
        justifyContent: `flex-start`
    }, 
    text: {
        margin: 0, 
        padding: 0, 
        fontFamily: `'Nova Flat', cursive`, 
        fontSize: `1.5vh`
    }
});

function BlogArchiveListMainWindow(props) {
    const blogList = [
        { "id": 6, "name": "Part 5.1: Staff Meeting", "date": "Feb. 18, 2019" },
        { "id": 5, "name": "Part 5: Blob Metadata", "date": "Feb. 15, 2019" },
        { "id": 4, "name": "Part 4: Blobs (Microsoft Azure)", "date": "Feb. 12, 2019" },
        { "id": 3, "name": "Part 3: CORS, Stream Readers", "date": "Feb. 5, 2019" },
        { "id": 2, "name": "Part 2: Styling, Routing", "date": "Feb. 4, 2019" },
        { "id": 1, "name": "Part 1: Source Control, Layout", "date": "Feb. 1, 2019" },
        { "id": 0, "name": "Part 0: Intro", "date": "Jan. 31, 2019" },        
    ]
    const { classes } = props;
    return (
        <div className={classes.root}>
            <List component="nav" dense>
                {blogList.map(blog => (
                    <ListItem button key={blog.id} className={classes.listContainer}>
                        <p className={classes.text}> 
                            {blog.name}
                        </p>
                        <p className={classes.text}>
                            {blog.date}  
                        </p>
                    </ListItem>)
                )}                
            </List>           
        </div>
    );
}

export default withStyles(styles)(BlogArchiveListMainWindow);