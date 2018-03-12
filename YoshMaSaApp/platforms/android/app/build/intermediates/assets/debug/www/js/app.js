var app = angular.module('YoshMaSaApp', ["ngRoute"]);

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