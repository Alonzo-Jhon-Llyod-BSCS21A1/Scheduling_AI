import React, { useState } from 'react';

function RoomForm({ roomName }) {
  const [selectedDay, setSelectedDay] = useState('');
  const [timeFrom, setTimeFrom] = useState('');
  const [timeUntil, setTimeUntil] = useState('');
  const [course, setCourse] = useState('');
  const [section, setSection] = useState('');

  const days = ["MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY"];

  return (
    <div className="room-form">
      <div className="room-header">
        <button>{"<"}</button>
        <h2>{roomName}</h2>
        <button>{">"}</button>
      </div>

      <div className="day-selection">
        {days.map(day => (
          <button
            key={day}
            className={selectedDay === day ? "active" : ""}
            onClick={() => setSelectedDay(day)}
          >
            {day}
          </button>
        ))}
      </div>

      <div className="time-inputs">
        <label>Time: </label>
        <input
          type="text"
          placeholder="From"
          value={timeFrom}
          onChange={(e) => setTimeFrom(e.target.value)}
        />
        <span>AM</span>
        <input
          type="text"
          placeholder="Until"
          value={timeUntil}
          onChange={(e) => setTimeUntil(e.target.value)}
        />
        <span>PM</span>
      </div>

      <div className="course-section">
        <input
          type="text"
          placeholder="Course"
          value={course}
          onChange={(e) => setCourse(e.target.value)}
        />
        <input
          type="text"
          placeholder="Section"
          value={section}
          onChange={(e) => setSection(e.target.value)}
        />
      </div>

      <div className="form-buttons">
        <button className="save">SAVE</button>
        <button className="edit">EDIT</button>
        <button className="cancel">CANCEL</button>
      </div>
    </div>
  );
}

export default RoomForm;
