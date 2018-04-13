app.controller("JouerController", function($scope, $interval, $rootScope, $timeout, localStorageService){
    $scope.heightScreen = $rootScope.height;
    $scope.ready = false;
    $scope.widthScreen = $rootScope.width;
    $scope.x = 0;
    $scope.y = 0;
    $scope.z = 0;
    $scope.tableauXYZ = {
        x : [],
        y : [],
        z : []
    };

    $scope.scoreFinal = 0;
    $scope.scoreCourant = 0;

    $scope.perdu = false;

    $scope.url = $rootScope.url.jouer;
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

                if($scope.tableauXYZ.y.length == 0){
                    if(0 < parseFloat($scope.y) && 10 > parseFloat($scope.y)){
                        $scope.tableauXYZ.y.push(parseFloat($scope.y));
                    }
                }else{
                    if(parseFloat($scope.y) < $scope.tableauXYZ.y[$scope.tableauXYZ.y.length - 1]  && 0 < parseFloat($scope.y) && 10 > parseFloat($scope.y)){
                        $scope.tableauXYZ.y.push(parseFloat($scope.y));
                    }
                }

                if($scope.tableauXYZ.z.length == 0){
                    if(0 < parseFloat($scope.z) && 10 > parseFloat($scope.z)){
                        $scope.tableauXYZ.z.push(parseFloat($scope.z));
                    }
                }else{
                    if(parseFloat($scope.z) > $scope.tableauXYZ.z[$scope.tableauXYZ.z.length - 1]  && 0 < parseFloat($scope.z) && 10 > parseFloat($scope.z)){
                        $scope.tableauXYZ.z.push(parseFloat($scope.z));
                    }
                }

            }, 10);
      };

    addLadder = function(pseudo, point){
        var url = "https://www.yoshmasaapi.malekus.fr/add.php?pseudo="+pseudo+"&point="+point;
        $http.get(url).then(httpSuccess, httpError);

    }

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

    parse = function(v){
        return parseFloat(v).toFixed(2);
    }

    $scope.go = false;
    $scope.calculFin = function(){
        $scope.go = true;
        $timeout(function(){ 
            $scope.go = false;
        }, 500);
        $interval.cancel(monInterval);
        $scope.accX = parseFloat(Math.abs(addCumul($scope.tableauXYZ.x))).toFixed(2);
        $scope.accY = parseFloat(Math.abs(addCumul($scope.tableauXYZ.y))).toFixed(2);
        $scope.accZ = parseFloat(addCumul($scope.tableauXYZ.z)).toFixed(2);
        $scope.forceYZ = parseFloat($scope.accY + $scope.accZ).toFixed(2);
        $scope.scoreCourant = 13 * parseFloat($scope.forceYZ - $scope.accX).toFixed(2);
        if($scope.scoreCourant < $scope.but * 1.2 && $scope.scoreCourant > $scope.but * 0.8){
            $scope.scoreFinal += $scope.scoreCourant;
            score();
        }
        else{
            $scope.perdu = true;
            if(localStorageService.get("maxScore") < $scope.scoreFinal){
                localStorageService.set("maxScore", $scope.scoreFinal);
                addLadder(localStorageService.get("pseudo", $scope.scoreFinal))
            }
        }
        
    };

    $timeout(function(){ 
        $scope.ready = true;
    }, 4900);

    score = function(){
        $scope.but = 13 * (Math.floor(Math.random() * 10) + 5)
    }    

    $scope.rego = function(){
        score();
        $scope.perdu = false;
        $scope.scoreCourant = 0;
        $scope.scoreFinal = 0;
    }

    $scope.rego();
});
