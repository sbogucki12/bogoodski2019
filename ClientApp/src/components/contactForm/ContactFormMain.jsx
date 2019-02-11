import React from 'react';
import ContactDialog from './ContactDialog';
import ContactBar from './ContactBar';

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
        const isDialogOpen = this.state.openDialog;

        return (
            <div>
                <ContactBar toggleDialog={this.toggleDialog} toggleContact={this.props.toggleContact} />
                {isDialogOpen ? <ContactDialog toggleDialog={this.toggleDialog} open={this.state.openDialog} /> : null}
            </div>
            )
    }
}

export default ContactFormMain;