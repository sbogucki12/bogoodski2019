import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
    root: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
        minWidth: '60%'
    }, 
    text: {
        color: "#FF0000"
    }
});


class PayForItLogo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           
        }
    }

    render() {
        const { classes } = this.props;   

        return (
            <Paper className={classes.root} elevation={6}>
                <div className={classes.text}>
                    {`HOW WILL WE PAY FOR IT??`}
                </div>
            </Paper>
        )
    }
}

export default withStyles(styles)(PayForItLogo);