import React, { useState, useEffect } from 'react';
import './Home.css';
import ReactCompareImage from 'react-compare-image';
import Frame_IMG from '../../Assets/Hero-Frame.png';
import Hero_IMG from '../../Assets/Hero.jpg';
import Art_IMG from '../../Assets/art.jpg';
import ProjectFrame from '../../Assets/ProjectFrame.png';
import Project from '../../Assets/project1.jpg';
import TransformationsFrame from '../../Assets/TransformationsFrame.png';
import ContactFrame from '../../Assets/Contact-Frame.png';
import TeamFrame from '../../Assets/TeamFrame.png';
import 'react-tabs/style/react-tabs.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import AboutIMG from '../../Assets/aboutIMG.png';
import OneTeam from '../../Assets/1team.png';
import TwoTeam from '../../Assets/2team.png';
import ThreeTeam from '../../Assets/3team.png';
import Project2 from '../../Assets/project pragrati/2 interior.jpg';
import bedroom1 from '../../Assets/project pragrati/bed room 1.jpg';
import bedroom2 from '../../Assets/project pragrati/bed room 2.jpg';
import exterior1 from '../../Assets/project pragrati/exterior 1.jpg';
import exterior2 from '../../Assets/project pragrati/exterior 2.jpg';
import kicthen1 from '../../Assets/project pragrati/kicthen 1.jpg';
import kicthen2 from '../../Assets/project pragrati/kicthen 2.jpg';
import livingroom1 from '../../Assets/project pragrati/living room 1.jpg';
import livingroom2 from '../../Assets/project pragrati/living room 2.jpg';
import office1 from '../../Assets/project pragrati/office 1.jpg';
import office2 from '../../Assets/project pragrati/office 2.jpg';
import residencial1 from '../../Assets/project pragrati/residencial 1.jpg';
import residencial2 from '../../Assets/project pragrati/residencial 2.jpg';
import tile from '../../Assets/tile.avif'
import wallpaper from '../../Assets/wallpaper.avif'
import wallpaint from '../../Assets/wallpaint.avif'
import flooring from '../../Assets/flooring.avif'
import walldecor from '../../Assets/walldecor.avif'
import window from '../../Assets/window.avif'


