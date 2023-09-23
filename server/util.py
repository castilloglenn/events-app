import json
from datetime import datetime
from typing import Any


def serialize_datetime(obj):
    if isinstance(obj, datetime):
        return obj.isoformat()
    return obj


def deserialize_datetime(data):
    if "start" in data:
        data["start"] = datetime.fromisoformat(data["start"])
    if "end" in data:
        data["end"] = datetime.fromisoformat(data["end"])
    return data


def get_data() -> dict:
    try:
        with open("events.json", "r") as json_data:
            data = json.load(json_data, object_hook=deserialize_datetime)
            return data
    except FileNotFoundError:
        return {}


def save_data(data: dict):
    with open("events.json", "w") as json_data:
        json.dump(data, json_data, default=serialize_datetime)


def validate_event(db: dict[str, dict[str, Any]], event: dict[str, Any]) -> str:
    return "Testing testing"
