from database import create, delete, read, update
from flask import Flask, jsonify, request

app = Flask(__name__)


@app.route("/create-event", methods=["POST"])
def create_event():
    data = request.json
    response = create(data=data)
    return jsonify(response)


@app.route("/list-events", methods=["GET"])
def list_events():
    events = read()
    return jsonify(events)


@app.route("/update-event/<event_id>", methods=["PUT"])
def update_event(event_id):
    data = request.json
    response = update(event_id, data)
    return jsonify(response)


@app.route("/delete-event/<event_id>", methods=["DELETE"])
def delete_event(event_id):
    response = delete(event_id)
    return jsonify(response)


if __name__ == "__main__":
    app.run(debug=True, port=8080)
