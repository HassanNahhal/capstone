'use strict';
 
angular
 .module('app', [
    'ui.router',
    'lbServices'
 ])
 .config(['$stateProvider', '$urlRouterProvider', function(
 	$stateProvider, $urlRouterProvider) {
   $stateProvider  
		.state('Home', {
			url: '/Home',
			templateUrl: 'views/pages/home.html'
		})   
		.state('Stores', {
			url: '/Stores',
			templateUrl: 'views/stores/all-stores.html',
			controller: 'AllStoresController'
		})
		.state('addStore', {
			url: '/addStore',
			templateUrl: 'views/stores/store-form.html',
			controller: 'AddStoreController'
			// , authenticate: true
		}) 		
		.state('editStore', {
			url: '/editStore/:id',
			templateUrl: 'views/stores/store-form.html',
			controller: 'EditStoreController'//
			//, authenticate: true
		})
		.state('deleteStore', {
        url: '/deleteStore/:id',
        controller: 'DeleteStoreController'
        // , authenticate: true
      });

   $urlRouterProvider.otherwise('Home');

 }]);