import './style.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import React from 'react';
import arrowImage from '../../assets/arrow.jpg';
import workspace from '../../assets/swe.jpeg';
import pilot from '../../assets/pilot_me.jpeg';
import chicago from '../../assets/chicago_skyline.jpg';
import apache from '../../assets/apache.jpeg'
import herme from '../../assets/Herme.jpeg'
import csprings from '../../assets/cSprings_skyline.jpg'
import snowboard from '../../assets/snowboard Large.jpeg'


import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';

export default function FrankiePage() {
    const DownArrowAnimation = () => {
        return (
            <div className="arrow-container">
                <div className='d-arrow'>
                <img src={arrowImage} alt="Down Arrow" className="arrow down-arrow" />
                </div>
               
            </div>
        )};
        const UpArrowAnimation = () => {
            return (
                <div className="arrow-container">
                    <div className='up-arrow'>
                    <img src={arrowImage} alt="Up Arrow" className="arrow up-arrow" />
                    </div>
                   
                </div>
            )};
    const LeftArrowAnimation = () => {
        return (
            <div className="arrow-container">
                <div className='l-arrow'>
                <img src={arrowImage} alt="Left Arrow" className="arrow left-arrow" />
                </div>
               
            </div>
        )};
    const RightArrowAnimation = () => {
        return (
            <div className="arrow-container">
                <div className='r-arrow'>
                <img src={arrowImage} alt="Right Arrow" className="arrow right-arrow" />
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
                <div className='career'>
                    <h1>From Flight To Terminal</h1>
                    <figure className="figure">
                            <img src={pilot} className="figure-img img-fluid rounded" alt="..."/>
                            <figcaption className="figure-caption">Apache Pilot Workspace</figcaption>
                        </figure>
                        <figure className="figure">
                            <img src={workspace} className="figure-img img-fluid rounded" alt=""/>
                            <figcaption className="figure-caption">Software Engineer Workspace</figcaption>
                        </figure>
                        <div className='career-description'>
                            <h3>Transition to Software Engineering</h3>
                            <p>
                                My journey into software engineering was influenced by my technical experience operating an AH64E helicopter. 
                                The attention to detail required in this role, from planning and rehearsals to troubleshooting software issues, 
                                seamlessly translated into the skills needed for a successful career in software development.
                            </p>

                            <h3>Education and Training</h3>
                            <p>
                                I enhanced my technical foundation by attending General Assembly’s Software Engineering Immersive course, 
                                graduating in November of 2023. Initially, my progress in HTML was slow, but the course equipped me with 
                                essential tools and knowledge in React, JavaScript, HTML, CSS, Python, and SQL database operations.
                            </p>

                            <h3>Professional Experience</h3>
                            <p>
                                Currently, I am volunteering for DefendUS, a nonprofit organization, as a backend Python tester for their social 
                                media application, 65square. This role allows me to apply and further develop my software testing and backend 
                                development skills.
                            </p>
                        </div>

                </div>
                <div className='down-arrow'>
                        <DownArrowAnimation />
                        </div>
                    <div className='right-arrow'>
                    <RightArrowAnimation />
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className='slide-container'>
            <div className='up-arrow'>
                        <UpArrowAnimation />
                    </div>
                    <div className='left-arrow'>
                <LeftArrowAnimation />
                </div>
                <div className='school'>
                    <h1>Life and Chicago</h1>
                    <figure className="figure">
                            <img src={chicago} className="figure-img img-fluid rounded" alt="..."/>
                            <figcaption className="figure-caption">Chicago Skyline</figcaption>
                        </figure>
                        <div className='career-description'>
                            <p>
                            Born and raised in Chicago, IL in the era of Michael Jordon. I attended DeVry University Advantage Academy 
                            where I graduated with my HS Diploma and Associates degree in Network Systems Administration in 2006. 
                            I attended Illinois Institute Of Technology and graduated with my Bachelor’s in Business Administration in 2010.
                            </p>
                        </div>
                </div>
                <div className='down-arrow'>
                        <DownArrowAnimation />
                        </div>
                    <div className='right-arrow'>
                    <RightArrowAnimation />
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className='slide-container'>
            <div className='up-arrow'>
                        <UpArrowAnimation />
                    </div>
                    <div className='left-arrow'>
                <LeftArrowAnimation />
                </div>
                <div className='army'>
                    <h1>All Aviation</h1>
                    <figure className="figure">
                            <img src={apache} className="figure-img img-fluid rounded" alt="..."/>
                            <figcaption className="figure-caption">Flying the Apache in South Korea</figcaption>
                        </figure>
                        <div className='career-description'>
                            <p> 
                            I joined the United States Army one year after graduation and served as an air traffic controller (air traffic control technician) 
                            for the first half of my career. I then went to flight school to become an Aviator and became trained and proficient 
                            in operating the H-64E Apache Guardian Helicopter. I served a tour in Korea for two years and deployed to Iraq in June of 2020.
                            </p>
                        </div>
                </div>
                <div className='down-arrow'>
                        <DownArrowAnimation />
                        </div>
                    <div className='right-arrow'>
                    <RightArrowAnimation />
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className='slide-container'>
            <div className='up-arrow'>
                        <UpArrowAnimation />
                    </div>
                    <div className='left-arrow'>
                <LeftArrowAnimation />
                </div>
                <div className='family'>
                    <h1>Life in Colorado Springs & Adventures with Herme</h1>
                    <figure className="figure">
                        <img src={csprings} className="figure-img img-fluid rounded" alt="Colorado Springs Skyline"/>
                        <figcaption className="figure-caption">Colorado Springs Skyline</figcaption>
                    </figure>
                    <figure className="figure">
                        <img src={herme} className="figure-img img-fluid rounded" alt="Herme"/>
                        <figcaption className="figure-caption">My dog Herme</figcaption>
                    </figure>
                    <figure className="figure">
                        <img src={snowboard} className="figure-img img-fluid rounded" alt="Snowboarding"/>
                        <figcaption className="figure-caption">Snowboarding in the Rockies</figcaption>
                    </figure>
                    <div className='career-description'>
                        <p>
                            Post-military, I settled in Colorado Springs, CO, embracing the local community and outdoor lifestyle. 
                            I work at a local k-8 charter school and volunteer with DefendUS. I adopted Herme in November 2021, 
                            and we've enjoyed exploring Colorado's natural beauty, especially snowboarding in the Rockies.
                        </p>
                    </div>
                </div>

                    <div className='right-arrow'>
                    <RightArrowAnimation />
                    </div>
            </div>
            </SwiperSlide>
        </Swiper>
      </>
    );
  }