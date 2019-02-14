import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import "./RunStyle.css";
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
    }, 
    container: {
        margin: 0,
        display: 'grid',
        placeItems: 'center',
        background: 'white', 
        width: '99%', 
        height: '99%'
    }, 
    typography: {
        margin: theme.spacing.unit
    }, 
    link: {
        textDecoration: 'none'
    }
});

function RunMoreInfo(props) {
    const { classes } = props;
    return (
        <div className="borderWrapper">
            <div className={classes.container}>   
                <Typography variant="h6" gutterBottom className={classes.typography} align="center">
                    {`Use the button below to learn more about the background and implementation of this log.`}
                </Typography>
                <a href="https://link.medium.com/Xcdnon3RhU" target="_blank" className={classes.link}>
                    <Button
                        variant="outlined"
                        color="secondary"
                        className={classes.button}
                    >
                            {`More Info`}
                        </Button>
                    </a>
            </div> 
        </div>
  );
}

export default withStyles(styles)(RunMoreInfo);