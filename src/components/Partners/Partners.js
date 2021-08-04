
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"

import "./Partners.css";
import partner1 from '../../img/partner.png'
import partner2 from '../../img/partner2.png'
import partner3 from '../../img/partner3.png'
import partner4 from '../../img/partner4.png'
import partner5 from '../../img/partner5.png'
import partner6 from '../../img/partner6.png'

// import Swiper core and required modules
import SwiperCore, {
  Pagination
} from 'swiper/core';

// install Swiper modules
SwiperCore.use([Pagination]);

const data=[
 {partner:partner1},
 {partner:partner2},
 {partner:partner3},
 {partner:partner4},
 {partner:partner5},
 {partner:partner6}
]
export default function Partners() {
  return (
    <div className='partners'>
    <h1 className='partner-title'>Наши партнеры</h1>
    <Swiper slidesPerView={1} spaceBetween={10} pagination={{
  "clickable": true
}} breakpoints={{
  "@0.00": {
    "slidesPerView": 1,
    "spaceBetween": 10
  },
  "@0.75": {
    "slidesPerView": 2,
    "spaceBetween": 20
  },
  "@1.00": {
    "slidesPerView": 3,
    "spaceBetween": 40
  },
  "@1.50": {
    "slidesPerView": 4,
    "spaceBetween": 50
  }
}} className="mySwiper">
  {data.map((item,idx)=>{
   return(
   <SwiperSlide key={idx}>
    <img className='part-img' src={item.partner} alt="" />
   </SwiperSlide>)
  })}
   </Swiper>
    </div>
  )
}
