from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
CORS(app, resources={r"/": {"origins": "http://localhost:3000"}})


@app.route('/')
def index():
    return "API LOADED"


if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')
