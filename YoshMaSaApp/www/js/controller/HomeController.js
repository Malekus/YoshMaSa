app.controller("HomeController", function($scope, $animateCss){

    $scope.canvasH = window.innerHeight;
    $scope.canvasW = window.innerWidth;

    console.log($scope.canvasH, $scope.canvasW);
    /*
    window.onload = function() {
       ;
    }*/


    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    var img = document.getElementById("fond");
    ctx.drawImage(img, 0, 0, $scope.canvasW*24, $scope.canvasH)
    console.log(c.toDataURL());

    

    $scope.fond =  {
        'position' : 'absolute',
        'height' : $scope.canvasH+'px',
        'width' : $scope.canvasW*25+'px',
        'background' : 'url("'+ c.toDataURL() +'") no-repeat',
        
        'animation': 'from{ background-position-x: 0; } to{ background-position-x: -9000px; } 5s steps(25) infinite'

        }
    
    $scope.frameFond = {
        '@keyframes backgroundFrame {from{ background-position-x: 0; }    to{ background-position-x: -9000px; }        }'
    }
});

