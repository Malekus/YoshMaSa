app.controller('PlanController', function($scope){
    /* Premier plan */
    const canvasPremier = document.getElementById('plan');
    const ctxPremier = canvasPremier.getContext('2d');
    /*
    const canvasDeuxieme = document.getElementById('deuxiemePlan');
    const ctxDeuxieme = canvasDeuxieme.getContext('2d');
    const canvasTroisieme = document.getElementById('troisiemePlan');
    const ctxTroisieme = canvasTroisieme.getContext('2d');
    */

    let width = window.innerWidth, height = window.innerHeight;
    let caddrillage = [];
    let size = 10;
    canvasPremier.height = height;
    canvasPremier.width = width;
    

    for(var y = 0; y < height / size; y++){
        for(var x = 0; x < width / size; x++){
            caddrillage.push([x * size, y * size, size-1, size-1, ['white', 0]]);
        }
    }

    for(var i = 0; i < caddrillage.length; i++){
        ctxPremier.globalAlpha = 1; // Opacité
        ctxPremier.fillStyle = caddrillage[i][4][0];
        ctxPremier.fillRect(caddrillage[i][0], caddrillage[i][1],  caddrillage[i][2], caddrillage[i][3]);
    }

    console.log(caddrillage[0][0], caddrillage[0][1],  caddrillage[0][2], caddrillage[0][3], caddrillage[0][4]);

    orderPassge = function(x){
        let min = x[0];
        array.forEach(element => {
            if(element[1] < min[1]){
                min = element;
            }
        });
        return min;
        
    };

    creerPixel = function(x, y, color, order){
        canvasPremier.fillStyle = color; // couleur du rectange
        canvasPremier.fillRect(x*size, y*size, size-1, size-1);
    };

    let array = [['white', 2], ['red', 4], ['green', 1], ['blue', 8]];
    
    console.log(orderPassge(array));
    console.log(caddrillage)



});