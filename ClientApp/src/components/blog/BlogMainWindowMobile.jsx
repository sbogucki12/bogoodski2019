import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    root: {        
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        backgroundColor: "blue", 
        width: '100%'              
    }
});

class BlogMainWindowMobile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }        
    };
   
    render() {
        const { classes } = this.props;
                       

        return (
            <div className={classes.root}>
               
            </div>
        );
    }
}

export default withStyles(styles)(BlogMainWindowMobile);