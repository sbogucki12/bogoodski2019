import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import GuestbookLandingDefaultContent from "./GuestbookLandingDefaultContent";
import GuestbookSignBook from "./GuestbookSignBook";
import GuestbookViewBook from "./GuestbookViewBook";
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({    
    root: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: '#FFFFFF',
        backgroundColor: '#000000',
        minHeight: '100vh',
        minWidth: '100vw', 
        flexDirection: 'column'
    },
    buttonRowBorderBox: {
        backgroundColor: '#000000', 
        background: `linear-gradient(90deg, rgba(0,0,0,0.5214460784313726) 0%, rgba(18,230,39,1) 100%)`,
        width: '90%',
        minHeight: 225        
    },
    buttonRowContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        width: '99%',
        backgroundColor: '#000000',
        minHeight: 224
    },
    buttonAndIcon: {
        margin: theme.spacing(1),
        fontSize: '80%'
    }
}));

const GuestbookLanding = props => {
    const [page, onSetPage] = useState(0);
    const [currentRecordName, onSetCurrentRecordName] = useState("");
    const [currentRecordEmail, onSetCurrentRecordEmail] = useState("");
    const [currentRecordComment, onSetCurrentRecordComment] = useState("");

    const setCurrentRecordName = (e) => {
        e.preventDefault();
        onSetCurrentRecordName(e.target.value);
        console.log("Current Record Name: " + currentRecordName);
    }

    const setCurrentRecordEmail = (e) => {
        e.preventDefault();
        onSetCurrentRecordEmail(e.target.value);
        console.log("Current Record Email: " + currentRecordEmail);
    }

    const setCurrentRecordComment = (e) => {
        e.preventDefault();
        onSetCurrentRecordComment(e.target.value);
        if (currentRecordComment.length > 25) {
            alert("That's too many characters");
            return;
        }
        console.log("Current Record Comment: " + currentRecordComment);
    }
    const classes = useStyles();

    const onClickToSignOrViewBook = num => {
        if (num === 0) {
            onSetPage(0)
        }

        if (num === 1) {
            onSetPage(1)
        }

        if (num === 2) {
            onSetPage(2)
        }
    }

    let mainContent = <GuestbookLandingDefaultContent onClickToSignOrViewBook={onClickToSignOrViewBook} setCurrentRecordName={setCurrentRecordName}/>;   

    let backButtonContent = <React.Fragment></React.Fragment>;

    if (page === 0) {
        mainContent = <GuestbookLandingDefaultContent onClickToSignOrViewBook={onClickToSignOrViewBook} setCurrentRecordName={setCurrentRecordName}/>;
    }; 

    if (page === 1) {
        mainContent = <GuestbookSignBook
            setCurrentRecordName={setCurrentRecordName}
            currentRecordName={currentRecordName}
            onSetCurrentRecordEmail={setCurrentRecordEmail}
            currentRecordEmail={currentRecordEmail}
            onSetCurrentRecordComment={setCurrentRecordComment}
            currentRecordComment={currentRecordComment}
        />;
        backButtonContent = <Button variant="outlined" color="secondary" className={classes.buttonAndIcon} onClick={() => onClickToSignOrViewBook(0)}>{`Back`}</Button>;
    };

    if (page === 2) {
        mainContent = <GuestbookViewBook />;
        backButtonContent = <Button variant="outlined" color="secondary" className={classes.buttonAndIcon} onClick={() => onClickToSignOrViewBook(0)}>{`Back`}</Button>;
    }



    

    //TO DO: Display two buttons: Sign and View Guestbook. Icon in between
    const content =        
        <div className={classes.root}>
            <Typography variant="h1" component="h2"
                style={{
                    fontSize: '8vw',
                    marginTop: '19vh',
                    color: 'white',
                    textShadow:
                        `-2px -2px 0 rgba(66, 171, 48, 0.75),  
                        2px -2px 0 rgba(66, 171, 48, 0.75),
                        -2px 2px 0 rgba(66, 171, 48, 0.75),
                        2px 2px 0 rgba(66, 171, 48, 0.75)` }}
                gutterBottom>
                <span>{`Old School`}</span><span style={{ fontFamily: `'Pacifico', cursive` }}>{` GuestBook`}</span>
            </Typography>
            <div className={classes.buttonRowBorderBox}>
                <div className={classes.buttonRowContainer}>
                    {mainContent}
                </div>
            </div>
            <div style={{ marginLeft: -10, marginTop: '5%', alignItems: 'center', justifyContent: 'center', display: 'flex' }}>
                {backButtonContent}
                <Button variant="contained" color="secondary" className={classes.buttonAndIcon} component={Link} to="/">{`Home`}</Button>
            </div>

        </div>
        ;

    return content;

}

export default GuestbookLanding;