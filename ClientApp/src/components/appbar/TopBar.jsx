import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import socialIcons from './socialImages/socialIcons';

const styles = theme => ({
    toolbar: {
        display: 'flex',
        justifyContent: 'center'
    },
    icon: {
        maxWidth: 48,
        maxHeight: 48,
        margin: theme.spacing.unit    
    }
});

function TopBar(props) {
    const { classes } = props;
    const showIcons = socialIcons.map(icon => {
        return (
            <a href={icon.link} target="_blank" key={icon.id}>
                <img src={icon.icon} alt={icon.alt} className={classes.icon} />
            </a>
        )
    })
    return (
        <div>
            <AppBar>
                <Toolbar className={classes.toolbar}>
                    <div>
                        {showIcons}
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default withStyles(styles)(TopBar);