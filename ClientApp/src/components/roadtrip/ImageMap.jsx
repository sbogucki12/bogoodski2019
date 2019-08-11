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
                style={{ width: 1000, height: 546 }}
                alt="Road Trip Map With Links"
                title="Click on Locations for Stories"                
                usemap="#image-map"                
            />
            <map name="image-map">
                <area onClick={() => handleOpen(0)} alt="mullicaHill" title="mullicaHill"  coords="822, 218, 843, 239" shape="rect" />
                <area onClick={() => handleOpen(1)} alt="pennsylvania" title="pennsylvania" coords="754, 222, 814, 231" shape="rect" />
                <area onClick={() => handleOpen(2)} alt="westVirginia" title="westVirginia" coords="744, 243, 21" shape="circle" />
                <area onClick={() => handleOpen(3)} alt="ohio" title="ohio" coords="679, 236, 721, 251" shape="rect" />
                <area onClick={() => handleOpen(4)} alt="illinoisIndiana" title="illinoisIndiana" coords="582, 255, 669, 268" shape="rect" />
                <area onClick={() => handleOpen(5)} alt="missouri" title="missouri" coords="516, 287, 574, 314" shape="rect" />
                <area onClick={() => handleOpen(6)} alt="okc" title="okc" coords="423, 341, 498, 370" shape="rect" />
                <area onClick={() => handleOpen(7)} alt="texas" title="texas" coords="360, 342, 404, 372" shape="rect" />
                <area onClick={() => handleOpen(8)} alt="newMexico1" title="newMexico1" coords="318, 338, 343, 381" shape="rect" />
                <area onClick={() => handleOpen(9)} alt="newMexico2" title="newMexico2" coords="259, 323, 288, 374" shape="rect" />
                <area onClick={() => handleOpen(10)} alt="arizona" title="arizona" coords="166, 315, 242, 358" shape="rect" />
                <area onClick={() => handleOpen(11)} alt="longBeach" title="longBeach" coords="73, 323, 134, 350" shape="rect" />                
            </map>            

            <button onClick={() => handleOpen(2)}>{`Open Dialog`}</button>
            <DialogBase dialogNumber={dialogNumber} open={open} handleClose={handleClose}  />
        </div>            

    return content;
};

export default withStyles(styles)(ImageMap); 