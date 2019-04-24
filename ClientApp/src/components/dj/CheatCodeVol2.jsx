import React from 'react'; 

class CheatCodeVol2 extends React.Component {
    constructor(props) {
        super(props); 
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        fetch('/api/getmusic?name=cheatcodevol2')
            .then(response => response.json())
            .then(myJson => {
                this.setState({
                    data: myJson
                })
            })
    }

    render() {
        console.log(this.state.data);
        return <div><br /><br /><br /><br />{`Hi`}</div>
    }
}

export default CheatCodeVol2; 