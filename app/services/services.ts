import angular from 'angular';

import NavigationService from './navigation.service.js';


const ServicesModule = angular
	.module('services', [])
	.service('NavigationService', NavigationService).name;

export default ServicesModule;
