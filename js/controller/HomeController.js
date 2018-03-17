app.controller("HomeController", function($scope, $http, localStorageService, resizeService, $document, $log, Upload){

    initialisation = function(){
        $scope.loader = true;  
        if(localStorageService.get("declared") === null){
            localStorageService.set("declared", true);
            localStorageService.set("widthScreen", window.innerWidth);
            localStorageService.set("heightScreen", window.innerHeight);
            
        }
        $scope.loader = false;
    }

    //initialisation();
    

/*
    dataURItoBlob = function(dataURI) {
        var byteString = dataURI;
        var ab = new ArrayBuffer(byteString.length);
        var ia = new Uint8Array(ab);
        for (var i = 0; i < byteString.length; i++) {
            ia[i] = byteString.charCodeAt(i);
        }
        var blob = new Blob([ab], {type: 'image/png'}); //or mimeString if you want
        return blob;
    }

    resize = function(){
        resizeService
            .resizeImage('css/img/fond/home.png', {
                height: window.innerHeight, 
                width: window.innerWidth,
                outputFormat: 'image/png'
            })
            .then(function(image){
                //console.log(image);
                // image.replace("data:image/png;base64,", "")
                
                var blob = dataURItoBlob(image.replace("data:image/png;base64,", ""));
                var images = new File([blob], 'css/img/fond/OOOOO.png');

                $scope.upload(images)

            })
            .catch($log.error);
    }


    resize();
*/
    
    

    


});
