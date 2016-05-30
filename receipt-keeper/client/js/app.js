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
      	.state('Items', {
			url: '/Items',
			templateUrl: 'views/items/items.html',
			controller: 'AllItemsController'
		})
		.state('deleteItem', {
	        url: '/deleteItem/:id',
	        controller: 'DeleteItemController'
      	})	
		.state('editItem', {
	        url: '/editItem/:id',
	        controller: 'EditItemController'
      	})	      				   
		.state('Stores', {
			url: '/Stores',
			templateUrl: 'views/stores/stores.html',
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
      	})
		.state('addReceipt', {
			url: '/addReceipt',
			templateUrl: 'views/receipts/receipt-form.html',
			controller: 'AddReceiptController'
			//authenticate: true
		})
		.state('editReceipt', {
			url: '/editReceipt/:id',
			templateUrl: 'views/receipts/receipt-form.html',
			controller: 'EditReceiptController'
			//authenticate: true
		}) 		      	
      	.state('Receipts', {
			url: '/Receipts',
			templateUrl: 'views/receipts/receipts.html',
			controller: 'AllReceiptsController'
		})
		.state('deleteReceipt', {
        url: '/deleteReceipt/:id',
        controller: 'DeleteReceiptController'
      	})
		.state('Login', {
			url: '/Login',
			templateUrl: 'views/users/login.html'
		})
		.state('Signup', {
			url: '/Signup',
			templateUrl: 'views/users/signup.html'
		});

   $urlRouterProvider.otherwise('Home');

 }]);