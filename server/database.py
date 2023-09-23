from time import time

from typed import EventDetails, EventID
from util import get_data, save_data


def create(data: EventDetails) -> None:
    db = get_data()
    new_data = {
        "name": data["name"],
        "start": data["start"],
        "end": data["end"],
    }

    time_id = str(int(time()))
    db[time_id] = new_data
    save_data(db)

    return {
        "title": "Success!",
        "message": f"Event '{new_data['name']}' has been created!",
    }


def read() -> dict:
    return get_data()


def update(id: EventID, data: EventDetails) -> None:
    db = get_data()
    updated_data = {
        "name": data["name"],
        "start": data["start"],
        "end": data["end"],
    }
    db[id] = updated_data
    save_data(db)

    return {
        "title": "Success!",
        "message": f"Event '{updated_data['name']}' has been updated!",
    }


def delete(id: EventID) -> None:
    db = get_data()
    name = db[id]["name"]
    del db[id]
    save_data(db)

    return {
        "title": "Success!",
        "message": f"Event '{name}' has been deleted!",
    }
