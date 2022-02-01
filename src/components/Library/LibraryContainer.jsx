import Library from './Library';
import { connect } from 'react-redux';
import React, { useEffect } from 'react';

import { deleteWord, addNewWordText, addNewWordThunk} from '../../state/reducers/libraryReducer';
import { useSelector } from 'react-redux';
import  * as librarySelector from '../../state/selectors/slelectors';
import { useDispatch } from 'react-redux';


const LibraryContainer = (props) => {
    let library = useSelector(librarySelector.library)
    let newWordText = useSelector(librarySelector.newWordText)
    let dispatch = useDispatch()
  
    const onAddWord = () => {
        console.log('in add word');
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

// let mapStateToProps = (state) => {
//     return {
//         library: state.library.library,
//         newWordText: state.library.newWordText,
//     };
// };

export default LibraryContainer;
