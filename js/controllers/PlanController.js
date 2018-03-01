app.controller('PlanController', ['$scope', '$interval', function($scope,  $interval){
    /*
    const canvasPlan = document.getElementById('plan');
    const ctxPlan = canvasPlan.getContext('2d');
    let size = 5;
    let sizeMoins = size - 1;
    const mousePosition = { x: window.innerWidth/2, y: window.innerHeight/2 };
    const premierPlan = 1, secondPlan = 2, fondPlan = 3;    
    let width = window.innerWidth - window.innerWidth % size, 
        height = window.innerHeight - window.innerHeight % size;
    let caddrillage = [];
    
    canvasPlan.height = height; //640;
    canvasPlan.width = width; //360;    
    var nbCaseW = Math.floor(width / size);
    var nbCaseH = Math.floor(height / size);

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
            caddrillage.push([x * size, y * size, sizeMoins, sizeMoins, [['white', 10]]]);
        }
    }

    for(var i = 0; i < caddrillage.length; i++){
        ctxPlan.globalAlpha = 1; // Opacité
        ctxPlan.fillStyle = orderPassageAsc(caddrillage[i][4]);
        ctxPlan.fillRect(caddrillage[i][0], caddrillage[i][1],  caddrillage[i][2], caddrillage[i][3]);
    }

    window.addEventListener('click', function(e) {
        var tailleMaxW = width, tailleMaxH = height;
        mousePosition.x = e.pageX;
        mousePosition.y = e.pageY;
        $scope.nbCaseW = nbCaseW;
        $scope.nbCaseH = nbCaseH;
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
        ctxPlan.fillStyle = orderPassageAsc(caddrillage[num][4]);
        ctxPlan.fillRect(caddrillage[num][0], caddrillage[num][1],  caddrillage[num][2], caddrillage[num][3]);
        
    };

    

    deletePixel = function(num){
        if (caddrillage[num][4].length <= 1) return;
        var found = caddrillage[num][4].find(function(element){
           return  element[0] == orderPassageAsc(caddrillage[num][4]) && (element[0] != "white" && element[1] != 10);
            
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

    deleteLine = function (num, pas) {
        for(var i = 0; i <= pas; i++){
            deletePixel(num + i);
        }
    }

    addColumn = function(num, color, order, pas){        
        for(var i = 0; i < pas; i++){
            addPixel(num + i * nbCaseW, color, order);
        }
    };

    deleteForm = function(tab){
        tab.forEach(function(element){
            deleteLine(element[0], element[1]);
        });
    }

    goToPixel = function(start, end){
        deletePixel(start);
        addPixel(end, "red", 2);
    };

    fondDecran = function(){
        var placeBleu = Math.round(nbCaseH * 70 / 100);
        var placeVert = Math.round(nbCaseH * 30 / 100);
        for(var i = 0; i < nbCaseW; i++){
            addColumn(i, "darkcyan", 5, placeBleu);            
            addColumn(i + placeBleu * nbCaseW , "green", 5, placeVert);
        }
        
    };

    console.log("nb case W "+nbCaseW, "nb case H "+nbCaseH);
    fondDecran();
    
    nuage = function(x, mode){
        if(mode){
            addLine(x+nbCaseW*2+2, "red", 3, 6);
            addLine(x+nbCaseW*3+2, "red", 3, 6);
            addLine(x+nbCaseW*4+2, "red", 3, 6);
            addLine(x+nbCaseW*5+2, "red", 3, 6);
            return;
        }
        else{
            var nuage = [];
            nuage.push([x+nbCaseW*2+2, 6]);
            nuage.push([x+nbCaseW*3+2, 6]);
            nuage.push([x+nbCaseW*4+2, 6]);
            nuage.push([x+nbCaseW*5+2, 6]);
            return nuage;
        }
    }
    


    nuage(25000, true);
    
    addPixel(20000, "red", 2);
    addPixel(20001, "red", 2);
    x = 0;
    var ancien = 20000;
    var ancien1 = 20001;
    $interval(function(){        
        var nouveau = Math.floor(Math.random() * 20000) + 1;
        var nouveau1 = Math.floor(Math.random() * 20000) + 1;
        goToPixel(ancien, nouveau);
        goToPixel(ancien1, nouveau1);
        ancien = nouveau;
        ancien1 = nouveau1;
    }, 1000);
    

    */
    
    $scope.jouer = function(){
        console.log("Clické sur jouer");
    };

    let width = window.innerWidth, height = window.innerHeight;

    $scope.sizeFondEcran = {
        "height": height,
        "width": width
    };
    document.getElementById("fondEcran").height = height;
    document.getElementById("fondEcran").width = width;
    
}]);

