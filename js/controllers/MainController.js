app.controller('MainController', function($scope, $interval){
    let width, height;
    let pixels = [];
    const mousePosition = { x: window.innerWidth/2, y: window.innerHeight/2 };
    const canvas = document.getElementById('main');
    const ctx = canvas.getContext('2d');
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
    let size = 5;
    let sizeMoins = 4;
    let middleHeightY = Math.floor((window.innerHeight/size) / 2);
    let middleWidthX = Math.floor((window.innerWidth/size) / 2);

    for (var y = 0; y < window.innerHeight/size; y++) {
        for (var x = 0; x < window.innerWidth/size; x++) {
        pixels.push([x*size, y*size, sizeMoins, sizeMoins, '#000', 1]);
        }
    }

    for (var i = 0, l = pixels.length; i < l; i++) {
        ctx.globalAlpha = 1; // Opacité
        ctx.fillStyle = 'white'; // couleur du rectange
        ctx.fillRect(pixels[i][0], pixels[i][1], pixels[i][2], pixels[i][3]);
    }
    cleanCanvas = function(){
        for (var i = 0, l = pixels.length; i < l; i++) {
            ctx.globalAlpha = 1; // Opacité
            ctx.fillStyle = 'white'; // couleur du rectange
            ctx.fillRect(pixels[i][0], pixels[i][1], pixels[i][2], pixels[i][3]);
        }
    }

    creerPixel = function(x, y, color){
        ctx.fillStyle = color; // couleur du rectange
        ctx.fillRect(x*size, y*size, sizeMoins, sizeMoins);
    };

    deletePixel = function(x, y){
        creerPixel(x, y, 'black');
    };

    creerLigneH = function(x, y, color, pas){
        for(var i = 0; i < pas; i++){
            creerPixel(x+i, y, color);            
        }       
    };

    creerLigneV = function(x, y, color, pas){
        for(var i = 0; i < pas; i++){
            creerPixel(x, y+i, color);            
        } 
    }

    creerForme = function(tabPixel){
        tabPixel.forEach(function(element){
            creerPixel(element[0], element[1], element[2]);
        });
    };

    lettreJ = function(x, y){
        creerLigneV(x+4, y+0, "black", 6);
        creerLigneV(x+0, y+4, "black", 2);
        creerLigneH(x+1, y+6, "black", 3);
    };

    lettreO = function(x, y){
        creerLigneH(x+1, y, "black", 3);
        creerLigneV(x, y+1, "black", 5);
        creerLigneV(x+4, y+1, "black", 5);
        creerLigneH(x+1, y+6, "black", 3);
    }

    lettreU = function(x, y){
        creerLigneV(x, y, "black", 6);
        creerLigneV(x+4, y, "black", 6);
        creerLigneH(x+1, y+6, "black", 3);
    }

    lettreE = function(x, y){
        creerLigneV(x, y, "black", 7);
        creerLigneH(x, y, "black", 5);
        creerLigneH(x, y+3, "black", 3);
        creerLigneH(x, y+6, "black", 5);

    };

    lettreR = function(x, y){
        creerLigneV(x, y, "black", 7);
        creerLigneV(x+4, y+1, "black", 2);
        creerLigneH(x, y, "black", 4);
        creerLigneH(x, y+3, "black", 4);
        creerPixel(x+2, y+4, "black");
        creerPixel(x+3, y+5, "black");
        creerPixel(x+4, y+6, "black");
    };

    
    creerCadreCenter = function(){
        // Play
        creerLigneH(Math.round(middleWidthX - 11 / 2), Math.round(middleHeightY), "green", 11);
        creerLigneV(Math.round(middleWidthX), Math.round(middleHeightY - 9 / 2), "yellow", 9);
        console.log(Math.round(middleWidthX - 11 / 2), middleHeightY);
        console.log(middleWidthX, Math.round(middleHeightY - 9 / 2));
        // Ladder
        // Custom
        // Option
    }
    
    creerCadreCenter();
    creerPixel(middleWidthX, middleHeightY, "red");
    console.log(middleWidthX, middleHeightY);

    //creerCadre("jouer");

    /*$interval(function(){
        cleanCanvas();
        x ++;
        creerLigneH(x, x * 2, "black", Math.floor(Math.random() * 20));
    }, 50);*/


    bebeLettreJ = function(x, y){
        creerLigneV(x+3, y, "black", 4);
        creerPixel(x,y+3, "black");
        creerLigneH(x+1, y+4, "black", 2);
    };
    
    bebeLettreO = function(x, y){
        creerLigneH(x+1, y, "black", 2);
        creerLigneV(x, y+1, "black", 3);
        creerLigneV(x+3, y+1, "black", 3);
        creerLigneH(x+1, y+4, "black", 2);
    }

    bebeLettreU = function(x, y){
        creerLigneV(x, y, "black", 4);
        creerLigneV(x+3, y, "black", 4);
        creerLigneH(x+1, y+4, "black", 2);
    }

    bebeLettreE = function(x, y){
        creerLigneV(x, y, "black", 5);
        creerLigneH(x, y, "black", 3);
        creerLigneH(x, y+2, "black", 2);
        creerLigneH(x, y+4, "black", 3);

    };

    bebeLettreR = function(x, y){
        creerLigneV(x, y, "black", 5);
        creerLigneH(x, y, "black", 3);
        creerLigneH(x, y+2, "black", 3);
        creerPixel(22, 11, "black");
        creerPixel(21, 13, "black");
        creerPixel(22, 14, "black");
    };

    lettreJ(0,0);
    lettreO(6, 0);
    lettreU(12, 0);
    lettreE(18, 0);
    lettreR(24, 0);

    bebeLettreJ(0,10);
    bebeLettreO(5, 10);
    bebeLettreU(10, 10);
    bebeLettreE(15, 10);
    bebeLettreR(19, 10);


    function animate(){
        requestAnimationFrame(animate);
        creerPixel(5, 6, "red");
        console.log("totot");
    };

    //animate();
});