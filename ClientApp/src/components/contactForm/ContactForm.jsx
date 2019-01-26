import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import ContactButton from './ContactButton';

const styles = theme => ({
    container: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column', 
        minWidth: '80vw',
        padding: theme.spacing.unit * 2
    },
    textField: {        
        //marginRight: theme.spacing.unit,
        maxWidth: '80%',
        minWidth: '60%',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: theme.spacing.unit,
        marginBottom: theme.spacing.unit
    }
});

class ContactForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            email: '',
            subject: '',
            body: ''
        }
    }

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    render() {
        const { classes } = this.props;

        return (
            
            <form className={classes.container} noValidate autoComplete="off">
                <TextField
                    id="standard-name"
                    label="Name"
                    className={classes.textField}
                    value={this.state.name}
                    onChange={this.handleChange('name')}
                    margin="normal"
                    variant="filled"
                />
                <TextField
                    required
                    id="standard-required"
                    label="Email"
                    defaultValue="you@email.com"
                    className={classes.textField}
                    value={this.state.email}
                    onChange={this.handleChange('email')}
                    margin="normal"
                    variant="filled"
                />
                <TextField
                    id="standard-multiline-flexible"
                    label="Subject"
                    multiline
                    rowsMax="4"
                    value={this.state.subject}
                    onChange={this.handleChange('subject')}
                    className={classes.textField}
                    margin="normal"
                    variant="filled"
                />
                <TextField
                    id="standard-multiline-static"
                    label="Enter Message Here"
                    multiline
                    placeholder="Message"
                    rows="4"                    
                    onChange={this.handleChange('body')}
                    className={classes.textField}
                    margin="normal"
                    variant="filled"
                />
                <ContactButton /> 
                </form>
           
        );
    }
}

export default withStyles(styles)(ContactForm);