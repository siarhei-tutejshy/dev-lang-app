import React from 'react';
import Library from './Library';
import { deleteWord, addNewWordText, addNewWordThunk} from '../../state/reducers/libraryReducer';
import { useSelector } from 'react-redux';
import  * as librarySelector from '../../state/selectors/slelectors';
import { useDispatch } from 'react-redux';


const LibraryContainer = (props) => {
    let library = useSelector(librarySelector.library)
    let newWordText = useSelector(librarySelector.newWordText)
    let dispatch = useDispatch()
  
    const onAddWord = () => {
        dispatch(addNewWordThunk(newWordText));
    };

    const onRemoveWord = (wordId) => {
       dispatch(deleteWord(wordId))
    };

    const onAddNewWordText = (char) => {
        dispatch(addNewWordText(char));
    }

    return (
        <Library
            library={library}
            newWordText={newWordText}
            addNewWordText={onAddNewWordText}
            onRemoveWord={onRemoveWord}
            onAddWord={onAddWord}
        />
    );
};

export default LibraryContainer;
