import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/scrollbar/scrollbar.min.css";

import "./Comments.css";

// import Swiper core and required modules
import SwiperCore, { Scrollbar } from "swiper/core";

// install Swiper modules
SwiperCore.use([Scrollbar]);
const data = [
  {
    title: "JOHN DOE • PROPERTY INVESTOR",
    text: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов.',
  },
  {
   title:'Abdulaziz • Algorismic Company',
   text:'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов.',
  },
  {
   title:'Author • CYBERSPACE DEVELOPMENT CENTER',
   text:'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов.',
  },
];
export default function Comments() {
  return (
    <>
         <div className='comment-box'>

          <h1 className='comments-title'>Отзывы клиентов</h1>
      <Swiper
        scrollbar={{
         hide: true,
        }}
        className='mySwiper'>
            {data.map((item,idx)=>{
             return(
             <div className='box-elements'>
              <SwiperSlide className='padd'>
             <h1 className='com-slide-tit'>{item.title}</h1>
             <p className='com-slide-text'>{item.text}</p>
            </SwiperSlide>
            </div>)})}
      </Swiper>
      </div>

    </>
  );
}
