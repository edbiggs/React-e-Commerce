from flask import render_template, request, redirect, url_for, flash, jsonify
from app import app
from .forms import SignUpForm, LoginForm, SearchForm, AddForm
import requests, json
from flask_login import login_user, logout_user, login_required, current_user
from .models import User, Product, Cart, db
from werkzeug.security import check_password_hash
from urllib.parse import urlencode


@app.post('/login')
def login():
    data = request.json
    username = data.get('username')
    password = data.get('password')
    print('loggin in')
    print(username)
   
    user = User.query.filter_by(username=username).first()
    print(user)
    if user:
        if check_password_hash(user.password, password):
            return {
                'status':'Ok',
                'data': user.to_dict()
            },200
        else:
            return {
                'status':'Not Ok',
                'message': 'Username or password is incorrect'
            },400
    else:
        return{
            'status':'Not Ok',
            'message':'User not found'
        },400


@app.route('/signup' ,methods=['POST'])
def signup():
    print('attempting sign up:')
    try:
        data = request.json
        username = data.get('username')
        password = data.get('password')
        print(username)

        user = User(username,password)

        db.session.add(user)
        db.session.commit()
        
        response_data ={
            'status':'Ok',
            'message':'Succesfully created new user'
        }
        response = jsonify(response_data)
        return response, 200
    except:
        response_data = {
            'status':'Not Ok',
            'message':'Could not get user info'
        }
        response = jsonify(response_data)
        return response, 400



# @app.route('/lookup', methods=["POST"])
# def lookup_page():

#     if request.method == "POST":  
#         search_query = 
#         output = requests.get(f"https://fakestoreapi.com/products/{search_query}").json()
        
        

@app.route('/products', methods=["GET"])
def add_products():
    products = Product.query.all()
    if products == []:
        ids = []
        titles = []
        images = []
        prices = []
        descriptions = []
        categories = []
        ratings = []
        products = requests.get("https://fakestoreapi.com/products").json()

        print(products[0]['title'])
        
        for product in products:
            titles.append(product['title'])
            prices.append(product['price'])
            descriptions.append(product['description'])
            categories.append(product['category'])
            images.append(product['image'])
            ratings.append(product['rating'])
            ids.append(product['id'])
            prices.append(product['price'])
        print(Product.query.all())

        for i in range(len(ids)):  
            Product.id = ids[i]
            Product.name = titles[i]
            Product.description = descriptions[i]
            Product.category = categories[i]
            Product.image = images[i]
            Product.rating = ratings[i]['rate']
            Product.price = prices[i]
            product = Product(Product.id,Product.name,Product.description,Product.category,Product.image,Product.rating,Product.price)
            db.session.add(product)
            db.session.commit()
        
    
    return_data=  {
        'status':'Ok',
        'data': [p.to_dict() for p in products]
    }
    response = jsonify(return_data)
    return response, 200

    


@app.get('/<product_id>')
def single_product(product_id):
    product = Product.query.get(product_id)
    print(product_id)
    if product:
        print(product)
        return {
            'status':'Ok',
            'data': product.to_dict(),
    }
        
@app.post('/add_product/<new_product_id>')
def add_product(product_id):

    # product = Cart(current_user.id, new_product_id)

    # db.session.add(product)
    # db.session.commit()
    # return redirect(url_for('products_page'))

    try:
        data = request.json
        productId = data.get(product_id)
        userId = data.get(userId)
        

        new_product = Cart(userId, productId)
        

        db.session.add(new_product)
        db.session.commit()
        return {
            'status':'Ok',
            'message':'Succesfully added product to cart'
        },200
    except:
        return {
            'status':'Not Ok',
            'message':'Could not get product info'
        },400
    





@app.route('/cart/', methods={"GET","POST"})
@login_required
def cart_page():
    cart = current_user.get_cart()
    return render_template('cart.html', cart=cart)

@app.delete('/remove_product/<id>')
@login_required
def remove_product(id):
    product = Cart.query.filter_by(product_id=id).first()

    db.session.delete(product)
    db.session.commit()
    return redirect(url_for('cart_page'))




    


    