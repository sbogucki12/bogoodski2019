import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CurrentPostImage from './images/decBlogTitleLogo.jpg';

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
                <CardMedia
                    className={classes.media}
                    image={CurrentPostImage}
                    title="Current Post"
                />
                <CardContent>
                    <Typography
                        gutterBottom
                        variant="h6"
                        component="h2"
                    >
                        {`This is a true story that, by nature, will require over-sharing... `}
                    </Typography>
                    <Typography component="p">
                        {`(Apr. 17, 2019) Blog post opens in a new window.`}
                    </Typography>
                </CardContent>
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