app.controller("JouerController", function($scope,localStorageService,$interval){
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
                //console.log($scope.x, $scope.y, $scope.z);

           })
          }
      } else {
        alert("Votre appareil ne supporte pas l'accéléromètre !");
      }

    
      var cpt = 0;
      var tab = [];
      var monInterval;
      $scope.calculDebut = function(x, y, z){
            tab = [];
            monInterval = $interval(function(){
                tab.push([x,y,z]);
            }, 100)
      };

      $scope.calculFin = function(){
        $interval.cancel(monInterval);
        console.log(tab);
      }
});



    
      

