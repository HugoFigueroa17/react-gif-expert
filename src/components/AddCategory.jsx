import { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ( { onNewCategory } ) => {

    const [inputValue, setInputValue] = useState( '' );

    const onInputChange = ( { target } ) =>{
        setInputValue( target.value );
    }

    const onSubmit = ( event ) =>{
        event.preventDefault();//Para que no recargue la pagona en el submit

        const category = inputValue.trim();

        if( category.length <=1 ) return;

        onNewCategory( category );
        //setCategories( categories => [...categories,inputValue] );
        setInputValue('');
    }

    return (
        <form onSubmit={ onSubmit }  aria-label="form">
            <input 
                type="text"
                placeholder="Buscar gifs"
                value={ inputValue }
                onChange={ onInputChange }
                //onChange={ (event ) => onInputChange( event ) }
            />
        </form>
    )
}

AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired
}