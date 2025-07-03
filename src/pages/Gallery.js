import React from 'react';
// Corrected relative import path
import useScrollAnimation from 'components/useScrollAnimation';





import hotelExteriorImg from '../Imgs/HotelExterior.jpg';
import lobbyImg from '../Imgs/ElegantLobby.jpg';
import queenRoomImg from '../Imgs/queenroom.jpg';
import kingRoomImg from '../Imgs/kingroom.jpg';
import seaViewImg from '../Imgs/seaview.jpg';
import oceanImg from '../Imgs/ocean.jpg';
import poolImg from '../Imgs/pool.jpg';
import seaRoomImg from '../Imgs/searoom.jpg';


const Gallery = ({ showNotification }) => {
  const setAnimatedElement = useScrollAnimation();

  // Updated array to use the imported images and correct labels
  const galleryItems = [
    { label: "Hotel Exterior", image: hotelExteriorImg },
    { label: "Elegant Lobby", image: lobbyImg },
    { label: "Standard Queen Room", image: queenRoomImg },
    { label: "Deluxe King Room", image: kingRoomImg },
    { label: "Seaview Suite", image: seaViewImg },
    { label: "Ocean View", image: oceanImg },
    { label: "Swimming Pool", image: poolImg },
    { label: "Sea Room", image: seaRoomImg },
  ];

  return (
    <div className="page">
      <div className="container">
        <div className="page-header">
          <h1>Gallery</h1>
          <p>Explore our beautiful hotel and amenities</p>
        </div>
        <div className="gallery-grid">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className="gallery-item"
              ref={setAnimatedElement}
              // Set the background image using the imported image URL
              style={{ backgroundImage: `url(${item.image})` }}
              onClick={() => showNotification(`Viewing: ${item.label}`, 'info')}
              tabIndex="0"
              onKeyPress={(e) => e.key === 'Enter' && showNotification(`Viewing: ${item.label}`, 'info')}
            >
              <div className="gallery-label">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;