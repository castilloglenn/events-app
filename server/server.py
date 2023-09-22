from database import read
from flask import Flask

app = Flask(__name__)


@app.route("/list-events")
def members():
    return read()


if __name__ == "__main__":
    app.run(debug=True, port=8080)
