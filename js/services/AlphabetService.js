/*
    1) Compléter toutes les lettres de l'alphabet
    2) Essayer de trouver une meilleur méthode pour appeler la fonction
*/

app.service('AlphabetService', function(){
    this.alphabet = {
            "a" : function(x, y){},
            "i" : function(x,y){
                creerLigneV(x, y, "black", 5);
            },
            "u": function(x, y){creerLigneV(x, y, "black", 4);creerLigneV(x+3, y, "black", 4);creerLigneH(x+1, y+4, "black", 2)
        ;
    }};

    this.getLettre = function(lettre){
        return this.alphabet[lettre];
    };
});