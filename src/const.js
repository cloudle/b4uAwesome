import tinyColorImport from 'tinycolor2';

export const tinyColor = tinyColorImport;
export const pi = 3.1416;
export let name = 'Lelouch';

export default {
	leftPaneWidth: 180,
	pi,
	themeColor: '#4d384b',
	darken,
	lighten,
	avatarSize: 46,
};


function darken(base = '#ffffff', amount = 5) {
	return tinyColor(base).darken(amount).toHexString();
}

function lighten(base = '#ffffff', amount = 5) {
	return tinyColor(base).lighten(amount).toHexString();
}
