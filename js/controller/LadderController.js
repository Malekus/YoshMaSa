app.controller("LadderController", function($scope, $http, localStorageService){
    
    $scope.widthScreen = localStorageService.get("widthScreen");
    $scope.heightScreen = localStorageService.get("heightScreen");

    $scope.classement = {};

    $scope.update = function(){
        var url = "https://www.yoshmasaapi.malekus.fr/list.php";
        $scope.loader = true;
        $http.get(url).then(httpSuccess, httpError);        
    }
    
    httpSuccess = function(response){
        $scope.loader = false;
        $scope.classement = response.data;
    }

    httpError = function(error){
        $scope.loader = false;
        alert("Impossible de récuprérer les informations");
    }

    $scope.update();
});