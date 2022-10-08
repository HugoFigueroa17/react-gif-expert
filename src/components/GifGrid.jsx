import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';
import PropTypes from 'prop-types';

export const GifGrid = ({ category }) => {
    const { images, isLoading} = useFetchGifs( category );//Custom hook

    return (
        <>
            <h3>{ category }</h3>

            {
                isLoading && (<h2>Cargando...</h2>) //: null //El null no se renderiza en react
            }

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

GifGrid.propTypes = {
    category: PropTypes.string.isRequired,
}