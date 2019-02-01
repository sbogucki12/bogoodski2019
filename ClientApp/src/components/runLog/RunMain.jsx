import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import './RunStyle.css';

const styles = theme => ({
    root: {
        flexGrow: 1,
        display: "flex", 
        flexWrap: 'wrap',
        flexDirection: 'column',
        height: '70vh'
    },
    hiddenCellLeft: {
        flex: '0 0 15%'
    },
    leftColumn: {
        flex: '0 0 85%',
        alignSelf: 'flex-end'
    }, 
    hiddenCellRight: {
        paddingTop: '10%',
        flex: '0 0 30%'
    },
    rightTop: {
        flex: '0 0 10%', 
        marginLeft: theme.spacing.unit
    }, 
    bottomRight: {
        flex: '0 0 60%',
        marginLeft: theme.spacing.unit
    }, 
    runText: {
        fontFamily: `'Montserrat', sans-serif`, 
        
    },
    button: {
        margin: theme.spacing.unit
    }
});

class RunMain extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showRunLog: false
        }
    }

    toggleRunLog = () => {
        this.setState((prevState) => ({
            showRunLog: !prevState.showRunLog
        }))
    }

    render() {
        const { classes } = this.props;
        
        const RunnerIcon = String.fromCodePoint(0x1F3C3);
        const runner =
            <div className="runner">
                {RunnerIcon}
            </div>;

        return (

            <div className={classes.root}>
                <div className={classes.hiddenCellLeft} />
                <div className={classes.leftColumn}>
                    {runner}
                </div>
                <div className={classes.hiddenCellRight} />
                <div className={classes.rightTop}>
                    <h3 style={{ fontFamily: `'Montserrat', sans-serif`}}>
                        {`{ run with me }`}
                    </h3>
                </div>
                <div className={classes.bottomRight}>
                    <Button variant="contained" color="primary" size="small" className={classes.button}>
                        {`Click to View`}
                    </Button>
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(RunMain);
