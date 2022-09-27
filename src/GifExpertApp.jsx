import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {

    const [ categories, setCategories ] = useState( ['One punch'] );

    const onAddCategory = ( newCategory ) => {

        const newCategoria = capitalizeString( newCategory );
        if( categories.includes(newCategoria )) return;

        const categoriesList = [...categories, newCategoria ];
        setCategories( categoriesList.sort() );
       //setCategories(cat=>[...categories,"Nuevo"]);
    }//onAddCategory

    const capitalizeString = ( str ) => {
        const lowerStr = str.toLowerCase();

        if(lowerStr.length > 1)
            return lowerStr.charAt(0).toUpperCase() + lowerStr.substring(1);
        return str;
    }

    return (
        <>
            <h1>Hola mundo</h1> 

            <AddCategory 
                onNewCategory={ (value) => onAddCategory(value) }
            />

            {   categories.map( category => (
                    <GifGrid 
                        key={ category } 
                        category={category}
                    />
                ))
            }
        </>
    )
}
