import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import ImageMapJpg from './images/MapForImageMap.jpg';
import DialogBase from './dialogs/DialogBase';

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

    const [open, setOpen] = useState(false);
    const [dialogNumber, setDialogNumber] = useState(0);

    const handleOpen = (nbr) => {
        setDialogNumber(nbr);
        setOpen(true);
    };

    const handleClose = () => {        
        setOpen(false);
        
    };

    const content =
        <div className={classes.root}>
            <h4>{`Click on locations along the highlighted route for stories!`}</h4>
            <img src={ImageMapJpg}
                alt="Road Trip Map With Links"
                title="Click on Locations for Stories"                
                usemap="#image-map"                
            />
            <button onClick={() => handleOpen(2)}>{`Open Dialog`}</button>
            <DialogBase dialogNumber={dialogNumber} open={open} handleClose={handleClose}  />
        </div>
            

    return content;
};

export default withStyles(styles)(ImageMap); 