if(localStorage.getItem('panier')== null){
    var panier = {};
}else{
    panier = JSON.parse(localStorage.getItem('panier'));
}
var tot = 0;
var prix_tot = 0;
for(item in panier){
    let nom_prod = panier[item][1];
    let qte_prod = panier[item][0];
    let prix_prod = panier[item][2];
    tot += qte_prod;
    prix_tot += prix_prod;
    var contenu_list = `<li class="list-group-item d-flex justify-content-between align-items-center">
            <h5  style="font-weight: bolder;font-size:1.5em"> ${nom_prod}</h5>
            <span class="badge badge-success badge-pill d-flex text-align-center  " style="font-size:16px">Qte${qte_prod}</span>
            <span class="badge badge-danger badge-pill d-flex text-align-center  " style="font-size:16px"> ${prix_prod} gnf</span>
        </li>`;
        $('#liste-prod').append(contenu_list);
}
var tot_contenu = `<li class="list-group-item d-flex justify-content-between align-items-center">
            <h5  style="font-weight: bolder;color:red;">TOTAUX</h5>
            <span class="badge badge-success badge-pill d-flex text-align-center" style="font-size:16px">Qte: ${tot}</span>
            <span class="badge badge-danger badge-pill d-flex text-align-center" style="font-size:16px"> ${prix_tot} gnf</span>
        </li>`;
        $('#liste-prod').append(tot_contenu);

        $('#somme').val('gnf '+prix_tot);


$('#item').val(JSON.stringify(panier));

$(document).ready(function() {
// Écoute l'événement de soumission du formulaire avec l'ID 'valid'
$('#valid').on('submit', function(e) {
    // e.preventDefault(); // Empêche la soumission du formulaire

    // Supprime le panier du stockage local
    localStorage.removeItem('panier');

    // Réinitialise le panier local
    var panier = {};

    // Mettez à jour le panier dans le stockage local (vide)
    localStorage.setItem('panier', JSON.stringify(panier));

    // Vous pouvez ici effectuer d'autres actions liées à la validation de la commande si nécessaire

    // Par exemple, rediriger l'utilisateur vers une page de confirmation
    // window.location.href = "{% url 'confirmation' %}";
});
});

let commande = document.querySelector('#valid');
console.log(commande);

// evenement portant sur l'ecoute de l'email
commande.nom.addEventListener('change',function(){
validationName(this);
});
// 
// evenment portant sur l'ecoute de l'email
commande.email.addEventListener('change',function(){
validationEmail(this);
});
// evenement sur lu numéro de telephone
commande.tel.addEventListener('change',function(){
validationPhone(this);
});
// ville 
commande.ville.addEventListener('change',function(){
validationVille(this);
});

// quartier
commande.quartier.addEventListener('change',function(){
validationQuartier(this);
});
// evenement sur zip
commande.zip.addEventListener('change',function(){
validationZip(this);
})
// evenement sur le message
commande.address.addEventListener('change',function(){
validationAdresse(this);
});


// soumission du formulaire ,l'evenement submit
commande.addEventListener('submit',(e)=>{

e.preventDefault();
if( validationName(commande.nom) && validationEmail(commande.email) && validationPhone(commande.tel)  &&  validationQuartier(commande.quartier)){
    console.log('données valides');
    commande.submit();
    
}
},false);


// **************** validation name *******************
function validationName(inputName){
let samll = inputName.previousElementSibling;
if(inputName.value ==""){
    samll.innerHTML = 'donner votre nom svp!';
    samll.style.color='red';
    return false;
}else{
    samll.innerHTML="";
    return true;
} 
}
// **************validation de l'email******************
function validationEmail(inputEmail){
let expressionReg= new RegExp(
    '^[a-zA-Z0-9_.]*[@]{1}[a-z]*[.]{1}[a-z]{2,8}$','g'
);

let valid = expressionReg.test(inputEmail.value);
let samll = inputEmail.previousElementSibling;

if (valid){
    samll.innerHTML="";
    return true ;
}
else{
    samll.innerHTML='Adresse non valide';
    samll.style.color='red';
    return false;
}
};


// ******************validation du numéro de telephone *************************

function validationPhone(inputPhone){
let msg ;
let valid = false;
if(!/['0-9']/.test(inputPhone.value)){
    msg='le numéro de télephone est incorrect ';
}else if (inputPhone.value.length > 9 || inputPhone.value.length < 9 ){
    msg = 'numero de téléphone invalide'
}
else{
    msg="";
    valid = true;
}

let samll = inputPhone.previousElementSibling;
if(valid){
    samll.innerHTML="";
    return true;
}
else{
    samll.innerHTML = msg;
    samll.style.color =' red';
    return false;
}
};


// ***************** validation de la ville *****************
function validationVille(inputVille){
let samll = inputVille.previousElementSibling;
if (inputVille.value == ""){
    samll.innerHTML = 'préciser votre ville de residence !';
    samll.style.color =' red';
    return false;
}else{
    samll.innerHTML="";
    return true;
} 
}
// ************ validation du quartier ****************

function validationQuartier(inputQaurtier){
let samll = inputQaurtier.previousElementSibling;
if (inputQaurtier.value == ""){
    samll.innerHTML = 'préciser votre quartier svp !';
    samll.style.color =' red';
    return false;
}else{
    samll.innerHTML="";
    return true;
} 
}

function validationZip(inputZip){
let samll = inputZip.previousElementSibling;
if (inputZip.value.length =0){
    samll.innerHTML = 'donner un zip !';
    samll.style.color =' red';
    return false;
}else{
    samll.innerHTML="";
    return true;
} 

}

// ************ validation de l'adresse ****************

function validationAdresse(inputAdress){
 let samll = inputAdress.previousElementSibling;
 if (inputAdress.value == ""){
     samll.innerHTML = 'préciser votre adresse !';
     samll.style.color =' red';
     return false;
}else{
    samll.innerHTML="";
    return true;
 } 
}
