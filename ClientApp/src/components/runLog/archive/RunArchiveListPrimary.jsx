import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import runArchiveData from './runArchiveData.json';

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
            runData: runArchiveData
        }
    };

    handleDistanceSort = () => {
        const listData = this.state.runData;
        const sortedListData = listData.sort((a, b) => {
            return a.distance - b.distance
        })
        this.setState({
            runData: sortedListData
        });
    };

    handleDateSort = () => {
        const listData = this.state.runData;
        const sortedListData = listData.sort((a, b) => {
            return a.id - b.id
        })
        this.setState({
            runData: sortedListData
        });       
    };

    render() {

        const { classes } = this.props;
        const listData = this.state.runData;
        const listDisplay =
            listData.map(item => (
                <ListItem key={item.id} style={{ flexDirection: 'row'}}>
                    <span style={{ width: '25%' }}>{item.date}</span>
                    <span style={{ width: '25%' }}>{item.distance}</span>
                    <span style={{ width: '25%' }}>{item.duration}</span>
                    <span style={{ width: '25%' }}>{item.comment}</span>
                </ListItem>
            ));

        return (
            <div className={classes.root}>
                <div className={classes.listHeader}>
                    <span style={{ width: '25%' }}>{`Date`}</span>
                    <span style={{ width: '25%' }}>{`Distance`}</span>
                    <span style={{ width: '25%' }}>{`Duration`}</span>
                    <span style={{ width: '25%' }}>{`Comment`}</span>
                </div>
                <List className={classes.listItemStyle}>
                    {listDisplay}
                </List>
                <div style={{ flexDirection: 'row' }}>
                <button onClick={this.handleDistanceSort}>
                    {`Sort by distance`}
                </button>
                <button onClick={this.handleDateSort}>
                    {`Sort by date`}
                </button>
                </div>
            </div>
        );

    }
    
};

export default withStyles(styles)(RunArchiveListPrimary);

