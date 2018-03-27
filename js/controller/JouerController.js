app.controller("JouerController", function($scope, $interval, $rootScope){
    $scope.heightScreen = $rootScope.height;
<<<<<<< HEAD
    $scope.widthScreen = $rootScope.width;

    $scope.alpha = 0;
    $scope.beta = 0;
    $scope.gamma = 0;
=======
    $scope.widthScreen = $rootScope.width
    //$scope.url = $rootScope.url.jouer;
>>>>>>> a1717ab9b152689d2e452050a123c0283639a52f
    $scope.x = 0;
    $scope.y = 0;
    $scope.z = 0;

    /*Calcul */
    $scope.coeffY = 1;
    $scope.coeffZ = 1;
    $scope.poids = 2;
    $scope.diffY = 0;
    $scope.diffZ = 0;
    $scope.seconde = 0;
    $scope.forceY = 0;
    $scope.forceZ = 0;
    $scope.forceYZ = 0;
    $scope.forceYcoeff = 0;
    $scope.forceZcoeff = 0;
    $scope.forceYZcoeff = 0;
    $scope.forceYcoeffCumul = 0;
    $scope.forceZcoeffCumul = 0;
    $scope.forceYZcoeffCumul = 0;

    $scope.actif = false;

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
<<<<<<< HEAD
      moyenne = function(tab){
        const reducer = (accumulator, currentValue) => accumulator + currentValue;
        return tab.reduce(reducer);
      };
=======

      $scope.grosCalcul = function(taille){
        $scope.forceY = $scope.poids * $scope.diffY;
        $scope.forceZ = $scope.poids * $scope.diffZ;
        $scope.forceYZ = $scope.forceY + $scope.forceZ;
        $scope.forceYcoeff = $scope.forceY * $scope.coeffY;
        $scope.forceZcoeff = $scope.forceZ * $scope.coeffZ;
        $scope.forceYZcoeff = $scope.forceYcoeff + $scope.forceZcoeff;
        $scope.forceYcoeffCumul = $scope.forceY * Math.pow($scope.coeffY, taille);
        $scope.forceZcoeffCumul = $scope.forceZ * Math.pow($scope.coeffZ, taille);
        $scope.forceYZcoeffCumul = $scope.forceYcoeffCumul + $scope.forceZcoeffCumul;
    }

    moyenne = function(tab){
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    return tab.reduce(reducer) / tab.length;
    };
>>>>>>> a1717ab9b152689d2e452050a123c0283639a52f


    $scope.calculFin = function(){
        $interval.cancel(monInterval);
        MontabX = [];
        MontabY = [];
        MontabZ = [];
        $scope.diffY = 0;
        $scope.diffZ = 0;

        for(i = 1; i < tabY.length; i++){
            $scope.diffY = $scope.diffY + tabY[i] - tabY[i-1] * Math.floor(Math.random() * 6) + 1  ;
        }
        for(i = 1; i < tabZ.length; i++){
            $scope.diffZ = $scope.diffZ + tabZ[i] - tabZ[i-1] * Math.floor(Math.random() * 6) + 1  ;
        }              
        

        $scope.seconde = tabZ.length / 10;

        MontabX.push(Math.min(...tabX), Math.max(...tabX), moyenne(tabX));
        MontabY.push(Math.min(...tabY), Math.max(...tabY), moyenne(tabY));
        MontabZ.push(Math.min(...tabZ), Math.max(...tabZ), moyenne(tabZ));
        tableau = [];
        tableau.push(MontabX);
        tableau.push(MontabY);
        tableau.push(MontabZ);
        
        console.log(tableau);
<<<<<<< HEAD
     
        };
=======

        $scope.grosCalcul(tabY.length);

    }
      
    $scope.calibre = function(){}

    $scope.addition = function(a,b){
        return parseInt(a) + parseInt(b);
    }

    $scope.calculCoeff = function(force, coef, puissance=null){
        if(puissance == null){
            return parseInt(force) * parseInt(coef);
        }
        return parseInt(force) * Math.pow(parseInt(coef),parseInt(puissance * 10));
    }    

    $scope.clickBtn = function(){
        $scope.actif = !$scope.actif;
    }

    
});

>>>>>>> a1717ab9b152689d2e452050a123c0283639a52f



   
