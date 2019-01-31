import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import ContactButton from './ContactButton';
import localPath from '../../helpers/localPath';

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

const baseURI = localPath();

class ContactForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            email: "",
            subject: "",
            body: ""
        }
    }

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    onSubmit = () => {
        const validateEmail = (email) => {
            var re = /\S+@\S+\.\S+/;
            return re.test(email);
        }
       
        if (this.state.email === null || this.state.email === "") {
            return alert("Please enter email address!");
        };

        if (validateEmail(this.state.email) === false) {
            return alert("Please enter valid email address!");
        };

        fetch(`${baseURI}api/sendemail`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(this.state)
        })
            .then(response => response.json())
            .then(data => {
                console.log(`data is ${data}`);
                alert("Message Sent!");
                this.props.closeOnSend();
            })
            .catch(error => {
                console.log('error is', error);
                alert(`Message Failed! due to ${error}`);
            });
    }

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
                    value={this.state.body}
                    rows="4"
                    onChange={this.handleChange('body')}
                    className={classes.textField}
                    margin="normal"
                    variant="filled"
                />
                <ContactButton onSubmit={this.onSubmit} />
            </form>
        );
    }
}

export default withStyles(styles)(ContactForm);