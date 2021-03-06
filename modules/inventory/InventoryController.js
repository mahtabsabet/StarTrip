StarTripApp.controller('InventoryController', ['$scope', 'inventory', 'fleet', function($scope, inventory, fleet){
  //resources
  $scope.getPlutonium = function() {
      return inventory.getResourceAmount('plutonium');
  };

  $scope.getDilithium = function() {
      return inventory.getResourceAmount('dilithium');
  };

  $scope.getKnowledge = function() {
      return inventory.getResourceAmount('knowledge');
  };

  // Increase plutonium every time mine-plutonium is clicked
  $scope.minePlutonium = function() {
      inventory.addToResourceAmount('plutonium', inventory.getPlutoniumPerClick());
  };

  // Increase dilithium every time mine-dilithium is clicked
  $scope.mineDilithium = function() {
      inventory.addToResourceAmount('dilithium', inventory.getDilithiumPerClick());
  };

  $scope.displayMineDilithiumButton = function(){
      return inventory.displayMineDilithiumButton(fleet.getNumberOfShips('nuclear'));
  };


}]);
