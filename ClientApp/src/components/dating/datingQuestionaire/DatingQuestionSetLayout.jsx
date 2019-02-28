import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { questionSet } from './questionSet';
import matchData from './matchData/matchData';

const styles = theme => ({
    background: {
        width: '100%',
        minHeight: '100vh',
        backgroundColor: '#000000',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',

    },
    contentBackground: {
        width: '90%',
        minHeight: '90%',
        borderRadius: '25px',

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
    buttonContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        margin: theme.spacing.unit,
    },
    matchScreenContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#000000",
        minHeight: '100vh',
        paddingTop: '20%'

    },
    matchScreen: {
        marginTop: '15vh',
        minWidth: '60%',
        maxWidth: '90%',
        borderColor: theme.palette.primary.main,
        borderStyle: 'solid',
        borderWidth: '3px',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: "#000000",
        marginBottom: '5%'
    },
    imageContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    matchImage: {
        maxHeight: "600px",
        maxWidth: "90%",
        margin: theme.spacing.unit
    },
    matchName: {
        color: "#FFFFFF",
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
    }
});

class DatingQuestionSetLayout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            setNumber: 0,
            amountOfRed: 1,
            indexOfMatch: 0,
            yesCount: 0,
            showMatchButton: false,
            showMatchContent: false
        }
    }

    handleButtonClick = () => {
        if (this.state.amountOfRed <= 100) {
            this.setState((prevState) => ({
                amountOfRed: prevState.amountOfRed + 5,
                setNumber: prevState.setNumber + 1
            }));
        } else {
            this.setState({
                showMatchButton: true
            })
        }
    };

    handleYesButtonClick = () => {
        const questionSetLength = questionSet.length;

        if (this.state.yesCount >= questionSetLength) {
            return questionSetLength - 1
        };
        if (this.state.amountOfRed <= 100) {
            this.setState((prevState) => ({
                amountOfRed: prevState.amountOfRed + 5,
                setNumber: prevState.setNumber + 1,
                yesCount: prevState.yesCount + 1
            }));
            if (this.state.yesCount % 3 === 0) {
                this.setState(prevState => ({
                    indexOfMatch: prevState.indexOfMatch + 1
                }))
            }
        } else {
            this.setState({
                showMatchButton: true
            })
        }
    };

    handleShowMatch = () => {
        this.setState({
            showMatchContent: true
        })
    };

    render() {
        const { classes } = this.props;

        const index = this.state.setNumber;
        const amountOfRedInBorder = this.state.amountOfRed;
        const showMatchButton = this.state.showMatchButton;
        const showMatchContent = this.state.showMatchContent;
        const indexOfMatch = this.state.indexOfMatch;

        const yesNoButtons =
            <div className={classes.buttonContainer}>
                <Button
                    variant="outlined"
                    color="primary"
                    className={classes.button}
                    onClick={this.handleYesButtonClick}
                >
                    {`Yes`}
                </Button>
                <Button
                    variant="outlined"
                    color="secondary"
                    className={classes.button}
                    onClick={this.handleButtonClick}
                >
                    {`No`}
                </Button>
            </div>;

        const ButtonShowMatch =
            <div className={classes.buttonContainer}>
                <Button
                    variant="outlined"
                    color="primary"
                    className={classes.button}
                    onClick={this.handleShowMatch}
                >
                    {`Show My Match!`}
                </Button>
            </div>;

        const initialContent =
            <div className={classes.initialContentContainer}>
                <Typography
                    variant="body1"
                    style={{ color: '#FFFFFF' }}
                    gutterBottom
                    align="center"
                >
                    {questionSet[index].text}
                </Typography>
                {showMatchButton ? ButtonShowMatch : yesNoButtons}
            </div>;

        const matchContent =
            <div className={classes.matchScreenContainer}>
                <div className={classes.matchScreen}>
                    <Typography variant="h6" gutterBottom align="center" style={{ color: '#FFFFFF' }}>
                        {`Congratulations!`}
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom align="center" style={{ color: '#FFFFFF' }}>
                        {`You've matched with...`}
                    </Typography>
                    <div className={classes.imageContainer}>
                        <img src={matchData[indexOfMatch].image} className={classes.matchImage} alt={`${matchData[indexOfMatch].name}`} />
                    </div>
                    <div className={classes.matchName}>
                        <Typography variant="h3" gutterBottom align="center" style={{ color: '#FFFFFF' }}>
                            {`${matchData[indexOfMatch].name}!`}
                        </Typography>
                        <Typography variant="caption" gutterBottom align="center" style={{ color: '#FFFFFF' }}>
                            {`Please direct complaints to our Department of Advanced Algorithmic Research:`}
                            <a href="https://www.linkedin.com/in/sbogucki12/" target="_blank" rel="noopener noreferrer">
                                {`HERE`}
                            </a>
                        </Typography>
                    </div>
                </div>
            </div>

        return (
            <div className={classes.background}>
                <div className={classes.contentBackground} style={{ background: `linear-gradient(#FF1493 ${amountOfRedInBorder}%,  white 30%)` }}>
                    {showMatchContent ? matchContent : initialContent}
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(DatingQuestionSetLayout);