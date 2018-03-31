app.controller("HomeController", function($scope, $http, localStorageService, $q, $rootScope, $timeout, $sce, images){


    if(localStorageService.get("first") !== true){
        localStorageService.set("first", true);
        localStorageService.set("langue", "fr");        
        window.location.href = "#!home";

    }

    if(localStorageService.get("height") != window.innerHeight || localStorageService.get("width") != window.innerWidth){
        localStorageService.set("height", window.innerHeight);
        localStorageService.set("width", window.innerWidth);
        window.location.href = "#!home";
    }

    $scope.url = images.home;

    $rootScope.height = window.innerHeight;
    $rootScope.width = window.innerWidth;

    $rootScope.url = images;

    console.log($rootScope.url);
    $scope.heightScreen = $rootScope.height;
    $scope.widthScreen = $rootScope.width;

    console.log(localStorageService.get("pseudo"));

    $scope.langue = localStorageService.get("langue");
    console.log($scope.langue);
});

