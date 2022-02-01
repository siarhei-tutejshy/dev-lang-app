import SpeechRecognition, {
    useSpeechRecognition,
} from 'react-speech-recognition';

import s from '../AppGames.module.css';
const SpeakIt = (props) => {
    const { transcript, listening, browserSupportsSpeechRecognition } =
        useSpeechRecognition();

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
    return (
        <section className={s.gameContainer}>
            <span>Say this word</span>
            <h3>{props.playWord}</h3>
            <p>{!transcript ? "" : props.checkingWord}</p>
            <button
                className={s.btnRecord}
                onTouchStart={startListening}
                onMouseDown={startListening}
                onTouchEnd={onCheckWord}
                onMouseUp={onCheckWord}
            ></button>
            <p>Microphone: {listening ? 'on' : 'off'}</p>
           
        </section>
    );
};
export default SpeakIt;
