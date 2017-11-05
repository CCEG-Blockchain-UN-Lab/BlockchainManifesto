// var audio = require('simple-audio');

import './stylesheet.css';
import starsBackground from './starsBackground.jpg';
// import mainTheme from './mainTheme.mp3';
import _ from 'lodash';

function blockchainAlliance() {
    var element = document.createElement('div');
    element.innerHTML = '<h1>BLOCKCHAIN ALLIANCE FOR GOOD<sub>The Blockchain Manifesto</sub></h1>';
    return element;
}
function shortTimeAgo() {
    var element = document.createElement('div');
    element.innerHTML = '<p id="startA">A short time ago in a browser very,<BR> very close....</p>';
    return element;
}
function background() {
    var element = document.createElement('div');
    // Add the image to our existing div.
    var myStarsBackground = new Image();
    myStarsBackground.src = starsBackground;
    element.appendChild(myStarsBackground);
    return element;
}


const timeout = function (delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve()
        }, delay)
    })
}

async function timer (timeOut) {
    console.log('timer started')
    await Promise.resolve(timeout(timeOut));
    console.log('timer finished')
}

async function behave(){
    var theShortTimeAgo = shortTimeAgo();
    document.body.appendChild(theShortTimeAgo);
    await timer(5000);
    document.body.removeChild(theShortTimeAgo);

    var soundTrack = document.getElementById("soundTrack");
    soundTrack.play();
    document.body.appendChild(background());

    var theBlockchainAlliance = blockchainAlliance();
    document.body.appendChild(theBlockchainAlliance);
    await timer(5000);
    document.body.removeChild(theBlockchainAlliance);

    // document.body.appendChild(scrollingText());
}

behave();