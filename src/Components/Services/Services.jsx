import React from 'react';
import './Services.scss';
import TestimonialFrame from '../../Assets/TestimonialFrame.png';
import Project from '../../Assets/project1.jpg';


export default function Services() {
  return (
    <>
      <div className="container mx-auto p-5" id='services'>
        <div className="imgBox">
          <img src={TestimonialFrame} alt="" className='Frame' />
          <img src={Project} alt="" className='projectIMG' />
        </div>
        <div className="serviceAbout">
          <h2>About Hospities Desing service</h2>
          <p><span>L</span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta saepe assumenda harum quod atque! Quibusdam in ea incidunt laudantium ab dolores quas culpa natus voluptas commodi optio nulla, enim minus.</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta provident eaque tenetur eligendi doloribus saepe voluptas minus quas quae modi, quibusdam illum ducimus, optio quis quo in accusamus? Facere, dolorum. Fugit, voluptates. Porro temporibus, enim sapiente hic ducimus nemo nulla commodi sed illo quis ab, labore laudantium alias quod laborum!</p>

          <h2>Services Include</h2>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto magnam natus repudiandae obcaecati quam illum iusto tenetur corrupti sint voluptas? Facere deserunt impedit possimus quos dolorem libero. Dolorem repudiandae quaerat, porro maiores neque atque, molestiae enim maxime veritatis quam laboriosam laborum ratione dolore est ipsam voluptatem ipsa quo eveniet aspernatur?</p>

          <div className="flex justify-between IncludeBoxList">
            <div className="flex flex-col IncludeBoxes">
              <div className="flex items-center mb-1">
                <i class="bi-check-circle-fill"></i>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
              </div>
              <div className="flex items-center">
                <i class="bi-check-circle-fill"></i>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
              </div>
            </div>
            <div className="flex flex-col IncludeBoxes">
              <div className="flex items-center mb-1">
                <i class="bi-check-circle-fill"></i>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
              </div>
              <div className="flex items-center">
                <i class="bi-check-circle-fill"></i>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
              </div>
            </div>
            <div className="flex flex-col IncludeBoxes">
              <div className="flex items-center mb-1">
                <i class="bi-check-circle-fill"></i>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
              </div>
              <div className="flex items-center">
                <i class="bi-check-circle-fill"></i>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
              </div>
            </div>
            <div className="flex flex-col IncludeBoxes">
              <div className="flex items-center mb-1">
                <i class="bi-check-circle-fill"></i>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
              </div>
              <div className="flex items-center">
                <i class="bi-check-circle-fill"></i>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
              </div>
            </div>
          </div>
          <div class="flex flex-wrap IncludeIMG">
            <div class="md:w-1/2">
              <div className="imgBox">
                <img src={TestimonialFrame} alt="" className='Frame' />
                <img src={Project} alt="" className='projectIMG' />
              </div>
            </div>
            <div class="md:w-1/2">
              <div className="imgBox">
                <img src={TestimonialFrame} alt="" className='Frame' />
                <img src={Project} alt="" className='projectIMG' />
              </div>
            </div>
          </div>
          <div class="mx-auto Hospitality">
            <div class="mb-8">
              <h2 class="text-2xl font-bold mb-4">Hospitality Design Solution:</h2>
              <p class="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat? Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div class="bg-white p-3 borderbox">
                <div class="flex items-center mb-4">
                  <div class="text-3xl text-yellow-500 mr-2">01</div>
                  <h3 class="text-xl font-semibold">Planning</h3>
                </div>
                <p class="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
              <div class="bg-white p-3 borderbox">
                <div class="flex items-center mb-4">
                  <div class="text-3xl text-yellow-500 mr-2">02</div>
                  <h3 class="text-xl font-semibold">Design</h3>
                </div>
                <p class="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
              <div class="bg-white p-3 borderbox">
                <div class="flex items-center mb-4">
                  <div class="text-3xl text-yellow-500 mr-2">03</div>
                  <h3 class="text-xl font-semibold">Solution</h3>
                </div>
                <p class="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
            </div>

            <div class="mb-8">
              <h2 class="text-2xl font-bold mb-4">Services Benefits:</h2>
              <p class="text-gray-700 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat? Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
              <ul class="list-disc pl-5 text-gray-700 space-y-2">
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <section className='Label'>
        <div className="container mx-auto">
          <marquee behavior="" direction="">
            <div className="flex items-center	">
              <p>Residential Design</p> <span>*</span>
              <p>Commercial Design</p> <span>*</span>
              <p>Hospitality Design</p> <span>*</span>
              <p>Educational Architecher</p> <span>*</span>
            </div>
          </marquee>
        </div>
      </section>
      <div className='ProjectJourney'>
        <h2>The Dream Project: <span>Your Journey Begins Here!</span></h2>
        
      </div>
      <section className='Label'>
        <div className="container mx-auto">
          <marquee behavior="" direction="">
            <div className="flex items-center	">
              <p>Residential Design</p> <span>*</span>
              <p>Commercial Design</p> <span>*</span>
              <p>Hospitality Design</p> <span>*</span>
              <p>Educational Architecher</p> <span>*</span>
            </div>
          </marquee>
        </div>
      </section>
    </>
  )
}
