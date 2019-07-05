import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
    buttonAndIcon: {
        margin: theme.spacing(1),
        fontSize: '80%'
    }
}));

const GuestbookLandingDefaultContent = props => {
    const classes = useStyles();

    const content =
        <React.Fragment>
            <Button variant="outlined" size="small" color="primary" className={classes.buttonAndIcon} onClick={() => {props.onClickToSignOrViewBook(1)}}>{`Sign the GuestBook`}</Button>
            <div style={{ margin: '5%', fontSize: '250%' }}>{`📝`}</div>
            <Button variant="outlined" size="small" color="primary" className={classes.buttonAndIcon} onClick={() => props.onClickToSignOrViewBook(2)}>{`View the GuestBook`}</Button>
        </React.Fragment>;

    return content;
}

export default GuestbookLandingDefaultContent; 