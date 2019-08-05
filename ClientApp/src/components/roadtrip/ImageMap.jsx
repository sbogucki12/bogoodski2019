import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import ImageMapJpg from './images/MapForImageMap.jpg';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const styles = theme => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        marginBottom: '5%'
    }   
});

const ImageMap = props => {
    const { classes } = props;

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }
  
    const content =
        <div className={classes.root}>
            <h4>{`Click on locations along the highlighted route for stories!`}</h4>
            <img src={ImageMapJpg}
                alt="Road Trip Map With Links"
                title="Click on Locations for Stories"                
                useMap="#image-map"                
            />
            <map name="image-map">
                <area onClick={handleClickOpen} coords="829,223,836,223,836,231,825,235,818,227" shape="poly" />
                <area target="_blank" alt="Espn" title="Espn" href="http://espn.com" coords="693,246,704,250,710,246,704,239" shape="poly" />
                <area target="_blank" alt="bogoodski" title="bogoodski" href="http://bogoodski.com" coords="100,327,94,334,101,340,107,333" shape="poly" />
            </map>

            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{`Story 1`}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        {`Story 1 Text`}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        {`Return To Map`}
                    </Button>                    
                </DialogActions>
            </Dialog>
        </div>
            

    return content;
};

export default withStyles(styles)(ImageMap); 