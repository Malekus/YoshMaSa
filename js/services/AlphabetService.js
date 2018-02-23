/*
    1) Compléter toutes les lettres de l'alphabet
    2) Essayer de trouver une meilleur méthode pour appeler la fonction
*/

app.service('AlphabetService', function(){
    this.alphabet = {
            "a" : function(x,y){creerLigneV(x,y+1,"black",4);creerLigneV(x+3,y+1,"black",4);creerLigneH(x+1,y,"black",2);creerLigneH(x+1,y+3,"black",2);},
            "b" : function(x,y){ creerLigneV(x,y,"black",5);creerLigneV(x+2,y+1,"black",1);creerLigneV(x+2,y+3,"black",1);creerLigneH(x,y,"black",2);creerLigneH(x+1,y+2,"black",1);creerLigneH(x+1,y+4,"black",1)},
            "c" : function(x,y){creerLigneV(x,y+1,"black",3);creerLigneH(x+1,y,"black",2);creerLigneH(x+1,y+4,"black",2);},
            "d" : function(x,y){creerLigneV(x,y,"black",5);creerLigneV(x+2,y+1,"black",3);creerLigneH(x+1,y,"black",1);creerLigneH(x+1,y+4,"black",1);},
            "e" : function(x,y){creerLigneV(x,y,"black",5);creerLigneH(x,y,"black",3);creerLigneH(x,y+2,"black",2);creerLigneH(x,y+4,"black",3);},
            "f" : function(x,y){creerLigneV(x,y,"black",5);creerLigneH(x,y,"black",3);creerLigneH(x,y+2,"black",2);},
            "g" : function(x,y){creerLigneV(x,y+1,"black",3);creerLigneV(x+3,y+2,"black",2);creerLigneH(x+1,y,"black",2);creerLigneH(x+1,y+4,"black",2);creerLigneH(x+2,y+2,"black",1);},            
            "i" : function(x,y){creerLigneV(x,y,"black",5);},
            "h" : function(x,y){creerLigneV(x,y,"black",5);creerLigneV(x+3,y,"black",5);creerLigneH(x+1,y+2,"black",2);},     
            "j" : function(x,y){creerLigneV(x+3,y,"black",4);creerLigneV(x,y+3,"black",1);creerLigneH(x+1,y+4,"black",2);}, 
            "k" : function(x,y){creerLigneV(x,y,"black",5);creerLigneV(x+3,y,"black",1);creerLigneV(x+3,y+4,"black",1);creerLigneV(x+2,y+1,"black",1);creerLigneV(x+2,y+3,"black",1);creerLigneV(x+1,y+2,"black",1);},
            "l" : function(x,y){creerLigneV(x,y,"black",5);creerLigneH(x+1,+4,"black",2)},
            "m" : function(x,y){creerLigneV(x,y,"black",5);creerLigneV(x+3,y,"black",5);creerLigneH(x+1,y+1,"black",3);},
            "n" : function(x,y){creerLigneV(x,y,"black",5);creerLigneV(x+3,y,"black",5);creerLigneH(x+1,y+1,"black",1);creerLigneH(x+2,y+2,"black",1);}, 
            "o" : function(x,y){creerLigneV(x,y+1,"black",3);creerLigneV(x+3,y+1,"black",3);creerLigneH(x+1,y,"black",2);creerLigneH(x+1,y+4,"black",2);},  
            "q" : function(x,y){creerLigneV(x,y+1,"black",3);creerLigneV(x+3,y+1,"black",3);creerLigneV(x+2,y+3,"black",1);creerLigneH(x+1,y,"black",2);creerLigneH(x+1,y+4,"black",2);},
            "p" : function(x,y){creerLigneV(x,y,"black",5);creerLigneV(x+3,y+1,"black",1);creerLigneH(x+1,y,"black",2);creerLigneH(x+1,y+2,"black",2);},
            "r" : function(x,y){creerLigneV(x,y+1,"black",4);creerLigneV(x+3,y+1,"black",1);creerLigneV(x+2,y+3,"black",1);creerLigneV(x+3,y+4,"black",1);creerLigneH(x+1,y,"black",2);creerLigneH(x+1,y+2,"black",2);},
            "s" : function(x,y){creerLigneH(x+1,y,"black",3);creerLigneH(x,y+4,"black",3);creerLigneH(x+1,y+2,"black",3);creerLigneV(x,y+1,"black",1);creerLigneH(x+3,y+3,"black",1);},
            "t" : function(x,y){creerLigneH(x,y,"black",3);creerLigneV(x+1,y+1,"black",4);},
            "u" : function(x,y){creerLigneV(x,y,"black", 4);creerLigneV(x+3, y, "black", 4);creerLigneH(x+1, y+4, "black", 2);},
            "v" : function(x,y){creerLigneV(x,y,"black",4);creerLigneV(x+2,y,"black",4);creerLigneH(x+1,y+4,"black",1);}, 
            "w" : function(x,y){creerLigneV(x,y,"black",4);creerLigneV(x+4,y,"black",4);creerLigneV(x+2,y+2,"black",2);creerLigneH(x+1,y+4,"black",3);},
            "x" : function(x,y){creerLigneV(x,y,"black",1);creerLigneV(x+3,y,"black",1);creerLigneV(x,y+3,"black",2);creerLigneV(x+3,y+3,"black",2);creerLigneH(x+1,y+1,"black",2);creerLigneH(x+1,y+2,"black",2);}, 
            "y" : function(x,y){creerLigneV(x,y,"black",2);creerLigneV(x+2,y,"black",2);creerLigneV(x+1,y+2,"black",3);},
            "z" : function(x,y){creerLigneH(x,y,"black",4);creerLigneH(x,y+4,"black",4);creerLigneH(x+1,y+3,"black",1);creerLigneH(x+2,y+2,"black",1);creerLigneV(x+3,y+1,"black",1);},
            "1" : function(x,y){creerLigneH(x+1,y+1,"black",1);creerLigneV(x+2,y,"black",5);},
            "2" : function(x,y){creerLigneH(x,y,"black",3);creerLigneH(x,y+4,"black",3);creerLigneH(x,y+2,"black",3);creerLigneH(x,y+3,"black",1);creerLigneH(x+2,y+1,"black",1);},
            "3" : function(x,y){creerLigneH(x,y,"black",4);creerLigneH(x,y+4,"black",4);creerLigneV(x+3,y+1,"black",3);creerLigneH(x+1,y+2,"black",2);},
            "4" : function(x,y){creerLigneH(x+1,y+2,"black",1);creerLigneV(x+2,y,"black",5);creerLigneV(x,y,"black",3);},
            "5" : function(x,y){creerLigneH(x,y,"black",3);creerLigneH(x,y+4,"black",3);creerLigneH(x,y+2,"black",3);creerLigneH(x+2,y+3,"black",1);creerLigneH(x,y+1,"black",1);},
            "6" : function(x,y){creerLigneH(x,y,"black",3);creerLigneH(x,y+4,"black",3);creerLigneH(x,y+2,"black",3);creerLigneV(x,y+1,"black",4);creerLigneV(x+2,y+3,"black",1);},
            "7" : function(x,y){creerLigneH(x,y,"black",2);creerLigneV(x+2,y,"black",5);},
            "8" : function(x,y){creerLigneH(x+1,y,"black",1);creerLigneH(x+1,y+2,"black",1);creerLigneH(x+1,y+4,"black",1);creerLigneV(x+2,y,"black",5);creerLigneV(x,y,"black",5);},
            "9" : function(x,y){creerLigneH(x+1,y,"black",1);creerLigneH(x+1,y+4,"black",1);creerLigneV(x+2,y,"black",5);creerLigneV(x,y,"black",5);},
            "0" : function(x,y){creerLigneH(x+1,y,"black",1);creerLigneH(x+1,y+4,"black",1);creerLigneV(x+2,y,"black",5);creerLigneV(x,y,"black",5);},
        };

    this.getLettre = function(lettre){
        return this.alphabet[lettre];
    };
});