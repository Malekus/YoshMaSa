app.controller("OptionController", function($scope, $rootScope, localStorageService){
    $scope.heightScreen = window.innerHeight;
    $scope.widthScreen = window.innerWidth;
    $scope.urlCredit = $rootScope.url.credit;
    $scope.urlJouer = $rootScope.url.jouer;
    $scope.urlOption = $rootScope.url.option;

    $scope.couleur = false;
    $scope.on_off = function(){
      $scope.couleur = !$scope.couleur;
    }

    $scope.crd = false;
    $scope.aff_credits = function(){
      $scope.crd = !$scope.crd;
    }

    $scope.pseudoVar = false;
    $scope.pseudo = function(){
      $scope.pseudoVar = !$scope.pseudoVar;
    }

    $scope.submission = function(){
      localStorageService.set("pseudo", $scope.psd);
      location.reload();
    }

	  $scope.text = localStorageService.get("pseudo", $scope.psd);

});
