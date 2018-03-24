app.controller("JouerController", function($scope, $interval, $rootScope){
    $scope.heightScreen = $rootScope.height;
    $scope.widthScreen = $rootScope.width;

    $scope.alpha = 0;
    $scope.beta = 0;
    $scope.gamma = 0;
    $scope.x = 0;
    $scope.y = 0;
    $scope.z = 0;

    var tabX = [];
    var tabY = [];
    var tabZ = [];
   // var tab = [];
    var MontabX = [];
    var MontabY = [];
    var MontabZ = [];
    var tableau = [];
    var avgX;
    var avgY;
    var avgZ;
    var monInterval;


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
            MontabX = [];
            MontabY = [];
            MontabZ = [];
     
                     
            monInterval = $interval(function(){
                tabX.push(parseFloat(x));
                tabY.push(parseFloat(y));
                tabZ.push(parseFloat(z));
              
            }, 100)
      };
      moyenne = function(tab){
        const reducer = (accumulator, currentValue) => accumulator + currentValue;
        return tab.reduce(reducer);
      };

      $scope.calculFin = function(){
        $interval.cancel(monInterval);

        MontabX.push(Math.min(...tabX), Math.max(...tabX), moyenne(tabX));
        MontabY.push(Math.min(...tabY), Math.max(...tabY), moyenne(tabY));
        MontabZ.push(Math.min(...tabZ), Math.max(...tabZ), moyenne(tabZ));
        tableau = [];
        tableau.push(MontabX);
        tableau.push(MontabY);
        tableau.push(MontabZ);
        
        console.log(tableau);
     
        };



    });
