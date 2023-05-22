import 'angular-animate';
import 'angular-aria';
import 'angular-messages';
import 'angular-material';

import angular from 'angular';

import { AppComponent } from './app.component.js';
import ComponentsModule from './components/components.js';
import ServicesModule from './services/services.js';


const appModule = angular
	.module('appModule', [
		'ngAnimate',
		'ngAria',
		'ngMessages',
		'ngMaterial',
		ComponentsModule,
		ServicesModule,
	]).config([
		'$mdThemingProvider',
		($mdThemingProvider: any) => {
			$mdThemingProvider
				.theme('default')
				.primaryPalette('brown')
				.accentPalette('amber');
		},
	])
	.component('app', AppComponent);

export default appModule;
