myapp.controller("tabsCtrl", function($scope, $rootScope, $state) {
	$rootScope.$on('$ionicView.beforeEnter', function() {
		var statename = $state.current.name;
		//tabs中存在的主页面不需要隐藏，hidetabs=false
		if(statename === 'tabs.eye' || statename === 'tabs.home' || statename === 'tabs.issued'|| statename === 'tabs.search') {
			$rootScope.hideTabs = false;
		} else {
			$rootScope.hideTabs = true;
		}
	});
});