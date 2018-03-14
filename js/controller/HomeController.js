app.controller("HomeController", function($scope, $animateCss, $http){

    $scope.canvasH = window.innerHeight;
    $scope.canvasW = window.innerWidth;

    makeFondResize = function(){
        var source = '.._.._css_img_coco.png';
        var dest = '.._.._css_img_MONSTESTTTTT.png'
        var url = 'http://localhost/YoshMaSa/YoshMaSaAPI/web/resize/'+source+'/'+dest+'/'+$scope.canvasW+'/'+$scope.canvasH;
        $http.get(url).then(httpSuccess(response), httpError(error));
    }

    httpSuccess = function(response){
        //console.log(response.data);
    }

    httpError = function(error){
        alert("Impossible de récuprérer les informations");
    }

    makeFondResize();
});

