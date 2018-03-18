app.controller("HomeController", function($scope, $http, localStorageService, $document, $log, resizeService, FileSaver, Blob, Upload){

    dataURItoBlob = function (dataURI) {

            // convert base64/URLEncoded data component to raw binary data held in a string
            var byteString;
            if (dataURI.split(',')[0].indexOf('base64') >= 0)
                byteString = atob(dataURI.split(',')[1]);
            else
                byteString = unescape(dataURI.split(',')[1]);

            // separate out the mime component
            var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];

            // write the bytes of the string to a typed array
            var ia = new Uint8Array(byteString.length);
            for (var i = 0; i < byteString.length; i++) {
                ia[i] = byteString.charCodeAt(i);
            }

            return new Blob([ia], {type:mimeString});
    };


    upload = function (file) {
        Upload.upload({
            url: 'css',
            data: {file: file}
        }).then(function (resp) {
            console.log('Success ' + resp.config.data.file.name + 'uploaded. Response: ' + resp.data);
        }, function (resp) {
            console.log('Error status: ' + resp.status);
        }, function (evt) {
            var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
            console.log('progress: ' + progressPercentage + '% ' + evt.config.data.file.name);
        });
    };

    resize = function(picture, store, nbFramme){
        resizeService
            .resizeImage(picture, {
                height: $scope.heightScreen, 
                width: $scope.widthScreen * nbFramme,
                outputFormat: 'image/png'
            })
            .then(function(image){
                /*
                var imageResized = document.createElement('img');
                imageResized.src = image;
                $document[0].querySelector('body').appendChild(imageResized);
                */
                var data = dataURItoBlob(image);
                var file = new File([data], 'OKOK.png', {type: "image/png"});
                localStorageService.set(store, file);

                
                var imgg = image.replace("data:image/png;base64,","");

                /*
                FileSaver.saveAs(file, '/css/img/fond/toto.png');*/



            })
            .catch($log.error);
    };


    initialisation = function(){
        $scope.loader = true;  
        if(1){ // localStorageService.get("declared") === null
            localStorageService.set("declared", true);
            localStorageService.set("widthScreen", window.innerWidth);
            localStorageService.set("heightScreen", window.innerHeight);
            $scope.widthScreen = localStorageService.get("widthScreen");
            $scope.heightScreen = localStorageService.get("heightScreen");
            resize('css/img/fond/home.png', 'fondHome', 25);
            //resize('css/img/fond/ladder.png', 'fondLadder', 6);
            /*localStorageService.set("fondJouer", []);            
            localStorageService.set("fondOption", []);
            localStorageService.set("fondPerso", []);*/
            
            
        }
        $scope.loader = false;
    }

    initialisation();
    //localStorageService.clearAll();

    /*

    
    */
});
