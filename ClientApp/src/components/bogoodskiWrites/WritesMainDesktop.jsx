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
        height: '70vh', 
        background: 'rgba(0, 215, 170, .1)',
        borderStyle: 'solid',
        borderColor: '#000000',
        borderWidth: 5,
        borderRadius: 25, 
        marginTop: '5vh'
    }, 
    imageRow: {
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        flexDirection: 'row', 
        width: '100%', 
        marginBottom: '5%', 
        height: '100%'
    }, 
    pageBox: {
        width: '60%',
        height: '90%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderStyle: 'solid',
        borderColor: '#FFFFFF',
        borderWidth: 5,
        borderRadius: 5, 
        margin: '5%'
    }
});

const WritesMainDesktop = props => {
    const { classes } = props;

    const [selectedPage, setSelectedPage] = useState(0); 
    const [isPageDisplayed, setIsPageDisplayed] = useState(false)
    
    const pages = ['the cover', 'page1', 'page2', 'page3', 'page4', 'page5'];

    const pageToDisplay = pages[selectedPage];
    const nextPageToDisplay = pages[selectedPage + 1];
    const lastPageDisplayed = pages[selectedPage - 1];    

    const getNextPage = e => {
        e.preventDefault();
        let currentPage = selectedPage;
        let nextPage = currentPage + 1; 
        if (nextPage > pages.length - 1) {
            nextPage = 0;
        }
        setSelectedPage(nextPage)
    }

    const getPrevPage = e => {
        e.preventDefault();
        let currentPage = selectedPage;
        let prevPage = currentPage - 1;        
        setSelectedPage(prevPage)
    }

    let nextPageComponent =
        <span style={{ opacity: .3, width: '20%', textAlign: 'center' }} onClick={e => getNextPage(e)}>
            {nextPageToDisplay}
        </span>;
    if (selectedPage === 0 && isPageDisplayed === false) {
        nextPageComponent = <span style={{ width: '20%' }}>{``}</span>;
    }
    if (selectedPage === pages.length -1) {
        nextPageComponent = <span style={{ width: '20%' }}>{``}</span>
    }

    const toDisplayPage = e => {
        e.preventDefault(); 
        setIsPageDisplayed(true);
    }

    let displayPageComponent =
        <div>
            {`Loading...`}
        </div>;
    if (isPageDisplayed === false) {
        displayPageComponent =
            <p onClick={e => toDisplayPage(e)}>
                {pageToDisplay}
            </p>
    }

    if (isPageDisplayed === true) {
        displayPageComponent =
            <div className={classes.pageBox}>
                {`This is ${pages[selectedPage]}`}
            </div>
    }

    let hideDisplayPage = null; 

    if (isPageDisplayed) {
        hideDisplayPage =
            <button onClick={() => setIsPageDisplayed(false)} style={{ marginBottom: '2%' }}>
                {`Close Book`}
            </button>
    }

    let lastPageDisplayedComponent =
        <span style={{ opacity: .3, width: '20%', textAlign: 'center' }} onClick={e => getPrevPage(e)}>
            {lastPageDisplayed}
        </span>;

    if (selectedPage === 0) {
        lastPageDisplayedComponent = <span style={{ width: '20%' }}>{``}</span>;
    }

    const content = (
        <div className={classes.root}>
            <div className={classes.mainBox}>
                <div className={classes.imageRow}>
                    {lastPageDisplayedComponent}
                    {displayPageComponent}
                    {nextPageComponent}
                </div>
                    {hideDisplayPage}
            </div>
        </div>
    ); 
    return content;
}

export default withStyles(styles)(WritesMainDesktop);