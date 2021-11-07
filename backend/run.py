from flask_cors import CORS
from moonlit_api import create_app

if __name__ == '__main__':
    app = create_app()
    CORS(app, resources={r"/*": {"origins":
                                 ["http://localhost:3000",
                                  "https://jmmabanta.github.io"]
                                 }})
    app.run(debug=True, host='0.0.0.0')
