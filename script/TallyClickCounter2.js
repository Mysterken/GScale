var button = document.getElementById("click");   
    count = 0;

// quand on click que le bouton click.
button.onclick = function() {
    count += 1;
    
    // transforme l'int en str pour pouvoir récupérer chaque chiffre du nombre.
    count_str = count.toString()

    if (count < 10) {
        // exemple pour 4 : 0 0 0 4
        document.getElementById("n1").innerHTML = count_str;
        document.getElementById("n2").innerHTML = "0";
        document.getElementById("n3").innerHTML = "0";
        document.getElementById("n4").innerHTML = "0";
    }
    // entre 10 et 99 on veut afficher 2 chiffres,
    // exemple si 45 : 0 0 4 5
    else if (count < 100) {
        document.getElementById("n1").innerHTML = count_str[0];
        document.getElementById("n2").innerHTML = count_str[1];
        document.getElementById("n3").innerHTML = "0";
        document.getElementById("n4").innerHTML = "0";
    }
    else if (count < 1000) {
        document.getElementById("n1").innerHTML = count_str[0];
        document.getElementById("n2").innerHTML = count_str[1];
        document.getElementById("n3").innerHTML = count_str[2];
        document.getElementById("n4").innerHTML = "0";
    }
    else if (count < 10000) {
        document.getElementById("n1").innerHTML = count_str[0];
        document.getElementById("n2").innerHTML = count_str[1];
        document.getElementById("n3").innerHTML = count_str[2];
        document.getElementById("n4").innerHTML = count_str[3];
    }
    
    // est-ce qu'on a terminé ?
    if (count == 9999) {
        document.getElementById("termine").innerHTML = "Résultat : Terminé";
    }
};

// on remet tout à zéro
var buttonReset = document.getElementById("reset");
    buttonReset.onclick = function() {
    count = 0;
    document.getElementById("n1").innerHTML = "0";
    document.getElementById("n2").innerHTML = "0";
    document.getElementById("n3").innerHTML = "0";
    document.getElementById("n4").innerHTML = "0";
};

