import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({
   
});

const MobileCheckDialog = props => {  
    const content =
        <div>
            <Dialog
                open={props.open}
                onClose={props.handleClose}
                aria-labelledby="dialogStoryTitle"
                aria-describedby="dialogStoryContent"
            >
                <DialogTitle id="dialogStoryTitle">{`Mobile Device?`}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="dialogStoryContent">
                        {`Are you viewing from a mobile device? Click YES to view the mobile site. Click NO to view the desktop site.`}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={props.handleClose} color="primary" autoFocus>
                        {`Yes`}
                    </Button>
                    <Button onClick={props.handleClose} color="primary" autoFocus>
                        {`No`}
                    </Button>
                </DialogActions>
            </Dialog>
        </div>;

    return content;
}

export default withStyles(styles)(MobileCheckDialog);
