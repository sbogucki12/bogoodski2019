import React from 'react'; 
import CheatCodeVol1Main from './CheatCodeVol1Main';

class DjMain extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            album: 'cheatCodeVol1'
        }
    }

    render() {        
        let content; 
        const album = this.state.album;

        switch(album) {
            case 'cheatCodeVol1':
                content = <CheatCodeVol1Main />;
                break;
            
            default: 
                content = <div><br /><br /><br /><br />'No Tracklist Found'</div>
            }
        

        return content; 
    }
}

export default DjMain; 