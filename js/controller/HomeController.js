app.controller("HomeController", function($scope, $http, localStorageService){

    $scope.loader = false;

    $scope.initialisation = function(){
        localStorageService.set("widthScreen", window.innerWidth);
        localStorageService.set("heightScreen", window.innerHeight);
        $scope.widthScreen = localStorageService.get("widthScreen");
        $scope.heightScreen = localStorageService.get("heightScreen");            
    };

    

    $scope.resizePicture = function(source, destination, frame){
        var url = "resize.php?source=" + source + "&destination=" + destination + "&width="
        + localStorageService.get("widthScreen") * frame + "&height=" + localStorageService.get("heightScreen");
        $http.get(url).then(httpSuccess, httpError);
    };

    httpSuccess = function(response){
        console.log(response.data);
    };

    httpError = function(error){
        alert("Impossible de récuprérer les informations");
    };

    if((localStorageService.get("widthScreen") || localStorageService.get("heightScreen")) === null ){
        $scope.initialisation();
    }

    $scope.widthScreen = localStorageService.get("widthScreen");
    $scope.heightScreen = localStorageService.get("heightScreen");

    if(localStorageService.get("declared") === null){
        
    $scope.loader = true;
        localStorageService.set("declared", true);
        $scope.resizePicture("css/img/fond/home.png", "css/img/testResize/homeR.png", 25);
        $scope.resizePicture("css/img/fond/ladder.png", "css/img/testResize/ladderR.png", 6);
        
    $scope.loader = false;
    }
    
    console.log(localStorageService.clearAll());
});
