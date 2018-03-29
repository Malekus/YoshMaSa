document.addEventListener('deviceready', function(){
    console.log("On est pret !!");
}, false);

var app = angular.module('YoshMaSaApp', ['ngRoute', 'simple-sprite', 'LocalStorageModule', 'ngSanitize', 'ngTouch']);

app.config(function($routeProvider){
    $routeProvider
    .when('/home',{
        templateUrl: 'view/home.html',
        controller: 'HomeController',
        resolve: {
            images : function(ImageService){
                return ImageService.getImages(window.innerHeight, window.innerWidth);
            }
        }
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
        redirectTo: '/home'
    })

});

app.config(function (localStorageServiceProvider) {
    localStorageServiceProvider
      .setPrefix('YoshMaSaApp')
      .setStorageType('sessionStorage')
      .setNotify(true, true)
});
