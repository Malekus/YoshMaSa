app.controller("OptionController", function($scope, $rootScope, localStorageService){
    $scope.heightScreen = window.innerHeight;
    $scope.widthScreen = window.innerWidth;
    $scope.urlCredit = $rootScope.url.credit;
    $scope.urlJouer = $rootScope.url.jouer;
    $scope.urlOption = $rootScope.url.option;

    $scope.lang = localStorageService.get("langue");



    if(localStorageService.get("couleurMute") == true){
      $scope.couleur = !$scope.couleur;
    } else {
      $scope.couleur = false;
    }
    $scope.on_off = function(){
      $scope.couleur = !$scope.couleur;
      localStorageService.set("couleurMute", $scope.couleur);
      console.log($scope.couleur);
    }

    $scope.aff_credits = function(){
      $scope.crd = !$scope.crd;
    }

    $scope.pseudo = function(){
      $scope.pseudoVar = !$scope.pseudoVar;
    }

    $scope.text = localStorageService.get("pseudo", $scope.psd);

    $scope.submission = function(){
      localStorageService.set("pseudo", $scope.psd);
    //location.reload();
      $scope.text = $scope.psd;
      $scope.pseudoVar = !$scope.pseudoVar;
      console.log($scope.psd);
    }



    $scope.langue = function(langue){
      localStorageService.set("langue", langue);
    }

});
