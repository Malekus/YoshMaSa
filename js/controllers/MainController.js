app.controller('MainController', function($scope, $interval, AlphabetService){
    let width, height;
    let pixels = [];
    let boutons = [];
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

    window.addEventListener('click', function(e) {
        mousePosition.x = e.pageX;
        mousePosition.y = e.pageY;
        console.log(mousePosition.x, mousePosition.y);
        console.log("x = "+Math.floor(mousePosition.x / sizeMoins),
        "y = " + Math.floor( mousePosition.y / sizeMoins));

        /*if(){

        }*/

    });

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

    placeMiddle = function(x,y){

    };

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
        creerPixel(x+3, y+1, "black");
        creerPixel(x+2, y+3, "black");
        creerPixel(x+3, y+4, "black");
    };

    jouer5x7 = function(){
        lettreJ(0,0);
        lettreO(6, 0);
        lettreU(12, 0);
        lettreE(18, 0);
        lettreR(24, 0);
    };

    jouer4x5 = function(x, y){
        bebeLettreJ(x + 0, y);
        bebeLettreO(x + 5, y);
        bebeLettreU(x + 10, y);
        bebeLettreE(x + 15, y);
        bebeLettreR(x + 19, y);
    };

    function animate(){
        requestAnimationFrame(animate);
        creerPixel(5, 6, "red");
        //console.log("totot");
    };

    //animate();


    cadreMenu = function(x, y, string){
        var size = 25;
        var decalage = 1;
        for(var i = 0; i < 7; i++){
            creerLigneH(x, y + i, "blue", size);
        }

        jouer4x5(x + decalage, y + decalage);
    };
    
    /*cadreMenu(0, 0, "Jouer");
    cadreMenu(0, 8, "ladder");
    cadreMenu(0, 16, "option");
    cadreMenu(0, 24, "custom");*/


    
    creerCadreCenter = function(x, y){     
        x = x - Math.floor(25 / 2);
        y = y - (2 * 7 + 1); 
        // choix Jouer
        cadreMenu(x, y, "Jouer");
        // choix Jouer
        cadreMenu(x, y +8, "ladder");
        // choix Jouer
        cadreMenu(x, y + 16, "option");
        // choix Jouer
        cadreMenu(x, y + 24, "custom");
    }

    

    /*
    creerCadreCenter(middleWidthX, middleHeightY);
    creerPixel(middleWidthX, middleHeightY, "red");
    */

    //AlphabetService.getLettre("i")(0,0);



    function plusPetit(x, y){
        return (x < y ? x : y);
    }

    function plusGrand(x, y){
        return (x > y ? x : y);
    }

    btnPixel = function(x1, y1, x2, y2, nom){

        var tab = [];
        for(var i = plusPetit(x1, x2); i <= plusGrand(x1, x2); i++){
            for(var j = plusPetit(y1, y2); j <= plusGrand(y1, y2); j++){
                tab.push([i,j]);
                creerPixel(i, j, "black");
            }
        }
        boutons.push({
            key: nom,
            value: tab
        });
        console.log(boutons);
        creerPixel(plusPetit(x1, x2), plusPetit(y1, y2), "red");
        creerPixel(plusGrand(x1, x2), plusGrand(y1, y2), "green");

    }

<<<<<<< HEAD

    btnPixel(5,9,48,43, "first");

=======
>>>>>>> e615406f852880675c18a696bd45fa6853662f7b
    //btnPixel(5,9,6,4, "first");
    /*
    lettreA = function(x,y){
        creerLigneH(3,3,"black",3);
        creerLigneH(3,0,"black",3);
        creerLigneV(2,1,"black",5);
        creerLigneV(6,1,"black",5);
        
    }
    //lettreA(0,0);

    lettreB = function(x,y){
        creerLigneV(10,0,"black",6);
        creerLigneV(13,1,"black",2);
        creerLigneV(13,4,"black",1);
        creerLigneH(11,0,"black",2);
        creerLigneH(11,5,"black",2);
        creerLigneH(11,3,"black",2);
 
    }
    lettreB(0,0);

    lettreC = function(x,y){
        creerLigneV(17,1,"black",4);
        creerLigneH(18,0,"black",3);
        creerLigneH(18,5,"black",3);
    }
    lettreC(0,0);

    lettreD = function(x,y){
        creerLigneV(24,0,"black",6);
        creerLigneV(27,1,"black",4);
        creerLigneH(25,0,"black",2);
        creerLigneH(25,5,"black",2);

    }
    lettreD(0,0);

    lettreE = function(x,y){
        creerLigneV(30,0,"black",6);
        creerLigneH(31,0,"black",4);
        creerLigneH(31,2,"black",2);
        creerLigneH(31,5,"black",4);
        creerLigneH(31,5,"black",4);
    }
    lettreE(0,0);

   

    lettreG = function(x,y){
        creerLigneV(44,1,"black",4);
        creerLigneV(48,3,"black",2);
        creerLigneH(45,0,"black",3);
        creerLigneH(45,5,"black",3);
        creerLigneH(46,3,"black",2);
    }
    lettreG(0,0);
    */


<<<<<<< HEAD
    lettre =  function(x,y){
        creerLigneV(x,y+1,"black",3);
        creerLigneV(x+3,y+2,"black",2);
        creerLigneH(x+1,y,"black",2);
        creerLigneH(x+1,y+4,"black",2);
        creerLigneH(x+2,y+2,"black",1);

    }
=======
    lettre = function(x,y){
    },
>>>>>>> e615406f852880675c18a696bd45fa6853662f7b
    lettre(0,0);
});