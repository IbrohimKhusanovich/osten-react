import React from "react";
import { useState } from "react/cjs/react.production.min";
import './HeadContent.css'
function HeadContent({title,text}) {

  return (
    <div className='header-con'>
      <div className="head-boxs">
      <h1 className='headb-title'>{title}</h1>
      <p className='headb-text'>{text}</p>
      </div>
    </div>
  );
}

export default HeadContent;
