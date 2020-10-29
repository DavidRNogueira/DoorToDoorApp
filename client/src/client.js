import * as sapper from '@sapper/app';

sapper.start({
	target: document.querySelector('#sapper')
});

window.initMap = function ready() {
	app.$set({ ready: true });
}