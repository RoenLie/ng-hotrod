import angular from 'angular';

import Navbar from './navbar/navbar.js';
import PageHome from './page-home/page-home.js';


const ComponentsModule = angular.module('components', [Navbar, PageHome]).name;

export default ComponentsModule;
