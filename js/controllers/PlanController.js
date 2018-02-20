app.controller('PlanController', function($scope){
    const canvasPlan = document.getElementById('plan');
    const ctxPlan = canvasPlan.getContext('2d');
    const mousePosition = { x: window.innerWidth/2, y: window.innerHeight/2 };
    const premierPlan = 1, secondPlan = 2, fondPlan = 3;    
    let width = window.innerWidth, height = window.innerHeight;
    let caddrillage = [];
    let size = 5;
    let sizeMoins = size;
    canvasPlan.height = height;
    canvasPlan.width = width;    
    const nbCaseW = Math.floor(width / size);
    const nbCaseH = Math.floor(height / size);

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
            caddrillage.push([x * size, y * size, sizeMoins, sizeMoins, [['white', 4]]]);
        }
    }

    for(var i = 0; i < caddrillage.length; i++){
        ctxPlan.globalAlpha = 1; // Opacité
        ctxPlan.fillStyle = orderPassageAsc(caddrillage[i][4]);
        ctxPlan.fillRect(caddrillage[i][0], caddrillage[i][1],  caddrillage[i][2], caddrillage[i][3]);
    }

    window.addEventListener('click', function(e) {
        var tailleMaxW = window.innerWidth, tailleMaxH = window.innerHeight;
        mousePosition.x = e.pageX;
        mousePosition.y = e.pageY;
        var caseCourante = (Math.floor(mousePosition.x * nbCaseW / tailleMaxW) +
        Math.floor(mousePosition.y * nbCaseH / tailleMaxH) * nbCaseW);
        console.log("Case n° "+ caseCourante);
    });

    addPixel = function(num, color, order){
        var found = caddrillage[0][4].find(function(element){
            if (element[1] == order){
                element[0] = color;
                return;
            }
        });
        if(found == null){
            caddrillage[num][4].push([color, order])
        }
        console.log(orderPassageAsc(caddrillage[num][4]));
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

    addLine = function(num, color, order, pas){
        for(var i = 0; i < pas; i++){
            addPixel(num + i, color, order);
        }
    };

    addColumn = function(num, color, order, pas){
        for(var i = 0; i < pas; i++){
            console.log(num + i * nbCaseW, color);
            addPixel(num + i * nbCaseW, color, order);
        }
    };

    addColumn(0, "green", 2, 5);
    
});

