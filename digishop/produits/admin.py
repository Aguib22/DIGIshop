from django.contrib import admin
from produits.models import Produits,Categories,Commande
from comptes.models import Utilisateur
# Register your models here.
admin.site.site_header="**** E-commerce ****"
admin.site.site_title ="digi_shop"
admin.site.index_title = " Administrateur DigiShop"

class AdminCategories(admin.ModelAdmin):
    list_display = ('name','date_ajout')

class AdminCommande(admin.ModelAdmin):
    list_display =('prodComd','nom_cli','email_cli',
                   'Tel_cli','ville_cli','quart_cli','adress_cli','montant','date_commande')

class AdminProduits(admin.ModelAdmin):
    list_display = ('designation','prix','date_ajout','categorie')
    search_fields = ('designation',)
    list_editable = ('prix','categorie',)

admin.site.register(Categories, AdminCategories),
admin.site.register(Produits, AdminProduits),
admin.site.register(Utilisateur),
admin.site.register(Commande, AdminCommande),
