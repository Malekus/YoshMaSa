document.addEventListener('deviceready', function(){
    console.log("On est pret !!");
    navigator.splashscreen.hide();
}, false);

var app = angular.module('YoshMaSaApp', ['ngRoute', 'simple-sprite', 'LocalStorageModule']);

app.config(function($routeProvider){
    $routeProvider
    .when('/',{
        templateUrl: 'view/home.html',
        controller: 'HomeController',
        resolve: {
            init: ['InitService', function(Init) {
                return Init.promise;
            }]
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
        redirectTo: '/'
    })

});

app.config(function (localStorageServiceProvider) {
    localStorageServiceProvider
      .setPrefix('YoshMaSaApp')
      .setStorageType('sessionStorage')
      .setNotify(true, true)
});


app.run(['$timeout', 'InitService', function ($timeout, Init) {
    $timeout(function() {
      Init.defer.resolve();
    }, 2000);
  }]);

app.service('InitService', ['$q', function ($q) {
var d = $q.defer();
return {
    defer: d,
    promise: d.promise 
};
}]);
  