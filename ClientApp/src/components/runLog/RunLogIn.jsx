import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import RunUploader from './RunUploader';

const styles = theme => ({
    root: {
        display: 'flex', 
        alignItems: 'center',
        justifyContent: 'center', 
        minWidth: '100vw',
        minHeight: '100vh'
    },
});

class RunLogIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            showUpload: false
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({
            value: e.target.value
        })
    }

    handleSubmit(e) {
        const secret = this.state.value;
        fetch('/api/runlog/login', {
            method: "POST",
            headers: {
                "secret": secret
            }
        })
            .then(function (response) {
                console.log(response);
                if (response.status === 200) {
                    this.setState({
                        showUpload: true
                    })                    
                } else {
                    alert("Try a different password")
                }
            });
        e.preventDefault();
    }

    render() {
        const { classes } = this.props;
        const displayForm = 
            <form onSubmit={this.handleSubmit}>
                <label>
                    Code:
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        const doShowUpload = this.state.showUpload;

        return (
            <div className={classes.root}>
                {displayForm}
                {doShowUpload ? <RunUploader /> : null}
            </div>
        );
    }
};

export default withStyles(styles)(RunLogIn);