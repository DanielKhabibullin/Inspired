import { renderProducts} from "../render/renderProducts";
import { renderHero } from "../render/renderHero";
import { renderNavigation } from "../render/renderNavigation";

export const mainPageController = (gender = 'women') => {
	renderNavigation(gender);
	renderHero(gender);
	renderProducts('Новинки', {gender});
}


