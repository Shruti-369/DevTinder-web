import React, { useEffect, useNavigate } from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';
import axios from 'axios';
import { BASE_URL } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';

const Body = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const fetchUser = async () => {
    try {
      const res = await axios.get(BASE_URL + "/profile/view", {
        withCredentials: true,
      }); dispatch(addUser(res.data));
    } catch (err) {
      navigate("/login");
      console.log(err);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

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