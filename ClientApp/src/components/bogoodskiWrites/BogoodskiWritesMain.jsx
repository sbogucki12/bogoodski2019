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
        const handleResize = () => console.log(`width = ${window.innerWidth}`);
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    })
    
    const [state, setIsDesktop] = useState({ isDesktop: undefined });

    const makeMobile = e => {
        e.preventDefault();
        setIsDesktop({ isDesktop: false });
    }

    const makeDesktop = e => {
        e.preventDefault();
        setIsDesktop({ isDesktop: true })
    }

    const makeDefault = e => {
        e.preventDefault();
        setIsDesktop({ isDesktop: undefined })
    }

    const { classes } = props;

    let isDesktop = state.isDesktop;
    let mainContent = (
        <div className={classes.root}>
            <p>
                {`Default`}
            </p>
            <button onClick={e => makeMobile(e)}>
                {`Make Mobile`}
            </button>
        </div>
    );

    if (isDesktop) {
        mainContent = <WritesMainDesktop makeDefault={makeDefault}/>
    }
    if (isDesktop === false) {
        mainContent = <WritesMainMobile makeDesktop={makeDesktop}/>
    }

    return mainContent;
}

export default withStyles(styles)(BogoodskiWritesMain);