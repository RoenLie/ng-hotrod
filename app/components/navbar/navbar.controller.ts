import githubLogo from '../../../assets/img/icon-github.png';
import ngHotrodLogo from '../../../assets/img/icon-ng-hotrod-light.svg';
import NavigationService from '../../services/navigation.service.js';

class NavbarController {
	public NavigationService: NavigationService;
	public ngHotrodLogo = ngHotrodLogo;
	public githubLogo = githubLogo;

	constructor(NavigationService: NavigationService) {
		this.NavigationService = NavigationService;
	}
}

NavbarController.$inject = ['NavigationService'];

export default NavbarController;
