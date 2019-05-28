import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    root: {
        width: '100vw',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
    },
    paperRoot: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
        marginTop: '25vh',
        width: 290
    },
    topRow: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center'
    },
    middleRow: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center'
    },
    bottomRow: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center'
    },
});

class TicTacToeBoardPrimary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            boxes: ["", "", "", "", "", "", "", "", ""],
            computerWins: false,
            youWin: false
        }
    };

    getRandomIndex = (max) => {
        return Math.floor(Math.random() * Math.floor(max));
    }

    checkForComputerWin = () => {
        if (this.state.boxes[0] === "O" && this.state.boxes[1] === "O" && this.state.boxes[2] === "O") {
            this.setState({
                computerWins: true
            });
            return;
        }

        if (this.state.boxes[3] === "O" && this.state.boxes[4] === "O" && this.state.boxes[5] === "O") {
            this.setState({
                computerWins: true
            });
            return;
        }

        if (this.state.boxes[6] === "O" && this.state.boxes[7] === "O" && this.state.boxes[8] === "O") {
            this.setState({
                computerWins: true
            });
            return;
        }

        if (this.state.boxes[0] === "O" && this.state.boxes[3] === "O" && this.state.boxes[6] === "O") {
            this.setState({
                computerWins: true
            });
            return;
        }

        if (this.state.boxes[1] === "O" && this.state.boxes[4] === "O" && this.state.boxes[7] === "O") {
            this.setState({
                computerWins: true
            });
            return;
        }

        if (this.state.boxes[2] === "O" && this.state.boxes[5] === "O" && this.state.boxes[8] === "O") {
            this.setState({
                computerWins: true
            });
            return;
        }

        if (this.state.boxes[0] === "O" && this.state.boxes[4] === "O" && this.state.boxes[8] === "O") {
            this.setState({
                computerWins: true
            });
            return;
        }

        if (this.state.boxes[2] === "O" && this.state.boxes[4] === "O" && this.state.boxes[6] === "O") {
            this.setState({
                computerWins: true
            });
            return;
        }
    };

    handleClose = () => {
        this.setState({
            computerWins: false,
            youWin: false,
            boxes: ["", "", "", "", "", "", "", "", ""]
        });
    };

    computerMakesMove = () => {
        let newBoxes = [...this.state.boxes];
        if (this.state.boxes[0] === "X" && this.state.boxes[1] === "X" && this.state.boxes[2] === "X") {
            this.setState({
                youWin: true
            });
            return;
        }

        if (this.state.boxes[3] === "X" && this.state.boxes[4] === "X" && this.state.boxes[5] === "X") {
            this.setState({
                youWin: true
            });
            return;
        }

        if (this.state.boxes[6] === "X" && this.state.boxes[7] === "X" && this.state.boxes[8] === "X") {
            this.setState({
                youWin: true
            });
            return;
        }

        if (this.state.boxes[0] === "X" && this.state.boxes[3] === "X" && this.state.boxes[6] === "X") {
            this.setState({
                youWin: true
            });
            return;
        }

        if (this.state.boxes[1] === "X" && this.state.boxes[4] === "X" && this.state.boxes[7] === "X") {
            this.setState({
                youWin: true
            });
            return;
        }

        if (this.state.boxes[2] === "X" && this.state.boxes[5] === "X" && this.state.boxes[8] === "X") {
            this.setState({
                youWin: true
            });
            return;
        }

        if (this.state.boxes[0] === "X" && this.state.boxes[4] === "X" && this.state.boxes[8] === "X") {
            this.setState({
                youWin: true
            });
            return;
        }

        if (this.state.boxes[2] === "X" && this.state.boxes[4] === "X" && this.state.boxes[6] === "X") {
            this.setState({
                youWin: true
            });
            return;
        }

        let index = this.getRandomIndex(9);
        if (this.state.boxes[0] &&
            this.state.boxes[1] &&
            this.state.boxes[2] &&
            this.state.boxes[3] &&
            this.state.boxes[4] &&
            this.state.boxes[5] &&
            this.state.boxes[6] &&
            this.state.boxes[7] && this.state.boxes[8]) {
            newBoxes = ["", "", "", "", "", "", "", "", ""];
            this.setState({
                boxes: newBoxes
            });

            return;
        };

        if (this.state.boxes[index] === "") {
            newBoxes[index] = "O";
            setTimeout(() => {
                this.setState({
                    boxes: newBoxes
                });
                this.checkForComputerWin();
            }, 1000);

        } else if (this.state.boxes[index] === "X" || this.state.boxes[index] === "O") {
            index = this.getRandomIndex();
            this.computerMakesMove();
        };
    };

    onBoxSelect = value => {
        if (this.state.boxes[value]) {
            alert("try another box");
            return;
        } else {
            if (value === 0) {
                let myBoxes = [...this.state.boxes];
                myBoxes[0] = "X"
                this.setState({
                    boxes: myBoxes
                }, () => this.computerMakesMove());
            }
            if (value === 1) {
                let myBoxes = [...this.state.boxes];
                myBoxes[1] = "X"
                this.setState({
                    boxes: myBoxes
                }, () => this.computerMakesMove())
            };
            if (value === 2) {
                let myBoxes = [...this.state.boxes];
                myBoxes[2] = "X"
                this.setState({
                    boxes: myBoxes
                }, () => this.computerMakesMove())
            };
            if (value === 3) {
                let myBoxes = [...this.state.boxes];
                myBoxes[3] = "X"
                this.setState({
                    boxes: myBoxes
                }, () => this.computerMakesMove())
            };
            if (value === 4) {
                let myBoxes = [...this.state.boxes];
                myBoxes[4] = "X"
                this.setState({
                    boxes: myBoxes
                }, () => this.computerMakesMove())
            };
            if (value === 5) {
                let myBoxes = [...this.state.boxes];
                myBoxes[5] = "X"
                this.setState({
                    boxes: myBoxes
                }, () => this.computerMakesMove())
            };
            if (value === 6) {
                let myBoxes = [...this.state.boxes];
                myBoxes[6] = "X"
                this.setState({
                    boxes: myBoxes
                }, () => this.computerMakesMove())
            };
            if (value === 7) {
                let myBoxes = [...this.state.boxes];
                myBoxes[7] = "X"
                this.setState({
                    boxes: myBoxes
                }, () => this.computerMakesMove())
            };
            if (value === 8) {
                let myBoxes = [...this.state.boxes];
                myBoxes[8] = "X"
                this.setState({
                    boxes: myBoxes
                }, () => this.computerMakesMove())
            };
        }
    };

    render() {
        const { classes } = this.props;
        const box0 = this.state.boxes[0];
        const box1 = this.state.boxes[1];
        const box2 = this.state.boxes[2];
        const box3 = this.state.boxes[3];
        const box4 = this.state.boxes[4];
        const box5 = this.state.boxes[5];
        const box6 = this.state.boxes[6];
        const box7 = this.state.boxes[7];
        const box8 = this.state.boxes[8];
        let dialogTitle = "";
        let dialogText = "";
        let dialogIcon = "";
        const computerWins = this.state.computerWins;
        if (computerWins) {
            dialogTitle = "Sorry...";
            dialogText = "You lost.";
            dialogIcon = "🙁";
        };
        const youWin = this.state.youWin;
        if (youWin) {
            dialogTitle = "Congratulations!";
            dialogText = "You won!";
            dialogIcon = "🎉";
        };

        return (
            <div className={classes.root}>
                <Paper className={classes.paperRoot} elevation={6}>
                    <div className={classes.topRow}>
                        <button style={{ width: '30%', borderBottom: `6px solid black`, height: '45px' }} onClick={() => this.onBoxSelect(0)}>
                            {box0}
                        </button>
                        <button style={{ width: '30%', borderBottom: `6px solid black`, borderLeft: `6px solid black`, borderRight: `6px solid black`, height: '45px' }} onClick={() => this.onBoxSelect(1)}>
                            {box1}
                        </button>
                        <button style={{ width: '30%', borderBottom: `6px solid black`, height: '45px' }} onClick={() => this.onBoxSelect(2)}>
                            {box2}
                        </button>
                    </div>
                    <div className={classes.middleRow}>
                        <button style={{ width: '30%', borderBottom: `6px solid black`, height: '45px' }} onClick={() => this.onBoxSelect(3)}>
                            {box3}
                        </button>
                        <button style={{ width: '30%', borderBottom: `6px solid black`, borderLeft: `6px solid black`, borderRight: `6px solid black`, height: '45px' }} onClick={() => this.onBoxSelect(4)}>
                            {box4}
                        </button>
                        <button style={{ width: '30%', borderBottom: `6px solid black`, height: '45px' }} onClick={() => this.onBoxSelect(5)}>
                            {box5}
                        </button>
                    </div>
                    <div className={classes.bottomRow}>
                        <button style={{ width: '30%', height: '45px' }} onClick={() => this.onBoxSelect(6)}>
                            {box6}
                        </button>
                        <button style={{ width: '30%', borderLeft: `6px solid black`, borderRight: `6px solid black`, height: '45px' }} onClick={() => this.onBoxSelect(7)}>
                            {box7}
                        </button>
                        <button style={{ width: '30%', height: '45px' }} onClick={() => this.onBoxSelect(8)}>
                            {box8}
                        </button>
                    </div>
                </Paper>
                <Dialog
                    open={this.state.computerWins || this.state.youWin}
                    onClose={this.handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">{dialogTitle}</DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            {dialogText}
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary" autoFocus>
                            {dialogIcon}
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    };
}

export default withStyles(styles)(TicTacToeBoardPrimary);