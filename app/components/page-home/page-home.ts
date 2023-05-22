import angular from 'angular';

import pageHomeComponent from './page-home.component.js';


const pageHomeModule = angular
	.module('pageHome', [])

	.component('pageHome', pageHomeComponent).name;

export default pageHomeModule;
