import React from "react";
import "./Home.css";
import Reveal from "react-awesome-reveal";
import { keyframes } from "@emotion/react";
import { Link } from "react-router-dom";
import UsServices from "../../components/UsServices/UsServices";
import Results from "../../components/Results/Results";
import LiftCabin from "../../components/LiftCabin/LiftCabin";
import Productions from "../../components/Productions/Productions";
import Comments from "../../components/Comments/Comments";
import Partners from "../../components/Partners/Partners";
import Footer from "../../components/Footer/Footer";
function Home() {
  const homeText1 = keyframes`
 from {
  opacity:0;
  transform:scale(0,0)
 }
 to{
  opacity:1;
  transform:scale(none)
 }
 `;
  return (
    <div className='home'>
     <div className="home-content1">
      <Reveal keyframes={homeText1}>
        <h1 className='home-text1'>
          «Osten» — уникальный производитель, лифтов и эскалаторов в Средней
          Азии
        </h1>
      </Reveal>
      <Reveal keyframes={homeText1}>
        <h1 className='home-text2'>
        Компания «Osten» была основана в 2019 году!
        </h1>
      </Reveal>
      <Reveal delay={300} keyframes={homeText1}>
       <Link to='/about'>
       <button className='home-btn'>ПОДРОБНЕЕ</button>
       </Link>
      </Reveal>
      </div>
      <UsServices/>
      <Results/>
      <LiftCabin/>
      <Productions/>
      <Comments/>
      <Partners/>
    </div>
  );
}

export default Home;
