import React, { useState } from "react";

function EventForm() {
    const [eventName, setEventName] = useState("");
    const [eventStart, setEventStart] = useState("");
    const [eventEnd, setEventEnd] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        const eventData = {
            name: eventName,
            start: eventStart,
            end: eventEnd,
        };

        try {
            const response = await fetch("/create-event", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(eventData),
            });

            if (response.ok) {
                console.log("Event created successfully");
            } else {
                console.error("Error creating event");
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };

    return (
        <div className="container">
        <form onSubmit={handleSubmit}>
            <div>
            <label>Event Name: </label>
            <input
                type="text"
                value={eventName}
                onChange={(e) => setEventName(e.target.value)}
                required
            />
            </div>
            <div>
            <label>Start Date: </label>
            <input
                type="datetime-local"
                value={eventStart}
                onChange={(e) => setEventStart(e.target.value)}
                required
            />
            </div>
            <div>
            <label>End Date: </label>
            <input
                type="datetime-local"
                value={eventEnd}
                onChange={(e) => setEventEnd(e.target.value)}
                required
            />
            </div>
            <button type="submit">Create Event</button>
        </form>
        </div>
    );
}

export default EventForm;
