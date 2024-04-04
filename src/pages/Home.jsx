import React from 'react';

const Home = () => {
  return (
    <>
    <body class="w-full min-h-screen bg-gradient-to-r from-violet-200 to-pink-300/70">
    <div id="title-name" className="md:block hidden fixed top-[2%] z-10 right-4 ">
    <div className="flex flex-row">
            <a href="#aboutMe" id="navbar" className="justify-between m-3 border-b-2">HOME</a>
            <a href="#aboutMe" id="navbar" className="justify-between m-3 border-b-2">ABOUT</a>
            <a href="#projects" id="navbar" className="justify-between m-3 border-b-2">PROJECTS</a>
            <a href="https://docs.google.com/document/d/1KvVkd-DwRWQ7nrEsPqI5fiKOarxINPIFbncByPbRvCc/edit?usp=sharing" id="navbar" className="justify-between m-3 border-b-2">RESUME</a>
    </div>
    </div>
    <div className="container mx-auto">
      <h1 className="text-5xl font-bold tracking-wide text-center">Pamela Pimentels Portfolio</h1>
      <h2 id="aboutMe">About Me</h2>
      <img src="./src/assets/me.png" className="object-cover h-80 w-96" id="picture"></img>

      <div id="brands">
      <a href="https://twitter.com/PamcakesPlease"><i class="fa-brands fa-twitter fa-2xl fa-fw"></i></a>
      <a href="https://github.com/pamcakesplease"><i class="fa-brands fa-github fa-2xl fa-fw"></i></a>
      <a href="https://www.linkedin.com/in/pamela-pimentel-a908111b1/"><i class="fa-brands fa-linkedin fa-2xl fa-fw"></i></a>
      <a href="https://www.twitch.tv/pamcakesplease"><i class="fa-brands fa-twitch fa-2xl fa-fw"></i></a>
      </div>
      <p className="text-lg text-center text-balance leading-loose" id="about"> Hello! My name is Pamela Pimentel and welcome to my portfolio.
   I am a fairly new web develepor with a passion for front end. I hope to one day get my foot in the door as a 
   junior web developer. Feel free to take a look at my projects, links, and resume! Click the folder below to see all
   of my repositories over on Github.</p>

      <h2>Projects <a href="https://github.com/pamcakesplease?tab=repositories"><i class="fa-solid fa-folder"></i></a></h2>
      <div class="gap-8 columns-3" id="projects">
  <p id="project-title">Dopameme</p>
  <a href ="https://jhettortle.github.io/Project-01">
  <img class="h-60 w-96 aspect-square" id="project-image" src="./src/assets/project-1.png" /></a>
  <p id="project-title">Weather Dashboard</p>
  <a href ="https://pamcakesplease.github.io/Weather-Dashboard/">
  <img class="h-60 w-96 aspect-square" id="project-image" src="./src/assets/project-2.png" /></a>
  <p id="project-title">GGz</p>
  <a href ="https://github.com/Spaghedward/GGz?tab=readme-ov-file">
  <img class="h-60 w-96 aspect-square" id="project-image" src="./src/assets/project-3.png" /></a>
</div>
    </div>
    </body>
    </>
  );
};

export default Home;
