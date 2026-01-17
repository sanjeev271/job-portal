import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import AllRoutes from './routes/allroutes';

// Main App Component - Contains Header, Routes, and Footer
function App() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header section */}
      <Header />
      
      {/* Routes for all the links in the header */}
      <div className="flex-1">
        <AllRoutes />
      </div>

      {/* Footer section with Profile and Applied Jobs links */}
      <Footer />
    </div>
  );
}

export default App;
