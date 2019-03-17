import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import './RunStyle.css';
import { Link } from 'react-router-dom';

const styles = theme => ({
    root: {
        flexGrow: 1,
        display: "flex",
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    runner: {
        alignSelf: 'flex-end',
        fontSize: '18vh'
    },
    rightColumn: {
        flexDirection: 'column',
        marginTop: theme.spacing.unit * 5
    },
    rightTop: {
        marginLeft: theme.spacing.unit
    },
    rightBottom: {
        marginLeft: theme.spacing.unit
    },
    runText: {
        fontFamily: `'Montserrat', sans-serif`
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

        return (
            <div className={classes.root}>
                <div className={classes.runner}>
                    {`🏃`}
                </div>
                <div className={classes.rightColumn}>
                    <div className={classes.rightTop}>
                        <h3 style={{ fontFamily: `'Montserrat', sans-serif` }}>
                            {`{ run with me }`}
                        </h3>
                    </div>
                    <div className={classes.rightBottom}>
                        <Button
                            variant="contained"
                            color="primary"
                            size="small"
                            className={classes.button}
                            component={Link}
                            to="/runlog"
                        >
                            {`Click to View`}
                        </Button>
                    </div>
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(RunMain);
