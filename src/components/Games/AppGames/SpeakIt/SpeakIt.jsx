import React from 'react';
import SpeechRecognition, { useSpeechRecognition} from 'react-speech-recognition';
import s from '../AppGames.module.css';

const SpeakIt = (props) => {
    const { transcript, listening, resetTranscript, browserSupportsSpeechRecognition } = useSpeechRecognition();
        
    const startListening = () =>
        SpeechRecognition.startListening({
            continuous: true,
            language: 'en-GB',
        });
        
    if (!browserSupportsSpeechRecognition) {
        return <span>Browser doesn't support speech recognition.</span>;
    }

    const onCheckWord = (e) => {
        SpeechRecognition.stopListening()
        props.addWordCheck(transcript)
    };

    const changeWord =() => {
        props.changeWordIndex()
        resetTranscript()
    }

    return (
        <section className={s.gameContainer}>
            <div className={s.contentBlock}>
                <span>Say this word</span>
                <h3>{props.playWord}</h3>
                <p className={s.current}>{props.checkingWord}</p>
                <button
                    className={s.btnRecord}
                    onTouchStart={startListening}
                    onMouseDown={startListening}
                    onTouchEnd={onCheckWord}
                    onMouseUp={ onCheckWord}
                ></button>
                
                <p>Microphone: {listening ? <span className={s.record}></span> : 'off'}</p>
                <button onClick={changeWord} className={s.btnCheck}>Next</button>
            </div>
        </section>
    );
};
export default SpeakIt;
