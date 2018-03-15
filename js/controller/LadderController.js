app.controller("LadderController", function($scope, $http){
    
    $scope.classement = {};

    $scope.update = function(){
        var url = "http://localhost/YoshMaSa/YoshMaSaAPI/web/score/list";
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