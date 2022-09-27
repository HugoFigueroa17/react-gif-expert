import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = () => {

    const [ categories, setCategories ] = useState( ['One punch','Otro'] );

    const onAddCategory = () => {
       setCategories([...categories,"Nuevo"]);
       //setCategories(cat=>[...categories,"Nuevo"]);
    }//onAddCategory

    return (
        <>
            {/* Titulo */}
        <h1>Hola mundo</h1> 

        {/* Input */}
        <AddCategory setCategories={ setCategories } />

        {/* Listado de Gifs */}
        <ol>
            { categories.map( category => {
                    return <li key={ category }>{ category }</li>
                })
            }
        </ol>
            {/* Gif Item */}
        </>
    )
}
