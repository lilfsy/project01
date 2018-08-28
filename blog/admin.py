from django.contrib import admin
from .models import Post, Category, Tag, Product

# Register your models here.
class PostAdmin(admin.ModelAdmin):
	list_display = ['title','created_time','modified_time','category','author',]

class ProductAdmin(admin.ModelAdmin):
	list_display = ['name','excerpt',]

admin.site.register(Post,PostAdmin)
admin.site.register(Category)
admin.site.register(Tag)
admin.site.register(Product,ProductAdmin)

admin.site.site_header = '瑞新药业'
admin.site.site_title = '瑞新药业'