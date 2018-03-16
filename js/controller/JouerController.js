app.controller("JouerController", function($scope){
    $scope.alpha = 0;
    $scope.beta = 0;
    $scope.gamma = 0;
    $scope.x = 0;
    $scope.y = 0;
    $scope.z = 0;


    if(window.DeviceOrientationEvent){
        window.addEventListener('deviceorientation', process, false);
        function process(event){
            $scope.$apply(function(){
                $scope.alpha = event.alpha;
                $scope.beta = event.beta;
                $scope.gamma = event.gamma;
           })

        }
    }else{
        alert("Votre appareil ne supporte pas les orientations !");
    }

    if(window.DeviceMotionEvent) {
        window.addEventListener("devicemotion", process, false);
        function process(event) {
            $scope.$apply(function(){
                $scope.x = parseFloat(event.accelerationIncludingGravity.x).toFixed(8);
                $scope.y = parseFloat(event.accelerationIncludingGravity.y).toFixed(8);
                $scope.z = parseFloat(event.accelerationIncludingGravity.z).toFixed(8);
<<<<<<< HEAD


=======
>>>>>>> 3a37240e5932b110b43cbf626c9014f44a9b686f
           })
          }
      } else {
        alert("Votre appareil ne supporte pas l'accéléromètre !");
      }
<<<<<<< HEAD


      var tab = [];
      var monInterval;
      $scope.calculDebut = function(){
          tab = [];
          monInterval = $interval(function(){
            function process(event) {
                $scope.$apply(function(){
                    tab.push(parseFloat(event.accelerationIncludingGravity.x).toFixed(5));
                    tab.push(parseFloat(event.accelerationIncludingGravity.y).toFixed(5));
                    tab.push(parseFloat(event.accelerationIncludingGravity.z).toFixed(5));
                })
              }
          }, 100)
      };

      $scope.calculFin = function(){
        console.log(tab);
          $interval.cancel(monInterval);

      }
});
=======
    
      

});
>>>>>>> 3a37240e5932b110b43cbf626c9014f44a9b686f
