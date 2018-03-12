app.controller("LadderController", function($scope, $http){
    
    $scope.classement = {};

    $scope.update = function(){
        var url = "http://localhost/YoshMaSaAPI/web/score/list";
        $http.get(url).then(httpSuccess, httpError);
        
    }
    
    httpSuccess = function(response){
        $scope.classement = response.data;
    }

    httpError = function(error){
        alert("Impossible de récuprérer les informations");
    }
});