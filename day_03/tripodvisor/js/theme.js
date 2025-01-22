// On sait qu'ici on veut pouvoir au clic du bouton "lumière", on veut pouvoir changer la couleur du thème

// 1ère étape : On récupère le bouton qui permet de switcher la couleur du thème
// querySelector() permet de récupérer UN ELEMENT (UN SEUL)
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

// On récupère la liste des 3 boutons (green, blue et red) et on les stock dans buttons
const buttons = document.querySelectorAll(".theme-button");
console.log(buttons);

// Ci dessous, je vais boucler sur mes 3 boutons (green, blue et red)
for (let button of buttons) {
    // A chaque tour de boucle, je vais placer un écouteur d'évènement sur mes boutons
    button.addEventListener("click", handleChangeTheme)
}

// Ici on va utiliser l'objet event
// L'objet event est un objet qui permet d'avoir des informations sur l'évènement qui a été déclenché
// Par exemple : Au clic du bouton rouge => et bien grâce à l'objet event on pourra déterminer qui le type d'évènement était un clic, sur quel élément ? => Sur la balise qui correspond au bouton rouge, etc
function handleChangeTheme(event) {
    // event.currentTarget => pointe sur la balise sur laquelle on a cliqué
    console.log(event.currentTarget);
    // Ici l'id de l'attribut sur lequel on a cliqué (soit green, soit blue, ou soit red)
    const themeColor = event.currentTarget.getAttribute("id");
    console.log(themeColor)

    // Une fois qu'on a cliqué sur le bouton dont on veut affecter la couleur, et bien ou aimerait que le thème puisse changer aussi
    // On va d'abord supprimer les classes avant de les ajouter
    document.querySelector("body").classList.remove("theme-green", "theme-red", "theme-blue");
    // Puis on ajoute la classe qu'on veut (theme-green, theme-red, ou theme-blue)
    document.querySelector("body").classList.add(themeColor);
}