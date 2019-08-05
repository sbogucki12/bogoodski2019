import React, { useState } from 'react';
import { withStyles } from '@material-ui/styles';
import ProgressBar from './ProgressBar';
import Content from './Content';
import TitleBox from './TitleBox';
import Footer from './Footer';
import ImageMap from './ImageMap';

const styles = {
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100vw',
        flexDirection: 'column'
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
    },
    footer: {        
        width: '100%', 
        position: 'fixed', 
        bottom: 0
    }
};

const MainPageRoadtrip = props => {
    const { classes } = props;

    const [currentProgress, setCurrentProgress] = useState(1);

    const handleSetCurrentProgress = e => {
        e.preventDefault();
        let newCurrentProgress = 1;
        if (currentProgress === 1) {
            newCurrentProgress = 2
        };
        if (currentProgress === 2) {
            newCurrentProgress = 3
        };
        if (currentProgress === 3) {
            newCurrentProgress = 4
        };
        if (currentProgress === 4) {
            newCurrentProgress = 5
        };
        setCurrentProgress(newCurrentProgress);
    }

    {/*const content =
        <div className={classes.root}>
            <div className={classes.titleBox}>
                <TitleBox />
            </div>            
            <div className={classes.contentBox}>
                <Content currentProgress={currentProgress} handleSetCurrentProgress={handleSetCurrentProgress} />
            </div>
            <div className={classes.progressBox}>
                <ProgressBar currentProgress={currentProgress} />
            </div>
            <div className={classes.footer}>
                <Footer />
            </div>
        </div>;*/}

    const content = 
        <div className={classes.root}>
            <div className={classes.titleBox}>
                <TitleBox />
            </div>            
            <ImageMap />
        </div>





    return content;
};

export default withStyles(styles)(MainPageRoadtrip); 