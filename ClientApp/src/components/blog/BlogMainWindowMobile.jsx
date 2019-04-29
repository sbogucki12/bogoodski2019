import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import CurrentPostMainWindowDesktop from './CurrentPostMainWindowDesktop';
import Button from '@material-ui/core/Button';
import BlogArchiveListMobile from './BlogArchiveListMobile';

const styles = theme => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        backgroundColor: "black",
        width: '100%',
        minHeight: `20vh`
    },
    titleContainer: {
        margin: theme.spacing.unit * 2,
        border: `1px solid #cc9900`,
        borderRadius: `5px`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%'
    },
    title: {
        fontSize: `5vh`,
        fontFamily: `'Nova Flat', cursive`,
        margin: theme.spacing.unit * 1
    },
    button: {
        marginBottom: theme.spacing.unit * 2
    }
});

class BlogMainWindowMobile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showArchives: false
        }
    };

    toggleArchives = () => {
        this.setState(prevState => ({
            showArchives: !prevState.showArchives
        }))
    };

    render() {
        const { classes } = this.props;
        const showArchives = this.state.showArchives;

        return (
            <div className={classes.root}>
                <div className={classes.titleContainer}>
                    <div className={classes.title}>
                        {`My Blog`}
                    </div>
                </div>
                <CurrentPostMainWindowDesktop />
                <Button
                    variant="contained"
                    color="secondary"
                    className={classes.button}
                    onClick={this.toggleArchives}
                >
                    {showArchives ? "Hide Posts" : "Previous Posts"}
                </Button>
                {showArchives ? <BlogArchiveListMobile /> : null}
            </div>
        );
    }
}

export default withStyles(styles)(BlogMainWindowMobile);