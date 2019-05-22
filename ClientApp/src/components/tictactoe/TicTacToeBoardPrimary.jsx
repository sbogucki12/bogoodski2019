import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

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
            box0: "",
            box1: "",
            box2: "",
            box3: "",
            box4: "",
            box5: "",
            box6: "",
            box7: "",
            box8: "", 
            winner: false
        }
    };

    onBoxSelect = value => {
        if (this.state.box0 === "X" && this.state.box1 === "X" && value === 2) {
            this.setState({
                box1: "X", 
                winner: true
            })
        }
        if (value === 0) {
            this.setState({
                box0: "X"
            })
        };
        if (value === 1) {
            this.setState({
                box1: "X"
            })
        };
        if (value === 2) {
            this.setState({
                box2: "X"                
            })
        };
        if (value === 3) {
            this.setState({
                box3: "X"
            })
        };
        if (value === 4) {
            this.setState({
                box4: "X"
            })
        };
        if (value === 5) {
            this.setState({
                box5: "X"
            })
        };
        if (value === 6) {
            this.setState({
                box6: "X"
            })
        };
        if (value === 7) {
            this.setState({
                box7: "X"
            })
        };
        if (value === 8) {
            this.setState({
                box8: "X"
            })
        };
    };



    handleClose = () => {
        this.setState({
            box0: "",
            box1: "",
            box2: "", 
            box3: "",
            box4: "",
            box5: "",
            box6: "",
            box7: "",
            box8: "",
            winner: false
        });
    };

    render() {
        const { classes } = this.props;
        const box0 = this.state.box0;
        const box1 = this.state.box1;
        const box2 = this.state.box2;
        const box3 = this.state.box3;
        const box4 = this.state.box4;
        const box5 = this.state.box5;
        const box6 = this.state.box6;
        const box7 = this.state.box7;
        const box8 = this.state.box8;   

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
                    <Dialog
                        open={this.state.winner}
                        onClose={this.handleClose}
                        aria-labelledby="You win!"
                        aria-describedby="You won this game of Tic Tac Toe"
                    >
                        <DialogTitle id="alert-dialog-title">{`Congratulations!`}</DialogTitle>
                        <DialogContent>
                            <DialogContentText id="You win!">
                                {`You've won this game of Tic Tac Toe!`}
                            </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={this.handleClose} color="primary" autoFocus>
                                {`🎉`}
                            </Button>
                        </DialogActions>
                    </Dialog>
                </Paper>
            </div>
        );
    };    
}

export default withStyles(styles)(TicTacToeBoardPrimary);