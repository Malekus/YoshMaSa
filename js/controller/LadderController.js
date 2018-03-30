app.controller("LadderController", function($scope, $http, localStorageService, $rootScope){

    $scope.heightScreen = $rootScope.height;
    $scope.widthScreen = $rootScope.width;

    $scope.url = $rootScope.url.ladder;

    $scope.classement = {};

    $scope.update = function(){
        var url = "https://www.yoshmasaapi.malekus.fr/list.php";
        $rootScope.loader = true;
        $http.post(url).then(httpSuccess, httpError);
    }

    httpSuccess = function(response){
        $rootScope.loader = false;
        $scope.classement = response.data;
    }

    httpError = function(error){
        $rootScope.loader = false;
        alert("Impossible de récuprérer les informations");
    }

    $scope.update();

    $scope.langue = localStorageService.get("langue");
    console.log($scope.langue);
});
