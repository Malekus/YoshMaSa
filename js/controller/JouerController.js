app.controller("JouerController", function($scope, $interval, $rootScope){
    $scope.heightScreen = $rootScope.height;
    $scope.widthScreen = $rootScope.width

    $scope.x = 0;
    $scope.y = 0;
    $scope.z = 0;

    var tabX = [];
    var tabY = [];
    var tabZ = [];
    var MontabX = [];
    var MontabY = [];
    var MontabZ = [];
    var tableau = [];
    var monInterval;    

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

      $scope.calculDebut = function(x, y, z){
            tabX = [];
            tabY = [];
            tabZ = [];              
            monInterval = $interval(function(){
                tabX.push(parseFloat(x));
                tabY.push(parseFloat(y));
                tabZ.push(parseFloat(z));         
            }, 100)
      };
      moyenne = function(tab){
        const reducer = (accumulator, currentValue) => accumulator + currentValue;
        return tab.reduce(reducer) / tab.length;
      };

      $scope.calculFin = function(){
        $interval.cancel(monInterval);
        MontabX = [];
        MontabY = [];
        MontabZ = [];      
        MontabX.push(Math.min(...tabX), Math.max(...tabX), moyenne(tabX));
        MontabY.push(Math.min(...tabY), Math.max(...tabY), moyenne(tabY));
        MontabZ.push(Math.min(...tabZ), Math.max(...tabZ), moyenne(tabZ));
        tableau = [];
        tableau.push(MontabX);
        tableau.push(MontabY);
        tableau.push(MontabZ);
        
        console.log(tableau);
    
      }
      
      $scope.calibre = function(){

    }

});




   
