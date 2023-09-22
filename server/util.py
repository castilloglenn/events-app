import json


def get_data() -> dict:
    with open("events.json", "r") as json_data:
        data = json.load(json_data)

        return data
