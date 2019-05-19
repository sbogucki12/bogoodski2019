import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ExpandMore from '@material-ui/icons/ExpandMoreRounded';
import ExpandLess from '@material-ui/icons/ExpandLessRounded';
import runArchiveData from './runArchiveData.json';
import Moment from 'react-moment';

const styles = theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '2%'
    },
    paperRoot: {
        backgroundColor: theme.palette.background.paper,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
        width: '100%'
    },
    button: {
        margin: theme.spacing.unit,
    },
    listHeader: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        margin: '1%',
    },
    listItemStyle: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        flexDirection: 'column',
        margin: '1%'
    }
});

class RunArchiveListPrimary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            runData: runArchiveData,
            sliceIndex: 10
        }
    };

    handleSort = name => {
        if (name === 'distance') {
            const listData = this.state.runData;
            const sortedListData = listData.sort((a, b) => {
                return a.distance - b.distance
            });

            this.setState({
                runData: sortedListData
            });
        };
        if (name === 'date') {
            const listData = this.state.runData;
            const sortedListData = listData.sort((a, b) => {
                return b.id - a.id
            });

            this.setState({
                runData: sortedListData
            });
        };
        if (name === 'pace') {
            const listData = this.state.runData;
            const sortedListData = listData.sort((a, b) => {
                return (a.duration / a.distance) - (b.duration / b.distance)
            });

            this.setState({
                runData: sortedListData
            });
        };
    };

    showMore = () => {
        let sliceData = runArchiveData;
        let sliceIndex = this.state.sliceIndex + 10;

        sliceData = sliceData.slice(0, sliceIndex);
        this.setState({
            sliceIndex: sliceIndex,
            runData: sliceData
        });
    };

    showLess = () => {
        let sliceData = runArchiveData;
        let sliceIndex = 10

        sliceData = sliceData.slice(0, sliceIndex);
        this.setState({
            sliceIndex: sliceIndex,
            runData: sliceData
        });
    };

    componentDidMount() {
        let dataToSlice = runArchiveData.sort((a, b) => {
            b.id - a.id
        });
        let sliceIndex = this.state.sliceIndex;
        dataToSlice = dataToSlice.slice(0, sliceIndex);
        this.setState({
            runData: dataToSlice
        });
    }

    render() {
        const { classes } = this.props;
        const listData = this.state.runData;
        let showButton = null;

        if (listData.length >= runArchiveData.length - 9) {
            showButton =
                <ExpandLess className={classes.button} onClick={this.showLess}>
                    {`Most Recent Ten`}
                </ExpandLess>;
        }

        if (listData.length <= runArchiveData.length - 10) {
            showButton =
                <ExpandMore className={classes.button} onClick={this.showMore}>
                    {`Show Ten More`}
                </ExpandMore>;
        }

        const listDisplay =
            listData.map(item => (
                <ListItem key={item.id} style={{ flexDirection: 'row', fontSize: '3vw' }}>
                    <span style={{ width: '20%', textAlign: 'center' }}><Moment format="MM/DD/YY">{item.date}</Moment></span>
                    <span style={{ width: '20%', textAlign: 'center' }}>{item.distance}</span>
                    <span style={{ width: '20%', textAlign: 'center' }}>{item.duration}</span>
                    <span style={{ width: '20%', textAlign: 'center' }}>{(item.duration / item.distance).toFixed(2)}</span>
                    <span style={{ width: '20%', textAlign: 'center' }}>{item.comment}</span>
                </ListItem>
            ));

        return (
            <div className={classes.root}>
                <Paper className={classes.paperRoot} elevation={6} >
                    <Typography variant="subtitle" style={{ fontSize: '4vw' }} gutterBottom>
                        {`Archive`}
                    </Typography>
                    <Typography variant="caption" style={{ fontSize: '2vw' }} gutterBottom>
                        {`Sort By:`}
                    </Typography>
                    <div style={{ flexDirection: 'row', textAlign: 'center' }}>
                        <Button variant="outlined" color="secondary" size="small" className={classes.button} onClick={() => this.handleSort('date')}>
                            {`Date`}
                        </Button>
                        <Button variant="outlined" color="secondary" size="small" className={classes.button} onClick={() => this.handleSort('distance')}>
                            {`Distance`}
                        </Button>
                        <Button variant="outlined" color="secondary" size="small" className={classes.button} onClick={() => this.handleSort('pace')}>
                            {`Pace`}
                        </Button>
                    </div>
                    <div className={classes.listHeader}>
                        <span style={{ width: '20%', textAlign: 'center' }}><Typography variant="caption" style={{ fontSize: '2vw' }} gutterBottom>{`Date`}</Typography></span>
                        <span style={{ width: '20%', textAlign: 'center' }}><Typography variant="caption" style={{ fontSize: '2vw' }} gutterBottom>{`Distance (in miles)`}</Typography></span>
                        <span style={{ width: '20%', textAlign: 'center' }}><Typography variant="caption" style={{ fontSize: '2vw' }} gutterBottom>{`Duration (in minutes)`}</Typography></span>
                        <span style={{ width: '20%', textAlign: 'center' }}><Typography variant="caption" style={{ fontSize: '2vw' }} gutterBottom>{`Pace (min per mile)`}</Typography></span>
                        <span style={{ width: '20%', textAlign: 'center' }}><Typography variant="caption" style={{ fontSize: '2vw' }} gutterBottom>{`Comment`}</Typography></span>
                    </div>
                    <List className={classes.listItemStyle}>
                        {listDisplay}
                    </List>
                    {showButton}
                </Paper>
            </div>
        );
    }
};

export default withStyles(styles)(RunArchiveListPrimary);

