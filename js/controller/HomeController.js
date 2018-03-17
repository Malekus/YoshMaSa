app.controller("HomeController", function($scope, $animateCss, $http, localStorageService, $rootScope){

    $rootScope.canvasH = window.innerHeight;
    $rootScope.canvasW = window.innerWidth;

    initialisation = function(){
        $scope.loader = true;  
        if(localStorageService.get("declared") === null){
            localStoragemakeFondResizeService.set("declared", true);
            (25, '.._.._css_img_fond_home.png', '.._.._css_img_fond_home.png' );
            makeFondResize(6, '.._.._css_img_fond_ladder.png', '.._.._css_img_fond_ladder.png' );
        }
        $scope.loader = false;
    }
});
