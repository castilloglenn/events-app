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
    new_event = deserialize_datetime(event)
    new_start: datetime = new_event["start"]
    new_end: datetime = new_event["end"]

    valid_start = new_start.replace(hour=8, minute=0, second=0, microsecond=0)
    valid_end = new_start.replace(hour=20, minute=0, second=0, microsecond=0)

    now = datetime.now()

    if new_start > new_end:
        return "You cannot set the event's start time ahead of the end time."
    elif new_start < now or new_end < now:
        return "You cannot create an event that already past the current time."
    elif not (valid_start <= new_start <= valid_end) or not (
        valid_start <= new_end <= valid_end
    ):
        return "Events to be set are only between 8AM-8PM in the evening. No events allowed outside these hours."

    for evt in db.values():
        evt_start = evt["start"]
        evt_end = evt["end"]

        if (
            new_start >= evt_start
            and new_start <= evt_end
            or new_end >= evt_start
            and new_end <= evt_end
        ):
            evt_name = evt["name"]
            return f"You are overlapping with the other event: {evt_name}"

    return ""
