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
    buttonContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        margin: theme.spacing.unit,
    }
});

class DatingQuestionSetLayout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            setNumber: 0, 
            amountOfRed: 1,
            isGritty: false
        }
    }

    handleButtonClick = () => {
        this.setState((prevState) => ({
            amountOfRed: prevState.amountOfRed + 10,
            setNumber: prevState.setNumber + 1
        }));
    };

    render() {
        const { classes } = this.props;
        const questionSet = [
            {
                "id": 0, 
                "text": "The \"g\" in gif is pronounced like the \"g\" in gym. You agree?"
            },
            {
                "id": 1,
                "text": "You agree that the behavior of entangled particles in a quantum system is indeed \"Spooky Action at a Distance\""
            },
            {
                "id": 2,
                "text": "Bradley Cooper?"
            },
            {
                "id": 3,
                "text": "You prefer La Croix to merlot, Kombucha to IPA"                
            },
            {
                "id": 4,
                "text": "questionSet[6] is undefined?"
            },
            {
                "id": 5,
                "text": "If you agree that Roux isn't not the greatest dog ever, click \"No\""
            },
            {
                "id": 6,
                "text":  "That dress was totally white and gold, right?"
            },
            {
                "id": 7,
                "text": "In a retroactive quadrihydrant, the zilly go zoop?"
            }, 
            {
                "id": 8, 
                "text": "The thought that your \"15 Minutes of Fame\" is still to come is a notion that seems intimidating?"
            },
            {
                "id": 9,
                "text": "Are you not entertained?"
            },
            {
                "id": 10,
                "text": "Click Yes if the Pittsburgh Penguins are the worst ever. Also click No if the Dallas Cowboys are the worst ever."
            }

      
        ]

        const index = this.state.setNumber;
        const amountOfRedInBorder = this.state.amountOfRed;

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
                <div className={classes.buttonContainer}>
                    <Button
                        variant="outlined"
                        color="primary"
                        className={classes.button}
                        onClick={this.handleButtonClick}
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
                </div>
            </div>;

        
        return (
            <div className={classes.background}>
                <div className={classes.contentBackground} style={{ background: `linear-gradient(#FF1493 ${amountOfRedInBorder}%,  white 30%)`}}>
                    {initialContent}
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(DatingQuestionSetLayout);