import React from 'react';
// Corrected absolute import path
import useScrollAnimation from './useScrollAnimation';

const RoomCard = ({ room, onBook }) => {
  const setAnimatedElement = useScrollAnimation();

  return (
    <div className="room-card" ref={setAnimatedElement}>
      {/* This line is updated to use the `room.image` prop passed from Rooms.js */}
      <div className="room-image" style={{ backgroundImage: `url(${room.image})` }}></div>
      
      <div className="room-content">
        <h3>{room.name}</h3>
        <div className="room-price">${room.price}<span>/night</span></div>
        <p>{room.desc}</p>
        <ul className="room-amenities">
          {room.amenities.map(item => <li key={item}>{item}</li>)}
        </ul>
        <button className="btn btn-primary book-now-btn" onClick={() => onBook(room.name)}>
          Book Now
        </button>
      </div>
    </div>
  );
};

export default RoomCard;