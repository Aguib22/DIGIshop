let register = document.querySelector('#loginForm');

// evenement portant sur l'ecoute de l'email
register.name.addEventListener('change',function(){
    validationName(this);
});
// 
// evenment portant sur l'ecoute de l'email
register.email.addEventListener('change',function(){
    validationEmail(this);
});
// evenement sur lu numéro de telephone
register.Phone.addEventListener('change',function(){
    validationPhone(this);
});
// evenement sur le message
register.Message.addEventListener('change',function(){
    validationMessage(this);
});

// soumission du formulaire ,l'evenement submit
register.addEventListener('submit',(e)=>{
    e.preventDefault();
    if( validationName(register.name) && validationEmail(register.email) && validationPhone(register.Phone) &&  validationMessage(register.Message)){
        console.log('données valides');
        register.submit();
        
    }
},false)


// **************** validation name *******************
function validationName(inputName){
    let samll = inputName.previousElementSibling;
    if(inputName.value.length < 3){
        samll.innerHTML = 'le nom doit contenir au moins 3 carctères';
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
// ************ validation du message ****************

function validationMessage(inputMessage){
    let samll = inputMessage.previousElementSibling;
    if (inputMessage.value == ""){
        samll.innerHTML = 'le contenu du message ne doit pas être vide !';
        samll.style.color =' red';
        return false;
    }else{
        samll.innerHTML="";
        return true;
    } 
}

// ********************************************************************************
// *************** formulaire de commande ************************


