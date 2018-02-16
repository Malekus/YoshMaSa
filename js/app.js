var app = angular.module('Framework', ["ngRoute"]);

app.controller("MainController", function($scope){
    $scope.heightScreen = window.innerHeight -500;
    $scope.widthScreen = window.innerWidth -500;
    $scope.toto = "Toto";
});

app.filter('range', function() {
    return function(input, total) {
        total = parseInt(total);
        for (var i=0; i<total; i++) {
            input.push(i);
        }
        return input;
    };
});

app.config(function($routeProvider){
    $routeProvider
    .when('/',{
        templateUrl: 'view/home.html',
        controller: 'HomeController'
    })
    .when('/canvas',{
        templateUrl: 'view/canvas.html',
        controller: 'CanvasController'
    })
    .when('/pixel8x8',{
        templateUrl: 'view/pixel8x8.html',
        controller: 'Pixel8x8Controller'
    })
    .when('/pixel4x4',{
        templateUrl: 'view/pixel4x4.html',
        controller: 'Pixel4x4Controller'
    })
    .when('/main',{
        templateUrl: 'view/main.html',
        controller: 'MainController'
    })
    .otherwise({
        redirectTo: '/'
    })
});

// https://codepen.io/rachsmith/pen/ZObMOP



app.controller('CanvasController', function($scope){
    let width, height;
    let pixels = [];

    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');

    const drawGrid = () => {
    ctx.clearRect(0, 0, width, height); // detruire
    
    for (var i = 0, l = pixels.length; i < l; i++) {
        pixels[i][4] = 0;
    }
    
    for (var i = 0, l = pixels.length; i < l; i++) {
        ctx.globalAlpha = 1; // Opacité
        ctx.fillStyle = 'red'; // couleur du rectange
        ctx.fillRect(pixels[i][0], pixels[i][1], pixels[i][2], pixels[i][3]);
        ctx.globalAlpha = pixels[i][5]; // 
        ctx.fillStyle = pixels[i][4];
        ctx.fillRect(pixels[i][0], pixels[i][1], pixels[i][2], pixels[i][3]);
    }
    }

    const resize = () => {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;
    pixels = [];
        for (var y = 0; y < height/10; y++) {
            for (var x = 0; x < width/10; x++) {
            pixels.push([x*10, y*10, 8, 8, '#000', 1]);
            }
        }
    }

    const draw = () => {
    drawGrid();
    requestAnimationFrame(draw);
    }

    resize();
    draw();
    pixels[0][5] = [50,0,8,8,0,1];
    console.log(pixels.length);
    console.log(pixels[0][0][4]);
    console.log(pixels[0][5]);


});

