import React from 'react';
import RoomCard from '../components/RoomCard';

// Import images for the rooms from the 'Imgs' folder
import queenRoomImg from '../Imgs/queenroom.jpg';
import kingRoomImg from '../Imgs/kingroom.jpg';
import seaRoomImg from '../Imgs/searoom.jpg';


const Rooms = ({ showNotification }) => {
  // Updated data to use an 'image' property instead of a background gradient
  const roomsData = [
    { 
      name: "Standard Queen", 
      price: 189, 
      desc: "Comfortable and elegantly appointed room featuring a queen-size bed with premium linens, modern amenities, and a cozy seating area perfect for relaxation.", 
      amenities: ["Queen bed", "Free WiFi", "Cable TV", "Room service"], 
      image: queenRoomImg 
    },
    { 
      name: "Deluxe King", 
      price: 259, 
      desc: "Spacious room with a king-size bed, separate seating area, and enhanced amenities. Perfect for business travelers or couples seeking extra comfort.", 
      amenities: ["King bed", "Free WiFi", "Desk area", "Coffee maker"], 
      image: kingRoomImg
    },
    { 
      name: "Seaview Suite", 
      price: 399, 
      desc: "Our premium suite offers breathtaking ocean views, separate living area, and luxury amenities. The perfect choice for special occasions and extended stays.", 
      amenities: ["King bed", "Ocean view", "Balcony", "Premium bathroom"], 
      image: seaRoomImg
    }
  ];

  const handleBooking = (roomName) => {
    showNotification(`Booking widget for ${roomName} would open here.`, 'info');
  };

  return (
    <div className="page">
      <div className="container">
        <div className="page-header">
          <h1>Rooms & Rates</h1>
          <p>Choose from our selection of elegantly appointed accommodations</p>
        </div>
        <div className="rooms-grid">
          {roomsData.map((room) => (
            <RoomCard key={room.name} room={room} onBook={handleBooking} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Rooms;