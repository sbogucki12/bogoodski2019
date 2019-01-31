import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import './RunStyle.css';
import VisibilitySensor from 'react-visibility-sensor';

const styles = theme => ({
    root: {
        flexGrow: 1,
        display: "flex",
        justifyContent: "center"
    },
    runner: {
        fontSize: '10vh'
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
        let runner;

        const onChange = function (isVisible)  {
            if (isVisible != 'true') {
                runner =
                    console.log("not visible")
            } else {
                runner = console.log("visible")

            }
        };

        return (

            <div className={classes.root}>
                <VisibilitySensor onChange={onChange} scrollCheck={true} />
                {runner}
            </div>
        );
    }
}

export default withStyles(styles)(RunMain);
