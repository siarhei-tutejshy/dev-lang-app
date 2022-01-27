import Library from './Library';
import { connect } from 'react-redux';
import React, { useEffect } from 'react';

import { deleteWord, addNewWordText, addNewWordThunk} from '../../state/reducers/libraryReducer';

const LibraryContainer = (props) => {
   
    const onAddWord = () => {
        console.log('in add word');
        props.addNewWordThunk(props.newWordText);
        
    };

    const onRemoveWord = (wordId) => {
        props.deleteWord(wordId)
    };

    return (
        <Library
            library={props.library}
            newWordText={props.newWordText}
            addNewWordText={props.addNewWordText}
            onRemoveWord={onRemoveWord}
            onAddWord={onAddWord}
        />
    );
};

let mapStateToProps = (state) => {
    return {
        library: state.library.library,
        newWordText: state.library.newWordText,
    };
};

export default connect(mapStateToProps, { 
                        addNewWordText, addNewWordThunk,deleteWord 
                    })(LibraryContainer);
