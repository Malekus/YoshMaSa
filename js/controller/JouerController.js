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
    }
    /*Calcul */
    $scope.force = 0;
    $scope.actif = false;

    var tabX = [];
    var tabY = [];
    var tabZ = [];
    var MontabX = [];
    var MontabY = [];
    var MontabZ = [];
    var tableau = [];
    var monInterval;    
    var record = {
        x : [],
        y : [],
        z : []
    };

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
            $scope.tableauXYZ = {
                x : [],
                y : [],
                z : []
            }

            tabX = [];
            tabY = [];
            tabZ = [];              
            monInterval = $interval(function(){
                tabX.push(parseFloat(x));
                tabY.push(parseFloat(y));
                tabZ.push(parseFloat(z));
                $scope.tableauXYZ.x.push(parseFloat(x));
                $scope.tableauXYZ.y.push(parseFloat(y));
                $scope.tableauXYZ.z.push(parseFloat(z));                
            }, 100)
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
      }

      
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
        $scope.accX = addCumul($scope.tableauXYZ.x);
        $scope.accY = 5; //addCumul($scope.tableauXYZ.y);
        $scope.accZ = 3;//addCumul($scope.tableauXYZ.z);
        $scope.forceXYZ = $scope.accY + $scope.accZ - Math.abs($scope.accX);
        $scope.forceYZ = $scope.accY + $scope.accZ;
     
        };
    })