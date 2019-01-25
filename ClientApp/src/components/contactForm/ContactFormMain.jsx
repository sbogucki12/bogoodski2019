import React, { Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';
import ContactDialog from './ContactDialog';
import ContactBar from './ContactBar';

const styles = theme => ({

});


class ContactFormMain extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            openDialog: false
        }
    };

    toggleDialog = () => {        
        this.setState((prevState) => ({
            openDialog: !prevState.openDialog
        }))
    };

    render() {
        const { classes } = this.props;

        const isDialogOpen = this.state.openDialog;

        return (
            <div>
                <ContactBar toggleDialog={this.toggleDialog} toggleContact={this.props.toggleContact} />
                {isDialogOpen ? <ContactDialog toggleDialog={this.toggleDialog} open={this.state.openDialog} /> : null}
            </div>
            )
    }
}

export default withStyles(styles)(ContactFormMain);