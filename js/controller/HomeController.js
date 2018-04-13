app.controller("HomeController", function($scope, $http, localStorageService, $q, $rootScope, $timeout, $sce, images){ //mySocket


    if(localStorageService.get("first") !== true){
        localStorageService.set("first", true);
        localStorageService.set("langue", "fr");     
        localStorageService.set("pseudo", "pseudo");
        window.location.href = "#!home";
    }

    if(localStorageService.get("maxScore") == null){
        localStorageService.set("maxScore", 0);
        console.log("null");
    }

    if(localStorageService.get("marche") == null){
        localStorageService.set("marche", "css/img/test/620x360550x360H_marche_brun.png");
        localStorageService.set("attend", "css/img/test/620x360550x360H_brun.png");
        localStorageService.set("frappe", "css/img/test/620x360550x360H_tape_brun.png");
        localStorageService.set("malloche", "css/img/test/Mail_M.png");
    }

    console.log(localStorageService.get("malloche"));

    $rootScope.personneAttend = localStorageService.get('attend');
    $rootScope.personneMarche = localStorageService.get('marche');
    $rootScope.personneTape = localStorageService.get('frappe');
    $rootScope.malloche = localStorageService.get('malloche');

    if(localStorageService.get("height") != window.innerHeight || localStorageService.get("width") != window.innerWidth){
        localStorageService.set("height", window.innerHeight);
        localStorageService.set("width", window.innerWidth);
        window.location.href = "#!home";
    }

    $scope.url = images.home;

    $rootScope.height = window.innerHeight;
    $rootScope.width = window.innerWidth;

    $rootScope.url = images;
    $scope.heightScreen = $rootScope.height;
    $scope.widthScreen = $rootScope.width;

    $scope.langue = localStorageService.get("langue");

    /*
    console.log(mySocket);
    mySocket.connect();
    mySocket.emit('resize', {
        height:window.innerHeight,
        width:window.innerWidth
    })
    mySocket.on('url', function(url){
        console.log(url);
    })*/
    
    console.log($rootScope.url);


    
});