app.controller('Pixel8x8Controller', function($scope){
    let width, height;
    let pixels = [];
    const mousePosition = { x: window.innerWidth/2, y: window.innerHeight/2 };
    const canvas = document.getElementById('pixelTab8x8');
    const ctx = canvas.getContext('2d');
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
    let size = 9;
    for (var y = 0; y < window.innerHeight/size; y++) {
        for (var x = 0; x < window.innerWidth/size; x++) {
        pixels.push([x*size, y*size, size-1, size-1, '#000', 1]);
        }
    }

    for (var i = 0, l = pixels.length; i < l; i++) {
        ctx.globalAlpha = 1; // Opacité
        ctx.fillStyle = 'white'; // couleur du rectange
        ctx.fillRect(pixels[i][0], pixels[i][1], pixels[i][2], pixels[i][3]);
    }

    creerPixel = function(x, y, color){
        ctx.fillStyle = color; // couleur du rectange
        ctx.fillRect(x*size, y*size, size-1, size-1);
    };

    deletePixel = function(x, y){
        creerPixel(x, y, 'black');
    };

    var t = []
    t.push([5,5,'green'])
    for(var i = 0; i <= 5; i++){
        t.push([5+i,5,'green'])
    }

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

    creerHomme = function(){        
        creerLigneH(5,5,'green', 6);
        creerLigneH(4, 6,'green', 8);
        creerLigneH(4, 7,'brown', 8);
        creerLigneH(4, 8,'brown', 8);
        creerLigneH(4, 9,'brown', 8);
        creerLigneH(4, 10,'brown', 8);
        creerLigneH(5,11,'pink', 6);
        creerLigneH(4, 12,'brown', 8);
        creerLigneH(3, 13,'brown', 10);
        creerLigneH(2, 14,'brown', 12);
        creerLigneH(2, 15,'brown', 12);
        creerLigneH(2, 16,'brown', 12);
        creerLigneH(2, 17,'brown', 12);
        creerLigneH(2, 18,'brown', 12);
        creerLigneH(2, 19,'brown', 12);
        creerLigneH(2, 20,'brown', 12);
        creerLigneV(5, 7, 'pink', 3);
        creerLigneV(7, 7, 'pink', 2);
        creerLigneV(8, 7, 'pink', 2);
        creerLigneV(10, 7, 'pink', 3);
        creerPixel(6, 9, 'pink');
        creerPixel(9, 9, 'pink');
        creerLigneH(6, 12, 'pink', 4);
        creerLigneV(6, 13, 'green', 2);
        creerLigneV(9, 13, 'green', 2);
        creerLigneV(5, 15, 'green', 4);
        creerLigneV(10, 15, 'green', 4);
        creerLigneV(7, 15, 'green', 3);
        creerLigneV(8, 15, 'green', 3);
        creerLigneV(6, 16, 'green', 3);
        creerLigneV(9, 16, 'green', 3);
        creerLigneV(4, 17, 'green', 2);
        creerLigneV(11, 17, 'green', 2);
        creerLigneV(2, 15, 'pink', 3);
        creerLigneV(3, 15, 'pink', 3);
        creerLigneV(12, 15, 'pink', 3);
        creerLigneV(13, 15, 'pink', 3);
        creerPixel(4, 16, 'pink');
        creerPixel(11, 16, 'pink');
        creerPixel(9, 15, 'pink');
        creerPixel(6, 15, 'pink');
        
        deletePixel(2,18);
        deletePixel(2,19);
        deletePixel(3,18);

        deletePixel(12,18);
        deletePixel(13,18);
        deletePixel(13,19);

        deletePixel(7,18);
        deletePixel(8,18);
        deletePixel(6,19);
        deletePixel(7,19);
        deletePixel(8,19);
        deletePixel(9,19);
        deletePixel(6,20);
        deletePixel(7,20);
        deletePixel(8,20);
        deletePixel(9,20);
        

    };

    creerMarteauBebe = function(x, y){
        creerLigneV(x + 2, y+0, 'brown', 6);
        creerLigneH(x+0, y+6,'grey', 5);
        creerLigneH(x+0, y+7,'grey', 5);
        creerLigneH(x+0, y+8,'grey', 5);
    };

    creerMarteaux2 = function(x,y){
        creerLigneV(x+4, y,'brown', 10);
        creerLigneV(x+5, y,'brown', 10);
        creerLigneH(x, y+10,'grey', 10);
        creerLigneH(x, y+11,'grey', 10);
        creerLigneH(x, y+12,'grey', 10);
        creerLigneH(x, y+13,'grey', 10);
        creerLigneH(x, y+14,'grey', 10);
    }

});

