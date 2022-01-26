import Library from './Library';
import { connect } from 'react-redux';
import React, { useEffect } from 'react';
import {
    addNewWordText,
    addNewWordThunk,
} from '../../state/reducers/libraryReducer';

const LibraryContainer = (props) => {
    // useEffect(()=>{
    //     props.addNewWordThunk(props.newWordText);
    // })
    const onAddWord = () => {
        console.log('in add word');
        props.addNewWordThunk(props.newWordText);
    };
    return (
        <Library
            library={props.library}
            newWordText={props.newWordText}
            addNewWordText={props.addNewWordText}
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
                        addNewWordText, addNewWordThunk 
                    })(LibraryContainer);
