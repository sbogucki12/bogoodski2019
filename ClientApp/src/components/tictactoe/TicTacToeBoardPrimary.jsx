import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

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
            boxes: ["", "", "", "", "", "", "", "", ""]
        }
    };

    getRandomIndex = (max) => {
        return Math.floor(Math.random() * Math.floor(max));
    }

    computerMakesMove = () => {
        let newBoxes = [...this.state.boxes];
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
                })
            }, 1000)
        } else if (this.state.boxes[index] === "X" || this.state.boxes[index] === "O") {
            index = this.getRandomIndex();
            this.computerMakesMove();
        };
    };

    onBoxSelect = value => {
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
            </div>
        );
    };
}

export default withStyles(styles)(TicTacToeBoardPrimary);