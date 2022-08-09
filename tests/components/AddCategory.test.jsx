import { fireEvent, render, screen } from '@testing-library/react';
import { AddCategory } from '../../src/components/AddCategory';

describe('Pruebas en <AddCategory />', () => {
	test('debe cambiar el valor de la caja de texto', () => {
		render(<AddCategory onNewCategory={() => {}} />);
		// screen.debug();
		const input = screen.getByRole('textbox');
		// Disparar el evento
		fireEvent.input(input, { target: { value: 'Saitama' } });
		expect(input.value).toBe('Saitama');
	});

	test('debe llamar onNewCategory si el input tiene un valor', () => {
		const inputValue = 'Saitama';
		const onNewCategory = jest.fn();

		render(<AddCategory onNewCategory={onNewCategory} />);

		const input = screen.getByRole('textbox');
		const form = screen.getByRole('form');

		fireEvent.input(input, { target: { value: inputValue } });
		fireEvent.submit(form);
		// Despues del submit el input tiene que estar vacio
		expect(input.value).toBe('');

		// Evaluar si la funcion fue llamada
		expect(onNewCategory).toHaveBeenCalled();
		expect(onNewCategory).toHaveBeenCalledTimes(1);
		expect(onNewCategory).toHaveBeenCalledWith(inputValue);
	});

	test('no debe llamar onNewCategory si el input esta vacio', () => {
		const onNewCategory = jest.fn();
		render(<AddCategory onNewCategory={onNewCategory} />);

		const form = screen.getByRole('form');
		fireEvent.submit(form);

		expect(onNewCategory).not.toHaveBeenCalled();
	});
});
