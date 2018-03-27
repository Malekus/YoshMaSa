app.factory('ImageService', function($http, $q, $sce, $rootScope) {
    return {
        getImages : function(height, width){
            $rootScope.loader = true;
            var url = "check.php?width="+width+"&height="+height;
            var deferred = $q.defer();
            $http.get("https://www.yoshmasaapi.malekus.fr/"+url)
            .then(function(response){
                var tab = {}
                angular.forEach(response.data.images, function(image, key){
                    tab[key] = $sce.trustAs($sce.RESOURCE_URL, image);
                });
                deferred.resolve(tab);
                $rootScope.loader = false;
            },
                function(error){
                deferred.reject("Impossible de récuprérer les informations");
                $rootScope.loader = false;
            });
            return deferred.promise;
        }
    }
    
});