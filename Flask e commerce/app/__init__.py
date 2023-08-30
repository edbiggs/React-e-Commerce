from flask import Flask
from config import Config
from flask_migrate import Migrate
from app.models import db, User
from flask_login import LoginManager
from flask_cors import CORS


app = Flask(__name__, template_folder='templates')
cors = CORS(app, origins=['http://localhost:5173/'],allow_headers=['Content-Type'])
app.config.from_object(Config)


db.init_app(app)
migrate = Migrate(app,db)
login_manager = LoginManager(app)
CORS(app)


@login_manager.user_loader
def load_user(user_id):
    return User.query.get(user_id)

login_manager.login_view='login_page'

from . import routes, models

    