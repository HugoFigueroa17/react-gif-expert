import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";

describe('Pruebas en AddCategory', () => { 

    test("Debe de cambiar el valor de la caja de texto",() => {

        render( <AddCategory onNewCategory={() => {}} /> );
        const input = screen.getByRole('textbox');

        fireEvent.input( input, { target:{ value: 'Saitama' } } );//Disparar un evento
       
        expect( input.value ).toBe('Saitama');
        //screen.debug();
    });

    test("Debe de llamar onNewCategory si el input tiene valor", () => {
        
        const inputValue = 'Saitama';
        const onNewCategory = jest.fn();//Mok es una simulación, no es una implementación

        render(<AddCategory onNewCategory={ onNewCategory } />);

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');


        fireEvent.input( input, { target: { value: inputValue } });
        fireEvent.submit( form );

        expect( input.value ).toBe('');
        expect( onNewCategory ).toHaveBeenCalled();//Que la funcion onNewCategory alla sido llamada
        expect( onNewCategory ).toHaveBeenCalledTimes(1);//Que la funcion onNewCategory alla sido llamada n veces
        expect( onNewCategory ).toHaveBeenCalledWith( inputValue );//Que la funcion onNewCategory alla sido llamada con cierto valor
    });

    test("No debe de llamar onNewCategory si el input está vació", () => {
        
        const onNewCategory = jest.fn();//Mock es una simulación, no es una implementación
        render(<AddCategory onNewCategory={ onNewCategory } />);

        const form = screen.getByRole('form');

        fireEvent.submit( form );

        expect( onNewCategory ).toHaveBeenCalledTimes(0);
        expect( onNewCategory ).not.toHaveBeenCalled();
    });

 });