import {createElement} from './createElement';

export const createCssColors = (colors) => {
	const style = createElement('style');

	colors.forEach(color => {
		style.textContent += `
			.color_${color.title}:after {
				background-color: ${color.code};
				${color.title === 'white' ? 'border: 0.4px solid #000;' : ''}
			}
		`;
	});

	document.head.append(style);
};
