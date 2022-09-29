export function getImageUrlHelper(name) {
	return new URL(`../assets/imgs/${ name }`, import.meta.url).href;
}

