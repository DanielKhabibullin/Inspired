import { renderProducts} from "../render/renderProducts";
import { renderHero } from "../render/renderHero";
import { renderNavigation } from "../render/renderNavigation";

export const mainPage = (gender = 'women') => {
	console.log('gender: ', gender);
	renderNavigation(gender);
	renderHero(gender);
	renderProducts('Новинки', {gender});
}


