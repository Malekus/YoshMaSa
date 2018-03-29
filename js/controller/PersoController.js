app.controller("PersoController", function($scope, $rootScope){
  $scope.heightScreen = window.innerHeight;
  $scope.widthScreen = window.innerWidth;

  $scope.main_tete = "css/img/perso/tete_H_brun.png";


// Chargement de tete
  $scope.H_change_brun = function(){
    $scope.main_tete = "css/img/perso/tete_H_brun.png";
  }

  $scope.H_change_blond = function(){
    $scope.main_tete = "css/img/perso/tete_H_blond.png";
  }

  $scope.H_change_roux = function(){
    $scope.main_tete = "css/img/perso/tete_H_roux.png";
  }

  $scope.F_change_brun = function(){
    $scope.main_tete = "css/img/perso/tete_F_brun.png";
  }

  $scope.F_change_blond = function(){
    $scope.main_tete = "css/img/perso/tete_F_blond.png";
  }

  $scope.F_change_roux = function(){
    $scope.main_tete = "css/img/perso/tete_F_roux.png";
  }

// fin chargement de tete

  $scope.main_maill = "css/img/perso/mailloche_M.png"


  $scope.maill_change_M = function(){
    $scope.main_maill = "css/img/perso/mailloche_M.png";
  }

  $scope.maill_change_Md = function(){
    $scope.main_maill = "css/img/perso/mailloche_M_dot.png";
  }

  $scope.maill_change_MY = function(){
    $scope.main_maill = "css/img/perso/mailloche_MY.png";
  }

  $scope.maill_change_N = function(){
    $scope.main_maill = "css/img/perso/mailloche_N.png";
  }

  $scope.maill_change_Nd = function(){
    $scope.main_maill = "css/img/perso/mailloche_N_dot.png";
  }


});
