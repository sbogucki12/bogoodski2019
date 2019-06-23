import React, { useState } from "react";
import { withStyles } from '@material-ui/core/styles';

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
    mainBox: {
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        flexDirection: 'column',
        width: '70%', 
        height: 300, 
        background: 'rgba(0, 215, 170, .1)',
        borderStyle: 'solid',
        borderColor: '#000000',
        borderWidth: 5,
        borderRadius: 25
    }, 
    imageRow: {
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        flexDirection: 'row'
    }
});

const WritesMainDesktop = props => {
    const { classes } = props;

    const [state, setSelectedPage] = useState({ selectedPage: 0 }); 
    
    const pages = ['cover', 'page1', 'page2', 'page3', 'page4', 'page5'];

    const pageToDisplay = pages[state.selectedPage];
    const nextPageToDisplay = pages[state.selectedPage + 1];
    const lastPageDisplayed = pages[state.selectedPage - 1];

    let buttonText = 'Read'; 
    if (state.selectedPage > 0) {
        buttonText = 'Next Page'
    }

    let prevPageComponent = 
        <div>
            <button onClick={e => getPrevPage(e)}>
                {`Prev Page`}
            </button>
        </div>
    if (state.selectedPage === 0) {
        prevPageComponent = null;
    }

    const getNextPage = e => {
        e.preventDefault();
        let currentPage = state.selectedPage;
        let nextPage = currentPage + 1; 
        if (nextPage > pages.length - 1) {
            nextPage = 0;
        }
        setSelectedPage({ selectedPage: nextPage })
    }

    const getPrevPage = e => {
        e.preventDefault();
        let currentPage = state.selectedPage;
        let prevPage = currentPage - 1;        
        setSelectedPage({ selectedPage: prevPage })
    }

    const content = (
        <div className={classes.root}>
            <div className={classes.mainBox}>
                <div className={classes.imageRow}>
                    <p style={{ marginRight: '10%', opacity: .3 }}>
                        {lastPageDisplayed}
                    </p>
                    <p>
                        {pageToDisplay}
                    </p>
                    <p style={{ marginLeft: '10%', opacity: .3 }}>
                        {nextPageToDisplay}
                    </p>
                </div>
                <div className={classes.imageRow}>
                    {prevPageComponent}
                    <button onClick={e => getNextPage(e)}>
                        {buttonText}
                    </button>
                </div>
            </div>
        </div>
    ); 
    return content;
}

export default withStyles(styles)(WritesMainDesktop);