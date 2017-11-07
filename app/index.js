// var audio = require('simple-audio');

import './stylesheet.css';
import starsBackground from './starsBackground.jpg';
import mainTheme from './mainTheme.mp3';

var load = (function() {
    // Function which returns a function: https://davidwalsh.name/javascript-functions
    function _load(tag) {
        return function(url) {
            // This promise will be used by Promise.all to determine success or failure
            return new Promise(function(resolve, reject) {
                var element = document.createElement(tag);
                var parent = 'body';
                var attr = 'src';

                // Important success and error for the promise
                switch(tag){
                default:
                    element.onload = function() {
                        console.log('onload');
                        resolve(element);
                    };
                    break;
                case 'audio':
                    element.oncanplay = function() {
                        console.log('oncanplay');
                        resolve(element);
                    };
                }
                element.onerror = function() {
                    console.log('onerror');
                    reject(url);
                };


                // Need to set different attributes depending on tag type
                switch(tag) {
                case 'script':
                    element.async = true;
                    break;
                case 'link':
                    element.type = 'text/css';
                    element.rel = 'stylesheet';
                    attr = 'href';
                    parent = 'head';
                    break;
                case 'audio':
                    element.type = 'audio/mpeg';
                }

                // // Inject into document to kick off loading
                element[attr] = url;
                // document[parent].appendChild(element);
            });
        };
    }

    return {
        css: _load('link'),
        js: _load('script'),
        img: _load('img'),
        audio: _load('audio')
    }
})();

// Usage:  Load different file types with one callback
Promise.all([
    load.img(starsBackground),
    load.audio(mainTheme)
]).then(function(elements) {
    console.log('Everything has loaded!');
    behave(elements);
}).catch(function() {
    console.log('Oh no, epic failure!');
});

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
function background(backgroundElement) {
    var element = document.createElement('div');
    // Add the image to our existing div.
    element.appendChild(backgroundElement);
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

async function behave(elements){
    var theShortTimeAgo = shortTimeAgo();
    document.body.appendChild(theShortTimeAgo);
    await timer(5000);
    document.body.removeChild(theShortTimeAgo);

    // var soundTrack = document.getElementById("soundTrack");
    document.body.appendChild(elements[1]);
    elements[1].play();
    document.body.appendChild(background(elements[0]));

    var theBlockchainAlliance = blockchainAlliance();
    document.body.appendChild(theBlockchainAlliance);
    await timer(5000);
    document.body.removeChild(theBlockchainAlliance);

    // document.body.appendChild(scrollingText());
}

// behave();