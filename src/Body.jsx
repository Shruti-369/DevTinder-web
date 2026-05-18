import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

const Body = () => {
  return (
    <div className="min-h-screen bg-base-100 text-base-content pb-16">
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Body;