import React, { useState, useEffect } from 'react';
import { withStyles } from '@material-ui/styles';
import ProgressBar from './ProgressBar';
import Content from './Content';
import TitleBox from './TitleBox';
import Footer from './Footer';
import ImageMap from './ImageMap';
import MobileCheckDialog from './dialogs/mobileCheckDialog';

const styles = {   
    content: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100vw',
        flexDirection: 'column', 
    },
    titleBox: {
        marginTop: '25vh',
        minHeight: 200       
    },
    progressBox: {
        minHeight: 200
    },
    contentBox: {
        minHeight: 200,
        maxWidth: '100%',
        paddingLeft: '5%',
        paddingRight: '5%'
    }   
};

const MainPageRoadtrip = props => {
    const { classes } = props;

    const innerWidth = window.innerWidth;

    const [openCheckMobileDialog, setOpenCheckMobileDialog] = useState(true);  

    const handleClose = e => {
        e.preventDefault();
        setOpenCheckMobileDialog(false);
    }

    let showMobileDialog = null; 

    if (innerWidth < 450) {
        showMobileDialog =
            <div>
                <MobileCheckDialog open={openCheckMobileDialog} handleClose={handleClose} />
            </div>
    };    

    const content =
        <div>
            <div className={classes.content}>
                <div className={classes.titleBox}>
                    <TitleBox />
                </div>
                <ImageMap />
                {showMobileDialog}
            </div>
            <Footer />
        </div>



    return content;
};

export default withStyles(styles)(MainPageRoadtrip); 