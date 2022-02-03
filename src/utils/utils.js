
export const randomizer = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export const speakWord = (word) => {
    const speakInstanse = new SpeechSynthesisUtterance(word);
    speakInstanse.voice = speechSynthesis.getVoices()[5];
    speechSynthesis.speak(speakInstanse);
};
