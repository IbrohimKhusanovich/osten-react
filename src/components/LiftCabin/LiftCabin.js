import lift1 from "../../img/lift1.jpg";
import lift2 from "../../img/lift2.jpg";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";

import "./LiftCabin.css";

// import Swiper core and required modules
import SwiperCore, { Pagination } from "swiper/core";

// install Swiper modules
SwiperCore.use([Pagination]);

export default function LiftCabin() {
  const data = [
    { img: lift1 ,
      title:'osten l3'
    },
    { img: lift2,
      title:'OSTEN L2'
    },
    { img: lift1 ,
      title:'OSTEN L1'
    },
    { img: lift1 ,
      title:'osten l3'
    },
    { img: lift2,
      title:'OSTEN L2'
    },
    { img: lift1,
      title:'OSTEN L1'
    },
    { img: lift1,
      title:'osten l3'
    },
    { img: lift2,
      title:'OSTEN L2'
    },
    { img: lift1 ,
      title:'OSTEN L1'
    },
  ];
  console.log(data[0].img.lift1);
  return (
    <>
    <div className="contain">
      <h1 className='cabin-lift'>Кабины лифтов</h1>
      <Swiper slidesPerView={1} spaceBetween={10} pagination={{
  "clickable": true
}} breakpoints={{
  "640": {
    "slidesPerView": 2,
    "spaceBetween": 20
  },
  "768": {
    "slidesPerView": 4,
    "spaceBetween": 40
  },
  "1024": {
    "slidesPerView": 5,
    "spaceBetween": 50
  }
}} className="mySwiper">
 {data.map((item, idx) => {
        return (

          <SwiperSlide>
            <div className='slide-box'>
              <img src={item.img} alt='img' />
              <p className='slide-title'>{item.title}</p>
            </div>
          </SwiperSlide>

        );
      })}
  </Swiper>
      <button className='slide-btn'>ВСЯ ПРОДУКЦИЯ</button>
      </div>
    </>
  );
}
