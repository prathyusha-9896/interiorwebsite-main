import React, { useState } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './Layout';
import Home from './Components/Home/Home';
import Services from './Components/Services/Services';
import ImageUploader from './Components/ImageUploader';
import './App.css'; // Importing your app styles
import AdminLogin from './Components/AdminLogin';
const App = () => {

  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const handleLogin = (status) => {
    setIsAdminLoggedIn(status);
    setShowLogin(false);
  };

  const handleNewPageAccess = () => {
    if (!isAdminLoggedIn) {
      setShowLogin(true);
    }
  };
  
  // Default images
  const defaultImages = {
    hero: './Assets/Hero.jpg',
    about: './Assets/aboutIMG.png',
    artEducationalCommercial: './Assets/art.jpg',
    artInteriorDesign: './Assets/art.jpg',
    artHospitalityDesign: './Assets/art.jpg',
    artOurDesignInterior1: './Assets/project1.jpg',
    artOurDesignInterior2: './Assets/project pragrati/2 interior.jpg',
    artOurDesignBedroom1: './Assets/project pragrati/bed room 1.jpg',
    artOurDesignBedroom2: './Assets/project pragrati/bed room 2.jpg',
    artOurDesignExterior1: './Assets/project pragrati/exterior 1.jpg',
    artOurDesignExterior2: './Assets/project pragrati/exterior 2.jpg',
    artOurDesignKitchen1: './Assets/project pragrati/kicthen 1.jpg',
    artOurDesignKitchen2: './Assets/project pragrati/kicthen 2.jpg',
    artOurDesignLivingRoom1: './Assets/project pragrati/living room 1.jpg',
    artOurDesignLivingRoom2: './Assets/project pragrati/living room 2.jpg',
    artOurDesignOffice1: './Assets/project pragrati/office 1.jpg',
    artOurDesignOffice2: './Assets/project pragrati/office 2.jpg',
    artOurDesignResidential1: './Assets/project pragrati/residencial 1.jpg',
    artOurDesignResidential2: './Assets/project pragrati/residencial 2.jpg',
    artTileDesigns: './Assets/tile.avif',
    artWallPaperDesigns: './Assets/wallpaper.avif',
    artWallPaintDesigns: './Assets/wallpaint.avif',
    artFlooringDesigns: './Assets/flooring.avif',
    artWallDecorDesigns: './Assets/walldecor.avif',
    artWindowDesigns: './Assets/window.avif',
    artBeforeslide1: require('./Assets/After_&_Before/Before_9.jpg'),
    artBeforeslide2: require('./Assets/After_&_Before/Before_8.jpg'),
    artBeforeslide3: require('./Assets/After_&_Before/Before_7.jpg'),
    artBeforeslide4: require('./Assets/After_&_Before/Before_6.jpg'),
    artBeforeslide5: require('./Assets/After_&_Before/Before_5.jpg'),
    artBeforeslide6: require('./Assets/After_&_Before/Before_4.jpg'),
    artBeforeslide7: require('./Assets/After_&_Before/Before_3.jpg'),
    artBeforeslide8: require('./Assets/After_&_Before/Before_2.jpg'),
    artBeforeslide9: require('./Assets/After_&_Before/Before_1.jpg'),
    artAfterslide1: require('./Assets/After_&_Before/After_9.jpg'),
    artAfterslide2: require('./Assets/After_&_Before/After_8.jpg'),
    artAfterslide3: require('./Assets/After_&_Before/After_7.jpg'),
    artAfterslide4: require('./Assets/After_&_Before/After_6.jpg'),
    artAfterslide5: require('./Assets/After_&_Before/After_5.jpg'),
    artAfterslide6: require('./Assets/After_&_Before/After_4.jpg'),
    artAfterslide7: require('./Assets/After_&_Before/After_3.jpg'),
    artAfterslide8: require('./Assets/After_&_Before/After_2.jpg'),
    artAfterslide9: require('./Assets/After_&_Before/After_1.jpg'),
  };
  

  // State to store image URLs
  const [images, setImages] = useState(() => {
    const savedImages = JSON.parse(localStorage.getItem('images'));
    return savedImages ? { ...defaultImages, ...savedImages } : defaultImages;
  });

  // Function to handle image uploads and store them in local storage
  const handleImageUpload = (section, imageUrl, index = null, isBefore = true) => {
    if (section === 'beforeAfterSets' && index !== null) {
      const updatedSets = [...images.beforeAfterSets];
      if (isBefore) {
        updatedSets[index].before = imageUrl; // Update the 'before' image
      } else {
        updatedSets[index].after = imageUrl; // Update the 'after' image
      }
      const updatedImages = { ...images, beforeAfterSets: updatedSets };
      setImages(updatedImages);
      localStorage.setItem('images', JSON.stringify(updatedImages)); // Save to local storage
    } else {
      // For other sections
      const updatedImages = { ...images, [section]: imageUrl };
      setImages(updatedImages);
      localStorage.setItem('images', JSON.stringify(updatedImages));
      console.log('Updated images:', updatedImages); 
    }
  };
  
  // Create router object with updated routes
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/', // Home route
          element: <Home images={images} /> // Pass images to Home component
        },
        {
          path: '/Services', // Services route
          element: <Services />
        },
        {
          path: '/new', // ImageUploader route
          element:             
          <>
          {showLogin && <AdminLogin onLogin={handleLogin} />}
          <ImageUploader handleImageUpload={handleImageUpload} sections={Object.keys(images)} onPageAccess={handleNewPageAccess} />
        </>
        },
        {
          path: '/admin-login', // Admin login route
          element: <AdminLogin />,
        },
      ]
    }
  ]);

  return (
    <RouterProvider router={router} />
  );
};

export default App;
