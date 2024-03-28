import './style.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import React from 'react';
import nodejs_logo from '../../assets/nodejs_logo.png';
import CSS3_logo from '../../assets/CSS3 - logo .png';
import express_js_logo from '../../assets/Expressjs-logo.svg';
import HTML5_logo from '../../assets/html5-logo.png';
import javaScript_logo from '../../assets/JavaScript-Logo.png';
import mongoDB_logo from '../../assets/MongoDB-Logo.jpg';
import pj_logo from '../../assets/python_django.png';
import react_logo from '../../assets/react-logo.png';
import postgresql_logo from '../../assets/postgresql-logo.png';
import idquest_request from '../../assets/idquest_request.png';
import idquest_response from '../../assets/idquest_response.png';
import cforge_creation from '../../assets/cforge_creation.png';
import cforge_profile from '../../assets/cforge_profile.png';
import catchem_decks from '../../assets/catchem_decks.png';
import catchem_deck from '../../assets/catchem_deck.png';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import arrowImage from '../../assets/arrow.jpg';

export default function ProjectsPage() {
    const DownArrowAnimation = () => {
        return (
            <div className="arrow-container">
                <div className='down-arrow'>
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
                <div className='left-arrow'>
                <img src={arrowImage} alt="Left Arrow" className="arrow left-arrow" />
                </div>
               
            </div>
        )};
    const RightArrowAnimation = () => {
        return (
            <div className="arrow-container">
                <div className='right-arrow'>
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
                    <div className='identify'>
                        <a href="https://identify-quest-cd810d9e776b.herokuapp.com"><h1>Identify Quest</h1></a>
                        <figure className="figure">
                            <img src={idquest_request} className="figure-img img-fluid rounded" alt="..."/>
                            <figcaption className="figure-caption">AI Chat Interface</figcaption>
                        </figure>
                        <figure className="figure">
                            <img src={idquest_response} className="figure-img img-fluid rounded" alt="..."/>
                            <figcaption className="figure-caption">Composite Image Response from AI</figcaption>
                        </figure>
                        <div className='project-description'>
                            <p>
                                An AI Composite-Sketch application which allows users to:
                            </p>
                            <ul> 
                                <li>
                                    Create ai-generated composite sketches of individuals who have committed a crime 
                                </li> 
                                <li>
                                    Save the sketches to submit to their local 911 emergency teams. 
                                </li>
                            </ul>
                        </div>

                        <div className='languages_used'>
                            <img src={mongoDB_logo} alt="mongodb"></img>
                            <img src={express_js_logo}></img>
                            <img src={react_logo}></img>
                        
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
                    <div className='c-forge'>
                        <a href="https://character-forge-1fbe226688ee.herokuapp.com"><h1>Character Forge</h1></a>
                        <figure className="figure">
                            <img src={cforge_creation} className="figure-img img-fluid rounded" alt="..."/>
                            <figcaption className="figure-caption">Character Creation Interface</figcaption>
                        </figure>
                        <figure className="figure">
                            <img src={cforge_profile} className="figure-img img-fluid rounded" alt="..."/>
                            <figcaption className="figure-caption">Character Profile & Details</figcaption>
                        </figure>
                        <div className='project-description'>
                        <p> A Dungeons and Dragons Character Creation Application that allows users to perform
                            a variety of tasks related to the Dungeons and Dragons game, such as:</p>
                            <ul>
                                <li>
                                Choosing from several character race and alignments
                                </li>
                                <li>
                                The ability for users to roll the dice for their created character’s stats
                                </li>
                            </ul>
                        </div>
                        <div className='languages_used'>
                            <img src={pj_logo}></img>
                            <img src={postgresql_logo}></img>
                    
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
                <div className='up-arrow'><UpArrowAnimation /></div>
                <div className='left-arrow'>
                <LeftArrowAnimation />
                </div>
                    <div className='catchem-all'>
                        <a href="https://catchem-all-68c8e2613b1d.herokuapp.com/users/new"><h1>Catchem All</h1></a>
                            <div className='project-images'>
                                <figure className="figure">
                                    <img src={catchem_decks} className="figure-img img-fluid rounded" alt="..."/>
                                    <figcaption className="figure-caption">Home page showcasing the latest decks</figcaption>
                                </figure>
                                <figure className="figure">
                                    <img src={catchem_deck} className="figure-img img-fluid rounded" alt="..."/>
                                    <figcaption className="figure-caption">Scarlet & Violet 151 Deck</figcaption>
                                </figure>
                            </div>
                            <div className='project-description'>
                                <p>A Pokémon TCG Card Collector that allows users to:</p> 
                                <ul>
                                    <li>
                                        View the latest standard pokemon TCG sets/decks 
                                    </li>
                                    <li>
                                        Save their own custom decks to view at their leisure
                                    </li>
                                </ul>
                            </div>
                            <div className='languages_used'>
                                <img src={mongoDB_logo} alt="mongodb"></img>
                                <img src={express_js_logo}></img>
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