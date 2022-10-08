import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

describe('Pruebas en el hook useFetchGifs', () => { 

    test("Debe de regresar el estado incial",() => {

        const { result } = renderHook( () => useFetchGifs('One Punch') );
        const { images, isLoading} = result.current;

        expect( images.length ).toBe(0);
        expect( isLoading ).toBeTruthy();

    });

    test("Dede de  retornar un arreglo de imagenes y el isLoading en false", async() => {
        const { result } = renderHook( () => useFetchGifs('One Punch') );

        await waitFor(
            () => expect( result.current.images.length ).toBeGreaterThan(0),//Espera hasta que esto suceda
            {
                timeout: 3000//Tiempo en el cual espera respuesta sino manda el error
            }
        );

        const { images, isLoading} = result.current;

        expect( images.length ).toBeGreaterThan(0);
        expect( isLoading ).toBeFalsy();

    });

 });