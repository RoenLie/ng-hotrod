import angular from 'angular';

import app from './app/app.js';

(() => [app])();

const component = () => {
	// eslint-disable-next-line angular/document-service
	const element = document.createElement('div');

	element.className = 'app';
	element.innerHTML = '<app></app>';

	return element;
};

angular.element(() => {
	angular.bootstrap(document, ['appModule']);
});

// eslint-disable-next-line angular/document-service
document.body.appendChild(component());
