import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import rouxPics from './images/rouxPics';

const styles = theme => ({
    root: {
        flexGrow: 1,
        padding: theme.spacing.unit * 2,
        marginTop: '5%',
        marginBottom: '5%',
        marginLeft: '20%'
    },
    logo: {
        fontFamily: `'Pacifico', cursive`,
        color: '#003300',
        fontSize: '2em',
        margin: 0,
        padding: 0
    },
    image: {
        maxWidth: 64,
        maxHeight: 64
    }
});

function RouxLayout(props) {
    const { classes } = props;

    let showPics = rouxPics.map(image => {
        return (
            <Grid item md={2} key={image.id}>
                <img src={image.url} alt={image.name} className={classes.image} />
            </Grid>)
    })

    return (
        <div className={classes.root}>
            <Grid container spacing={0}>
                <Grid item md={1} />
                <Grid item md={3} className={classes.logo} >
                    <h1>{`Roux`}</h1>
                </Grid>
                {showPics}
            </Grid>
        </div>
    );
}

export default withStyles(styles)(RouxLayout);