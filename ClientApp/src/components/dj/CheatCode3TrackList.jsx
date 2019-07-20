import React from "react";
const data = require("./cheatCode3DummyData.json");

class CheatCode3TrackList extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {
             tracklist: data
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick = (e, id) => {
        e.preventDefault();
        console.log(id);
        let trackList = this.state.tracklist; 
        
        const newTrackList = trackList.splice(id, 1);
        this.setState({
            trackList: newTrackList
        });
    }

    handleAddClick = (e, trackData) => {
        e.preventDefault(); 

        let trackList = this.state.tracklist; 
        let newTrackList = trackList.push(trackData);

        this.setState({
            trackList: newTrackList
        })
    }
    

    

    render() {
        const trackList = this.state.tracklist;
        const trackData = { "id": 5, "artist": "Artist 5", "title": "title 5", "url": "http://cnn.com" };
        

        
        const trackListDisplay =
            trackList.map(track => (
                <li key={track.id} style={{ color: '#FFFFFF' }}>
                        <p>{track.title}</p>
                        <p>{track.artist}</p>
                    <p>{track.url}</p>                    
                    <button value={track.id} onClick={(e) => this.handleClick(e, track.id)}>
                        {`Click me`}
                    </button>
                    </li >)
    )
     

    return (
            <div style={{ marginTop: '20vh', backgroundColor: '#000000', minHeight: '100vh', minWidth: '100vw', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                <ul>
                {trackListDisplay}
            </ul>
            
            <button value={trackData} onClick={(e) => this.handleAddClick(e, trackData)}>
                {`Click me`}
            </button>
               
            </div>

        ); 
    }
}

export default CheatCode3TrackList;