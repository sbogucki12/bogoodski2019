import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import RouxPics from './images/rouxPics';

const styles = theme => ({
    root: {
        
    }, 
    image: {
        opacity: '1.0',
        width: '100%',
        minHeight: '100%'
    },
    button: {
        margin: theme.spacing.unit * 2,
        padding: theme.spacing.unit
    }
});

class RouxDialog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: true,
        }
    }

    toggleDialog = () => {
        this.setState((prevState) => ({
            open: !prevState.open
        }));
    };

    render() {
        const pic = RouxPics[this.props.image].url;
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <Dialog
                    open={this.state.open}
                    onClose={this.toggleDialog}                     
                    fullWidth
                >
                    <img src={pic} alt="Roux" className={classes.image} />
                    <Button
                        onClick={this.props.closeDialog}
                        color="secondary"
                        className={classes.button}
                        variant="contained"
                        autoFocus>
                        Close
                    </Button>
                </Dialog>
            </div>
        );
    }
}

export default withStyles(styles)(RouxDialog);