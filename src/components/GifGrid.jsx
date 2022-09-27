import { useEffect, useState } from 'react';//Dispara un efecto secundario, cuando algo cambia
import { getGifs } from "../helpers/getGifs";

export const GifGrid = ({ category }) => {

    const [counter, setCounter] = useState(10);
    useEffect(() =>{
        getGifs( category );
    },[]);//Si es vacio [] solo se ejecuta cuando se crea o contruye el componente

    return (
        <>
            <h3>{ category }</h3>
            
            <h5>{ counter }</h5>
            <button onClick={ () =>setCounter(counter + 1)}>+1</button>
        </>
    )
}
