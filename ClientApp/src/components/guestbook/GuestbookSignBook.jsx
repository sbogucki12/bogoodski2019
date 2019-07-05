import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap', 
        flexDirection: 'column',
        justifyContent: 'center', 
        alignItems: 'center'
        
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        borderRadius: 4,
        border: '1px solid',
        borderColor: theme.palette.primary.main,
        color: theme.palette.primary.main
    },
    input: {
        color: "white"
    }, 
    formHelperText: {
        color: theme.palette.secondary.main,
        marginBottom: '1%'
    }
}));

const GuestbookSignBook = props => {
    const classes = useStyles();

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
                onChange={(e) => props.setCurrentRecordEmail(e)}
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
                margin="normal"
                variant="filled"
                FormHelperTextProps={{
                    className: classes.formHelperText
                }}
                helperText="Comment"
                onChange={(e) => props.onSetCurrentRecordComment(e)}
                autoFocus
                multiline                
                rowsMax="5"
            />
        </div>;

    return content;
}

export default GuestbookSignBook; 