import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock("../../src/hooks/useFetchGifs");//Hace un mock de ese path

describe('Pruebas en el componente GifGrid', () => { 

    const category = 'One Punch';

    test("Debe de mostrar el loading inicialmente",() => {

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        });

        render(<GifGrid category={ category } />);

        expect( screen.getByText('Cargando...'));
        expect( screen.getByText( category ));
        //screen.debug();
    });

    test("Debe de mostrar items cuando se cargan las imágenes useFetchGifs", () => {

        const gifs = [
            {
                id:'0001',
                title:'Saitama',
                url:'https://google.com/saitama.jpg'
            },
            {
                id:'0002',
                title:'Goku',
                url:'https://google.com/goku.png'
            }
        ];
        useFetchGifs.mockReturnValue({
            images:gifs,
            isLoading: false
        });

        render(<GifGrid category={ category } />);
        
        expect( screen.getAllByRole('img').length).toBe( gifs.length );
    });

 });