import './style.css'
import { Swiper, SwiperSlide } from 'swiper/react';

import React from 'react';
import arrowImage from '../../assets/arrow.jpg';
import digital from '../../assets/b_round_contact.jpeg'
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';

export default function ContactPage() {
  const LeftArrowAnimation = () => {
    return (
        <div className="arrow-container">
            <div className='l-arrow'>
            <img src={arrowImage} alt="Left Arrow" className="arrow left-arrow" />
            </div>
           
        </div>
    )};

  return (
      <>
        <Swiper
            className="mySwiper2 swiper-v"
            direction={'vertical'}
            spaceBetween={50}
            pagination={{ clickable: true }}
            modules={[Pagination]}
            style={{ width: '100%', height: '100%' }}
        >
          <SwiperSlide>
            <div className='slide-container'>
              <div className='left-arrow'>
                <LeftArrowAnimation />
              </div>
              <div className='contact'>

                    <figure className="figure">
                      <img src={digital} className="figure-img img-fluid rounded" alt="..."/>
                        <figcaption className="figure-caption">Digital Terrain Illustration</figcaption>
                    </figure>
                    <div className="socials-container">
                      <h1>Socials & Contact Information</h1>
                        <p>
                        <a href="https://www.linkedin.com/in/frankwoodward" className="card-link">Linkedin</a>
                        <br></br>
                        
                        <a href="https://github.com/Frankie-Woodward" className="card-link">Github</a>
                       <br></br>
                        <a href="mailto:fwoodwar@gmail.com" className="card-link">Email - submit a message to me</a>

                        </p>
                    </div>
              </div>
            </div>
        </SwiperSlide>
        </Swiper>
      </>
    );
  }