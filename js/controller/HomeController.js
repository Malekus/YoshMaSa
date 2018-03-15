app.controller("HomeController", function($scope, $animateCss, $http){

    $scope.canvasH = window.innerHeight;
    $scope.canvasW = window.innerWidth;

console.log($scope.canvasW , $scope.canvasH);

    makeFondResize = function(nbFramme){
        var source = '.._.._css_img_fond_home.png';
        var dest = '.._.._css_img_fond_home.png'
        var url = 'http://localhost/YoshMaSa/YoshMaSaAPI/web/resize/'+source+'/'+dest+'/'+$scope.canvasW * nbFramme+'/'+$scope.canvasH;
        $http.get(url).then(httpSuccess, httpError);
    }

    httpSuccess = function(response){
        console.log(response.data);
    }

    httpError = function(error){
        alert("Impossible de récuprérer les informations");
    }

    //makeFondResize(25);
});

