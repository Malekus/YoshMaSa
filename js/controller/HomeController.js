app.controller("HomeController", function($scope, $animateCss, $http, localStorageService, $rootScope){

    $rootScope.canvasH = window.innerHeight;
    $rootScope.canvasW = window.innerWidth;

    makeFondResize = function(nbFramme, source, destination){
        var url = 'https://www.yoshmasaapi.malekus.fr/resize.php?source='+source+'&destination='+destination+'&width='+$rootScope.canvasW * nbFramme+'&height='+$rootScope.canvasH;
        console.log(url);
        $http.get(url).then(httpSuccess, httpError);
    }

    httpSuccess = function(response){
        console.log(response.data);
    }

    httpError = function(error){
        alert("Impossible de récuprérer les informations");
    }



    initialisation = function(){
        $scope.loader = true;  
        if(localStorageService.get("declared") === null){
            localStorageService.set("declared", true);
            makeFondResize(25, '.._.._css_img_fond_home.png', '.._.._css_img_fond_home.png' );
            makeFondResize(6, '.._.._css_img_fond_ladder.png', '.._.._css_img_fond_ladder.png' );
        }
        $scope.loader = false;
    }
    
    initialisation();
    console.log(localStorageService.keys());
});

