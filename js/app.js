document.addEventListener('deviceready', function(){

}, false);

var app = angular.module('YoshMaSaApp', ['ngRoute', 'simple-sprite', 'LocalStorageModule']);

app.config(function($routeProvider){
    $routeProvider
    .when('/',{
        templateUrl: 'view/home.html',
        controller: 'HomeController'
    })
    .when('/jouer',{
        templateUrl: 'view/jouer.html',
        controller: 'JouerController'
    })
    .when('/ladder',{
        templateUrl: 'view/ladder.html',
        controller: 'LadderController'
    })
    .when('/perso',{
        templateUrl: 'view/perso.html',
        controller: 'PersoController'
    })
    .when('/option',{
        templateUrl: 'view/option.html',
        controller: 'OptionController'
    })
    .otherwise({
        redirectTo: '/'
    })

    
});

/*
app.factory('AccelerometreService', function($window, $q, $rootScope){
    var accelerometre = $window.addEventListener
});

*/

app.config(function (localStorageServiceProvider) {
    localStorageServiceProvider
      .setPrefix('YoshMaSaApp')
      .setStorageType('sessionStorage')
      .setNotify(true, true)
  });