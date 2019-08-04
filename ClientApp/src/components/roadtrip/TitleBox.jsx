import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import RoadTripLogo from './images/roadTripLogo.jpg';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    }, 
    imageStyle: {
        borderStyle: 'solid', 
        borderWidth: 5,
        borderRadius: 25,
        borderColor: theme.palette.primary.main, 
        width: '90%'
    }
});

const TitleBox = props => {
    const { classes } = props;
  
    const content =
        <div className={classes.root}>
            <img src={RoadTripLogo} alt="Road Trip Blog Logo" title="Road Trip Blog Logo" className={classes.imageStyle} />
            <Typography variant="h3" style={{ textAlign: 'center', marginTop: '3%' }} gutterBottom>
                {`RoadTrip 2019`}
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
                {`A Blog Across America`}
            </Typography>
        </div>;

    return content;
};

export default withStyles(styles)(TitleBox); 