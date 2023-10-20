from django.http import HttpResponse
from django.shortcuts import get_object_or_404, redirect, render
from produits.models import Produits,Categories,Commande
from django.core.paginator import Paginator

# Create your views here.
# la fonction qui renvoi la page d'aceuille
def home(request):
    
    produits = Produits.objects.all()
    categories = Categories.objects.all()
    context = {
        'produits':produits,
        'categories':categories,
    }

    return render(request,'produits/index.html',context)

# celle_ci renvoie la page d'achat

def achat(request):

    return render(request,'produits/shop.html')


# cette fonction renvoie la page de contact

def contact(request):

    return render(request,'produits/contact.html')

def detail(request, slug):
    produit = Produits.objects.get(slug=slug)
    context={
        'produit':produit
    }
    return render(request,'produits/detail.html',context)

def confirmation(request):

    info_cli = Commande.objects.all()[:1]
    for item in info_cli:
        nom = item.nom_cli

    return render(request,'produits/confirmation.html',{'name': nom})

def checkout(request):
    if request.method == "POST":
        item = request.POST.get('item')
        nom = request.POST.get('nom')
        email = request.POST.get('email')
        tel = request.POST.get('tel')
        ville = request.POST.get('ville')
        quart = request.POST.get('quartier')
        adresse = request.POST.get('address')
        montant = request.POST.get('somme')
        zip = request.POST.get('zip')

        com_achat = Commande(prodComd =item, nom_cli=nom, email_cli=email,
                             Tel_cli = tel, ville_cli=ville,
                             quart_cli = quart, adress_cli = adresse,montant = montant, zip = zip)
        
        com_achat.save()

        return redirect('confirmation')

    
    return render(request, 'produits/checkout.html')



def search(request):
    if request.method == 'POST':
        search = request.POST.get('search')
        produits = Produits.objects.filter(designation__icontains= search) | Produits.objects.filter(categorie__name__icontains=search) | Produits.objects.filter(description__icontains=search)

        context ={
            'produits' : produits
        }
        return render(request,'produits/search.html',context)


    return render(request,'produits/search.html')


