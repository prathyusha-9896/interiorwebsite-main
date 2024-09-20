import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const ImageUploader = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const [uploadType, setUploadType] = useState('hero'); // Initial image type

  const imageTypes = [ // Array of available image types with labels
    { value: 'hero', label: 'Hero Image' },
    { value: 'about', label: 'About Image' },
    { value: 'artEducationalCommercial', label: 'Educational Commercial Image' },
    { value: 'artInteriorDesign', label: 'Interior Design Image' },
    { value: 'artHospitalityDesign', label: 'Hospitality Design Image' },
    { value: 'artOurDesignInterior1', label: 'Our Design Interior Image1' },
    { value: 'artOurDesignInterior2', label: 'Our Design Interior Image2' },
    { value: 'artOurDesignBedroom1', label: 'Our Design Bedroom Image1' },
    { value: 'artOurDesignBedroom2', label: 'Our Design Bedroom Image2' },
    { value: 'artOurDesignExterior1', label: 'Our Design Exterior Image1' },
    { value: 'artOurDesignExterior2', label: 'Our Design Exterior Image2' },
    { value: 'artOurDesignKitchen1', label: 'Our Design Kitchen Image1' },
    { value: 'artOurDesignKitchen2', label: 'Our Design Kitchen Image2' },
    { value: 'artOurDesignLivingRoom1', label: 'Our Design LivingRoom Image1' },
    { value: 'artOurDesignLivingRoom2', label: 'Our Design LivingRoom Image2' },
    { value: 'artOurDesignOffice1', label: 'Our Design Office Image1' },
    { value: 'artOurDesignOffice2', label: 'Our Design Office Image2' },
    { value: 'artOurDesignResidential1', label: 'Our Design Residential Image1' },
    { value: 'artOurDesignResidential2', label: 'Our Design Residential Image2' },
    { value: 'artTileDesigns', label: 'Tile Designs' },
    { value: 'artWallPaperDesigns', label: 'WallPaper Designs' },
    { value: 'artWallPaintDesigns', label: 'WallPaint Designs' },
    { value: 'artFlooringDesigns', label: 'Flooring Designs' },
    { value: 'artWallDecorDesigns', label: 'WallDecor Designs' },
    { value: 'artWindowDesigns', label: 'Window Designs' },
    { value: 'artBeforeslide1', label: 'BeforeSlide1' },
    { value: 'artBeforeslide2', label: 'BeforeSlide2' },
    { value: 'artBeforeslide3', label: 'BeforeSlide3' },
    { value: 'artBeforeslide4', label: 'BeforeSlide4' },
    { value: 'artBeforeslide5', label: 'BeforeSlide5' },
    { value: 'artBeforeslide6', label: 'BeforeSlide6' },
    { value: 'artBeforeslide7', label: 'BeforeSlide7' },
    { value: 'artBeforeslide8', label: 'BeforeSlide8' },
    { value: 'artBeforeslide9', label: 'BeforeSlide9' },

    { value: 'artAfterslide1', label: 'AfterSlide1' },
    { value: 'artAfterslide2', label: 'AfterSlide2' },
    { value: 'artAfterslide3', label: 'AfterSlide3' },
    { value: 'artAfterslide4', label: 'AfterSlide4' },
    { value: 'artAfterslide5', label: 'AfterSlide5' },
    { value: 'artAfterslide6', label: 'AfterSlide6' },
    { value: 'artAfterslide7', label: 'AfterSlide7' },
    { value: 'artAfterslide8', label: 'AfterSlide8' },
    { value: 'artAfterslide9', label: 'AfterSlide9' },

  ];

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(file);
      setPreviewImage(URL.createObjectURL(file));
    }
  };

  const handleSubmit = () => {
    if (selectedImage) {
      const imageUrl = previewImage;

      localStorage.setItem(uploadType + 'Image', imageUrl); 
      alert('Image uploaded successfully!');
    }
  };

  return (
    <div className="container my-40" style={{ width: '50%' }}>
      <div className="card shadow-sm p-8">
        <h2 className="mb-4 text-center">Upload Image</h2>

        <div className="form-group mb-3">
          <label htmlFor="imageType" className="form-label">Select Image Type:</label>
          <select
            id="imageType"
            className="form-select"
            value={uploadType}
            onChange={(e) => setUploadType(e.target.value)}
          >
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

        <div className="d-grid ">
          <button
            style={{ backgroundColor: '#fb8200', borderColor: 'orange', color: 'white' }}
            className="btn btn-primary"
            onClick={handleSubmit}
          >
            Upload & Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageUploader;
