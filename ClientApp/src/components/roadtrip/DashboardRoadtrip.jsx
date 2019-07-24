import React, { useState } from 'react';
import { withStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';

const styles = {
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center', 
        width: '100vw'
    },
    button: {
        margin: '5%',
    },
    input: {
        display: 'none',
    },
};

const DashboardRoadtrip = props => {
    const { classes } = props;

    const [uploadedImage, setUploadedImage] = useState();    

    
    const handleUpload = (e) => {
        
        const reader = new FileReader();

        const blob = new Blob(e.target.file);
        

        const url = URL.createObjectURL(blob);

        

        setUploadedImage(url.toString());

        console.log(uploadedImage)
        
    }

    
    

    const content =
        <div className={classes.root}>
            <div style={{ marginTop: '30vh' }}>
                <input
                    accept="image/*"
                    className={classes.input}
                    id="contained-button-file"
                    multiple
                    type="file"
                    onChange={(e) => handleUpload(e)}
                />
                <label htmlFor="contained-button-file">
                    <Button variant="contained" component="span" className={classes.button} >
                        {`Upload`}
                     </Button>
                </label>
                <img src={`${uploadedImage}`} />
            </div>
        </div>

    return content;
};

export default withStyles(styles)(DashboardRoadtrip); 