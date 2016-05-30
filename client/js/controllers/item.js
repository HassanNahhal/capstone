'use strict';

 angular
  .module('app')
  .controller('AllItemsController', [
  	'$scope', 'Item', function($scope, Item) {
	    $scope.items = Item.find();
  }])
  .controller('DeleteItemController', ['$scope', 'Item', '$state',
      '$stateParams', function($scope, Item, $state, $stateParams) {
    Item
      .deleteById({ id: $stateParams.id })
      .$promise
      .then(function() {
        $state.go('Items');
      });
  }]);  