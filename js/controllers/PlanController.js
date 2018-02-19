app.controller('PlanController', function($scope){
    const canvasPlan = document.getElementById('plan');
    const ctxPlan = canvasPlan.getContext('2d');
    const premierPlan = 1, secondPlan = 2, fondPlan = 3;
    let width = 100, height = 100;
    let caddrillage = [];
    let size = 10;
    canvasPlan.height = height;
    canvasPlan.width = width;    

    orderPassageAsc = function(x){
        let min = x[0];
        x.forEach(element => {
            if(element[1] < min[1]){
                min = element;
            }
        });
        return min[0];
    };

    orderPassageDesc = function(x){
        let max = x[0];
        x.forEach(element => {
            if(element[1] > max[1]){
                max = element;
            }
        });
        return max[0];
    };

    for(var y = 0; y < height / size; y++){
        for(var x = 0; x < width / size; x++){
            if (x % 2 == 0)
                caddrillage.push([x * size, y * size, size-1, size-1, [['white', 4]]]);
            else
                caddrillage.push([x * size, y * size, size-1, size-1, [['white', 4], ['blue', 3]]]);
        }
    }

    for(var i = 0; i < caddrillage.length; i++){
        ctxPlan.globalAlpha = 1; // Opacité
        ctxPlan.fillStyle = orderPassageAsc(caddrillage[i][4]);
        ctxPlan.fillRect(caddrillage[i][0], caddrillage[i][1],  caddrillage[i][2], caddrillage[i][3]);
    }

    addPixel = function(num, color, order){
        caddrillage[num][4].push([color, order])
        ctxPlan.fillStyle = orderPassageAsc(caddrillage[num][4]);
        ctxPlan.fillRect(caddrillage[num][0], caddrillage[num][1],  caddrillage[num][2], caddrillage[num][3]);
        
    };

    deletePixel = function(num){
        if (caddrillage[num][4].length <= 1) return;
        var found = caddrillage[num][4].find(function(element){
           return  element[0] == orderPassageAsc(caddrillage[num][4]) && element[0] != "white"
            
        });
        caddrillage[num][4].splice(caddrillage[num][4].indexOf(found), 1);
        ctxPlan.fillStyle = orderPassageAsc(caddrillage[num][4]);
        ctxPlan.fillRect(caddrillage[num][0], caddrillage[num][1],  caddrillage[num][2], caddrillage[num][3]);
        
    };
    

    //creerPixel(0,0, "black", 1);
    addPixel(0, "black", 3);
    addPixel(0, "red", 2);
    deletePixel(0);
    deletePixel(0);
    deletePixel(0);
});