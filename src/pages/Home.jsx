import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
    <div id="title-name" className="md:block hidden fixed top-[2%] z-10 right-4 ">
    <div className="flex flex-row">
            <a href="" id="navbar" className="justify-between m-3 border-b-2">HOME</a>
            <a href="" id="navbar" className="justify-between m-3 border-b-2">ABOUT</a>
            <a href="" id="navbar" className="justify-between m-3 border-b-2">PROJECTS</a>
            <a href="" id="navbar" className="justify-between m-3 border-b-2">LINKS</a>
    </div>
    </div>
    <div className="container mx-auto">
      <h1 className="text-4xl font-bold text-center">Pamela Pimentels Portfolio</h1>
      <p className="text-lg text-center mt-8">I'm a Web Developer passionate about creating responsive and user-friendly web applications.</p>
      <div className="flex justify-center mt-8">
        <a href="/portfolio" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">View Portfolio</a>
      </div>
    </div>
    </>
  );
};

export default Home;
