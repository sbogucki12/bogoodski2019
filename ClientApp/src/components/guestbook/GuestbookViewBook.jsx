import React, { useState, useEffect } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import ArrowBackIos from "@material-ui/icons/ArrowBackIosSharp";
import ArrowForwardIos from "@material-ui/icons/ArrowForwardIosSharp";
import { display } from '@material-ui/system';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        flexDirection: 'column',
        width: '95%'        
    }, 
    recordBox: {
        width: '100%',
        borderColor: theme.palette.secondary.main,
        borderWidth: '1px',
        borderStyle: 'solid',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        marginTop: '1%'
    },
    icon: {
        margin: theme.spacing(1),
        fontSize: 32,
    }    
}));

const GuestbookViewBook = props => {
    const classes = useStyles();  

    const mockRecords = props.mockRecords;

    
    let [displayRecords, setDisplayRecords] = useState(mockRecords);
    let [sliceStartIndex, setSliceStartIndex] = useState(5);
    let [sliceEndIndex, setSliceEndIndex] = useState(10);   

    //Get the most recent five records to display initially
    useEffect(() => {
        const initialRecords = displayRecords.slice(0, 5); 
        setDisplayRecords(initialRecords);
        console.log(`Start Slice Index is ${sliceStartIndex} and Start End Index is ${sliceEndIndex} and mock records length is ${mockRecords.length}`);
    }, [])
    
    

    //Get five more records to display when user clicks next
    //If < 5 records remain, display last five records
    //TODO: Clean this up. 
    //TODO: Set up test.

    const getFiveMoreRecords = e => {        
        e.preventDefault();
        let newSliceStartIndex = sliceStartIndex + 5;
        if (newSliceStartIndex >= mockRecords.length - 5) {
            newSliceStartIndex = mockRecords.length - 5;
            setSliceStartIndex(newSliceStartIndex);
        };
        setSliceStartIndex(newSliceStartIndex);
        let newSliceEndIndex = sliceEndIndex + 5; 
        if (newSliceEndIndex >= mockRecords.length) {
            newSliceEndIndex = mockRecords.length; 
            setSliceEndIndex(newSliceEndIndex);
        }
        setSliceEndIndex(newSliceEndIndex);
        let counter = 0; 
        let newRecordsToDisplay = [];
        for (var i = sliceStartIndex; i < sliceEndIndex; i++) {
            newRecordsToDisplay[counter] = mockRecords[i];
            counter++;
        }
        setDisplayRecords(newRecordsToDisplay);
        console.log(`Start Slice Index is ${sliceStartIndex} and Start End Index is ${sliceEndIndex} and mock records length is ${mockRecords.length}`);
    }
    

    //Return to the previous five records when user clicks back
    //TODO: Clean this up. 
    //TODO: Set up test.

    const getFivePreviousRecords = e => {
        e.preventDefault();
        let newSliceStartIndex = sliceStartIndex - 5; 
        if (newSliceStartIndex <= 0) {
            newSliceStartIndex = 0; 
            setSliceStartIndex(newSliceStartIndex);
        } 
        setSliceStartIndex(newSliceStartIndex);
        let newEndSliceIndex = sliceEndIndex - 5; 
        if (newEndSliceIndex <= 5) {
            newEndSliceIndex = 5
        }
        setSliceEndIndex(newEndSliceIndex);
        
        let counter = 0;
        let newRecordsToDisplay = [];
        for (var i = sliceStartIndex; i < sliceEndIndex; i++) {
            newRecordsToDisplay[counter] = mockRecords[i];
            counter++;
        }
        setDisplayRecords(newRecordsToDisplay);
        console.log(`Start Slice Index is ${sliceStartIndex} and Start End Index is ${sliceEndIndex} and mock records length is ${mockRecords.length}`);
    }
        
    const listRecords = displayRecords.map((mockRecord) =>
        <div className={classes.recordBox} key={mockRecord.id}>
            <h6>{mockRecord.comment}</h6>
            <h2>{mockRecord.name}</h2>
            <p><i>{mockRecord.date}</i></p>
            <p><i>{mockRecord.id}</i></p>
        </div>);

    //TODO: Make this conditional as approprate
    let backButtonContent = null;
    if (mockRecords.length > 5) {
        backButtonContent = <ArrowBackIos className={classes.icon} onClick={(e) => getFivePreviousRecords(e)} />;
    }

    //TODO: Make this conditional as approprate
    let forwardButtonContent = null; 
    if (mockRecords.length > 5) {
        forwardButtonContent = <ArrowForwardIos className={classes.icon} onClick={(e) => getFiveMoreRecords(e)} />;
    }

    
    
    const content =
        <div className={classes.root}>           
            {listRecords} 
            <div style={{ flexDirection: "row", marginTop: '1%' }}>
                {backButtonContent}{forwardButtonContent}
            </div>

        </div>

    return content;
}

export default GuestbookViewBook; 