import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CurrentPostImage from './images/majorKeyLogo.jpg';

const styles = theme => ({
    card: {
        maxWidth: 345,
        margin: theme.spacing.unit * 2
    },
    media: {
        height: 140,
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: '#cc9900'
    },
    readButton: {
        display: 'flex',
        justifyContent: 'flex-end'
    },
    link: {
        textDecoration: `none`
    }
});

function CurrentPostMainWindowDesktop(props) {
    const { classes } = props;
    const currentPostUrl = "/blog/blogmain";

    return (
        <Card className={classes.card}>
            <CardActionArea>
                <a
                    href={currentPostUrl}
                    target="_blank"
                    className={classes.link}
                >
                    <CardMedia
                        className={classes.media}
                        image={CurrentPostImage}
                        title="Current Post"
                    />
                    <CardContent>
                        <Typography
                            gutterBottom
                            variant="h6"
                            align="center"

                        >
                            {`(Apr. 27, 2019)`}
                        </Typography>
                        <Typography component="p" gutterBottom>
                            {`The single, powerful characteristic that will prevent the inevitable lows in life from descending to irrecoverable depths... `}
                        </Typography>
                        <Typography variant="caption">
                            {`Blog opens in new window.`}
                        </Typography>
                    </CardContent>
                </a>
            </CardActionArea>
            <CardActions className={classes.readButton}>
                <a
                    href={currentPostUrl}
                    target="_blank"
                    className={classes.link}
                >
                    <Button size="small" color="secondary" >
                        {`Read`}
                    </Button>
                </a>
            </CardActions>
        </Card>
    );
}

export default withStyles(styles)(CurrentPostMainWindowDesktop);