import React from "react";

function EventItem({ id, name, startTime, endTime, onDelete, onEdit }) {
  return (
    <div className="container" id={id}>
      <p>{name}</p>
      <p>Start: {startTime}</p>
      <p>End: {endTime}</p>
      <button onClick={() => onEdit(id)}>Edit</button>
      <button onClick={() => onDelete(id)}>Delete</button>
    </div>
  );
}

export default EventItem;
