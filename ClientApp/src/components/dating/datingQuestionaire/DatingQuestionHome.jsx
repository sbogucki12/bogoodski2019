import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    background: {
        minWidth: '100vw',
        minHeight: '100vh',
        backgroundColor: '#000000',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    },
    contentBackground: {
        width: '90%',
        minHeight: '90%',
        background: 'linear-gradient(#1b5e20 70% ,  white 30%)',
        borderRadius: '25px'
    },
    initialContentContainer: {
        margin: '2px',
        borderRadius: '25px',
        backgroundColor: '#000000',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        padding: theme.spacing.unit
    },
    button: {
        margin: theme.spacing.unit,
    }
});

class DatingQuestionHome extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            introNumber: 0
        }
    }

    handleButtonClick = () => {
        this.setState({
            introNumber: 1
        });
    };

    render() {
        const { classes } = this.props;
        const introContent = [
            {
                "id": 0,
                "text": "Unfortunately, the (fake) dating app is currently under construction. 👷",
                "text2": "",
                "buttonText": "But..."
            },
            {
                "id": 1,
                "text": "In the interim, I threw together this brief questionnaire that I promise will reveal your perfect match.",
                "text2": "The entire exercise will only take a few minutes.  Of course, the matches are fake and none of your data is (are?) retained (and all of this is absurd 😜).",
                "buttonText": "Let's Do it!"
            }
        ]

        const index = this.state.introNumber;

        const initialContent =
            <div className={classes.initialContentContainer}>
                <Typography
                    variant="body1"
                    style={{ color: '#FFFFFF' }}
                    gutterBottom
                    align="center"
                >
                    {introContent[index].text}
                </Typography>
                <Typography
                    variant="caption"
                    style={{ color: '#FFFFFF' }}
                    gutterBottom
                    align="center"
                >
                    {introContent[index].text2}
                </Typography>
                <Button
                    variant="outlined"
                    color="primary"
                    className={classes.button}
                    onClick={this.handleButtonClick}
                >
                    {introContent[index].buttonText}
                </Button>
            </div>;


        return (
            <div className={classes.background}>
                <div className={classes.contentBackground}>
                    {initialContent}
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(DatingQuestionHome);