import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const styles = theme => ({
    root: {       
        backgroundColor: theme.palette.background.paper,
        display: 'flex',
        flexDirection: 'column', 
        justifyContent: 'flex-start', 
        alignItems: 'flex-start'
    },
});

class CheatCodeVol1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        fetch('/api/getmusic?name=cheatCodeVol1')
            .then(response => {
                return response.json();
            })
            .then(myJson => {
                this.setState({
                    data: myJson
                })                
            });
    }

    render() {
        const { classes } = this.props;
        const data = this.state.data;
        const list = data.map((track) =>
            <ListItem key={track.id} style={{
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'flex-start'
            }}>
                <ListItemText primary={track.artist} secondary={track.trackTitle} />
                <a href={track.trackLink} target="_blank">
                    <ListItemText secondary="Purchase on Beatport" />
                </a>
            </ListItem>
        );

        return (
            <List className={classes.root} dense={true}>
                {list}
            </List>
        )
    }
}

export default withStyles(styles)(CheatCodeVol1);