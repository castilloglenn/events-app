from database import create, delete, read, update
from flask import Flask, jsonify, request

app = Flask(__name__)


@app.route("/create-event", methods=["POST"])
def create_event():
    data = request.json
    result = create(data)
    return jsonify({"message": result})


@app.route("/list-events", methods=["GET"])
def list_events():
    events = read()
    return jsonify(events)


if __name__ == "__main__":
    app.run(debug=True, port=8080)
