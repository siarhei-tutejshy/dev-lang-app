import { useEffect } from 'react';
export let randomWordsContainer = (Component) => {

    
    let wrapperContainer = (props) => {
        console.log(props)
        let playWords = props.library
        .sort(() => Math.random() - 0.5)
        .slice(-10);
        if(!props.playWords || props.playWords.length < 1) props.addPlayWords(playWords);
           
  
         

        return <Component {...props} />
    }

    return wrapperContainer
}