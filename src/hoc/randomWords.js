import { useEffect } from 'react';
export let randomWordsContainer = (Component) => {
    let wrapperContainer = (props) => {
        console.log('props');

        if (
            (!props.playWords || props.playWords.length < 1) &&
            props.library && props.library.length > 1
            
        ) {
            let playWords = props.library
                .sort(() => Math.random() - 0.5)
                .slice(-10);
            props.addPlayWords(playWords);
        }

        return <Component {...props} />;
    };
    
    return wrapperContainer;
};
