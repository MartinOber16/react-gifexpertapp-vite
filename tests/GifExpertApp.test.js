import { render, screen } from '@testing-library/react';
import { GifExpertApp } from '../src/GifExpertApp';

// TODO: hacer pruebas en este componente (onAddCategory)
// agregar categoria
// categoria repetida
describe('Pruebas en <GifExpertApp />', () => {
	test('should first', () => {
		render(<GifExpertApp />);
		screen.debug();
	});
});
