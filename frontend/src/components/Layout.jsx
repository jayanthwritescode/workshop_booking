import React from 'react';
import Navbar from './Navbar';

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main style={{ marginTop: '64px' }}>
        {children}
      </main>
      <footer className="footer-watermark">
        Developed by FOSSEE group, IIT Bombay
      </footer>
    </>
  );
};

export default Layout;
