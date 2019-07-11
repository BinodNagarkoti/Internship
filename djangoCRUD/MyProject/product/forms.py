from django import forms
from .models import Product
class ProductForm(forms.ModelForm):
    description = forms.CharField(widget=forms.TextInput(
        attrs={
            'class':'form-control',
        }
    ))
    price = forms.CharField(widget=forms.TextInput(
        attrs={
            'class':'form-control',
        }
    ))
    quantity = forms.CharField(widget=forms.TextInput(
        attrs={
            'class':'form-control',
        }
    ))
    class Meta:
        model = Product
        fields = ['description', 'price', 'quantity']