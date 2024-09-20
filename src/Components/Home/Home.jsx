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



export default function Home() {
  
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

  const images = [
    { before: beforeslide1Images || require('../../Assets/After_&_Before/Before_9.jpg'), after: afterslide1Images || require('../../Assets/After_&_Before/After_9.jpg') },
    { before: beforeslide2Images || require('../../Assets/After_&_Before/Before_8.jpg'), after: afterslide2Images || require('../../Assets/After_&_Before/After_8.jpg') },
    { before: beforeslide3Images || require('../../Assets/After_&_Before/Before_7.jpg'), after: afterslide3Images || require('../../Assets/After_&_Before/After_7.jpg') },
    { before: beforeslide4Images || require('../../Assets/After_&_Before/Before_6.jpg'), after: afterslide4Images || require('../../Assets/After_&_Before/After_6.jpg') },
    { before: beforeslide5Images || require('../../Assets/After_&_Before/Before_5.jpg'), after: afterslide5Images || require('../../Assets/After_&_Before/After_5.jpg') },
    { before: beforeslide6Images || require('../../Assets/After_&_Before/Before_4.jpg'), after: afterslide6Images || require('../../Assets/After_&_Before/After_4.jpg') },
    { before: beforeslide7Images || require('../../Assets/After_&_Before/Before_3.jpg'), after: afterslide7Images || require('../../Assets/After_&_Before/After_3.jpg') },
    { before: beforeslide8Images || require('../../Assets/After_&_Before/Before_2.jpg'), after: afterslide8Images || require('../../Assets/After_&_Before/After_2.jpg') },
    { before: beforeslide9Images || require('../../Assets/After_&_Before/Before_1.jpg'), after: afterslide9Images || require('../../Assets/After_&_Before/After_1.jpg') },
    // Add more images as needed
  ];
 
  const getFallbackImage = (index, type) => {
    return require(`../../Assets/After_&_Before/${type}_${9 - index}.jpg`);
  };
  // Ensure that beforeslideXImages and afterslideXImages are defined or imported from another component
  
  console.log(images);

  useEffect(() => {
    // Load images from localStorage if available
    const storedHeroImage = localStorage.getItem('heroImage');
    if (storedHeroImage) setHeroImage(storedHeroImage);
    const storedAboutImage = localStorage.getItem('aboutImage');
    if (storedAboutImage) setAboutImage(storedAboutImage);

    const storedEducationalDesignCommercial = localStorage.getItem('artEducationalCommercialImage');
    if (storedEducationalDesignCommercial) setEducationalDesignCommercial(storedEducationalDesignCommercial);
    const storedInteriorDesignImage = localStorage.getItem('artInteriorDesignImage');
    if (storedInteriorDesignImage) setInteriorDesignImage(storedInteriorDesignImage);
    const storedHospitalityDesignImage = localStorage.getItem('artHospitalityDesignImage');
    if (storedHospitalityDesignImage) setHospitalityDesignImage(storedHospitalityDesignImage);



    const storedOurDesignInterior1 = localStorage.getItem('artOurDesignInterior1Image');
    if (storedOurDesignInterior1) setOurDesignInterior1(storedOurDesignInterior1);
    const storedOurDesignInterior2 = localStorage.getItem('artOurDesignInterior2Image');
    if (storedOurDesignInterior2) setOurDesignInterior2(storedOurDesignInterior2);
    const storedOurDesignBedroom1 = localStorage.getItem('artOurDesignBedroom1Image');
    if (storedOurDesignBedroom1) setOurDesignBedroom1(storedOurDesignBedroom1);
    const storedOurDesignBedroom2 = localStorage.getItem('artOurDesignBedroom2Image');
    if (storedOurDesignBedroom2) setOurDesignBedroom2(storedOurDesignBedroom2);
    const storedOurDesignExterior1 = localStorage.getItem('artOurDesignExterior1Image');
    if (storedOurDesignExterior1) setOurDesignExterior1(storedOurDesignExterior1);
    const storedOurDesignExterior2 = localStorage.getItem('artOurDesignExterior2Image');
    if (storedOurDesignExterior2) setOurDesignExterior2(storedOurDesignExterior2);
    const storedOurDesignKitchen1 = localStorage.getItem('artOurDesignKitchen1Image');
    if (storedOurDesignKitchen1) setOurDesignKitchen1(storedOurDesignKitchen1);
    const storedOurDesignKitchen2 = localStorage.getItem('artOurDesignKitchen2Image');
    if (storedOurDesignKitchen2) setOurDesignKitchen2(storedOurDesignKitchen2);
    const storedOurDesignLivingroom1 = localStorage.getItem('artOurDesignLivingRoom1Image');
    if (storedOurDesignLivingroom1) setOurDesignLivingroom1(storedOurDesignLivingroom1);
    const storedOurDesignLivingroom2 = localStorage.getItem('artOurDesignLivingRoom2Image');
    if (storedOurDesignLivingroom2) setOurDesignLivingroom2(storedOurDesignLivingroom2);
    const storedOurDesignOffice1 = localStorage.getItem('artOurDesignOffice1Image');
    if (storedOurDesignOffice1) setOurDesignOffice1(storedOurDesignOffice1);
    const storedOurDesignOffice2 = localStorage.getItem('artOurDesignOffice2Image');
    if (storedOurDesignOffice2) setOurDesignOffice2(storedOurDesignOffice2);
    const storedOurDesignResidential1 = localStorage.getItem('artOurDesignResidential1Image');
    if (storedOurDesignResidential1) setOurDesignResidential1(storedOurDesignResidential1);
    const storedOurDesignResidential2 = localStorage.getItem('artOurDesignResidential2Image');
    const storedTileImage = localStorage.getItem('artTileDesignsImage');
    if (storedOurDesignResidential2) setOurDesignResidential2(storedOurDesignResidential2);
    if (storedTileImage) setTileImage(storedTileImage);
    const storedWallpaperImage = localStorage.getItem('artWallPaperDesignsImage');
    if (storedWallpaperImage) setWallpaperImage(storedWallpaperImage);
    const storedWallpaintImage = localStorage.getItem('artWallPaintDesignsImage');
    if (storedWallpaintImage) setWallpaintImage(storedWallpaintImage);
    const storedFloorImage = localStorage.getItem('artFlooringDesignsImage');
    if (storedFloorImage) setFloorImage(storedFloorImage);
    const storedWalldecorImage = localStorage.getItem('artWallDecorDesignsImage');
    if (storedWalldecorImage) setWalldecorImage(storedWalldecorImage);
    const storedWindowImage = localStorage.getItem('artWindowDesignsImage');
    if (storedWindowImage) setWindowImage(storedWindowImage);



    const storedBeforeslide1Images = localStorage.getItem('artBeforeslide1Image');
    if (storedBeforeslide1Images) setBeforeslide1Images(storedBeforeslide1Images);
    const storedBeforeslide2Images = localStorage.getItem('artBeforeslide2Image');
    if (storedBeforeslide2Images) setBeforeslide2Images(storedBeforeslide2Images);
    const storedBeforeslide3Images = localStorage.getItem('artBeforeslide3Image');
    if (storedBeforeslide3Images) setBeforeslide3Images(storedBeforeslide3Images);
    const storedBeforeslide4Images = localStorage.getItem('artBeforeslide4Image');
    if (storedBeforeslide4Images) setBeforeslide4Images(storedBeforeslide4Images);
    const storedBeforeslide5Images = localStorage.getItem('artBeforeslide5Image');
    if (storedBeforeslide5Images) setBeforeslide5Images(storedBeforeslide5Images);
    const storedBeforeslide6Images = localStorage.getItem('artBeforeslide6Image');
    if (storedBeforeslide6Images) setBeforeslide6Images(storedBeforeslide6Images);
    const storedBeforeslide7Images = localStorage.getItem('artBeforeslide7Image');
    if (storedBeforeslide7Images) setBeforeslide7Images(storedBeforeslide7Images);
    const storedBeforeslide8Images = localStorage.getItem('artBeforeslide8Image');
    if (storedBeforeslide8Images) setBeforeslide8Images(storedBeforeslide8Images);
    const storedBeforeslide9Images = localStorage.getItem('artBeforeslide9Image');
    if (storedBeforeslide9Images) setBeforeslide9Images(storedBeforeslide9Images);

  
    const storedAfterslide1Images = localStorage.getItem('artAfterslide1Image');
    if (storedAfterslide1Images) setAfterslide1Images(storedAfterslide1Images);

    const storedAfterslide2Images = localStorage.getItem('artAfterslide2Image');
    if (storedAfterslide2Images) setAfterslide2Images(storedAfterslide2Images);

    const storedAfterslide3Images = localStorage.getItem('artAfterslide3Image');
    if (storedAfterslide3Images) setAfterslide3Images(storedAfterslide3Images);

    const storedAfterslide4Images = localStorage.getItem('artAfterslide4Image');
    if (storedAfterslide4Images) setAfterslide4Images(storedAfterslide4Images);

    const storedAfterslide5Images = localStorage.getItem('artAfterslide5Image');
    if (storedAfterslide5Images) setAfterslide5Images(storedAfterslide5Images);

    const storedAfterslide6Images = localStorage.getItem('artAfterslide6Image');
    if (storedAfterslide6Images) setAfterslide6Images(storedAfterslide6Images);

    const storedAfterslide7Images = localStorage.getItem('artAfterslide7Image');
    if (storedAfterslide7Images) setAfterslide7Images(storedAfterslide7Images);

    const storedAfterslide8Images = localStorage.getItem('artAfterslide8Image');
    if (storedAfterslide8Images) setAfterslide8Images(storedAfterslide8Images);

    const storedAfterslide9Images = localStorage.getItem('artAfterslide9Image');
    if (storedAfterslide9Images) setAfterslide9Images(storedAfterslide9Images);


  }, []);
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
              <img src={heroImage || Hero_IMG} alt="Hero" className='Hero' onError={(e) => { e.target.src = Hero_IMG }}  />            
            </div>
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
          <img src={aboutImage || AboutIMG} alt="About Us" className="custom-frame ml-20" onError={(e) => { e.target.src = AboutIMG }} />          
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
              <img src={educationalDesignCommercial || Art_IMG} alt="Service" onError={(e) => { e.target.src = Art_IMG }}/>
              <i className="bi-arrow-up-right-circle-fill"></i>
            </div>
            <div className="boxs">
              <h6>Interior Design</h6>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <img src={interiorDesignImage || Art_IMG} alt="Service" onError={(e) => { e.target.src = Art_IMG }}/>
              <i className="bi-arrow-up-right-circle-fill"></i>
            </div>
            <div className="boxs">
              <h6>Hospitality Design</h6>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <img src={hospitalityDesignImage || Art_IMG} alt="Service" onError={(e) => { e.target.src = Art_IMG }} />
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
                    <img src={ourDesignInterior1 || Project} alt="" className='projectIMG' onError={(e) => { e.target.src = Project }}/>
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
                    <img src={ourDesignInterior2 || Project2} alt="" className='projectIMG' onError={(e) => { e.target.src = Project2 }} />
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
                    <img src={ourDesignBeadroom1 || bedroom1} alt="" className='projectIMG' onError={(e) => { e.target.src = bedroom1 }} />
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
                    <img src={ourDesignBeadroom2 || bedroom2} alt="" className='projectIMG' onError={(e) => { e.target.src = bedroom2 }}/>
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
                    <img src={ourDesignExterior1 || exterior1} alt="" className='projectIMG' onError={(e) => { e.target.src = exterior1 }}/>
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
                    <img src={ourDesignExterior2 || exterior2} alt="" className='projectIMG' onError={(e) => { e.target.src = exterior2 }}/>
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
                    <img src={ourDesignKitchen1 || kicthen1} alt="" className='projectIMG' onError={(e) => { e.target.src = kicthen1 }} />
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
                    <img src={ourDesignKitchen2 || kicthen2} alt="" className='projectIMG' onError={(e) => { e.target.src = kicthen2 }}/>
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
                    <img src={ourDesignLivingroom1 || livingroom1} alt="" className='projectIMG' onError={(e) => { e.target.src = livingroom1 }}/>
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
                    <img src={ourDesignLivingroom2 || livingroom2} alt="" className='projectIMG' onError={(e) => { e.target.src = livingroom2 }}/>
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
                    <img src={ourDesignOffice1 || office1} alt="" className='projectIMG' onError={(e) => { e.target.src = office1 }} />
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
                    <img src={ourDesignOffice2 || office2} alt="" className='projectIMG' onError={(e) => { e.target.src = office2 }} />
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
                    <img src={ourDesignResidential1 || residencial1} alt="" className='projectIMG' onError={(e) => { e.target.src = residencial1 }}/>
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
                    <img src={ourDesignResidential2 || residencial2} alt="" className='projectIMG' onError={(e) => { e.target.src = residencial2 }}/>
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
                <img loading="lazy" src={tileImage || tile} alt="Floor Tile Design ideas for home - Livspace"  onError={(e) => { e.target.src = tile }}/>
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
              <img loading="lazy" src={wallpaperImage || wallpaper} alt="wallpaper" onError={(e) => { e.target.src = wallpaper }} />
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
              <img loading="lazy" src={wallpaintImage || wallpaint} alt="Wall Paint Design for your home - Livspace"  onError={(e) => { e.target.src = wallpaint }}/>
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
              <img loading="lazy" src={floorImage || flooring} alt="flooring Design for your home - Livspace"  onError={(e) => { e.target.src = flooring }}/>
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
                <img loading="lazy" src={walldecorImage || walldecor} alt="Wall Decor Ideas- Livspace" onError={(e) => { e.target.src = walldecor }} />
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
                  <img loading="lazy" src={windowImage || window} alt="Trending Window Designs - Livspace"  onError={(e) => { e.target.src = window }}/>
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
              {images.map((imagePair, index) => (
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
