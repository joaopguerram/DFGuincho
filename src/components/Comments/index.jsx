import Comment from "../Comment";
import "./style.css";
// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";
import { comments } from "../../Data/dataComments";

const Comments = () => {
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper containerCard"
      >
        {comments.map((comment) => {
          return (
            <SwiperSlide key={comment.id} className="slide-card">
              <Comment
                key={comment.id}
                image={comment.image}
                name={comment.name}
                score={comment.score}
                description={comment.description}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default Comments;
