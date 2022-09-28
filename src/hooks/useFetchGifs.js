import { useEffect, useState } from 'react';//Dispara un efecto secundario, cuando algo cambia
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = ( category ) => {
  
     const [images, setImages] = useState( [] );
     const [isLoading, setIsLoading] = useState( true );

    const getImages = async() =>{
        const newImages = await getGifs( category );
        setImages(newImages);
        setIsLoading(false);
    }

    useEffect(() =>{
        getImages();
    },[]);//Si es vacio [] solo se ejecuta cuando se crea o contruye el componente

    return {
        images,
        isLoading
    }
}
