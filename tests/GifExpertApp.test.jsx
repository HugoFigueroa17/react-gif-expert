import { fireEvent, render, renderHook, screen, waitFor } from "@testing-library/react";
import { GifExpertApp } from "../src/GifExpertApp";
import { useFetchGifs } from "../src/hooks/useFetchGifs";

describe('Pruebas en el componente GifExpertApp', () => { 
    
    const inputValue = 'Goku';

    test("Debe de existir la categoria en el <h3> y  deben de tener imagenes",async() => {
        
        render(<GifExpertApp />);
        
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        
        fireEvent.input( input, { target: { value: inputValue } });
        fireEvent.submit( form );

        const { result } = renderHook( () => useFetchGifs( inputValue ) );

        await waitFor(
            () => expect( result.current.images.length ).toBeGreaterThan(0),//Espera hasta que esto suceda
            {
                timeout: 9000//Tiempo en el cual espera respuesta sino manda el error
            }
        );

        const { images } = result.current;

    
        expect(screen.getAllByRole("heading",{level: 3}).length).toBeGreaterThan(1);
        expect(screen.getAllByRole("img").length).toBe(images.length);;
        //screen.debug();

    });

 });