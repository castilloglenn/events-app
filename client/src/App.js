import React, { useState, useEffect } from 'react'
import EventForm from './components/EventForm'
import EventItem from './components/EventItem'
import Modal from './components/Modal';

function App() {

    const [modalVisibility, setModalVisibility] = useState(false);
    const [modalTitle, setModalTitle] = useState("");
    const [modalMessage, setModalMessage] = useState("");

    const showModal = (response) => {
        setModalTitle(response.title);
        setModalMessage(response.message);
        setModalVisibility(true);
    }

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

    const handleEdit = (eventId, editedName, editedStartTime, editedEndTime) => {
        const updatedEventData = {
          id: eventId,
          name: editedName,
          start: editedStartTime,
          end: editedEndTime,
        };

        fetch("/update-event/" + eventId, {
            method: "PUT",
            body: JSON.stringify(updatedEventData),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((response) => response.json())
            .then((data) => {
                updateList();
                showModal(data);
            })
            .catch((error) => {
                console.error("Error updating event:", error);
            });
    };

    const handleDelete = (eventId) => {
        fetch("/delete-event/" + eventId, {
            method: "DELETE"
        })
            .then((response) => response.json())
            .then((data) => {
                updateList();
                showModal(data);
            })
            .catch((error) => {
                console.error("Error deleting event:", error);
            });
    };

    return (
        <div className='App'>
            <EventForm 
                showModal={showModal}
                updateList={updateList}
            />

            <div className="container">
                <h2>List of Events</h2>
            {
                events.length === 0 
                ? 
                <div className="container">
                    <center>There are no listed events.</center>
                </div>
                :
                events.map((event) => (
                    <EventItem
                        key={event.id}
                        id={event.id}
                        name={event.name}
                        startTime={event.start}
                        endTime={event.end}
                        onDelete={handleDelete}
                        onEdit={handleEdit}
                    />
                ))
            }
            </div>

            <Modal
              isOpen={modalVisibility}
              onClose={() => setModalVisibility(false)}
              title={modalTitle}
              message={modalMessage}
            />
        </div>
    )
}

export default App
