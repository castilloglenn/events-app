import React, { useState } from "react";
import formatDate from "../utils/util";

function EventItem({ id, name, startTime, endTime, onDelete, onEdit }) {
    const [isEditing, setIsEditing] = useState(false);
    const [editedName, setEditedName] = useState(name);
    const [editedStartTime, setEditedStartTime] = useState(formatDate(startTime));
    const [editedEndTime, setEditedEndTime] = useState(formatDate(endTime));
  
    const handleEditClick = () => {
        setIsEditing(true);
    };
  
    const handleSaveClick = () => {
        onEdit(id, editedName, editedStartTime, editedEndTime);
        setIsEditing(false);
    };
  
    const handleCancelClick = () => {
        setIsEditing(false);
        setEditedName(name);
        setEditedStartTime(formatDate(startTime));
        setEditedEndTime(formatDate(endTime));
    };
  
    return (
        <div className="container" id={id}>
            {isEditing ? (
            <div>
                <div>
                    <label>Event Name: </label>
                    <input
                        type="text"
                        value={editedName}
                        onChange={(e) => setEditedName(e.target.value)}
                    />
                </div>
                
                <div>
                    <label>Start: </label>
                    <input
                        type="datetime-local"
                        value={editedStartTime}
                        onChange={(e) => setEditedStartTime(e.target.value)}
                    />
                </div>

                <div>
                    <label>End: </label>
                    <input
                        type="datetime-local"
                        value={editedEndTime}
                        onChange={(e) => setEditedEndTime(e.target.value)}
                    />
                </div>

                <button onClick={handleSaveClick}>Save</button>
                <button onClick={handleCancelClick}>Cancel</button>
            </div>
            ) : (
            <div>
                <p>{name}</p>
                <p>Start: {formatDate(startTime)}</p>
                <p>End: {formatDate(endTime)}</p>
                <button onClick={handleEditClick}>Edit</button>
                <button onClick={() => onDelete(id)}>Delete</button>
            </div>
            )}
        </div>
    );
  }

export default EventItem;
