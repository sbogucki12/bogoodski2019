import React, { useState } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import ArrowBackIos from "@material-ui/icons/ArrowBackIosSharp";
import ArrowForwardIos from "@material-ui/icons/ArrowForwardIosSharp";

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        flexDirection: 'column',
        width: '99%'
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
    const [sliceStartIndex, setSliceStartIndex] = useState(0);
    const [sliceEndIndex, setSliceEndIndex] = useState(5)

    const mockRecords = props.mockRecords;
    let displayRecords = [];
    displayRecords = mockRecords.slice(sliceStartIndex, sliceEndIndex);
    

    const onGetNextFiveRecords = e => {
        e.preventDefault();
        let newSliceStartIndex = sliceStartIndex + 5;        
        let newSliceEndIndex = sliceEndIndex + 5; 
        setSliceStartIndex(newSliceStartIndex);
        setSliceEndIndex(newSliceEndIndex); 
    }

    const onGetLastFiveRecords = e => {
        e.preventDefault();
        let newSliceStartIndex = sliceStartIndex - 5;
        let newSliceEndIndex = sliceEndIndex - 5;
        setSliceStartIndex(newSliceStartIndex);
        setSliceEndIndex(newSliceEndIndex);
    }

    const listRecords = displayRecords.map((mockRecord) =>
        <div className={classes.recordBox} key={mockRecord.id}>
            <h6>{mockRecord.comment}</h6>
            <h2>{mockRecord.name}</h2>
            <p><i>{mockRecord.date}</i></p>
        </div>);

    const content =
        <div className={classes.root}>           
            {listRecords} 
            <div style={{ flexDirection: "row", marginTop: '1%' }}>
                <ArrowBackIos className={classes.icon} onClick={e => onGetLastFiveRecords(e)}/> <ArrowForwardIos className={classes.icon} onClick={e => onGetNextFiveRecords(e)}/>
            </div>

        </div>

    return content;
}

export default GuestbookViewBook; 