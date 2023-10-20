from django.db import models

# Create your models here.
class Categories(models.Model):

    name = models.CharField(max_length=128)
    date_ajout = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['-date_ajout']
    
    def __str__(self):
       return self.name



class Produits(models.Model):
    designation=models.CharField(max_length=128)
    prix=models.FloatField()
    quantite=models.IntegerField()
    slug = models.SlugField(max_length=128)
    date_ajout=models.DateTimeField(auto_now=True)
    description=models.TextField()
    image=models.ImageField(upload_to='%Y/%m/%d')
    categorie=models.ForeignKey(Categories,on_delete=models.CASCADE)
    
    class Meta:
        ordering = ['-date_ajout']

    def __str__(self):
         return self.designation 


class Commentaire(models.Model):
    nom=models.CharField(max_length=128)
    email=models.EmailField()
    message=models.TextField()
    produit=models.ForeignKey(Produits,on_delete=models.CASCADE)


class Commande(models.Model):
    prodComd = models.CharField(max_length=300)
    nom_cli = models.CharField(max_length=128)
    email_cli = models.EmailField()
    Tel_cli = models.IntegerField()
    ville_cli = models.CharField(max_length=128)
    quart_cli = models.CharField(max_length=128)
    adress_cli = models.CharField(max_length=128)
    montant = models.CharField(max_length=200)
    zip = models.CharField(max_length=128)
    date_commande =models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['-date_commande']




