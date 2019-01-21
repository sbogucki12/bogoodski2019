import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import { Link } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import NextIcon from '@material-ui/icons/NavigateNext';
import BackIcon from '@material-ui/icons/NavigateBefore';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const styles = theme => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '20vh',
        minWidth: '100vw'

    },
    paper: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
        width: '80%'
    },
    content: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
    },
    buttonContainer: {
        display: 'flex',
        justifyContent: 'flex-end'
    },
    button: {
        margin: theme.spacing.unit
    }
});

class ResumeMain extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 0
        }
    };

    render() {
        const { classes } = this.props;

        const resumeData =
            [
                {   
                    id: 0, 
                    header: "Introduction",
                    summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vestibulum vehicula nunc eget tincidunt. Mauris lobortis, neque a consequat venenatis, magna purus ornare dui, vel pulvinar nulla dolor nec augue. Integer',
                    duties: ['is eu metus sollicitudin fringilla. Proin elit orci, viver', 'mentum quis orci. Cras felis ligula, eleif', 'cursus ullamcorper erat. Duis pretium odio vel libero aliquet, id ornare magna maximus. Suspendisse pellentesque gravida ', 'sem in, convallis mi. In sagittis dictum']
                },
                {
                    id: 1,
                    header: "Job 1",
                    summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vestibulum vehicula nunc eget tincidunt. Mauris lobortis, neque a consequat venenatis, magna purus ornare dui, vel pulvinar nulla dolor nec augue. Integer',
                    duties: ['is eu metus sollicitudin fringilla. Proin elit orci, viver', 'mentum quis orci. Cras felis ligula, eleif', 'cursus ullamcorper erat. Duis pretium odio vel libero aliquet, id ornare magna maximus. Suspendisse pellentesque gravida ', 'sem in, convallis mi. In sagittis dictum']
                },
                {
                    id: 2,
                    header: "Job 2",
                    summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vestibulum vehicula nunc eget tincidunt. Mauris lobortis, neque a consequat venenatis, magna purus ornare dui, vel pulvinar nulla dolor nec augue. Integer',
                    duties: ['is eu metus sollicitudin fringilla. Proin elit orci, viver', 'mentum quis orci. Cras felis ligula, eleif', 'cursus ullamcorper erat. Duis pretium odio vel libero aliquet, id ornare magna maximus. Suspendisse pellentesque gravida ', 'sem in, convallis mi. In sagittis dictum']
                },
                {
                    id: 3,
                    header: "Job 3",
                    summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vestibulum vehicula nunc eget tincidunt. Mauris lobortis, neque a consequat venenatis, magna purus ornare dui, vel pulvinar nulla dolor nec augue. Integer',
                    duties: ['is eu metus sollicitudin fringilla. Proin elit orci, viver', 'mentum quis orci. Cras felis ligula, eleif', 'cursus ullamcorper erat. Duis pretium odio vel libero aliquet, id ornare magna maximus. Suspendisse pellentesque gravida ', 'sem in, convallis mi. In sagittis dictum']
                },
                {
                    id: 4,
                    header: "Job 4",
                    summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vestibulum vehicula nunc eget tincidunt. Mauris lobortis, neque a consequat venenatis, magna purus ornare dui, vel pulvinar nulla dolor nec augue. Integer',
                    duties: ['is eu metus sollicitudin fringilla. Proin elit orci, viver', 'mentum quis orci. Cras felis ligula, eleif', 'cursus ullamcorper erat. Duis pretium odio vel libero aliquet, id ornare magna maximus. Suspendisse pellentesque gravida ', 'sem in, convallis mi. In sagittis dictum']
                },
            ];

        const onNext = () => {
            this.setState((prevState) => ({
                page: prevState.page + 1
            }))
        };

        const onBack = () => {
            this.setState((prevState) => ({
                page: prevState.page - 1
            }))
        };
        const arrow =
            <Fab onClick={onNext} color="primary" className={classes.button} >
                <NextIcon />
            </Fab>;

        const backArrow = 
            <Fab onClick={onBack} color="secondary" className={classes.button} >
                <BackIcon />
            </Fab>;

        const showArrow = () => {
            if (this.state.page < resumeData.length - 1) {
                return arrow;
            } else {
                return null;
            }
        }

        const showBackArrow = () => {
            if (this.state.page > 0) {
                return backArrow;
            } else {
                return null;
            }
        }

        const index = this.state.page;

        const dutiesList = resumeData[index].duties;

        const displayList = dutiesList.map(duty => {
            
            return (
                <List dense>
                    <ListItem key={duty}>
                        <ListItemText primary={duty} />
                    </ListItem>
                </List>
                )
        })

        

        return (

            <div className={classes.root}>
                <Paper className={classes.paper} elevation={6}>
                    <div className={classes.content}>
                        <Typography variant="h2" align='center' gutterBottom>
                            {resumeData[index].header}
                        </Typography>

                        <Typography variant="body1" gutterBottom>
                            {resumeData[index].summary}
                        </Typography>

                        {displayList}
                    </div>
                    <div className={classes.buttonContainer}>
                        <Button
                            variant="outlined"
                            size="small"
                            color="secondary"
                            component={Link} to="/"
                            className={classes.button}
                          
                        >
                            {`Home`}
                        </Button>
                        {showBackArrow()}
                        {showArrow()}
                    </div>
                </Paper>
            </div>
        );
    }
}

export default withStyles(styles)(ResumeMain);