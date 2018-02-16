/*
    1) Compléter toutes les lettres de l'alphabet
    2) Essayer de trouver une meilleur méthode pour appeler la fonction
*/

app.service('AlphabetService', function(){
    this.alphabet = {
            "a" : function(x, y){},
            "b" : function(x,y){ creerLigneV(x,y,"black",5);creerLigneV(x+2,y+1,"black",1);creerLigneV(x+2,y+3,"black",1);creerLigneH(x,y,"black",2);creerLigneH(x+1,y+2,"black",1);creerLigneH(x+1,y+4,"black",1)},
            "c" :  function(x,y){creerLigneV(x,y+1,"black",3);creerLigneH(x+1,y,"black",2);creerLigneH(x+1,y+4,"black",2);},
            "d" : function(x,y){creerLigneV(x,y,"black",5);creerLigneV(x+2,y+1,"black",3);creerLigneH(x+1,y,"black",1);creerLigneH(x+1,y+4,"black",1);},
            "e" : function(x,y){creerLigneV(x,y,"black",5);creerLigneH(x,y,"black",3);creerLigneH(x,y+2,"black",2);creerLigneH(x,y+4,"black",3);},
            "f" : function(x,y){creerLigneV(x,y,"black",5);creerLigneH(x,y,"black",3);creerLigneH(x,y+2,"black",2);},
            "g" : function(x,y){creerLigneV(x,y+1,"black",3);creerLigneV(x+3,y+2,"black",2);creerLigneH(x+1,y,"black",2);creerLigneH(x+1,y+4,"black",2);creerLigneH(x+2,y+2,"black",1);
        
            },
            
            "i" : function(x,y){creerLigneV(x, y, "black", 5);},
          
            "u": function(x, y){creerLigneV(x, y, "black", 4);creerLigneV(x+3, y, "black", 4);creerLigneH(x+1, y+4, "black", 2)
        ;
    }};

    this.getLettre = function(lettre){
        return this.alphabet[lettre];
    };
});