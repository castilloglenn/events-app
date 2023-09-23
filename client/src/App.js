import React, { useState, useEffect } from 'react'
import EventForm from './components/EventForm'
import EventItem from './components/EventItem'

function App() {

    const [events, setEvents] = useState([]);

    const updateList = () => {
        fetch("/list-events")
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                const eventsArray = Object.entries(data).map(([id, event]) => ({
                id,
                ...event,
                }));
        
                setEvents(eventsArray);
            })
            .catch((error) => {
                console.error("Error fetching events:", error);
            });
    }
    
    useEffect(updateList, []);

    const handleEdit = (eventId) => {
        
    };

    const handleDelete = (eventId) => {
        
    };

    return (
        <div className='App'>
            <h1 className='title'>Create New Event</h1>
            <EventForm updateList={updateList}/>
            <h1 className='title'>List of Events</h1>
            {events.map((event) => (
                <EventItem
                    key={event.id}
                    id={event.id}
                    name={event.name}
                    startTime={event.start}
                    endTime={event.end}
                    onDelete={handleDelete}
                    onEdit={handleEdit}
                />
            ))}
        </div>
    )
}

export default App
