from time import time

from typed import EventDetails, EventID
from util import get_data, save_data, validate_event


def create(data: EventDetails) -> None:
    db = get_data()
    new_data = {
        "name": data["name"],
        "start": data["start"],
        "end": data["end"],
    }

    response = validate_event(db=db, event=new_data)

    if not response:
        time_id = str(int(time()))
        db[time_id] = new_data
        save_data(db)

        return {
            "title": "Success!",
            "message": f"Event '{new_data['name']}' has been created!",
        }
    else:
        return {"title": "Failed.", "message": response}


def read() -> dict:
    return get_data()


def update(id: EventID, data: EventDetails) -> None:
    db = get_data()
    updated_data = {
        "name": data["name"],
        "start": data["start"],
        "end": data["end"],
    }

    response = validate_event(db=db, event=updated_data, update_id=id)

    if not response:
        db[id] = updated_data
        save_data(db)

        return {
            "title": "Success!",
            "message": f"Event '{updated_data['name']}' has been updated!",
        }
    else:
        return {"title": "Failed.", "message": response}


def delete(id: EventID) -> None:
    db = get_data()
    name = db[id]["name"]
    del db[id]
    save_data(db)

    return {
        "title": "Success!",
        "message": f"Event '{name}' has been deleted!",
    }
