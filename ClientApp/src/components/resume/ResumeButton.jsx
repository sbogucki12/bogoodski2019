import React from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import DownloadCloudIcon from '@material-ui/icons/CloudDownload';
import { Link } from 'react-router-dom';


const styles = theme => ({
    root: {
        backgroundColor: theme.palette.secondary.main,
        marginTop: 0,
        minWidth: '100vw', 
        display: 'flex',
        justifyContent: 'center', 
        paddingBottom: theme.spacing.unit               
    },
    button: {
        margin: theme.spacing.unit
    },
    rightIcon: {
        marginLeft: theme.spacing.unit,
    },
    iconSmall: {
        fontSize: 15,
    },
});

function ResumeButton(props) {
    const { classes } = props;
    return (
        <div className={classes.root}>
            <Button variant="contained" component={Link} to='/BoguckiResume.pdf' download target="_self" color="default" className={classes.button}>
                {`PDF `}
            <DownloadCloudIcon className={classes.rightIcon} />
            </Button>            
        </div>
    );
}

export default withStyles(styles)(ResumeButton);