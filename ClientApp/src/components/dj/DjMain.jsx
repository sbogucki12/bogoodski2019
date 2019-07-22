import React from 'react';
import CheatCodeVol1Main from './CheatCodeVol1Main';
import CheatCodeVol2Main from './CheatCodeVol2Main';

class DjMain extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            album: 'cheatCodeVol2'
        }
    }    

    getVol2 = () => {
        this.setState({
            album: 'cheatCodeVol2'
        })
    }

    getVol1 = () => {
        this.setState({
            album: 'cheatCodeVol1'
        })
    }

    render() {
        let content;
        const album = this.state.album;

        switch (album) {
            case 'cheatCodeVol1':
                content = <CheatCodeVol1Main getVol2={this.getVol2} />;
                break;
            case 'cheatCodeVol2':
                content = <CheatCodeVol2Main getVol1={this.getVol1} />
                break;
            default:
                content = <div><br /><br /><br /><br />'No Tracklist Found'</div>
        }

        return content;
    }
}

export default DjMain; 