app.controller("OptionController", function($scope, $rootScope, localStorageService){
    $scope.heightScreen = window.innerHeight;
    $scope.widthScreen = window.innerWidth;
    $scope.urlCredit = $rootScope.url.credit;
    $scope.urlJouer = $rootScope.url.jouer;
    $scope.urlOption = $rootScope.url.option;

    $scope.on_off = function(){
      localStorageService.load("bt_muted", $scope.couleur);
      if ($scope.couleur == true){
        $scope.couleur = false;
      } else {
        $scope.couleur = true;
      }
      localStorageService.set("bt_muted", $scope.couleur);
      console.log(localStorageService.get("bt_muted",$scope.couleur));
    }

    $scope.aff_credits = function(){
      $scope.crd = !$scope.crd;
    }

    $scope.pseudo = function(){
      $scope.pseudoVar = !$scope.pseudoVar;
    }

    $scope.submission = function(){
      localStorageService.set("pseudo", $scope.psd);
      location.reload();
    }

	  $scope.text = localStorageService.get("pseudo", $scope.psd);

});
