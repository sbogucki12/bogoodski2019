import React, { useState, useEffect } from "react";
import { withStyles } from '@material-ui/core/styles';
import WritesMainMobile from './WritesMainMobile'; 
import WritesMainDesktop from './WritesMainDesktop';

const styles = ({
    root: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minWidth: '100vw',
        minHeight: '100vh', 
        background: '#000000', 
        color: '#FFFFFF'        
    },
});

const BogoodskiWritesMain = props => {
    useEffect(() => {
        let winWidth = window.innerWidth; 
        if (winWidth >= 450) {
            setIsDesktop({ isDesktop: true })
        }

        if (winWidth < 450) {
            setIsDesktop({ isDesktop: false })
        } 
        const handleResize = () => {            
            if (winWidth >= 450) {
                setIsDesktop({ isDesktop: true })
            }

            if (winWidth < 450) {
                setIsDesktop({ isDesktop: false })
            } 
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    })
    
    const [state, setIsDesktop] = useState({ isDesktop: undefined });  

    const { classes } = props;

    let isDesktop = state.isDesktop;
    let mainContent = (
        <div className={classes.root}>
            <p>
                {`Loading...`}
            </p>            
        </div>
    );

    if (isDesktop) {
        mainContent = <WritesMainDesktop/>
    }
    if (isDesktop === false) {
        mainContent = <WritesMainMobile/>
    }

    return mainContent;
}

export default withStyles(styles)(BogoodskiWritesMain);