app.controller('Pixel4x4Controller', function($scope){
    let width, height;
    let pixels = [];
    const mousePosition = { x: window.innerWidth/2, y: window.innerHeight/2 };
    const canvas = document.getElementById('pixelTab4x4');
    const ctx = canvas.getContext('2d');
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
    let size = 5;
    let sizeMoins = 4;
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

    creerHomme = function(){        
        creerLigneH(5,5,'green', 6);
        creerLigneH(4, 6,'green', 8);
        creerLigneH(4, 7,'brown', 8);
        creerLigneH(4, 8,'brown', 8);
        creerLigneH(4, 9,'brown', 8);
        creerLigneH(4, 10,'brown', 8);
        creerLigneH(5,11,'pink', 6);
        creerLigneH(4, 12,'brown', 8);
        creerLigneH(3, 13,'brown', 10);
        creerLigneH(2, 14,'brown', 12);
        creerLigneH(2, 15,'brown', 12);
        creerLigneH(2, 16,'brown', 12);
        creerLigneH(2, 17,'brown', 12);
        creerLigneH(2, 18,'brown', 12);
        creerLigneH(2, 19,'brown', 12);
        creerLigneH(2, 20,'brown', 12);
        creerLigneV(5, 7, 'pink', 3);
        creerLigneV(7, 7, 'pink', 2);
        creerLigneV(8, 7, 'pink', 2);
        creerLigneV(10, 7, 'pink', 3);
        creerPixel(6, 9, 'pink');
        creerPixel(9, 9, 'pink');
        creerLigneH(6, 12, 'pink', 4);
        creerLigneV(6, 13, 'green', 2);
        creerLigneV(9, 13, 'green', 2);
        creerLigneV(5, 15, 'green', 4);
        creerLigneV(10, 15, 'green', 4);
        creerLigneV(7, 15, 'green', 3);
        creerLigneV(8, 15, 'green', 3);
        creerLigneV(6, 16, 'green', 3);
        creerLigneV(9, 16, 'green', 3);
        creerLigneV(4, 17, 'green', 2);
        creerLigneV(11, 17, 'green', 2);
        creerLigneV(2, 15, 'pink', 3);
        creerLigneV(3, 15, 'pink', 3);
        creerLigneV(12, 15, 'pink', 3);
        creerLigneV(13, 15, 'pink', 3);
        creerPixel(4, 16, 'pink');
        creerPixel(11, 16, 'pink');
        creerPixel(9, 15, 'pink');
        creerPixel(6, 15, 'pink');
        
        deletePixel(2,18);
        deletePixel(2,19);
        deletePixel(3,18);

        deletePixel(12,18);
        deletePixel(13,18);
        deletePixel(13,19);

        deletePixel(7,18);
        deletePixel(8,18);
        deletePixel(6,19);
        deletePixel(7,19);
        deletePixel(8,19);
        deletePixel(9,19);
        deletePixel(6,20);
        deletePixel(7,20);
        deletePixel(8,20);
        deletePixel(9,20);
        

    };
    

    creerMarteau = function(x, y){
        creerLigneV(x + 5, y + 7, 'brown', 6);
        creerLigneH(x+3, y+13,'grey', 5);
        creerLigneH(x+3, y+14,'grey', 5);
        creerLigneH(x+3, y+15,'grey', 5);
    };

    creerMarteaux2 = function(){
        creerLigneV(7, 0, 'brown', 12);
        creerLigneV(8, 0, 'brown', 12);
        creerLigneH(3, 12,'grey', 10);
        creerLigneH(3, 13,'grey', 10);
        creerLigneH(3, 14,'grey', 10);
        creerLigneH(3, 15,'grey', 10);
        creerLigneH(3, 16,'grey', 10);
        creerLigneH(3, 17,'grey', 10);

    }


    creerHommeNafNaf = function(x,y){
        creerLigneH(83, 55, "black", 5);
        creerLigneH(82, 56, "black", 7);
    }
    creerHommeNafNaf(0,0);
});

const mousePosition = { x: window.innerWidth/2, y: window.innerHeight/2 };
window.addEventListener('click', function(e) {
    mousePosition.x = e.pageX;
    mousePosition.y = e.pageY;
    console.log("x = "+Math.floor(mousePosition.x / 4), "y = " + Math.floor( mousePosition.y / 4));
});

app.controller('HomeController',function($scope){
    let width, height;
    let pixels = [];
    const mousePosition = { x: window.innerWidth/2, y: window.innerHeight/2 };
    const canvas = document.getElementById('home');
    const ctx = canvas.getContext('2d');
    
    let size = 5;
    let sizeMoins = 4;

    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
    
    for (var y = 0; y < window.innerHeight/size; y++) {
        for (var x = 0; x < window.innerHeight/size; x++) {
        pixels.push([x*size, y*size, sizeMoins, sizeMoins, '#000', 1]);
        }
    }

    for (var i = 0, l = pixels.length; i < l; i++) {
        ctx.globalAlpha = 1; // Opacité
        ctx.fillStyle = 'white'; // couleur du rectange
        ctx.fillRect(pixels[i][0], pixels[i][1], pixels[i][2], pixels[i][3]);
    }
});