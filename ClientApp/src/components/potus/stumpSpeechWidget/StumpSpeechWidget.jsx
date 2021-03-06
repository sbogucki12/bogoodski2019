﻿import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import PotusStump1 from './PotusStump1';
import PotusStump2 from './PotusStump2';
import PotusStump3 from './PotusStump3';
import PotusStump4 from './PotusStump4';
import PotusStump5 from './PotusStump5';
import PotusMeme from './PotusMeme';
import PotusStumpButton from './PotusStumpButton';
import PotusStumpCliffs from './PotusStumpCliffs';

const styles = theme => ({
    stumpContainer: {
        display: 'flex',
        alignItems: 'center',        
    }
});

class StumpSpeechWidget extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            screenNumber: 0
        }
    }

    //TODO: Make array of Stump screens. 
    //Map through appropriately
    //Remove unneeded code (screen files)
    //delete cringy comments
    handleOnNext = () => {
        this.setState(prevState => ({
            screenNumber: prevState.screenNumber + 1
        }))
    }

    handleOnHome = () => {
        this.setState({
            screenNumber: 0
        })
    }

    render() {
        const { classes } = this.props;

        const screenNumber = this.state.screenNumber;
        let stumpContent = <PotusStumpButton />;

        //I swear Ill clean this up later!
        //I was planning and implementing at the stream of thought here
        //Like this whole thing defies DRY - I know!!! 
        // Embarassing but I have to catch this thought while its present. 
        // :) 
        switch (screenNumber) {
            case 0:
                stumpContent = <PotusStumpButton onNext={this.handleOnNext} />
                break;
            case 1:
                stumpContent = <PotusStumpCliffs onNext={this.handleOnNext} />
                break;
            case 2:
                stumpContent = <PotusStump1 onNext={this.handleOnNext} />;
                break;
            case 3:
                stumpContent = <PotusStump2 onNext={this.handleOnNext} />
                break;
            case 4:
                stumpContent = <PotusStump3 onNext={this.handleOnNext} />
                break;
            case 5:
                stumpContent = <PotusStump4 onNext={this.handleOnNext} />
                break;
            case 6:
                stumpContent = <PotusStump5 onNext={this.handleOnNext} />
                break;
            case 7:
                stumpContent = <PotusMeme onHome={this.handleOnHome} />
                break;
            default:
                stumpContent = <PotusStump1 onNext={this.handleOnNext} />
        }

        return (
            <div className={classes.stumpContainer}>
                {stumpContent}
            </div>
        )
    }
}

export default withStyles(styles)(StumpSpeechWidget);