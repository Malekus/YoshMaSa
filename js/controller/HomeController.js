app.controller("HomeController", function($scope, $animateCss, $http){

    $scope.canvasH = window.innerHeight;
    $scope.canvasW = window.innerWidth;

    console.log($scope.canvasH, $scope.canvasW);

    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    var img = document.getElementById("fond");
    ctx.drawImage(img, 0, 0, $scope.canvasW*24, $scope.canvasH)
    $scope.urlIMG = c.toDataURL({
        format: 'png'
    });


console.log();
    makeFondResize = function(){
        $http.post(location.pathname+"js/resizeImg.py").then(httpSuccess(response), httpError(error));
    }

    httpSuccess = function(response){
        console.log(response);
        $scope.python = response.data;
    }

    httpError = function(error){
        alert("Impossible de récuprérer les informations");
    }

    makeFondResize();
    console.log($scope.python);
    
/*
    $scope.fond =  {
        'position' : 'absolute',
        'height' : $scope.canvasH+'px',
        'width' : $scope.canvasW*25+'px',
        'background' : 'url("'+ c.toDataURL() +'") no-repeat',
        
        'animation': 'toto 5s steps(25) infinite'

        }

        
    

        animate("5s", keyframes([
            style({ backgroundColor: "red", offset: 0 }),
            style({ backgroundColor: "blue", offset: 0.2 }),
            style({ backgroundColor: "orange", offset: 0.3 }),
            style({ backgroundColor: "black", offset: 1 })
          ])
*/


          /*
    $scope.frameFond = {
        '@keyframes backgroundFrame {from{ background-position-x: 0; }    to{ background-position-x: -9000px; }        }'
    }*/
});

