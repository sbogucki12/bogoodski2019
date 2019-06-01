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
        marginTop: '25vh'
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
        justifyContent: 'center',
        flexDirection: 'column'
    }
});

class RunUploader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            image: '',
            code: '',
            date: '',
            lastKey: 0,
            newKey: 0,
            newComment: '',
            newDistance: 0,
            newDuration: 0,
            newDate: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
        this.handleDateSubmit = this.handleDateSubmit.bind(this);
        this.handleCodeChange = this.handleCodeChange.bind(this);
        this.handleArchiveSubmit = this.handleArchiveSubmit.bind(this);
        this.handleArchiveDateChange = this.handleArchiveDateChange.bind(this);
        this.handleArchiveCommentChange = this.handleArchiveCommentChange.bind(this);
        this.handleArchiveKeyChange = this.handleArchiveKeyChange.bind(this);
        this.handleArchiveDurationChange = this.handleArchiveDurationChange.bind(this);
        this.handleArchiveDistanceChange = this.handleArchiveDistanceChange.bind(this);
        this.fileInput = React.createRef();
    };

    //TO DO: Refactor these into one function:
    handleArchiveDateChange(e) {
        this.setState({
            newDate: e.target.value
        })
        e.preventDefault()
    };

    handleArchiveCommentChange(e) {
        this.setState({
            newComment: e.target.value
        })
        e.preventDefault()
    };

    handleArchiveKeyChange(e) {
        this.setState({
            newKey: e.target.value
        })
        e.preventDefault()
    };

    handleArchiveDurationChange(e) {
        this.setState({
            newDuration: e.target.value
        })
        e.preventDefault()
    };

    handleArchiveDistanceChange(e) {
        this.setState({
            newDistance: e.target.value
        })
        e.preventDefault()
    };

    handleDateChange(e) {
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
        fetch('/api/run/postdate', {
            method: 'POST',
            body: date
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

    handleArchiveSubmit(e) {
        const newKey = this.state.newKey;
        const newDate = this.state.newDate.toString();
        const newComment = this.state.newComment.toString();
        const newDistance = this.state.newDistance;
        const newDuration = this.state.newDuration;
        const code = this.state.code;

        fetch('/api/runarchive/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'code': code
            },
            body: JSON.stringify({
                "key": newKey,
                "date": newDate,
                "comment": newComment,
                "distance": newDistance,
                "duration": newDuration
            })
        })
            .then(response => {
                if (response.status === 200) {
                    alert(`Archive Updated`);
                }
                else {
                    alert(`Archive Update failed`)
                }
            })
            .catch(error => {
                alert(`Error: ${error}`)
            })

        e.preventDefault();
    }

    componentDidMount() {
        fetch('/api/runarchive/')
            .then(res => res.json())
            .then(json => {
                let dataToSort = json.value;
                dataToSort.sort(function (a, b) {
                    return b.key - a.key;
                });
                let lastKey = dataToSort[0].key
                this.setState({
                    lastKey: lastKey
                })
            })
    }

    render() {
        const { classes } = this.props;
        const lastKey = this.state.lastKey;
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
                {`Last Key: ${lastKey}`}
                <form style={{ display: 'flex', flexDirection: 'column' }}>
                    {`Archive:`}
                    <TextField
                        id="standard-name"
                        label="Date for Archive"
                        className={classes.textField}
                        margin="normal"
                        value={this.state.newDate}
                        onChange={this.handleArchiveDateChange}
                    />
                    <TextField
                        id="standard-name"
                        label="Comment for Archive"
                        className={classes.textField}
                        margin="normal"
                        value={this.state.newComment}
                        onChange={this.handleArchiveCommentChange}
                    />
                    <TextField
                        id="standard-name"
                        label="Key for Archive"
                        className={classes.textField}
                        margin="normal"
                        value={this.state.newKey}
                        onChange={this.handleArchiveKeyChange}
                    />
                    <TextField
                        id="standard-name"
                        label="Duration for Archive"
                        className={classes.textField}
                        margin="normal"
                        value={this.state.newDuration}
                        onChange={this.handleArchiveDurationChange}
                    />
                    <TextField
                        id="standard-name"
                        label="Distance for Archive"
                        className={classes.textField}
                        margin="normal"
                        value={this.state.newDistance}
                        onChange={this.handleArchiveDistanceChange}
                    />
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
                    <Button
                        variant="contained"
                        component="span"
                        className={classes.button}
                        onClick={this.handleArchiveSubmit}
                    >
                        {`Update Archive`}
                    </Button>
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