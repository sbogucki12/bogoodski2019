import React from 'react';
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles(theme => ({
   
    
}));

const GuestbookViewBook = props => {
    const classes = useStyles();

    const content =
        <React.Fragment>
            <div style={{ margin: '5%', fontSize: '250%' }}>{`View Book Component`}</div>
        </React.Fragment>;

    return content;
}

export default GuestbookViewBook; 