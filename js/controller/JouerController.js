app.controller("JouerController", function($scope, $interval, $rootScope){
    $scope.heightScreen = $rootScope.height;
    $scope.widthScreen = $rootScope.width;
    $scope.x = 0;
    $scope.y = 0;
    $scope.z = 0;
    $scope.tableauXYZ = {
        x : [],
        y : [],
        z : []
    };
    var tableau = [];
    var monInterval;
    $scope.force = 0;
    $scope.actif = false;

    if(window.DeviceMotionEvent) {
        window.addEventListener("devicemotion", process, true);
        function process(event) {
            $scope.$apply(function(){
                $scope.x = parseFloat(event.accelerationIncludingGravity.x).toFixed(2);
                $scope.y = parseFloat(event.accelerationIncludingGravity.y).toFixed(2);
                $scope.z = parseFloat(event.accelerationIncludingGravity.z).toFixed(2);

            })
        }
      } else {
        alert("Votre appareil ne supporte pas l'accéléromètre !");
      }

      $scope.calculDebut = function(){
            $scope.tableauXYZ = {
                x : [],
                y : [],
                z : []
            };

            monInterval = $interval(function(){
                $scope.tableauXYZ.x.push(parseFloat($scope.x));
                $scope.tableauXYZ.y.push(parseFloat($scope.y));
                $scope.tableauXYZ.z.push(parseFloat($scope.z));                
            }, 100);
      };

     

      moyenne = function(tab){
        const reducer = (accumulator, currentValue) => accumulator + currentValue;
        return tab.reduce(reducer);
      };

      addCumul = function(tab){
        var r = 0;  
        for(var i = 1; i < tab.length; i++){
                r += tab[i] - tab[i-1];
          }
        return r;
      };

      
    $scope.calculFin = function(){
        $interval.cancel(monInterval);
        $scope.accX = addCumul($scope.tableauXYZ.x);
        $scope.accY = addCumul($scope.tableauXYZ.y);
        $scope.accZ = addCumul($scope.tableauXYZ.z);
        $scope.forceXYZ = $scope.accY + $scope.accZ - Math.abs($scope.accX);
        $scope.forceYZ = $scope.accY + $scope.accZ;     
    };
});