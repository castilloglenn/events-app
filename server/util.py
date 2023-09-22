import json


def get_data() -> dict:
    with open("events.json", "r") as json_data:
        data = json.load(json_data)

        return data


def save_data(data: dict):
    with open("events.json", "w") as json_data:
        json.dump(data, json_data)
