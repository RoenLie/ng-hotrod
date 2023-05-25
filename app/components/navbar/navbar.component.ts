import controller from './navbar.controller.js';
import styles from './navbar.styles.module.scss';


const navbarComponent = {
	bindings: {},
	template: /* html */`
		<md-toolbar>
			<div class="md-toolbar-tools">
				<div flex layout="row" layout-align="start center">
					<img class="${ styles['ng-hotrod-logo'] }"
						ng-src="{{ $ctrl.ngHotrodLogo }}"
						alt="GitHub">
					<h2 class="${ styles['active-page-name'] }"
						md-truncate>{{ $ctrl.NavigationService.currentPageTitle }}
					</h2>
				</div>

				<a
					class="${ styles['github-link'] }"
					href="https://github.com/fyodorio/ng-hotrod"
					layout="row"
					layout-align="center center"
				>
					<img ng-src="{{ $ctrl.githubLogo }}" alt="GitHub">
					<div>GitHub</div>
				</a>
			</div>
		</md-toolbar>
	`,
	controller,
};

console.log(navbarComponent);


export default navbarComponent;
