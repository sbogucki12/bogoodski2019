import React from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
    paperRoot: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
    },
    root: {
        minWidth: '100vw',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        margin: theme.spacing.unit,
    },
    input: {
        display: 'none',
    },
    image: {
        maxWidth: 200,
        maxHeight: 350
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit
    },
    formContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }
});

class RunUploader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            image: '',
            code: '',
            date: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
        this.handleDateSubmit = this.handleDateSubmit.bind(this);
        this.handleCodeChange = this.handleCodeChange.bind(this);
        this.fileInput = React.createRef();
    };


    //TO DO: Refactor these into one function:
    handleDateChange(e) {
        console.log(e.target.value)
        this.setState({
            date: e.target.value
        })
        e.preventDefault()
    };

    handleCodeChange(e) {
        this.setState({
            code: e.target.value
        })
        e.preventDefault();
    };

    handleChange(e) {
        const file = document.getElementById('contained-button-file').files[0];
        const reader = new FileReader();
        reader.onload = (e) => {
            const uploadedImage = new Image();
            uploadedImage.src = reader.result
            this.setState({
                image: uploadedImage.src
            });
        }
        reader.readAsDataURL(file);
    };

    handleSubmit(e) {
        const secret = this.state.code;        
        const formData = new FormData();        
        const fileField = document.getElementById('contained-button-file').files[0];
        formData.append('file', fileField);

        fetch('/api/run/postimage', {
            method: 'POST',
            headers: {
                'code': secret
            },
            body: formData
        })
            .then(response => {
                if (response.status === 200) {
                    alert(`Image Uploaded!`);
                }
                else {
                    alert('try a different password')
                }
            })
            .catch(error => {
                alert(`Error: ${error}`)
            })

        e.preventDefault();
    }

    handleDateSubmit(e) {
        const date = this.state.date;  
        const formData = new FormData();        
        formData.append('date', date);
        fetch('/api/run/postdate', {
            method: 'POST',            
            body: formData
        })
            .then(response => {
                if (response.status === 200) {
                    alert(`Date Accepted`);
                }
                else {
                    alert(`Date failed`)
                }
            })
            .catch(error => {
                alert(`Error: ${error}`)
            })

        e.preventDefault();
    }

    render() {
        const { classes } = this.props;
        const displayForm =
            <div className={classes.formContainer}>
                <form>
                    {`Code:`}
                    <TextField
                        id="standard-password-input"
                        label="Password"
                        className={classes.textField}
                        type="password"
                        autoComplete="current-password"
                        margin="normal"
                        value={this.state.code}
                        onChange={this.handleCodeChange}
                    />
                </form>
                <form>
                    {`Date:`}
                    <TextField
                        id="standard-name"
                        label="Date"
                        className={classes.textField}
                        margin="normal"
                        value={this.state.date}
                        onChange={this.handleDateChange}
                    />
                </form>
            </div>



        const image = this.state.image;
        const imageContent = this.state.image ?
            <React.Fragment>
                <img src={image} className={classes.image} alt="Run Pic" />
                <Button
                    variant="contained"
                    component="span"
                    className={classes.button}
                    onClick={this.handleSubmit}
                >
                    {`Submit`}
                </Button>
                <Button
                    variant="contained"
                    component="span"
                    className={classes.button}
                    onClick={this.handleDateSubmit}
                >
                    {`Submit Date`}
                </Button>
            </React.Fragment> : null;

        return (
            <div className={classes.root}>
                <Paper className={classes.paperRoot} elevation={1}>
                    {displayForm}
                    <form onSubmit={this.handleSubmit}>
                        <input
                            accept="image/*"
                            className={classes.input}
                            id="contained-button-file"
                            multiple
                            type="file"
                            onChange={this.handleChange}
                            ref={this.fileInput}
                        />

                        <label htmlFor="contained-button-file">
                            <Button
                                variant="contained"
                                component="span"
                                className={classes.button}                                
                            >
                                {`Browse`}
                            </Button>
                        </label>
                        {imageContent}
                    </form>
                </Paper>
            </div>
        );
    }
}

export default withStyles(styles)(RunUploader);