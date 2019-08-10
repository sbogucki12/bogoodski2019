﻿import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { withStyles } from '@material-ui/core/styles';
import * as dialogContentArray from './dialogContent';

const styles = theme => ({
   
});

const DialogBase = props => {  

    

    let dialogText = dialogContentArray.default[props.dialogNumber].text;
    let dialogTitle = dialogContentArray.default[props.dialogNumber].title;



    const content =
        <div>
            <Dialog
                open={props.open}
                onClose={props.handleClose}
                aria-labelledby="dialogStoryTitle"
                aria-describedby="dialogStoryContent"
            >
                <DialogTitle id="dialogStoryTitle">{dialogTitle}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="dialogStoryContent">
                        {dialogText}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={props.handleClose} color="primary" autoFocus>
                        {`Return To Story`}
                    </Button>
                </DialogActions>
            </Dialog>
        </div>;

    return content;
}

export default withStyles(styles)(DialogBase);
