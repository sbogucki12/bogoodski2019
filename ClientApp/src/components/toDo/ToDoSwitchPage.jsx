import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

const styles = theme => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        background: `linear-gradient(0deg, rgba(255,255,255,0.6730042358740371) 23%, rgba(94,133,88,0.9363095580028886) 86%);`,
        width: '100vw',
        height: '100vh'
    },
    paperRoot: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
        width: '80%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: '5px solid rgba(247, 170, 192, 1)',
        boxShadow: `0 0 3px 3px rgba(236, 180, 85, 1)`,
        borderRadius: 5,
        flexDirection: 'column',
        marginTop: '30vh',
        marginBottom: '2%'
    },
    button: {
        margin: theme.spacing.unit,
    }
});

const ToDoSwitchPage = props => {
    const { classes } = props;

    return (
        <div className={classes.root}>
            <div className={classes.paperRoot}>
                <Typography style={{ fontSize: '8vw', fontFamily: `'Nova Flat', cursive` }}>{`2Do App`}</Typography>
                <Typography style={{ fontSize: '2vw' }}>
                    <ul>
                        <li>{`Designed, implemented in 4 days in response to coding challenge;`}</li>
                        <li>{`.NET Core 2.2 backend, ReactJS 16.8 SPA, deployed to Microsoft Azure;`}</li>
                        <li>{`Required animation, use of localStorage, and font icons;`}</li>
                        <li>{`Completed 2Dos can be shared via twitter;`}</li>
                        <li>{`CSS FlexBox for dynamic resizing;`}</li>
                        <li>{`Material-UI for styling, including withStyles higher order component for theme;`}</li>
                        <li>{`Completed May 10, 2019.`}</li>
                    </ul>
                </Typography>
                <a href="http://2do.azurewebsites.net/" target="_blank" rel="noreferrer noopener" style={{ textDecoration: 'none' }}>
                    <Button variant="contained" color="primary" className={classes.button}>
                        {`Open`}
                    </Button>
                </a>
                <Typography variant="caption" >
                    {`Opens in new window.`}
                </Typography>
            </div>
            <Button variant="contained" color="secondary" className={classes.button} component={Link} to='/'>
                {`Home`}
            </Button>
        </div>
    )
}
export default withStyles(styles)(ToDoSwitchPage);