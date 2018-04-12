app.controller("PersoController", function($scope, $rootScope,localStorageService){
  $scope.heightScreen = window.innerHeight;
  $scope.widthScreen = window.innerWidth;

  $scope.url = $rootScope.url.jouer;


  $scope.main_tete = localStorageService.get("tete");
  $scope.main_maill = localStorageService.get("maill");
 
// Chargement de tete
  $scope.H_change_brun = function(){
    $scope.main_tete = "css/img/perso/tete_H_brun.png";
     localStorageService.set("tete", $scope.main_tete);
  }

  $scope.H_change_blond = function(){
    $scope.main_tete = "css/img/perso/tete_H_blond.png";
    localStorageService.set("tete", $scope.main_tete);
  }

  $scope.H_change_roux = function(){
    $scope.main_tete = "css/img/perso/tete_H_roux.png";
    localStorageService.set("tete", $scope.main_tete);
  }

  $scope.F_change_brun = function(){
    $scope.main_tete = "css/img/perso/tete_F_brun.png";
    localStorageService.set("tete", $scope.main_tete);
  }

  $scope.F_change_blond = function(){
    $scope.main_tete = "css/img/perso/tete_F_blond.png";
    localStorageService.set("tete", $scope.main_tete);
  }

  $scope.F_change_roux = function(){
    $scope.main_tete = "css/img/perso/tete_F_roux.png";
    localStorageService.set("tete", $scope.main_tete);
  }

// fin chargement de tete


  $scope.maill_change_M = function(){
    $scope.main_maill = "css/img/perso/mailloche_M.png";
    localStorageService.set("maill", $scope.main_maill);
  }

  $scope.maill_change_Md = function(){
    $scope.main_maill = "css/img/perso/mailloche_M_dot.png";
    localStorageService.set("maill", $scope.main_maill);
  }

  $scope.maill_change_MY = function(){
    $scope.main_maill = "css/img/perso/mailloche_MY.png";
    localStorageService.set("maill", $scope.main_maill);
  }

  $scope.maill_change_N = function(){
    $scope.main_maill = "css/img/perso/mailloche_N.png";
    localStorageService.set("maill", $scope.main_maill);
  }

  $scope.maill_change_Nd = function(){
    $scope.main_maill = "css/img/perso/mailloche_N_dot.png";
    localStorageService.set("maill", $scope.main_maill);
  }


});
