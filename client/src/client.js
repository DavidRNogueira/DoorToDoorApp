import * as sapper from '@sapper/app';

const app = sapper.start({
	target: document.querySelector('#sapper'),
	props: {
		ready: false,
	}
});

window.initMap = function ready() {
	console.log("here")
	app.$set({ ready: true });
}