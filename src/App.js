import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

// Import Components and Pages from their respective folders
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';

// This Notification component can live in App.js since it's closely tied to App's state
const Notification = ({ notification, onClose }) => {
  useEffect(() => {
    if (notification) {
      const timer = setTimeout(() => {
        onClose();
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [notification, onClose]);

  if (!notification) {
    return null;
  }

  return (
    <div className={`notification notification-${notification.type} show`}>
      <div className="notification-content">
        <span>{notification.message}</span>
        <button className="notification-close" onClick={onClose}>×</button>
      </div>
    </div>
  );
};

// Main App Component
function App() {
  const [notification, setNotification] = useState(null);
  const location = useLocation();

  const showNotification = (message, type = 'info') => {
    setNotification({ message, type });
  };

  const closeNotification = () => {
    setNotification(null);
  };
  
  // Effect to scroll to the top of the page on route change.
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home showNotification={showNotification} />} />
          <Route path="/rooms" element={<Rooms showNotification={showNotification} />} />
          <Route path="/gallery" element={<Gallery showNotification={showNotification} />} />
          <Route path="/contact" element={<Contact showNotification={showNotification} />} />
        </Routes>
      </main>
      <Footer />
      <Notification notification={notification} onClose={closeNotification} />
    </>
  );
}

export default App;
