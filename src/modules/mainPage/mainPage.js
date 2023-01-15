import { renderGoods } from "../render/renderGoods";
import { renderHero } from "../render/renderHero";
import { renderNavigation } from "../render/renderNavigation";

export const mainPage = (gender = 'women') => {
	console.log('gender: ', gender);
	renderNavigation(gender)
	renderHero(gender)
	renderGoods(gender)
}


