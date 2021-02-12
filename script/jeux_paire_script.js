let carteClique = null;
let stopClique = false;
let matchTrouve = 0;

function surCarteClique(e) {
    const target = e.currentTarget;
    if ( stopClique || target === carteClique ||target.className.includes('done')) {
        return;
    }

    target.className=target.className
    .replace(' face-arriere','');
    target.className += ' fait';
// Si on clique sur une carte  la laisser sur face avant
    if (!carteClique) {
    carteClique = target;
    }

     // Si on a déja cliqué sur une carte , cliqué sur une deuxieme voir si elle match avec celle déja cliquée
    else if (carteClique) {
        if (carteClique.getAttribute('data') !== target.getAttribute ('data')) {
            stopClique = true;
            setTimeout(() => {
                carteClique.className = carteClique.className.replace(' fait', '') + ' face-arriere';
                target.className = target.className.replace(' fait', '') + ' face-arriere';
                carteClique = null;
                stopClique = false;
            }, 350);
        } else {
            matchTrouve++;
            carteClique = null;
            if (matchTrouve === 9) {
                alert("Tu as rassemblé toutes les cartes de Yugi, c'est gagné !!!!")
            }
        }
        }

}
function shuffle() {
    var arr = [];
    for (i=1; i<19; i++) {
        arr.push('c'+i);
    }
    arr.sort(() => Math.random() - 0.5);
    document.getElementById(arr[0]).className = "carte dragonblue face-arriere";
    document.getElementById(arr[0]).setAttribute('data', "dragonblue");
    document.getElementById(arr[1]).className = "carte right-arm face-arriere";
    document.getElementById(arr[1]).setAttribute('data', "right-arm");
    document.getElementById(arr[2]).className = "carte dragongreen face-arriere";
    document.getElementById(arr[2]).setAttribute('data', "dragongreen");
    document.getElementById(arr[3]).className = "carte left-arm face-arriere";
    document.getElementById(arr[3]).setAttribute('data', "left-arm");
    document.getElementById(arr[4]).className = "carte left-leg face-arriere";
    document.getElementById(arr[4]).setAttribute('data', "left-leg");
    document.getElementById(arr[5]).className = "carte dragonred face-arriere";
    document.getElementById(arr[5]).setAttribute('data', "dragonred");
    document.getElementById(arr[6]).className = "carte full-body face-arriere";
    document.getElementById(arr[6]).setAttribute('data', "full-body");
    document.getElementById(arr[7]).className = "carte full-body face-arriere";
    document.getElementById(arr[7]).setAttribute('data', "full-body");
    document.getElementById(arr[8]).className = "carte head face-arriere";
    document.getElementById(arr[8]).setAttribute('data', "head");
    document.getElementById(arr[9]).className = "carte right-leg face-arriere";
    document.getElementById(arr[9]).setAttribute('data', "right-leg");
    document.getElementById(arr[10]).className = "carte dragonred face-arriere";
    document.getElementById(arr[10]).setAttribute('data', "dragonred");
    document.getElementById(arr[11]).className = "carte dragonblue face-arriere";
    document.getElementById(arr[11]).setAttribute('data', "dragonblue");
    document.getElementById(arr[12]).className = "carte left-leg face-arriere";
    document.getElementById(arr[12]).setAttribute('data', "left-leg");
    document.getElementById(arr[13]).className = "carte right-arm face-arriere";
    document.getElementById(arr[13]).setAttribute('data', "right-arm");
    document.getElementById(arr[14]).className = "carte right-leg face-arriere";
    document.getElementById(arr[14]).setAttribute('data', "right-leg");
    document.getElementById(arr[15]).className = "carte head face-arriere";
    document.getElementById(arr[15]).setAttribute('data', "head");
    document.getElementById(arr[16]).className = "carte left-arm face-arriere";
    document.getElementById(arr[16]).setAttribute('data', "left-arm");
    document.getElementById(arr[17]).className = "carte dragongreen face-arriere";
    document.getElementById(arr[17]).setAttribute('data', "dragongreen");
}