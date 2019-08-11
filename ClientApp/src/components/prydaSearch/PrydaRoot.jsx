import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import * as prydaData from './prydaData';

const styles = {
  root: {
        display: 'flex', 
        marginTop: '17vh', 
        justifyContent: 'center', 
        alignItems: 'center'
  }
};

const PrydaRoot = props => {
    const { classes } = props;

    const [prydaDataInState, setPrydaDataInState] = useState(prydaData.default);
    const [inputSearchText, setInputSearchText] = useState("");   

    const submitSearch = e => {
        e.preventDefault;

        let dataArray = prydaData.default;

        const filteredPrydaData = dataArray.filter(track =>
            track.title.includes(inputSearchText) ||
            track.alias.includes(inputSearchText)
            );

        setPrydaDataInState(filteredPrydaData)
    };

    const list = prydaDataInState.map((data) =>
        <div key={data.id} style={{ margin: '1%' }}>
            <span style={{ margin: '1%' }}>{data.title}</span>
            <span style={{ margin: '1%' }}>{data.alias}</span>
            <span style={{ margin: '1%' }}>{data.youTube}</span>
        </div>
    );

    const content =
        <div className={classes.root}>
            <div>
                <input type="text" onChange={(e) => setInputSearchText(e.target.value)} value={inputSearchText} />
                <button onClick={submitSearch}>{`Search`}</button>
            </div>
            <div>
                {list}
            </div>
        </div>;

    return content;   
}

PrydaRoot.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PrydaRoot);