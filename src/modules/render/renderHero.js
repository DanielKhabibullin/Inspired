// import { createElement } from "../createElement";

export const renderHero = (gender) => {
	const hero = document.querySelector('.hero');

	if (!gender) {
		hero.style.display = 'none';
		return;
	}

	hero.style.display = '';
	hero.className = `hero  hero_${gender}`;

	hero.innerHTML = `
	<div class="container">
		<div class="hero__content">
			<h2 class="hero__title">Новая коллекция Бюстгальтер-балконет</h2>

			<a href="#" class="hero__link">Перейти</a>
		</div>
	</div>
	`;
};

// const container = createElement('div', {
// 	className: 'container'
// });

// const content = createElement(
// 	'div', 
// 	{
// 		className: 'hero__content',
// 		innerHTML: `
// 			<h2 class="hero__title">Новая коллекция Бюстгальтер-балконет</h2>
// 			<a class="hero__link" href="#">Перейти</a>
// 		`
// 	}, 
// 	{
// 		parent: container,
// 	}
// );