import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import runArchiveData from './runArchiveData.json';
import Moment from 'react-moment';

const styles = theme => ({
    root: {
        width: '100vw',
        backgroundColor: theme.palette.background.paper,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    listHeader: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '25vh',
        width: '90%'
    },
    listItemStyle: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
        flexDirection: 'column'
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
    }

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
        console.log(`listdata: ${listData.length}`)
        console.log(`archiveData: ${runArchiveData.length}`)

        if (listData.length >= runArchiveData.length - 9) {
            showButton =
                <button onClick={this.showLess}>
                    {`Most Recent Ten`}
                </button>;
        }

        if (listData.length <= runArchiveData.length - 10) {
            showButton =
                <button onClick={this.showMore}>
                    {`Show Ten More`}
                </button>;
        }

        const listDisplay =
            listData.map(item => (
                <ListItem key={item.id} style={{ flexDirection: 'row' }}>
                    <span style={{ width: '20%' }}><Moment format="MM/DD/YY">{item.date}</Moment></span>
                    <span style={{ width: '20%' }}>{item.distance}</span>
                    <span style={{ width: '20%' }}>{item.duration}</span>
                    <span style={{ width: '20%' }}>{(item.duration / item.distance).toFixed(2)}</span>
                    <span style={{ width: '20%' }}>{item.comment}</span>
                </ListItem>
            ));

        return (
            <div className={classes.root}>
                <div className={classes.listHeader}>
                    <span style={{ width: '20%' }}>{`Date`}</span>
                    <span style={{ width: '20%' }}>{`Distance (in miles)`}</span>
                    <span style={{ width: '20%' }}>{`Duration (in minutes)`}</span>
                    <span style={{ width: '20%' }}>{`Pace (min per mile)`}</span>
                    <span style={{ width: '20%' }}>{`Comment`}</span>
                </div>
                <List className={classes.listItemStyle}>
                    {listDisplay}
                </List>
                <div style={{ flexDirection: 'row' }}>
                    <button onClick={() => this.handleSort('distance')}>
                        {`Sort by distance`}
                    </button>
                    <button onClick={() => this.handleSort('pace')}>
                        {`Sort by pace`}
                    </button>
                    <button onClick={() => this.handleSort('date')}>
                        {`Sort by date`}
                    </button>
                    {showButton}
                </div>
            </div>
        );
    }
};

export default withStyles(styles)(RunArchiveListPrimary);

