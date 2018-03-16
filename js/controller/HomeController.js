app.controller("HomeController", function($scope, $animateCss, $http, localStorageService, $rootScope){

    $rootScope.canvasH = window.innerHeight;
    $rootScope.canvasW = window.innerWidth;

<<<<<<< HEAD
    console.log($scope.canvasH, $scope.canvasW);

    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    var img = document.getElementById("fond");
    ctx.drawImage(img, 0, 0, $scope.canvasW*24, $scope.canvasH)
    $scope.urlIMG = c.toDataURL({
        format: 'png'
    });


    makeFondResize = function(){
        $http.post(location.pathname+"js/resizeImg.py").then(httpSuccess(response), httpError(error));
=======
    makeFondResize = function(nbFramme, source, destination){
        var url = 'https://www.yoshmasaapi.malekus.fr/resize.php?source='+source+'&destination='+destination+'&width='+$rootScope.canvasW * nbFramme+'&height='+$rootScope.canvasH;
        console.log(url);
        $http.get(url).then(httpSuccess, httpError);
>>>>>>> 3a37240e5932b110b43cbf626c9014f44a9b686f
    }

    httpSuccess = function(response){
        console.log(response.data);
    }

    httpError = function(error){
        alert("Impossible de récuprérer les informations");
    }

<<<<<<< HEAD
    //makeFondResize();
    console.log($scope.python);
    
/*
    $scope.fond =  {
        'position' : 'absolute',
        'height' : $scope.canvasH+'px',
        'width' : $scope.canvasW*25+'px',
        'background' : 'url("'+ c.toDataURL() +'") no-repeat',
        
        'animation': 'toto 5s steps(25) infinite'
=======
>>>>>>> 3a37240e5932b110b43cbf626c9014f44a9b686f


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

