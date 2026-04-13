import React from 'react';
import Navbar from './Navbar';

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main style={{ marginTop: '64px' }}>
        {children}
      </main>
    </>
  );
};

export default Layout;
