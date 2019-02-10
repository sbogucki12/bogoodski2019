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
    }
});

class RunUploader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            image: '',
            code: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCodeChange = this.handleCodeChange.bind(this);             
        this.fileInput = React.createRef();
        
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


        console.log(`this is image ${this.state.image}`)
    };

    handleSubmit(e) {
        console.log(`handlesubmit triggered`);
        const secret = this.state.code;
        const formData = new FormData();
        const fileField = document.getElementById('contained-button-file').files[0];
        formData.append('file', fileField);        
        fetch('/api/run/postimage', {
            method: 'POST',
            body: formData, 
            headers: {
                code: secret
            }
        })
            //.then(response => response.json())
            //.catch(error => alert(error + " try a different password"))
            .then(response => {
                if (response.status === 200) {
                    alert('image uploaded')
                } else {
                    alert('try a different password')
                }})
        e.preventDefault();


    }

    render() {
        const { classes } = this.props;
        const displayForm =
            <form>
                <label>
                    Code:
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
                  
                </label>                
            </form>



        const image = this.state.image;
        const imageContent = this.state.image ?
            <React.Fragment>
                <img src={image} className={classes.image} />
                <Button variant="contained" component="span" className={classes.button} onClick={this.handleSubmit}>
                    Submit
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
                            <Button variant="contained" component="span" className={classes.button} >
                                Browse
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