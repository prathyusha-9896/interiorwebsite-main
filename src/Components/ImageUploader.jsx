import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import AdminLogin from './AdminLogin'; 
const ImageUploader = ({ handleImageUpload }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const [imageType, setImageType] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);
  const imageTypes = [
    { value: 'hero', label: 'Hero Image' },
    { value: 'about', label: 'About Image' },
    { value: 'artEducationalCommercial', label: 'Educational Commercial Art' },
    { value: 'artInteriorDesign', label: 'Interior Design Art' },
    { value: 'artHospitalityDesign', label: 'Hospitality Design Art' },
    { value: 'artOurDesignInterior1', label: 'Our Design Interior 1' },
    { value: 'artOurDesignInterior2', label: 'Our Design Interior 2' },
    { value: 'artOurDesignBedroom1', label: 'Our Design Bedroom 1' },
    { value: 'artOurDesignBedroom2', label: 'Our Design Bedroom 2' },
    { value: 'artOurDesignExterior1', label: 'Our Design Exterior 1' },
    { value: 'artOurDesignExterior2', label: 'Our Design Exterior 2' },
    { value: 'artOurDesignKitchen1', label: 'Our Design Kitchen 1' },
    { value: 'artOurDesignKitchen2', label: 'Our Design Kitchen 2' },
    { value: 'artOurDesignLivingRoom1', label: 'Our Design Living Room 1' },
    { value: 'artOurDesignLivingRoom2', label: 'Our Design Living Room 2' },
    { value: 'artOurDesignOffice1', label: 'Our Design Office 1' },
    { value: 'artOurDesignOffice2', label: 'Our Design Office 2' },
    { value: 'artOurDesignResidential1', label: 'Our Design Residential 1' },
    { value: 'artOurDesignResidential2', label: 'Our Design Residential 2' },
    { value: 'artTileDesigns', label: 'Tile Designs' },
    { value: 'artWallPaperDesigns', label: 'Wallpaper Designs' },
    { value: 'artWallPaintDesigns', label: 'Wall Paint Designs' },
    { value: 'artFlooringDesigns', label: 'Flooring Designs' },
    { value: 'artWallDecorDesigns', label: 'Wall Decor Designs' },
    { value: 'artWindowDesigns', label: 'Window Designs' },
    { value: 'artBeforeslide1', label: 'Before Slide 1' },
    { value: 'artBeforeslide2', label: 'Before Slide 2' },
    { value: 'artBeforeslide3', label: 'Before Slide 3' },
    { value: 'artBeforeslide4', label: 'Before Slide 4' },
    { value: 'artBeforeslide5', label: 'Before Slide 5' },
    { value: 'artBeforeslide6', label: 'Before Slide 6' },
    { value: 'artBeforeslide7', label: 'Before Slide 7' },
    { value: 'artBeforeslide8', label: 'Before Slide 8' },
    { value: 'artBeforeslide9', label: 'Before Slide 9' },
    { value: 'artAfterslide1', label: 'After Slide 1' },
    { value: 'artAfterslide2', label: 'After Slide 2' },
    { value: 'artAfterslide3', label: 'After Slide 3' },
    { value: 'artAfterslide4', label: 'After Slide 4' },
    { value: 'artAfterslide5', label: 'After Slide 5' },
    { value: 'artAfterslide6', label: 'After Slide 6' },
    { value: 'artAfterslide7', label: 'After Slide 7' },
    { value: 'artAfterslide8', label: 'After Slide 8' },
    { value: 'artAfterslide9', label: 'After Slide 9' },
  ];

  const handleLoginSuccess = () => {
    setIsAdmin(true); // Set admin status to true on successful login
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(file);
      setPreviewImage(URL.createObjectURL(file));
    }
  };


  const handleUpload = async () => {
    if (!selectedImage || !imageType) return;
  
    const formData = new FormData();
    formData.append('image', selectedImage);
  
    try {
      const response = await axios.post('http://localhost:5000/new', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
  
      // Log the response to check the structure
      console.log('Upload response:', response.data);
  
      // Construct the image URL without leading slash
      const imageUrl = `http://localhost:5000/${response.data.imageUrl}`;
      console.log('Constructed image URL:', imageUrl); // Check the URL here
      handleImageUpload(imageType, imageUrl);
  
      // Alert the user that the image has been uploaded successfully
      alert('Image uploaded successfully!');
    } catch (error) {
      console.error('Error uploading image:', error);
      alert('Error uploading image. Please try again.'); // Optional: Alert for upload error
    }
  };
  
  
  
  
  
  return (
    <div className="container my-48" style={{ width: '50%' }}>
      {!isAdmin && <AdminLogin onLoginSuccess={handleLoginSuccess} />}

      {isAdmin && (
        <div className="card shadow-sm p-4">
        <h2 className="mb-4 text-center">Upload Image</h2>

        <div className="form-group mb-3">
          <label htmlFor="imageType" className="form-label">Select Image Type:</label>
          <select
            id="imageType"
            className="form-select"
            onChange={(e) => setImageType(e.target.value)}
          >
            <option value="">Select Image Section</option>
            {imageTypes.map((type) => (
              <option key={type.value} value={type.value}>
                {type.label}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group mb-3">
          <label htmlFor="imageInput" className="form-label">Select Image:</label>
          <input
            type="file"
            id="imageInput"
            accept="image/*"
            className="form-control"
            onChange={handleImageChange}
          />
        </div>

        {previewImage && (
          <div className="mb-3 text-center">
            <img
              src={previewImage}
              alt="Preview"
              className="img-thumbnail"
              style={{ maxWidth: '400px', maxHeight: '200px' }}
            />
          </div>
        )}

        <div className="d-grid">
          <button
            style={{ backgroundColor: '#fb8200', borderColor: 'orange', color: 'white' }}
            className="btn btn-primary"
            onClick={handleUpload}
          >
            Upload & Update
          </button>
        </div>
      </div>
      )}
    </div>
  );
};

export default ImageUploader;
