// gestion du system d inscription
let nam = document.querySelector(".name");
let email = document.querySelector(".email");
let pass = document.querySelector(".pass");
let emailConnxion=document.querySelector(".emailConnxion")
console.log(emailConnxion);

let passConnexion=document.querySelector(".passConnexion")
console.log(passConnexion);

let butinsci = document.querySelector(".inscription");
console.log(butinsci );

let butconnex= document.querySelector(".connexion");
console.log(butconnex);

let titreinscription=document.querySelector(".titre-inscription")
let titreconnexion = document.querySelector(".titre-connexion");



butinsci.addEventListener("click", (e) => {
    e.preventDefault();

    //  Récupérer les utilisateurs existants
    let users = localStorage.getItem("users");
    if (!users) {
        users = [];
    } else {
        users = JSON.parse(users);
    }

    // Créer un utilisateur
    let newUser = {
        nom: nam.value,
        email: email.value,
        pass: pass.value
    };

    //  Ajouter au tableau l'utilisateur
    users.push(newUser);

    //  Sauvegarder le tableau
    localStorage.setItem("users", JSON.stringify(users));
    console.log(users); 

    console.log(titreinscription);
    titreinscription.style="display:block"
    titreinscription.textContent=` ${nam.value} inscription effectuer`+" "+ `Bienvenue`

    nam.value =""
    email.value=""
    pass.value=""
    titreconnexion.style="display:none"

    
});
butconnex.addEventListener('click', (e) => {
    e.preventDefault();

    let users = localStorage.getItem("users");
    if (!users) {
        alert("Aucun utilisateur inscrit");
        return;
    }

    users = JSON.parse(users);
    console.log(users);
    

    let emailValue = emailConnxion.value;
    let passValue = passConnexion.value;

     let userConnecte = null;

    for (let user of users) {
        if (user.email === emailValue && user.pass === passValue) {
            userConnecte = user;
            break;
        }
    }


    if (userConnecte) {
        titreconnexion.style="display:block"
        titreconnexion.textContent = `Heureux de vous revoir ${userConnecte.nom} 😊`;
    } else {
        titreconnexion.style="display:block"
        titreconnexion.textContent = `Informations erronées ❌`;
        titreconnexion.style="color:red"
    }
    emailValue = ""
    passValue = ""
    titreinscription.style="display:none"

});

