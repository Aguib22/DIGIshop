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
    e.preventDefault(); // Empêche la soumission du formulaire

    // Supprime le panier du stockage local
    localStorage.removeItem('panier');

    // Réinitialise le panier local
    var panier = {};

    // Mettez à jour le panier dans le stockage local (vide)
    localStorage.setItem('panier', JSON.stringify(panier));

    // Vous pouvez ici effectuer d'autres actions liées à la validation de la commande si nécessaire

    // Par exemple, rediriger l'utilisateur vers une page de confirmation
   window.location.href = "{% url 'confirmation' %}";
});
});