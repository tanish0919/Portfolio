import React from 'react';
import "./experience.css";
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What skills I have</h5>
      <h2>My Experience</h2>
      
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__icon' />
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Advanced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__icon'/>
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Advanced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__icon'/>
              <div>
                <h4>BOOTSTRAP</h4>
                <small className='text-light'>Intermidiate</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__icon'/>
              <div>
                <h4>JAVASCRIPT</h4>
                <small className='text-light'>Intermidiate</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__icon'/>
              <div>
                <h4>React</h4>
                <small className='text-light'>Intermidiate</small>
              </div>
            </article>
          </div>


        </div>
        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__icon'/>
              <div>
                <h4>NODE JS</h4>
                <small className='text-light'>INTERMIDIATE</small>
              </div>
              
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__icon'/>
              <div>
                <h4>EXPRESS JS</h4>
                <small className='text-light'>INTERMIDIATE</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__icon'/>
              <div>
                <h4>MONGODB</h4>
                <small className='text-light'>INTERMIDIATE</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__icon'/>
              <div>
                <h4>MOONGOOSE</h4>
                <small className='text-light'>INTERMIDIATE</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__icon'/>
              <div>
                <h4>MYSQL</h4>
                <small className='text-light'>INTERMIDIATE</small>
              </div>
            </article>            
          </div>


        </div>

      </div>


    </section>
  )
}

export default Experience;