export default function Home({ images }) {
  
  const [heroImage, setHeroImage] = useState(null);
  const [aboutImage, setAboutImage] = useState(null);
  const [educationalDesignCommercial, setEducationalDesignCommercial] = useState(null);
  const [interiorDesignImage, setInteriorDesignImage] = useState(null);
  const [hospitalityDesignImage, setHospitalityDesignImage] = useState(null);
  // Add more state variables for other image types as needed
  const [ourDesignInterior1, setOurDesignInterior1] = useState(null);
  const [ourDesignInterior2, setOurDesignInterior2] = useState(null);
  const [ourDesignBeadroom1, setOurDesignBedroom1] = useState(null);
  const [ourDesignBeadroom2, setOurDesignBedroom2] = useState(null);
  const [ourDesignExterior1, setOurDesignExterior1] = useState(null);
  const [ourDesignExterior2, setOurDesignExterior2] = useState(null);
  const [ourDesignKitchen1, setOurDesignKitchen1] = useState(null);
  const [ourDesignKitchen2, setOurDesignKitchen2] = useState(null);
  const [ourDesignLivingroom1, setOurDesignLivingroom1] = useState(null);
  const [ourDesignLivingroom2, setOurDesignLivingroom2] = useState(null);
  const [ourDesignOffice1, setOurDesignOffice1] = useState(null);
  const [ourDesignOffice2, setOurDesignOffice2] = useState(null);
  const [ourDesignResidential1, setOurDesignResidential1] = useState(null);
  const [ourDesignResidential2, setOurDesignResidential2] = useState(null);
  const [tileImage, setTileImage] = useState(null);
  const [wallpaperImage, setWallpaperImage] = useState(null);
  const [wallpaintImage, setWallpaintImage] = useState(null);  
  const [floorImage, setFloorImage] = useState(null);
  const [walldecorImage, setWalldecorImage] = useState(null);
  const [windowImage, setWindowImage] = useState(null);


  const [beforeslide1Images, setBeforeslide1Images] = useState({});
  const [beforeslide2Images, setBeforeslide2Images] = useState({});
  const [beforeslide3Images, setBeforeslide3Images] = useState({});
  const [beforeslide4Images, setBeforeslide4Images] = useState({});
  const [beforeslide5Images, setBeforeslide5Images] = useState({});
  const [beforeslide6Images, setBeforeslide6Images] = useState({});
  const [beforeslide7Images, setBeforeslide7Images] = useState({});
  const [beforeslide8Images, setBeforeslide8Images] = useState({});
  const [beforeslide9Images, setBeforeslide9Images] = useState({});

  const [afterslide1Images, setAfterslide1Images] = useState({});
  const [afterslide2Images, setAfterslide2Images] = useState({});
  const [afterslide3Images, setAfterslide3Images] = useState({});
  const [afterslide4Images, setAfterslide4Images] = useState({});
  const [afterslide5Images, setAfterslide5Images] = useState({});
  const [afterslide6Images, setAfterslide6Images] = useState({});
  const [afterslide7Images, setAfterslide7Images] = useState({});
  const [afterslide8Images, setAfterslide8Images] = useState({});
  const [afterslide9Images, setAfterslide9Images] = useState({});

  const Images = [
    { before: images.artBeforeslide1, after: images.artAfterslide1 },
    { before: require('../../Assets/After_&_Before/Before_8.jpg'), after: require('../../Assets/After_&_Before/After_8.jpg') },
    { before: require('../../Assets/After_&_Before/Before_7.jpg'), after: require('../../Assets/After_&_Before/After_7.jpg') },
    { before: require('../../Assets/After_&_Before/Before_6.jpg'), after: require('../../Assets/After_&_Before/After_6.jpg') },
    { before: require('../../Assets/After_&_Before/Before_5.jpg'), after: require('../../Assets/After_&_Before/After_5.jpg') },
    { before: require('../../Assets/After_&_Before/Before_4.jpg'), after: require('../../Assets/After_&_Before/After_4.jpg') },
    { before: require('../../Assets/After_&_Before/Before_3.jpg'), after: require('../../Assets/After_&_Before/After_3.jpg') },
    { before: require('../../Assets/After_&_Before/Before_2.jpg'), after: require('../../Assets/After_&_Before/After_2.jpg') },
    { before: require('../../Assets/After_&_Before/Before_1.jpg'), after: require('../../Assets/After_&_Before/After_1.jpg') },
    // Add more images as needed
  ];
 


  
  return (
    <>
      <main className='main-Banner' id='Home'>
        <div className="content container mx-auto flex">
          <div className="w-1/2 contentBox">
            <span className='tag'>Since 2021</span>
            <h2>Your Home <span><b>Our</b></span> creations</h2>
            <button><i className="bi-arrow-right-circle-fill"></i><span>Get Started</span></button>
          </div>
          <div className="w-1/2 relative">
            <div className="imgBox">
              <img src={Frame_IMG} alt="" className='Frame' />
              <img src={images.hero}  alt="Hero" className='Hero' onError={(e) => { e.target.src = Hero_IMG; }} />            </div>
          </div>
        </div>
      </main>
      <section id='About' className='AboutUS'>
        <div className="container mx-auto threeBoxs">
          <div className="flex boxes">
            <div className="box">
              <i className="bi-box-seam"></i>
              <div className="flex flex-col">
                <h6>Affordable price</h6>
                <p>Bringing Harmony Home with Vastu Expertise at Affordable Prices</p>
              </div>
            </div>
            <div className="box">
              <i className="bi-wallet2"></i>
              <div className="flex flex-col">
                <h6>Innovative design</h6>
                <p>Innovative Designs Crafted to Elevate Your Space with Timeless Harmony.</p>
              </div>
            </div>
            <div className="box">
              <i className="bi-headphones"></i>
              <div className="flex flex-col">
                <h6>Vastu Expertise</h6>
                <p>Vastu Expertise aligns your space with Vastu principles for harmony and balance.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto flex AbousResposive space-x-40 ">
          <div className="w-1/3  flex items-center	justify-center">
          <img src={images.about} alt="About Us" className="custom-frame ml-20" onError={(e) => { e.target.src = AboutIMG }} />          
          </div>
          <div className="w-1/2 AboutBox">
            <div className="contentHeader">
              <span className='tag'>ABOUT US</span>
              <h2>Turning <span>Your Dream Home</span> into Reality </h2>
            </div>

            <div className="flex">
              <div className="box flex-col">
                <h6>250+</h6>
                <p>Project Completed</p>
              </div>
              <div className="box flex-col">
                <h6>35+</h6>
                <p>Awards Gained</p>
              </div>
              <div className="box flex-col">
                <h6>99%</h6>
                <p>Satisfied Customer</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='Services' id='Services'>
        <div className="container mx-auto">
          <div className="content">
            <div className="contentHeader">
              <span className='tag'>Our services</span>
              <h2>Explore Our Services:</h2>
              <div className="flex justify-between">
                <h2><span>Your Path to Success</span></h2>
                <button className='viewBTN'><i className="bi-arrow-right-circle-fill"></i><span>View All Services</span></button>
              </div>
            </div>
          </div>
          <div className="flex content AllBoxes pt-2">
            <div className="boxs">
              <h6>Educational Commercial</h6>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <img src={images.artEducationalCommercial} alt="Service" onError={(e) => { e.target.src = Art_IMG }}/>
              <i className="bi-arrow-up-right-circle-fill"></i>
            </div>
            <div className="boxs">
              <h6>Interior Design</h6>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <img src={images.artInteriorDesign} alt="Service" onError={(e) => { e.target.src = Art_IMG }}/>
              <i className="bi-arrow-up-right-circle-fill"></i>
            </div>
            <div className="boxs">
              <h6>Hospitality Design</h6>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <img src={images.artHospitalityDesign} alt="Service" onError={(e) => { e.target.src = Art_IMG }} />
              <i className="bi-arrow-up-right-circle-fill"></i>
            </div>
          </div>
        </div>
      </section>
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
      <section className='OurWork'>
        <div className="container mx-auto">
          <div className="content">
            <div className="contentHeader">
              <span className='tag'>Our Work Proccess</span>
              <h2>Our Work Process: <span>Crafting Architectural Excellence</span></h2>
            </div>
          </div>
          <div className="flex pdBox">
            <div className="boxs">
              <div className="icon">
                <i className="bi-clipboard"></i>
                <div className="no">01</div>
              </div>
              <h6>Discussion Meeting</h6>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
            </div>
            <div className="boxs">
              <div className="icon">
                <i className="bi-clipboard"></i>
                <div className="no">01</div>
              </div>
              <h6>2D+3D Design</h6>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
            </div>
            <div className="boxs">
              <div className="icon">
                <i className="bi-clipboard"></i>
                <div className="no">01</div>
              </div>
              <h6>Survey</h6>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
            </div>
            <div className="boxs">
              <div className="icon iconLast">
                <i className="bi-clipboard"></i>
                <div className="no">01</div>
              </div>
              <h6>Residencial Interior Design</h6>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
            </div>
          </div>
        </div>
      </section>
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
      <section id='Project' className='OurProject'>
        <div className="container mx-auto">
          <div className="pdBox">
            <div className="contentHeader">
              <span className="tag">Our Design Ideas</span>
              <h2>Explore <span>Our Portfolio</span></h2>
              <div className="flex justify-between items-center">
                <h2>of Featured Projects</h2>
              </div>
            </div>
          </div>
          <Tabs>
            <TabList className="pdBox">
              <Tab>Interior</Tab>
              <Tab>Bed Room</Tab>
              <Tab>Exterior</Tab>
              <Tab>Kitchen</Tab>
              <Tab>Living Room</Tab>
              <Tab>Office</Tab>
              <Tab>Residencial</Tab>
            </TabList>

            <TabPanel>
              <div className="flex pdBox">
                <div className="w-1/2">
                  <div className="imgBox">
                    <img src={ProjectFrame} alt="" className='Frame' />
                    <img src={images.artOurDesignInterior1} alt="" className='projectIMG' onError={(e) => { e.target.src = Project }}/>
                    <div className="Details">
                      <h4>Interior Design</h4>
                      <button>2024</button>
                      <button>Apartment</button>
                      <button>Residential Design</button>
                    </div>
                    <i className="bi-arrow-up-right-circle-fill"></i>
                  </div>
                </div>
                <div className="w-1/2">
                  <div className="imgBox">
                    <img src={ProjectFrame} alt="" className='Frame' />
                    <img src={images.artOurDesignInterior2} alt="" className='projectIMG' onError={(e) => { e.target.src = Project2 }} />
                    <div className="Details">
                      <h4>Interior Design</h4>
                      <button>2024</button>
                      <button>Apartment</button>
                      <button>Residential Design</button>
                    </div>
                    <i className="bi-arrow-up-right-circle-fill"></i>
                  </div>
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="flex pdBox">
                <div className="w-1/2">
                  <div className="imgBox">
                    <img src={ProjectFrame} alt="" className='Frame' />
                    <img src={images.artOurDesignBedroom1} alt="" className='projectIMG' onError={(e) => { e.target.src = bedroom1 }} />
                    <div className="Details">
                      <h4>Bed Room Apartment Interior Design</h4>
                      <button>2024</button>
                      <button>Apartment</button>
                      <button>Residential Design</button>
                    </div>
                    <i className="bi-arrow-up-right-circle-fill"></i>
                  </div>
                </div>
                <div className="w-1/2">
                  <div className="imgBox">
                    <img src={ProjectFrame} alt="" className='Frame' />
                    <img src={images.artOurDesignBedroom2} alt="" className='projectIMG' onError={(e) => { e.target.src = bedroom2 }}/>
                    <div className="Details">
                      <h4>Bed Room Apartment Interior Design</h4>
                      <button>2024</button>
                      <button>Apartment</button>
                      <button>Residential Design</button>
                    </div>
                    <i className="bi-arrow-up-right-circle-fill"></i>
                  </div>
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="flex pdBox">
                <div className="w-1/2">
                  <div className="imgBox">
                    <img src={ProjectFrame} alt="" className='Frame' />
                    <img src={images.artOurDesignExterior1} alt="" className='projectIMG' onError={(e) => { e.target.src = exterior1 }}/>
                    <div className="Details">
                      <h4>Exterior Interior Design</h4>
                      <button>2024</button>
                      <button>Apartment</button>
                      <button>Residential Design</button>
                    </div>
                    <i className="bi-arrow-up-right-circle-fill"></i>
                  </div>
                </div>
                <div className="w-1/2">
                  <div className="imgBox">
                    <img src={ProjectFrame} alt="" className='Frame' />
                    <img src={images.artOurDesignExterior2} alt="" className='projectIMG' onError={(e) => { e.target.src = exterior2 }}/>
                    <div className="Details">
                      <h4>Exterior Interior Design</h4>
                      <button>2024</button>
                      <button>Apartment</button>
                      <button>Residential Design</button>
                    </div>
                    <i className="bi-arrow-up-right-circle-fill"></i>
                  </div>
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="flex pdBox">
                <div className="w-1/2">
                  <div className="imgBox">
                    <img src={ProjectFrame} alt="" className='Frame' />
                    <img src={images.artOurDesignKitchen1} alt="" className='projectIMG' onError={(e) => { e.target.src = kicthen1 }} />
                    <div className="Details">
                      <h4>Kicthen Interior Design</h4>
                      <button>2024</button>
                      <button>Apartment</button>
                      <button>Residential Design</button>
                    </div>
                    <i className="bi-arrow-up-right-circle-fill"></i>
                  </div>
                </div>
                <div className="w-1/2">
                  <div className="imgBox">
                    <img src={ProjectFrame} alt="" className='Frame' />
                    <img src={images.artOurDesignKitchen2} alt="" className='projectIMG' onError={(e) => { e.target.src = kicthen2 }}/>
                    <div className="Details">
                      <h4>Kicthen Interior Design</h4>
                      <button>2024</button>
                      <button>Apartment</button>
                      <button>Residential Design</button>
                    </div>
                    <i className="bi-arrow-up-right-circle-fill"></i>
                  </div>
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="flex pdBox">
                <div className="w-1/2">
                  <div className="imgBox">
                    <img src={ProjectFrame} alt="" className='Frame' />
                    <img src={images.artOurDesignLivingRoom1} alt="" className='projectIMG' onError={(e) => { e.target.src = livingroom1 }}/>
                    <div className="Details">
                      <h4>Living Room Interior Design</h4>
                      <button>2024</button>
                      <button>Apartment</button>
                      <button>Residential Design</button>
                    </div>
                    <i className="bi-arrow-up-right-circle-fill"></i>
                  </div>
                </div>
                <div className="w-1/2">
                  <div className="imgBox">
                    <img src={ProjectFrame} alt="" className='Frame' />
                    <img src={images.artOurDesignLivingRoom2} alt="" className='projectIMG' onError={(e) => { e.target.src = livingroom2 }}/>
                    <div className="Details">
                      <h4>Living Room Interior Design</h4>
                      <button>2024</button>
                      <button>Apartment</button>
                      <button>Residential Design</button>
                    </div>
                    <i className="bi-arrow-up-right-circle-fill"></i>
                  </div>
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="flex pdBox">
                <div className="w-1/2">
                  <div className="imgBox">
                    <img src={ProjectFrame} alt="" className='Frame' />
                    <img src={images.artOurDesignOffice1} alt="" className='projectIMG' onError={(e) => { e.target.src = office1 }} />
                    <div className="Details">
                      <h4>Office Interior Design</h4>
                      <button>2024</button>
                      <button>Apartment</button>
                      <button>Residential Design</button>
                    </div>
                    <i className="bi-arrow-up-right-circle-fill"></i>
                  </div>
                </div>
                <div className="w-1/2">
                  <div className="imgBox">
                    <img src={ProjectFrame} alt="" className='Frame' />
                    <img src={images.artOurDesignOffice2} alt="" className='projectIMG' onError={(e) => { e.target.src = office2 }} />
                    <div className="Details">
                      <h4>Office Interior Design</h4>
                      <button>2024</button>
                      <button>Apartment</button>
                      <button>Residential Design</button>
                    </div>
                    <i className="bi-arrow-up-right-circle-fill"></i>
                  </div>
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="flex pdBox">
                <div className="w-1/2">
                  <div className="imgBox">
                    <img src={ProjectFrame} alt="" className='Frame' />
                    <img src={images.artOurDesignResidential1} alt="" className='projectIMG' onError={(e) => { e.target.src = residencial1 }}/>
                    <div className="Details">
                      <h4>Residencial Interior Design</h4>
                      <button>2024</button>
                      <button>Apartment</button>
                      <button>Residential Design</button>
                    </div>
                    <i className="bi-arrow-up-right-circle-fill"></i>
                  </div>
                </div>
                <div className="w-1/2">
                  <div className="imgBox">
                    <img src={ProjectFrame} alt="" className='Frame' />
                    <img src={images.artOurDesignResidential2} alt="" className='projectIMG' onError={(e) => { e.target.src = residencial2 }}/>
                    <div className="Details">
                      <h4>Residencial Interior Design</h4>
                      <button>2024</button>
                      <button>Apartment</button>
                      <button>Residential Design</button>
                    </div>
                    <i className="bi-arrow-up-right-circle-fill"></i>
                  </div>
                </div>
              </div>
            </TabPanel>
          </Tabs>
        </div>
      </section>
      <section id='Project_Details'>
        <div className="container mx-auto w-11/12 py-7">
          <div class="grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-8">
            <a href="/" class="">
              <div class="category-card h-full">
                <img loading="lazy" src={images.artTileDesigns} alt="Floor Tile Design ideas for home - Livspace"  onError={(e) => { e.target.src = tile }}/>
                <div class="p-4">
                  <p class="subtitle_large">
                    Tile Designs
                  </p>
                  <p class="caption_default on-surface-70-color mt-1">
                    591 Designs
                  </p>
                </div>
              </div>
            </a>
            <a href="/" class="">
              <div class="category-card h-full">
              <img loading="lazy" src={images.artWallPaperDesigns} alt="wallpaper" onError={(e) => { e.target.src = wallpaper }} />
              <div class="p-4">
                  <p class="subtitle_large">
                    Wallpaper Designs
                  </p>
                  <p class="caption_default on-surface-70-color mt-1">
                    544 Designs
                  </p>
                </div>
              </div>
            </a>
            <a href="/" class="">
              <div class="category-card h-full">
              <img loading="lazy" src={images.artWallPaintDesigns} alt="Wall Paint Design for your home - Livspace"  onError={(e) => { e.target.src = wallpaint }}/>
                <div class="p-4">
                  <p class="subtitle_large">
                    Wall Paint Designs
                  </p>
                  <p class="caption_default on-surface-70-color mt-1">
                    431 Designs
                  </p>
                </div>
              </div>
            </a>
            <a href="/" class="">
              <div class="category-card h-full">
              <img loading="lazy" src={images.artFlooringDesigns} alt="flooring Design for your home - Livspace"  onError={(e) => { e.target.src = flooring }}/>
                <div class="p-4">
                  <p class="subtitle_large">
                    Flooring Designs
                  </p>
                  <p class="caption_default on-surface-70-color mt-1">
                    308 Designs
                  </p>
                </div>
              </div>
            </a>
            <a href="/" class="">
              <div class="category-card h-full">
                <img loading="lazy" src={images.artWallDecorDesigns} alt="Wall Decor Ideas- Livspace" onError={(e) => { e.target.src = walldecor }} />
                <div class="p-4">
                  <p class="subtitle_large">
                    Wall Decor Ideas
                  </p>
                  <p class="caption_default on-surface-70-color mt-1">
                    401 Designs
                  </p>
                </div>
              </div>
            </a>
            <a href="/" class="">
              <div class="category-card h-full">
                  <img loading="lazy" src={images.artWindowDesigns} alt="Trending Window Designs - Livspace"  onError={(e) => { e.target.src = window }}/>
                <div class="p-4">
                  <p class="subtitle_large">
                    Window Designs
                  </p>
                  <p class="caption_default on-surface-70-color mt-1">
                    182 Designs
                  </p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>
      <section className='Transformations'>
        <div className="container mx-auto">
          <div className="contentHeader">
            <span className="tag">Before & After</span>
            <h2>See Our <span>Design Transformations</span></h2>
          </div>
          <div className="IMGBOX">
            <img src={TransformationsFrame} alt="" className='Frame' />
            <Carousel infiniteLoop showIndicators={false} showThumbs={false} emulateTouch={false} swipeable={false}>
              {Images.map((imagePair, index) => (
                <div className="IMGBOX" key={index}>
                  <img src={TransformationsFrame} alt="" className='Frame' />
                  <div className="compare-container">
                    <ReactCompareImage
                      leftImage={imagePair.before}
                      rightImage={imagePair.after}
                      leftImageOnError={(e) => {
                        e.target.src = require(`../../Assets/After_&_Before/Before_${9 - index}.jpg`); // Fallback for left image
                      }}
                      rightImageOnError={(e) => {
                        e.target.src = require(`../../Assets/After_&_Before/After_${9 - index}.jpg`); // Fallback for right image
                      }}
                    />
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </section>
      <section id='Contact' className="contact-us container mx-auto">
        <div className="contentHeader">
          <span className="tag">CONTACT US</span>
          <h2>Get Your <span>Free Quote Today!</span></h2>
        </div>
        <div className="flex contactBoxs">
          <div className="w-1/2">
            <form action="/submit_form" method="post">
              <div className="form-group">
                <label htmlFor="name">Your Name *</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className="form-group w-full">
                <label htmlFor="subject">Subject *</label>
                <input type="text" id="subject" name="subject" required />
              </div>
              <div className="form-group w-full	">
                <label htmlFor="message">Your Message *</label>
                <textarea id="message" name="message" required></textarea>
              </div>
              <button className='viewBTN'><i className="bi-arrow-right-circle-fill"></i><span>Send Message</span></button>
            </form>
          </div>
          <div className="w-1/2 padding">
            <div className="imgBox w-full">
              <img src={ContactFrame} alt="" className='projectIMG' />
              <div className="address-container">
                <div>
                  <h3>Address</h3>
                  <p>Shop No. 8, Laxmi Narayan Apt Opp.<br /> Fish Market, Vangaon Tal-Dahanu,<br /> Mumbai, Maharashtra 401103</p>
                </div>
                <div className='py-2'>
                  <h3>Contact</h3>
                  <p>Phone: +91 7977523087<br /> Email: pragatisinterio@gmail.com</p>
                </div>
                <div className='py-2'>
                  <h3>Open Time</h3>
                  <p>Monday - Friday: 10:00-20:00<br /> Saturday Sunday: 11:00-18:00</p>
                </div>
                <div className='py-2'>
                  <h3>Stay Connected</h3>
                  <div className="flex icons">
                    <i className="bi-facebook"></i>
                    <i className="bi-instagram"></i>
                    <i className="bi-geo-alt"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='OutTeam container mx-auto hidden'>
        <div className="contentHeader">
          <span className="tag">Our team</span>
          <h2>Meet Our <span>Expert Team</span></h2>
        </div>
        <div className="flex TeamBoxs">
          <div className="w-4/12 text-center px-2">
            <div className="imgBox">
              <img src={OneTeam} alt="" />
              <img src={TeamFrame} alt="" className='TeamFrame' />
              <div className="socialMedia">
                <i className="bi-facebook"></i>
                <i className="bi-twitter"></i>
                <i className="bi-instagram"></i>
                <i className="bi-youtube"></i>
              </div>
            </div>
            <h3>Darlene Robertson</h3>
            <span>[ Architect ]</span>
          </div>
          <div className="w-4/12 text-center px-2">
            <div className="imgBox">
              <img src={TwoTeam} alt="" />
              <img src={TeamFrame} alt="" className='TeamFrame' />
              <div className="socialMedia">
                <i className="bi-facebook"></i>
                <i className="bi-twitter"></i>
                <i className="bi-instagram"></i>
                <i className="bi-youtube"></i>
              </div>
            </div>
            <h3>Darlene Robertson</h3>
            <span>[ Architect ]</span>
          </div>
          <div className="w-4/12 text-center px-2">
            <div className="imgBox">
              <img src={ThreeTeam} alt="" />
              <img src={TeamFrame} alt="" className='TeamFrame' />
              <div className="socialMedia">
                <i className="bi-facebook"></i>
                <i className="bi-twitter"></i>
                <i className="bi-instagram"></i>
                <i className="bi-youtube"></i>
              </div>
            </div>
            <h3>Darlene Robertson</h3>
            <span>[ Architect ]</span>
          </div>
        </div>
      </section>
      <section className="Label">
        <marquee behavior="" direction="">
          <div className="flex items-center	">
            <p>Residential Design</p> <span>*</span>
            <p>Commercial Design</p> <span>*</span>
            <p>Hospitality Design</p> <span>*</span>
            <p>Educational Architecher</p> <span>*</span>
          </div>
        </marquee>
      </section>
    </>
  )
}
