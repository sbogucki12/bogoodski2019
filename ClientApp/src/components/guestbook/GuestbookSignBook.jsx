import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap', 
        flexDirection: 'column',
        justifyContent: 'center', 
        alignItems: 'center',
        width: '90%'
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: '90%',
        borderRadius: 4,
        border: '1px solid',
        borderColor: theme.palette.primary.main,
        color: theme.palette.primary.main
    },
    input: {
        color: "white", 
        maxLength: 10
    }, 
    formHelperText: {
        color: theme.palette.secondary.main,
        marginBottom: '1%'
    },
    button: {
        margin: theme.spacing(1),
    }
}));

const GuestbookSignBook = props => {
    const classes = useStyles();

    let commentHelperText = "Comment";

    if (props.currentRecordComment.length > 1) {
        commentHelperText = "Max: 10 characters"
    }

    const content =
        <div className={classes.container}>
            <TextField
                id="filled-name"
                label="Your Name"
                className={classes.textField}
                value={props.currentRecordName}
                InputProps={{
                    className: classes.input
                }}
                margin="normal"
                variant="filled"
                FormHelperTextProps={{
                    className: classes.formHelperText
                }}
                helperText="Name"
                onChange={(e) => props.setCurrentRecordName(e)}
                autoFocus
            />
           
            <TextField
                id="filled-email"
                label="Your email"
                className={classes.textField}
                value={props.currentRecordEmail}
                InputProps={{
                    className: classes.input
                }}
                margin="normal"
                variant="filled"
                helperText="Email"
                FormHelperTextProps={{
                    className: classes.formHelperText
                }}
                onChange={(e) => props.onSetCurrentRecordEmail(e)}
                autoFocus
            />

            <TextField
                id="filled-comment"
                label="Your Comment"
                className={classes.textField}
                value={props.currentRecordComment}
                InputProps={{
                    className: classes.input
                }}
                inputProps={{
                    maxLength: 10
                }}
                margin="normal"
                variant="filled"
                FormHelperTextProps={{
                    className: classes.formHelperText
                }}
                helperText={commentHelperText}
                onChange={(e) => props.onSetCurrentRecordComment(e)}
                autoFocus
                multiline 
                rows="5"
            />
            <p>{`CAPTCHA`}</p><br/>
            <Button variant="contained" color="primary" className={classes.button}>
                {`Post`}
            </Button>
        </div>;

    return content;
}

export default GuestbookSignBook; 