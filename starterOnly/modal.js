function editNav() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
    console.log(x);
}

// DOM Elements
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const inputIn = document.querySelectorAll('.text-control');

const modalbg = document.querySelector(".bground");
const submitBtn = document.querySelector('.btn-submit');
const welPage = document.querySelector('.bgWelcome');

const email = document.getElementById('email');
const quantity = document.getElementById('quantity');

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
inputIn.forEach(elem => elem.addEventListener("click", back));

// launch modal form
function launchModal() {
    modalbg.style.display = "block";
}
//function back for bakground
function back() {
    inputIn.forEach(elem => elem.style.background = '#fff');
}

// ========= mes correction
// first faire fonctionner le bouton de fermeture du menu

//close modal form + close welcome page

function close() {
    if (modalbg.style.display = "block") {
        modalbg.style.display = "none";
    };
    if (welPage.style.display = "block") {
        welPage.style.display = "none"
    };
}

document.querySelectorAll('.close').forEach(elem => {
    elem.onclick = close;
});
document.querySelector('.btn-close').onclick = close;


//launch welcome page

submitBtn.onclick = (event) => {
    event.preventDefault();
    console.log(event);

    //(1) Le champ Prénom a un minimum de 2 caractères / n'est pas vide.
    // (2) Le champ du nom de famille a un minimum de 2 caractères / n'est pas vide.
    // (3) L'adresse électronique est valide.
    // (4) Pour le nombre de concours, une valeur numérique est saisie.

    inputIn.forEach(elem => {
        console.dir(elem);
        if (elem.attributes.type.value == 'text' && elem.value.length < elem.attributes.minlength.value) {
            elem.style.background = '#ff0000';
        } else if (elem.attributes.type.value == 'email' && validateEmail(email.value) == false) {
            elem.style.background = '#ff0000';
            //alert("error mail");
        } else if (elem.attributes.type.value == 'date' && elem.value == '' || elem.value == undefined) {
            elem.style.background = '#ff0000';

        } else if (quantity.value == '') {
            elem.style.background = '#ff0000';
        }





    })


    // (5) Un bouton radio est sélectionné.
    // (6) La case des conditions générales est cochée, l'autre case est facultative / peut être laissée décochée.

    // modalbg.style.display = "none";
    // welPage.style.display = "block";
}

//======= disable background red






//=======verification input formulaires


// disable numbers in nom
function verifText(event) {
    if (event.keyCode <= 57) {
        return false;
    }
}


function verifString() {
    inputIn.forEach(elem => {
        if (+elem.value == 'number') {
            return false;
        }

    })
}

// disable symbols  in number
function verifNum(event) {
    if (event.keyCode < 48 || event.keyCode > 57) {
        return false;
    }
}

inputIn.forEach(elem => {

    if (elem.attributes.type.value == 'text') {
        elem.onkeypress = verifText;
    } else if (elem.attributes.type.value == 'number') {
        elem.onkeypress = verifNum;
    }

});




//verification email
function validateEmail(email) {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase())
}