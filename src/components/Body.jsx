import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

const Body = () => {
  return (
    <div className="min-h-screen flex flex-col bg-base-100 text-base-content pb-16">
      <NavBar />
      <main className="flex-1 flex justify-center items-center">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Body;