// On sait qu'ici on veut pouvoir au clic du bouton "lumière", on veut pouvoir changer la couleur du thème

// 1ère étape : On récupère le bouton qui permet de switcher la couleur du thème

const buttonSwitch = document.querySelector("#theme-switch");

console.log(buttonSwitch); // On check si on a bien récupéré le bon bouton

// Une fois que le bouton a été récupéré, on va y placer un écouteur d'évènement
// Cet écouteur d'évènement va écouter l'evenement "click" sur le bouton buttonSwitch
// addEventListener() prend 2 paramètres :
// Le 1er : L'évènement attendu (ici c'est un simple 'clic')
// Le 2ème : La fonction qui va s'exécuter au clic du bouton
buttonSwitch.addEventListener("click", changeTheme);

// Ci dessous, la fonction qui va s'exécuter au clic du bouton buttonSwitch
function changeTheme()
{
    console.log("On va changer le thème du site !")
    // Pour changer le theme du site, on va ajouter la classe theme-dark à la balise <body>
    // Je vais d'abord récupérer la balise <body>
    const body = document.querySelector("body");

    // Ici je vais manipuler la balise <body>, je vais faire en sorte que à chaque clic :
    // si la classe n'est pas là, la classe theme-dark se rajoute 
    // si la classe est là, la classe theme-dark se retire
    body.classList.toggle("theme-dark");
    // Le fait d'utiliser toggle, c'est comme si on avait fait comme ça :
    // si la  balise body contient la class="theme-dark"
    // if(body.classList.contains("theme-dark")){
    //     //alors supprimer la class
    //     body.classList.remove("theme-dark");
    // }else {
    //     //sinon, ça voudrait dire que theme-dark n'est pas dans la balise body donc tu l'ajoute
    //     body.classList.add("theme-dark");
    // }
}