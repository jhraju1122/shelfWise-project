import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Banner from '../Banner/Banner';
import Footer from '../../Footer/Footer';
 
const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Footer></Footer>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;