import React from "react";
import { useState } from "react";
import HeadContent from "../../components/HeadContent/HeadContent";
import LiftCabin from "../../components/LiftCabin/LiftCabin";
import Us from "../../components/Us/Us";
function About() {
  const data={title:'MODERN LIFT SYSTEMS',
          text:'Крупная лифтостроительная компания в Узбекистане!'}
    return (
    <div>
      <HeadContent title={data.title} text={data.text}/>
      <Us/>
      <LiftCabin/>
    </div>
  );
}

export default About;
