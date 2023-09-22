import json


def get_data() -> dict:
    with open("server/events.json", "r") as json_data:
        data = json.load(json_data)

        return data
