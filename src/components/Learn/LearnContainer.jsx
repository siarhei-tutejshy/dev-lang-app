import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Learn from './Learn';
const LearnContainer = (props) => {
    let [learnLibrary, setLearnLibrary] = useState(props.library.slice(-10));
    
    const speakWord = (word) => {
        const speakInstanse = new SpeechSynthesisUtterance(word);
        speakInstanse.voice = speechSynthesis.getVoices()[5];
        speechSynthesis.speak(speakInstanse)
    };

    return <Learn lernWords={learnLibrary} speakWord={speakWord} />;
};

let mapStateToProps = (state) => {
    return {
        library: state.library.library,
    };
};
export default connect(mapStateToProps)(LearnContainer);
