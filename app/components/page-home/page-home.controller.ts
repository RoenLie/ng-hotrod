class PageHomeController {
	public $inject = ['NavigationService'];
	public NavigationService: any;
	constructor(NavigationService: any) {
		this.NavigationService = NavigationService;
	}
}


export default PageHomeController;
