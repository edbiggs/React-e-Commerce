from flask import render_template, request, redirect, url_for, flash, jsonify
from app import app
from .forms import SignUpForm, LoginForm, SearchForm, AddForm
import requests, json
from flask_login import login_user, logout_user, login_required, current_user
from .models import User, Product, Cart, db
from werkzeug.security import check_password_hash
from urllib.parse import urlencode
from flask_cors import CORS

@app.route('/login', methods=["POST"])
def login():
    data = request.json
    username = data.get('username')
    password = data.get('password')

   
    user = User.query.filter_by(username=username).first()

    if user:
        if check_password_hash(user.password, password):
            return {
                'status':'Ok',
                'data': user.to_dict()
            }
        else:
            return {
                'status':'Not Ok',
                'message': 'Username or password is incorrect'
            }
    else:
        return{
            'status':'Not Ok',
            'message':'User not found'
        }


@app.route('/signup', methods=["POST"])
def signup():
    try:
        data = request.json
        username = data.get('username')
        password = data.get('password')
        

        user = User(username,password)

        db.session.add(user)
        db.session.commit()
        return {
            'status':'Ok',
            'message':'Succesfully created new user'
        }
    except:
        return {
            'status':'Not Ok',
            'message':'Could not get user info'
        }

    return render_template('signup.html', form = form)

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
        
    print([p.to_dict()for p in products][0]['id'])
    return  {
        'status':'Ok',
        'data': [p.to_dict()for p in products]
    }

    


@app.route('/products/<product_id>')
def single_product(product_id):
    product = Product.query.get(product_id)
    if product:
        return {
            'status':'ok';
            'product':product.to_dict()
        }
@app.route('/add_product/<new_product_id>')
def add_product(new_product_id):

    product = Cart(current_user.id, new_product_id)

    db.session.add(product)
    db.session.commit()
    return redirect(url_for('products_page'))



@app.route('/cart/', methods={"GET","POST"})
@login_required
def cart_page():
    cart = current_user.get_cart()
    return render_template('cart.html', cart=cart)

@app.route('/remove_product/<id>')
@login_required
def remove_product(id):
    product = Cart.query.filter_by(product_id=id).first()

    db.session.delete(product)
    db.session.commit()
    return redirect(url_for('cart_page'))




    


    