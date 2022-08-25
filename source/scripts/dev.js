import handleEdit from '@tools/handleEdit.js';
import loadPP from 'pineglade-pp';

const DESKTOP = 1400;

window.pinegladePP = {
	breakpoints: [DESKTOP],
	ext: 'webp'
};

document.addEventListener('keydown', handleEdit);

loadPP();
