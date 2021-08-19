import Image from 'next/image';

import * as S from './styles';

import { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';
import 'swiper/components/thumbs/thumbs.min.css';

// import Swiper core and required modules
import SwiperCore, { Navigation, Thumbs } from 'swiper/core';
import { motion, useTransform, useViewportScroll } from 'framer-motion';

SwiperCore.use([Navigation, Thumbs]);

export function SlideGallery({ place }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const params = {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    loop: true,
    spaceBetween: 10,
    // navigation: true,
    thumbs: {
      swiper: thumbsSwiper,
    },
    grabCursor: true,
  };

  const paramsGallery = {
    onSwiper: setThumbsSwiper,
    loop: true,
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    grabCursor: true,
  };

  return (
    <S.Slide>
      <Swiper {...params}>
        {place?.gallery?.map((image, index) => (
          <SwiperSlide key={`photo--${index}`}>
            <S.ImageContainer>
              <Image
                src={image.url}
                alt={place?.name}
                layout="fill"
                quality={100}
              />
            </S.ImageContainer>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="swiper-button-next"></div>
      <div className="swiper-button-prev"></div>
      <Swiper {...paramsGallery} style={{ marginTop: '1rem' }}>
        {place?.gallery?.map((image, index) => (
          <SwiperSlide key={`item--${index}`}>
            <S.ImageItem as={motion.div} whileHover={{ scale: 1.1 }}>
              <Image
                src={image.url}
                alt={place?.name}
                layout="fill"
                quality={100}
              />
            </S.ImageItem>
          </SwiperSlide>
        ))}
      </Swiper>
    </S.Slide>
  );
}
