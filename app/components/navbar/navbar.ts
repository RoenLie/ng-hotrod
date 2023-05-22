import angular from 'angular';

import navbarComponent from './navbar.component.js';


const navbarModule = angular
	.module('navbar', [])
	.component('navbar', navbarComponent).name;

export default navbarModule;
