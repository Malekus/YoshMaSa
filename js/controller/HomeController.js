app.controller("HomeController", function($scope, $http, localStorageService, $q, $rootScope, $timeout){

    $rootScope.height = window.innerHeight;
    $rootScope.width = window.innerWidth;
    
    $scope.heightScreen = $rootScope.height;
    $scope.widthScreen = $rootScope.width;

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

    /*
        if(1){ //localStorageService.get("declared") === null
    }
    */

    promisesResize = function(source, destination, frame){
        /*
            var url = "resize.php?source=" + source + "&destination=" + destination + "&width="
            + localStorageService.get("widthScreen") * frame + "&height=" + localStorageService.get("heightScreen");
        */
       var url = "resize.php?source=" + source + "&destination=" + destination + "&width=" + $rootScope.width * frame + "&height=" + $rootScope.height;
        var deferred = $q.defer();
        $http.get(url)
        .then(function(response){
            deferred.resolve(response);},
            function(error){
            deferred.reject("Impossible de récuprérer les informations");
        });

        return deferred.promise;
    }

    

    $scope.onLoadPage = function(){
        if(localStorageService.get("declared")){
            console.log("On est declaré !!");
            return;
        }
        localStorageService.set("declared", true);
        $q.all([
            $rootScope.loader = true,
            promisesResize("css/img/fond/home.png", "css/img/testResize/homeR.png", 25),
            promisesResize("css/img/fond/ladder.png", "css/img/testResize/ladderR.png", 6),
            $timeout(function(){
                console.log("Attente 1sec");
            }, 1000)
        ]).then(function(){
            $rootScope.loader = false;
            console.log("OK go forwardd !!");            
        }, function(){
            $rootScope.loader = false;
            console.log("Impossible de récuprérer les informations");
        });        
        
    }

    
    

       //          console.log(localStorageService.clearAll());
    console.log(localStorageService.keys());
    

});
