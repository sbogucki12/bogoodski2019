import React from 'react'; 
import "./WritesStyles.css";

const WritesMainPage = props => {
    const content = 
        <div id="pageBox">
            <h2 style={{ color: '#FFFFFF' }}> 
                {props.page}
            </h2>
        </div>

    return content; 
}

export default WritesMainPage