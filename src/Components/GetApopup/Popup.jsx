import React, { useState } from 'react';
import './Popup.scss';
import email_sender from '../../Assets/Email-Send.gif'

const Popup = ({ onButtonClick }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    'project-type': '',
    'property-type': '',
    'kind-of-property': '',
    'room-type': '',
    'room(s)-need-improving': [],
    'furniture': [],
    'budget': '',
    'consider-online-design-services': '',
    'hiring_decision': '',
    'postcode_or_town': '',
    'Name': '',
    'Email': '',
    'ContactNo': '',



  });

  const totalSteps = 11;

  const nextStep = () => {
    setCurrentStep((prevStep) => (prevStep < totalSteps ? prevStep + 1 : prevStep));
  };

  const prevStep = () => {
    setCurrentStep((prevStep) => (prevStep > 1 ? prevStep - 1 : prevStep));
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === 'checkbox') {
      setFormData((prevData) => {
        // Manage the list of selected checkboxes
        const newValues = checked
          ? [...prevData[name], value]
          : prevData[name].filter(item => item !== value);

        return {
          ...prevData,
          [name]: newValues,
        };
      });
    } else {
      // For text inputs or other types
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const [loading, setLoading] = useState(false);



  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true); // Show loader

    const data = new FormData();
    Object.keys(formData).forEach((key) => {
      data.append(key, formData[key]);
    });

    fetch('https://script.google.com/macros/s/AKfycbyAg9SPb3ev5ylpRNOur5WkgRsjEAGtKaxV2algvcM1Z-fWUyc6-fMAGbteXq9mH10HRA/exec',
      { method: 'POST', body: data })
      .then(() => {
        setLoading(false);
        onButtonClick(true)
      })
      .catch(() => {
        alert('Something went wrong. Please try again!');
        setLoading(false); // Hide loader
      });
  };

  return (
    <div className="form-wizard">
      <div className="steps">
        <ul>
          {[...Array(totalSteps)].map((_, index) => (
            <li
              key={index}
              className={currentStep >= index + 1 ? 'active' : ''}
              onClick={() => setCurrentStep(index + 1)}
            >
              <span>{index + 1}</span>
              {['', '', ''][index]}
            </li>
          ))}
        </ul>
      </div>
      <form onSubmit={handleSubmit}>
        {loading && <div className="loader">
          <img src={email_sender} alt="" />
        </div>}

        <div className={`form-container ${currentStep === 1 ? 'active' : ''}`}>
          <h2 className="text-center form-title">Personal Details</h2>
          <div className="form-group">
            <input
              name="Name"
              type="text"
              id="Name" 
              onChange={handleInputChange} placeholder='Enter Your Full Name'
            /> 
          </div>
          <div className="form-group">
            <input
              name="Email"
              type="email"
              id="Email" 
              onChange={handleInputChange} placeholder='Enter Your Email ID'
            /> 
          </div>
          <div className="form-group">
            <input
              name="ContactNo"
              type="number"
              id="ContactNo" 
              onChange={handleInputChange} placeholder='Enter Your Contact No'
            /> 
          </div>

          <div className="mt-5 mar-b-0">
            <button type="button" className="btn btn-primary next" onClick={nextStep}>
              NEXT
            </button>
          </div>
        </div>

        <div className={`form-container ${currentStep === 2 ? 'active' : ''}`}>
          <h2 className="text-center form-title">What type of interior service do you need?</h2>
          <div className="form-group">
            <input
              name="project-type"
              type="radio"
              id="complete-project"
              value="complete-project"
              onChange={handleInputChange}
            />
            <label htmlFor="complete-project">Complete project - designing and installation</label>
          </div>
          <div className="form-group">
            <input
              name="project-type"
              type="radio"
              id="design-only"
              value="design-only"
              onChange={handleInputChange}
            />
            <label htmlFor="design-only">Design only</label>
          </div>
          <div className="form-group">
            <input
              name="project-type"
              type="radio"
              id="installation-only"
              value="installation-only"
              onChange={handleInputChange}
            />
            <label htmlFor="installation-only">Installation only</label>
          </div>
          <div className="form-group d-flex">
            <input
              name="project-type"
              type="radio"
              id="project-type-other"
              value="other"
              onChange={handleInputChange}
            />
            <input type="text" placeholder="Other" aria-label="other" onChange={(e) => handleInputChange({ target: { name: 'project-type', value: e.target.value } })} />
          </div>

          <div className="mt-5 mar-b-0">
          <button type="button" className="btn btn-default back" onClick={prevStep}>
              BACK
            </button>
            <button type="button" className="btn btn-primary next" onClick={nextStep}>
              NEXT
            </button>
          </div>
        </div>

        <div className={`form-container ${currentStep === 3 ? 'active' : ''}`}>
          <h2 className="text-center form-title">What type of project is it?</h2>
          <div className="form-group">
            <input
              name="property-type"
              type="radio"
              id="new-property"
              value="new-property"
              onChange={handleInputChange}
            />
            <label htmlFor="new-property">New property</label>
          </div>
          <div className="form-group">
            <input
              name="property-type"
              type="radio"
              id="existing-property"
              value="existing-property"
              onChange={handleInputChange}
            />
            <label htmlFor="existing-property">Existing property</label>
          </div>
          <div className="form-group">
            <input
              name="property-type"
              type="radio"
              id="property-type-Other"
              value="other"
              onChange={handleInputChange}
            />
            <input
              type="text"
              placeholder="Other"
              aria-label="other"
              onChange={(e) => handleInputChange({ target: { name: 'property-type', value: e.target.value } })}
            />
          </div>
          <div className="mt-5 mar-b-0">
            <button type="button" className="btn btn-default back" onClick={prevStep}>
              BACK
            </button>
            <button type="button" className="btn btn-primary next" onClick={nextStep}>
              NEXT
            </button>
          </div>
        </div>

        <div className={`form-container ${currentStep === 4 ? 'active' : ''}`}>
          <h2 className="text-center form-title">What kind of property is this for?</h2>
          <div className="form-group">
            <input
              name="kind-of-property"
              type="radio"
              id="house"
              value="house"
              onChange={handleInputChange}
            />
            <label htmlFor="house">House</label>
          </div>
          <div className="form-group">
            <input
              name="kind-of-property"
              type="radio"
              id="flat"
              value="flat"
              onChange={handleInputChange}
            />
            <label htmlFor="flat">Flat</label>
          </div>
          <div className="form-group">
            <input
              name="kind-of-property"
              type="radio"
              id="commercial-premises"
              value="commercial-premises"
              onChange={handleInputChange}
            />
            <label htmlFor="commercial-premises">Holiday home</label>
          </div>
          <div className="form-group">
            <input
              name="kind-of-property"
              type="radio"
              id="shop"
              value="shop"
              onChange={handleInputChange}
            />
            <label htmlFor="shop">Shop</label>
          </div>
          <div className="form-group">
            <input
              name="kind-of-property"
              type="radio"
              id="office"
              value="office"
              onChange={handleInputChange}
            />
            <label htmlFor="office">Office</label>
          </div>
          <div className="form-group">
            <input
              name="kind-of-property"
              type="radio"
              id="clinic"
              value="clinic"
              onChange={handleInputChange}
            />
            <label htmlFor="clinic">Clinic</label>
          </div>
          <div className="form-group">
            <input
              name="kind-of-property"
              type="radio"
              id="restaurant-hotel"
              value="restaurant-hotel"
              onChange={handleInputChange}
            />
            <label htmlFor="restaurant-hotel">Restaurant / hotel</label>
          </div>
          <div className="form-group">
            <input
              name="kind-of-property"
              type="radio"
              id="other"
              value="other"
              onChange={handleInputChange}
            />
            <input
              type="text"
              placeholder="Other"
              aria-label="other" id='other'
              onChange={(e) => handleInputChange({ target: { name: 'kind-of-property', value: e.target.value } })}
            />
          </div>
          <div className="mt-5 mar-b-0">
            <button type="button" className="btn btn-default back" onClick={prevStep}>
              BACK
            </button>
            <button type="button" className="btn btn-primary next" onClick={nextStep}>
              NEXT
            </button>
          </div>
        </div>

        <div className={`form-container ${currentStep === 5 ? 'active' : ''}`}>
          <h2 className="text-center form-title">How large is your property?</h2>
          <div className="form-group">
            <input
              name="room-type"
              type="radio"
              id="1-room-kitchen"
              value="1-room-kitchen"
              onChange={handleInputChange}
            />
            <label htmlFor="1-room-kitchen">1 Room kitchen</label>
          </div>
          <div className="form-group">
            <input
              name="room-type"
              type="radio"
              id="1-bhk"
              value="1-bhk"
              onChange={handleInputChange}
            />
            <label htmlFor="1-bhk">1 BHK</label>
          </div>
          <div className="form-group">
            <input
              name="room-type"
              type="radio"
              id="2-bhk"
              value="2-bhk"
              onChange={handleInputChange}
            />
            <label htmlFor="2-bhk">2 BHK</label>
          </div>
          <div className="form-group">
            <input
              name="room-type"
              type="radio"
              id="3-bhk"
              value="3-bhk"
              onChange={handleInputChange}
            />
            <label htmlFor="3-bhk">3 BHK</label>
          </div>
          <div className="form-group">
            <input
              name="room-type"
              type="radio"
              id="4-bhk"
              value="4-bhk"
              onChange={handleInputChange}
            />
            <label htmlFor="4-bhk">4 BHK</label>
          </div>
          <div className="form-group">
            <input
              name="room-type"
              type="radio"
              id="more-than-4-rooms"
              value="more-than-4-rooms"
              onChange={handleInputChange}
            />
            <label htmlFor="more-than-4-rooms">More than 4 rooms</label>
          </div>
          <div className="form-group">
            <input name="room-type" type="radio" id="room-type-other" value="other" onChange={handleInputChange} />
            <input type="text" placeholder="Other" onChange={(e) => handleInputChange({ target: { name: 'room-type', value: e.target.value } })} />
          </div>
          <div className="mt-5 mar-b-0">
            <button type="button" className="btn btn-default back" onClick={prevStep}>
              BACK
            </button>
            <button type="button" className="btn btn-primary next" onClick={nextStep}>
              NEXT
            </button>
          </div>
        </div>

        <div className={`form-container ${currentStep === 6 ? 'active' : ''}`}>
          <h2 className="text-center form-title">Which room(s) need improving?</h2>
          <div className="form-group">
            <label>
              <input
                type="checkbox"
                name="room(s)-need-improving"
                value="Home-Desing"
                onChange={handleInputChange}
              />
              <span>This is a whole home design</span>
            </label>
          </div>
          <div className="form-group">
            <label>
              <input
                type="checkbox"
                name="room(s)-need-improving"
                value="Bathroom"
                onChange={handleInputChange}
              />
              <span>Bathroom</span>
            </label>
          </div>
          <div className="form-group">
            <label>
              <input
                type="checkbox"
                name="room(s)-need-improving"
                value="bedroom-master"
                onChange={handleInputChange}
              />
              <span>Bedroom-master</span>
            </label>
          </div>
          <div className="form-group">
            <label>
              <input
                type="checkbox"
                name="room(s)-need-improving"
                value="dining-room"
                onChange={handleInputChange}
              />
              <span>Dining room</span>
            </label>
          </div>
          <div className="form-group">
            <label>
              <input
                type="checkbox"
                name="room(s)-need-improving"
                value="hallway"
                onChange={handleInputChange}
              />
              <span>Hallway</span>
            </label>
          </div>
          <div className="form-group">
            <label>
              <input
                type="checkbox"
                name="room(s)-need-improving"
                value="home-office-study"
                onChange={handleInputChange}
              />
              <span>Home office/Study</span>
            </label>
          </div>
          <div className="form-group">
            <label>
              <input
                type="checkbox"
                name="room(s)-need-improving"
                value="kitchen"
                onChange={handleInputChange}
              />
              <span>Kitchen</span>
            </label>
          </div>
          <div className="form-group">
            <label>
              <input
                type="checkbox"
                name="room(s)-need-improving"
                value="living-room"
                onChange={handleInputChange}
              />
              <span>Living room</span>
            </label>
          </div>
          <div className="mt-5 mar-b-0">
            <button type="button" className="btn btn-default back" onClick={prevStep}>
              BACK
            </button>
            <button type="button" className="btn btn-primary next" onClick={nextStep}>
              NEXT
            </button>
          </div>
        </div>

        <div className={`form-container ${currentStep === 7 ? 'active' : ''}`}>
          <h2 className="text-center form-title">What furniture would you like to include in the project?</h2>
          <div className="form-group">
            <label>
              <input type="checkbox" name="furniture" value="cot-s" onChange={handleInputChange} />
              <span>Cot(s)</span>
            </label>
          </div>
          <div className="form-group">
            <label>
              <input type="checkbox" name="furniture" value="decor-items" onChange={handleInputChange} />
              <span>Decor items</span>
            </label>
          </div>
          <div className="form-group">
            <label>
              <input type="checkbox" name="furniture" value="dining" onChange={handleInputChange} />
              <span>Dining</span>
            </label>
          </div>
          <div className="form-group">
            <label>
              <input type="checkbox" name="furniture" value="kitchen-cabinets" onChange={handleInputChange} />
              <span>Kitchen cabinets</span>
            </label>
          </div>
          <div className="form-group">
            <label>
              <input type="checkbox" name="furniture" value="sofa-s" onChange={handleInputChange} />
              <span>Sofa(s)</span>
            </label>
          </div>
          <div className="form-group">
            <label>
              <input type="checkbox" name="furniture" value="study-unit" onChange={handleInputChange} />
              <span>Study unit</span>
            </label>
          </div>
          <div className="flex">
            <div className="w-2/4">
              <div className="form-group">
                <label>
                  <input type="checkbox" name="furniture" value="tv-unit" onChange={handleInputChange} />
                  <span>TV unit</span>
                </label>
              </div>
            </div>
            <div className="w-2/4">
              <div className="form-group">
                <label>
                  <input type="checkbox" name="furniture" value="wardrobe-s" onChange={handleInputChange} />
                  <span>Wardrobe(s)</span>
                </label>
              </div>
            </div>
          </div>
          <div className="form-group">
            <input type="checkbox" name="furniture" value="other" onChange={handleInputChange} />
            <input type="text" placeholder="Other" name="other-furniture" onChange={(e) => handleInputChange({ target: { name: 'furniture', value: e.target.value } })} />
          </div>
          <div className="mt-5 mar-b-0">
            <button type="button" className="btn btn-default back" onClick={prevStep}>
              BACK
            </button>
            <button type="button" className="btn btn-primary next" onClick={nextStep}>
              NEXT
            </button>
          </div>
        </div>

        <div className={`form-container ${currentStep === 8 ? 'active' : ''}`}>
          <h2 className="text-center form-title">What is your approx. budget for the project?</h2>
          <div className="form-group">
            <input
              name="budget"
              type="radio"
              id="less-than-1-lakh"
              value="less-than-1-lakh"
              onChange={handleInputChange}
            />
            <label htmlFor="less-than-1-lakh">Less than ₹1 Lakh</label>
          </div>
          <div className="form-group">
            <input
              name="budget"
              type="radio"
              id="1-lakh-to-2-49-lakhs"
              value="1-lakh-to-2-49-lakhs"
              onChange={handleInputChange}
            />
            <label htmlFor="1-lakh-to-2-49-lakhs">₹1 Lakh to ₹2.49 Lakhs</label>
          </div>
          <div className="form-group">
            <input
              name="budget"
              type="radio"
              id="2-5-lakhs-to-4-9-lakhs"
              value="2-5-lakhs-to-4-9-lakhs"
              onChange={handleInputChange}
            />
            <label htmlFor="2-5-lakhs-to-4-9-lakhs">₹2.5 Lakhs to ₹4.9 Lakhs</label>
          </div>
          <div className="form-group">
            <input
              name="budget"
              type="radio"
              id="5-lakhs-to-9-9-lakhs"
              value="5-lakhs-to-9-9-lakhs"
              onChange={handleInputChange}
            />
            <label htmlFor="5-lakhs-to-9-9-lakhs">₹5 Lakhs to ₹9.9 Lakhs</label>
          </div>
          <div className="form-group">
            <input
              name="budget"
              type="radio"
              id="10-lakhs-to-19-9-lakhs"
              value="10-lakhs-to-19-9-lakhs"
              onChange={handleInputChange}
            />
            <label htmlFor="10-lakhs-to-19-9-lakhs">₹10 Lakhs to ₹19.9 Lakhs</label>
          </div>
          <div className="form-group">
            <input
              name="budget"
              type="radio"
              id="20-lakhs-to-29-9-lakhs"
              value="20-lakhs-to-29-9-lakhs"
              onChange={handleInputChange}
            />
            <label htmlFor="20-lakhs-to-29-9-lakhs">₹20 Lakhs to ₹29.9 Lakhs</label>
          </div>
          <div className="form-group">
            <input
              name="budget"
              type="radio"
              id="30-lakhs-or-more"
              value="30-lakhs-or-more"
              onChange={handleInputChange}
            />
            <label htmlFor="30-lakhs-or-more">₹30 Lakhs or more</label>
          </div>
          <div className="form-group">
            <input
              name="budget"
              type="radio"
              id="i-would-like-to-discuss-with-the-pro"
              value="i-would-like-to-discuss-with-the-pro"
              onChange={handleInputChange}
            />
            <label htmlFor="i-would-like-to-discuss-with-the-pro">I would like to discuss with the pro</label>
          </div>
          <div className="mt-5 mar-b-0">
            <button type="button" className="btn btn-default back" onClick={prevStep}>
              BACK
            </button>
            <button type="button" className="btn btn-primary next" onClick={nextStep}>
              NEXT
            </button>
          </div>
        </div>

        <div className={`form-container ${currentStep === 9 ? 'active' : ''}`}>
          <h2 className="text-center form-title">Would you consider online design services?</h2>
          <div className="form-group">
            <input name="consider-online-design-services" type="radio" id="yes" value="Yes" onChange={handleInputChange} />
            <label htmlFor="yes">Yes</label>
          </div>
          <div className="form-group">
            <input name="consider-online-design-services" type="radio" id="no" value="No" onChange={handleInputChange} />
            <label htmlFor="no">No</label>
          </div>
          <div className="mt-5 mar-b-0">
            <button type="button" className="btn btn-default back" onClick={prevStep}>
              BACK
            </button>
            <button type="button" className="btn btn-primary next" onClick={nextStep}>
              NEXT
            </button>
          </div>
        </div>

        <div className={`form-container ${currentStep === 10 ? 'active' : ''}`}>
          <h2 className="text-center form-title">How likely are you to make a hiring decision?</h2>
          <div class="form-group">
            <input name="hiring_decision" value="im-ready-to-hire-now" type="radio" id="ready to hire" onChange={handleInputChange} />
            <label htmlFor="ready to hire">I'm ready to hire now</label>
          </div>
          <div class="form-group">
            <input name="hiring_decision" value="im-definitely-going-to-hire-someone" type="radio" id="definitely" onChange={handleInputChange} />
            <label htmlFor="definitely">I'm definitely going to hire someone</label>
          </div>
          <div class="form-group">
            <input name="hiring_decision" value="im-likely-to-hire-someone" type="radio" id="likely" onChange={handleInputChange} />
            <label htmlFor="likely">I'm likely to hire someone</label>
          </div>
          <div class="form-group">
            <input name="hiring_decision" value="i-will-possibly-hire-someone" type="radio" id="possibly" onChange={handleInputChange} />
            <label htmlFor="possibly">I will possibly hire someone</label>
          </div>
          <div class="form-group">
            <input name="hiring_decision" value="im-planning-and-researching" type="radio" id="planning" onChange={handleInputChange} />
            <label htmlFor="planning">I'm planning and researching</label>
          </div>
          <div class="form-group">
            <input name="hiring_decision" value="other" type="radio" id="hiring_decision_Other" onChange={handleInputChange} />
            <input type="text" placeholder="Other" id='hiring_decision_Other' onChange={(e) => handleInputChange({ target: { name: 'hiring_decision', value: e.target.value } })} />

          </div>
          <div className="mt-5 mar-b-0">
            <button type="button" className="btn btn-default back" onClick={prevStep}>
              BACK
            </button>
            <button type="button" className="btn btn-primary next" onClick={nextStep}>
              NEXT
            </button>
          </div>
        </div>

        <div className={`form-container ${currentStep === 11 ? 'active' : ''}`}>
          <h2 className="text-center form-title">Where do you need the Interior Designer?</h2>
          <div class="form-group">
            <input name="postcode_or_town" id="postcode_or_town" type="text" placeholder="Enter your postcode or town" onChange={handleInputChange} />
          </div>

          <div className="mt-5 mar-b-0">
            <button type="button" className="btn btn-default back" onClick={prevStep} disabled={loading}>
              BACK
            </button>
            <button type="submit" className="btn btn-primary next" disabled={loading}>
              SUBMIT
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Popup;
