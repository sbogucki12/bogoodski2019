import React, { useState, useEffect } from 'react';
import PicOfMe from './images/picofme.jpg';
import DrumRoll from './images/drumroll.gif';
import RollerCoaster from './images/rollercoaster.png';

function useFetch(url) {
    const [data, setData] = useState([]);

    async function fetchUrl() {
        const response = await fetch(url);
        const json = await response.json();
        setData(json);
    }
    useEffect(() => {
        fetchUrl();
    }, []);

    return [data];
}

function GetBlogPostHook() {

    const data = useFetch('api/getblog?id=1');
    let body = data[0].blogContent;
    let bodyPart2 = data[0].blogContentPart2;
    let bodyPart3 = data[0].blogContentPart3;
    let bodyPart4 = data[0].blogContentPart4;

    const html = { __html: body };
    const htmlPart2 = { __html: bodyPart2 };
    const htmlPart3 = { __html: bodyPart3 };
    const htmlPart4 = { __html: bodyPart4 };

    const title = data[0].blogTitle;

    return (
        <div style={{ margin: '2%' }}>
            <div style={{ marginTop: '25vh', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: `'Bungee Inline', cursive`, fontSize: '3vw', textAlign: 'center' }}>
                <b>{title}</b>
            </div>
            <div dangerouslySetInnerHTML={html} style={{ fontFamily: `font-family: 'Roboto', sans-serif` }} />
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img src={PicOfMe} alt="Me" style={{ height: 400, width: 225 }} />
            </div>
            <div dangerouslySetInnerHTML={htmlPart2} style={{ fontFamily: `font-family: 'Roboto', sans-serif` }} />
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img src={DrumRoll} alt="Drum Roll" style={{ height: 225, width: 225, alignSelf: 'center' }} />
            </div>
            <div dangerouslySetInnerHTML={htmlPart3} style={{ fontFamily: `font-family: 'Roboto', sans-serif` }} />
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img src={RollerCoaster} alt="Roller Coaster" style={{ height: 225, width: 225, alignSelf: 'center' }} />
            </div>
            <div dangerouslySetInnerHTML={htmlPart4} style={{ fontFamily: `font-family: 'Roboto', sans-serif` }} />
        </div>
    );
}

export default GetBlogPostHook;

