﻿import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CurrentPostImage from './images/runwithme.JPG';

const styles = theme => ({
    card: {
        maxWidth: 345,
        margin: theme.spacing.unit * 2
    },
    media: {
        height: 140,
    },
    readButton: {
        display: 'flex',
        justifyContent: 'flex-end'
    }
});

function CurrentPostMainWindowDesktop(props) {
    const { classes } = props;
    return (
        <Card className={classes.card}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={CurrentPostImage}
                    title="Current Post"
                />
                <CardContent>
                    <Typography gutterBottom variant="h6" component="h2">
                        {`Live Blogging the Development of a New Feature: via ReactJS and .NET Core. Part 6.`}
                    </Typography>
                    <Typography component="p">
                        {`(Feb. 20, 2019) Today, let’s explore some thoughts about unit tests...`}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions className={classes.readButton}>
                <Button size="small" color="secondary" >
                    {`Read`}
        </Button>
            </CardActions>
        </Card>
    );
}

export default withStyles(styles)(CurrentPostMainWindowDesktop);