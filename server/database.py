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


def read() -> dict:
    return get_data()


def update(id: EventID, data: EventDetails) -> None:
    ...


def delete(id: EventID) -> None:
    ...
