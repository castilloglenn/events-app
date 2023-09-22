from datetime import datetime
from typing import TypedDict

EventID = str


class EventDetails(TypedDict):
    name: str
    start: datetime
    end: datetime
