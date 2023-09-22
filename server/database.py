from typed import EventDetails, EventID
from util import get_data


def create(data: EventDetails) -> None:
    ...


def read() -> dict:
    return get_data()


def update(id: EventID, data: EventDetails) -> None:
    ...


def delete(id: EventID) -> None:
    ...
