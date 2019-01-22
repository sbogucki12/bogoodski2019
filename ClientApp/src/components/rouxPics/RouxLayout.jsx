import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import rouxPics from './images/rouxPics';
import './rouxStyles.css';
import RouxDialog from './RouxDialog';

const styles = theme => ({
    root: {
        flexGrow: 1,
        padding: theme.spacing.unit * 2,
        marginTop: '7%',
        marginBottom: '5%',
        marginLeft: '20%'
    },
    logo: {
        fontFamily: `'Pacifico', cursive`,
        color: '#003300',
        fontSize: '2em',
        marginTop: '-2%',
        padding: 0
    },
    imageCell: {
        padding: 0,
        margin: 0
    }, 
    dialogRoot: {
        padding: theme.spacing.unit * 2,
        margin: theme.spacing.unit * 2
    }
});

class RouxLayout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            image: null
        };
    };

    openDialog = (image) => {
        let id = image.id;
        this.setState((prevState) => ({
            open: !prevState.open,
            image: id
        }))
    }

    closeDialog = () => {
        this.setState({
            open: false
        });
    };


    render() {
        const { classes } = this.props;

        const showDialog = this.state.open;
        const dialog =
            <div className={classes.dialogRoot}>
                <RouxDialog
                    open={this.state.open}
                    image={this.state.image}
                    closeDialog={this.closeDialog} />
            </div>;

        let showPics = rouxPics.map(image => {
            return (
                <Grid item md={2} key={image.id} className={classes.imageCell}>
                    <img class="imgRoux" src={image.url} alt={image.name} onClick={e => this.openDialog(image)} />
                </Grid>)
        })

        return (
            <React.Fragment>
                <div className={classes.root}>
                    <Grid container spacing={0}>
                        <Grid item xs={false} sm={3} md={1} />
                        <Grid item xs={12} sm={9} md={3} className={classes.logo} >
                            <h1>{`Roux`}</h1>
                        </Grid>
                        {showPics}
                    </Grid>
                </div>
                {showDialog ? dialog : null}
            </React.Fragment>
        );
    }
}

export default withStyles(styles)(RouxLayout);