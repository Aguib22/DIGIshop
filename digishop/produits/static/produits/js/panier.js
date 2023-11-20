let rec = document.getElementById('chr');
rec.search.addEventListener('change',function(){
   Recherche(this);
});
rec.addEventListener('submit',(e)=>{
   e.preventDefault();
   if ( Recherche(rec.search)){
       rec.submit();
   }
},false);
function Recherche(inputrech){

   if (inputrech.value == ""){
       inputrech.setAttribute(placeholder,'donner le nom du produit que rechercher') ;
       inputrech.style.color =' red';
       return false;
   }else{
   
       return true;
   }
};


if(localStorage.getItem('panier') == null){
   var panier = {};
}else{
   panier = JSON.parse(localStorage.getItem('panier'));
}
$(document).on('click', '.rec',function(){
   var item_id = this.id.toString();
   if(panier[item_id] != undefined){
        var qte = panier[item_id][0] +1;
       
        panier[item_id][0] = qte;
        panier[item_id][2] += parseFloat(document.getElementById('prix'+item_id).innerHTML);
   }else{
       qte = 1;
       prix = parseFloat(document.getElementById('prix'+item_id).innerHTML);
       name= document.getElementById("prod"+item_id).innerHTML;
       panier[item_id] = [qte, name, prix];
       
   }
   console.log(panier);
   localStorage.setItem('panier',JSON.stringify(panier));
   
   var prod =Object.keys(panier).length;
   document.getElementById('panier').innerHTML=`Panier(${prod})`;

   
});
// liste_panier(panier);

// function liste_panier(cart){
//     var panierChaine = "";
//     panierChaine += '<h1>Mon panier</h1>' ;
//     index = 1;
//     for(var i in panier){
//         panierChaine += index +") ";
//         panierChaine += document.getElementById("prod"+i).innerHTML +  "   Qte: " + panier[i] +"</br>";
//         index += 1;

//     }
//     panierChaine += '<a href="{% url "checkout" %}" class="mt-2 btn btn-success">checkout</a>';
//     $(function(){
//     $('[data-toggle = "popover"]').popover();
//     document.getElementById('panier').setAttribute('data-content',panierChaine);
// });


   
