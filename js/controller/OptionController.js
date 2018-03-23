app.controller("OptionController", function($scope, $rootScope){
    $scope.heightScreen = $rootScope.height;
    $scope.widthScreen = $rootScope.width;

    $scope.couleur = false;
    $scope.on_off = function(){
      $scope.couleur = !$scope.couleur;
    }
    
});