from typed import EventDetails, EventID
from util import get_data


def create(data: EventDetails) -> str:
    ...


def read() -> dict:
    return get_data()


def update(id: EventID, data: EventDetails) -> str:
    ...


def delete(id: EventID) -> str:
    ...
