from django.shortcuts import render, get_object_or_404
from django.core.paginator import Paginator,EmptyPage, PageNotAnInteger
from .models import Post, Product, Category

# Create your views here.
def index(request):
	cate = get_object_or_404(Category, pk=4) #pk4对应分类a_news
	post_list = Post.objects.filter(category=cate).order_by('-created_time')[0:3]
	return render(request,'blog/index.html',context={
		              'post_list':post_list,})



def news(request):
	cate = get_object_or_404(Category, pk=4) #pk4对应分类a_news
	posts_all_list = Post.objects.filter(category=cate).order_by('-created_time')
	paginator = Paginator(posts_all_list,10)#每10篇分页
	page_num = request.GET.get('page') # 获取url的页面参数（get请求）
	try:
		page_of_posts = paginator.page(page_num)
	except PageNotAnInteger:
		page_of_posts = paginator.page(1)
	except EmptyPage:
		page_of_posts = paginator.page(paginator.num_pages)
	
	context = {}
	context['posts'] = page_of_posts.object_list
	context['page_of_posts'] = page_of_posts

	return render(request,'blog/newslist.html',context)



def detail(request, pk):
    post = get_object_or_404(Post, pk=pk)
    context = {}
    context['post'] = post
    context['previous_post'] = Post.objects.filter(created_time__gt=post.created_time).last()
    context['next_post'] = Post.objects.filter(created_time__lt=post.created_time).first()
    return render(request, 'blog/detail.html', context)


def product(request):
	products_all_list = Product.objects.all()
	paginator = Paginator(products_all_list,6)#每6项分页
	page_num = request.GET.get('page') # 获取url的页面参数（get请求）
	try:
		page_of_products = paginator.page(page_num)
	except PageNotAnInteger:
		page_of_products = paginator.page(1)
	except EmptyPage:
		page_of_products = paginator.page(paginator.num_pages)
	
	context = {}
	context['products'] = page_of_products.object_list
	context['page_of_products'] = page_of_products

	return render(request,'blog/product.html',context)


def summary(request):
	cate = get_object_or_404(Category, pk=5) #pk5对应分类公司简介
	post = Post.objects.filter(category=cate)[0]
	context = {}
	context['post'] = post
	return render(request, 'blog/summary.html', context)


def honour(request):
	cate = get_object_or_404(Category, pk=6) #pk6对应分类企业荣誉
	post = Post.objects.filter(category=cate)[0]
	context = {}
	context['post'] = post
	return render(request, 'blog/honour.html', context)



def hr(request):
	cate = get_object_or_404(Category, pk=7) #pk7对应分类招聘信息
	post = Post.objects.filter(category=cate)[0]
	context = {}
	context['post'] = post
	return render(request, 'blog/hr.html', context)