import { useEffect, useState } from 'react';//Dispara un efecto secundario, cuando algo cambia
import { GifItem } from './GifItem';
import { getGifs } from "../helpers/getGifs";

export const GifGrid = ({ category }) => {

    const [images, setImages] = useState( [] );

    const getImages = async() =>{
        const newImages = await getGifs( category );
        setImages( newImages );
    }

    useEffect(() =>{
        getImages();
    },[]);//Si es vacio [] solo se ejecuta cuando se crea o contruye el componente

    return (
        <>
            <h3>{ category }</h3>
            <div className='card-grid'>
            {
                images.map( ( image ) => (
                    <GifItem 
                        key={image.id} 
                        { ...image }//Exparsir las propiedades y obtenerlas mediante desestructuracion
                    />
                ))
            }
            </div>
        </>
    )
}
