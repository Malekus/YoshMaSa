app.controller("OptionController", function($scope, $rootScope){
    $scope.heightScreen = window.innerHeight;
    $scope.widthScreen = window.innerWidth;

    $scope.couleur = false;
    $scope.on_off = function(){
      $scope.couleur = !$scope.couleur;
    }

    $scope.crd = false;
    $scope.aff_credits = function(){
      $scope.crd = !$scope.crd;
    }

});
