app.controller('PlanController', function($scope){
    const canvasPremier = document.getElementById('premierPlan');
    const ctxPremier = canvasPremier.getContext('2d');
    let width, height;
    let caddrillage = [];
    let size = 10;
    canvasPremier.height = size;
    canvasPremier.width = size;
    for(var y = 0; y < size; y++){
        for(var x = 0; x < size; x++){
            caddrillage.push([x * size, y * size]);
        }
    }


    for(var i = 0; i < caddrillage.length; i++){
        ctxPremier.globalAlpha = 1; // Opacité

        i % 2 == 0 ? ctxPremier.fillStyle = 'black' : ctxPremier.fillStyle = 'white';
        console.log(ctxPremier.fillStyle);
        ctxPremier.fillRect(caddrillage[i][0], caddrillage[i][1],  size-1, size-1);
    }


/*
    const canvasDeuxieme = document.getElementById('deuxiemePlan');
    const ctxDeuxieme = canvasDeuxieme.getContext('2d');

    const canvasTroisieme = document.getElementById('troisiemePlan');
    const ctxTroisieme = canvasTroisieme.getContext('2d');
*/
    console.log(Math.floor(window.innerHeight / 10), Math.floor( window.innerWidth / 10));
});