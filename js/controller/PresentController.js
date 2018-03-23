app.controller("PresentController", function($scope, $http, localStorageService, $q, $rootScope, $timeout){
    
    $rootScope.height = window.innerHeight;
    $rootScope.width = window.innerWidth;
    
    $scope.heightScreen = $rootScope.height;
    $scope.widthScreen = $rootScope.width;


    $scope.page = "Piratack Present";

    promisesResize = function(source, destination, frame){
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

    goToHome = function(){
        $timeout(function(){
            console.log("Attente 1sec");
            window.location.href = "#!home";
        }, 2000);        
    }

       


     



 


    
    $scope.onLoadPage = function(){
        if(localStorageService.get("declared")){
            console.log("On est declaré !!");
            goToHome();
            return;
        }
        localStorageService.set("declared", true);
        $q.all([        
            promisesResize("css/img/fond/home26.png", "css/img/testResize/homeR.png", 26),
            promisesResize("css/img/fond/jeu26.png", "css/img/testResize/jeuR.png", 26),
            promisesResize("css/img/fond/ladder6.png", "css/img/testResize/ladderR.png", 6),
            promisesResize("css/img/fond/option.png", "css/img/testResize/optionR.png", 1),
            promisesResize("css/img/fond/credit.png", "css/img/testResize/creditR.png", 1)
        ]).then(function(){
            goToHome();
            $rootScope.loader = false;
            console.log("OK go forwardd !!");        
        }, function(){
            $rootScope.loader = false;
            console.log("Impossible de récuprérer les informations");
        });                
    }
    
});

/*
   
   


    console.log(localStorageService.clearAll());

  
 



*/