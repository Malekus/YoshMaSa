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
     localStorageService.set("marche", "css/img/test/620x360550x360H_marche_brun.png");
     localStorageService.set("attend", "css/img/test/620x360550x360H_brun.png");
     localStorageService.set("frappe", "css/img/test/620x360550x360H_tape_brun.png");
  }

  $scope.H_change_blond = function(){
    $scope.main_tete = "css/img/perso/tete_H_blond.png";
    localStorageService.set("tete", $scope.main_tete);
    localStorageService.set("marche", "css/img/test/620x360550x360H_marche_blond.png");
    localStorageService.set("attend", "css/img/test/620x360550x360H_blond.png");
    localStorageService.set("frappe", "css/img/test/620x360550x360H_tape_blond.png");
  }

  $scope.H_change_roux = function(){
    $scope.main_tete = "css/img/perso/tete_H_roux.png";
    localStorageService.set("tete", $scope.main_tete);
    localStorageService.set("tete", $scope.main_tete);
    localStorageService.set("marche", "css/img/test/620x360550x360H_marche_roux.png");
    localStorageService.set("attend", "css/img/test/620x360550x360H_roux.png");
    localStorageService.set("frappe", "css/img/test/620x360550x360H_tape_roux.png");
  }

  $scope.F_change_brun = function(){
    $scope.main_tete = "css/img/perso/tete_F_brun.png";
    localStorageService.set("tete", $scope.main_tete);
    localStorageService.set("tete", $scope.main_tete);
    localStorageService.set("marche", "css/img/test/620x360550x360F_marche_brun.png");
    localStorageService.set("attend", "css/img/test/620x360550x360F_brun.png");
    localStorageService.set("frappe", "css/img/test/620x360550x360F_tape_brun.png");
  }

  $scope.F_change_blond = function(){
    $scope.main_tete = "css/img/perso/tete_F_blond.png";
    localStorageService.set("tete", $scope.main_tete);
    localStorageService.set("marche", "css/img/test/620x360550x360F_marche_blond.png");
    localStorageService.set("attend", "css/img/test/620x360550x360F_blond.png");
    localStorageService.set("frappe", "css/img/test/620x360550x360F_tape_blond.png");
  }

  $scope.F_change_roux = function(){
    $scope.main_tete = "css/img/perso/tete_F_roux.png";
    localStorageService.set("tete", $scope.main_tete);
    localStorageService.set("tete", $scope.main_tete);
    localStorageService.set("marche", "css/img/test/620x360550x360F_marche_roux.png");
    localStorageService.set("attend", "css/img/test/620x360550x360F_roux.png");
    localStorageService.set("frappe", "css/img/test/620x360550x360F_tape_roux.png");
  }

// fin chargement de tete


  $scope.maill_change_M = function(){
    $scope.main_maill = "css/img/perso/mailloche_M.png";
    localStorageService.set("maill", $scope.main_maill);
    localStorageService.set("malloche", "css/img/test/Maill_M.png");
  }

  $scope.maill_change_Md = function(){
    $scope.main_maill = "css/img/perso/mailloche_M_dot.png";
    localStorageService.set("maill", $scope.main_maill);
    localStorageService.set("malloche", "css/img/test/Maill_Md.png");
  }

  $scope.maill_change_MY = function(){
    $scope.main_maill = "css/img/perso/mailloche_MY.png";
    localStorageService.set("maill", $scope.main_maill);
    localStorageService.set("malloche", "css/img/test/Maill_MY.png");
  }

  $scope.maill_change_N = function(){
    $scope.main_maill = "css/img/perso/mailloche_N.png";
    localStorageService.set("maill", $scope.main_maill);
    localStorageService.set("malloche", "css/img/test/Maill_N.png");
  }

  $scope.maill_change_Nd = function(){
    $scope.main_maill = "css/img/perso/mailloche_N_dot.png";
    localStorageService.set("maill", $scope.main_maill);
    localStorageService.set("malloche", "css/img/test/Maill_Nd.png");
  }


});
