import React, { useState} from 'react';
import { connect } from 'react-redux';
import { speakWord } from '../../utils/utils';
import Learn from './Learn';

const LearnContainer = (props) => {
    let [learnLibrary, setLearnLibrary] = useState(props.library.slice(-10));

    return <Learn lernWords={learnLibrary} speakWord={speakWord} />;
};

let mapStateToProps = (state) => {
    return {
        library: state.library.library,
    };
};

export default connect(mapStateToProps)(LearnContainer);
