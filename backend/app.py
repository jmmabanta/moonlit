from flask import Flask
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config.from_object("config.Config")
CORS(app, resources={r"/": {"origins":
                            ["http://localhost:3000",
                                "https://jmmabanta.github.io"]
                            }})

db = SQLAlchemy(app)


@app.route('/')
def index():
    return "API LOADED"


if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')
