import React from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

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
    }
});

class RunUploader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            image: ''
        };
        //this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.fileInput = React.createRef();
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
        const formData = new FormData();
        const fileField = document.getElementById('contained-button-file').files[0];
        formData.append('file', fileField);
        fetch('/api/run/postimage', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .catch(error => console.error('Error:', error))
            .then(response => console.log('Success:', response));
        e.preventDefault();


    }

    render() {
        const { classes } = this.props;
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