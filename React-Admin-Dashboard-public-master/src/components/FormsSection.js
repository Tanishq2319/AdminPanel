import React, { useState } from 'react';
import './FormsSection.css';

const FormsSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    sex: '',
    race: '',
    medicalConditions: [],
    currentTreatments: '',
    diet: '',
    exerciseFrequency: '',
    description: '',
    lasixDoses: 0,
    minLasixDose: 0,
    meanLasixDose: 0,
    maxLasixDose: 0,
    creatinineTests: 0,
    crpTests: 0,
    esrTests: 0,
    hctTests: 0,
    ghba1cTests: 0,
    ldlTests: 0,
    bnpTests: 0,
    sodiumTests: 0,
    triglyceridesTests: 0
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setFormData(prevState => ({
      ...prevState,
      medicalConditions: checked 
        ? [...prevState.medicalConditions, value] 
        : prevState.medicalConditions.filter(condition => condition !== value)
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add logic for processing and displaying results
  };

  return (
    <div className="form-section">
      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="age">Age:</label>
          <select
            id="age"
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
          >
            <option value="">Select your age</option>
            <option value="18-24">18-24</option>
            <option value="25-34">25-34</option>
            <option value="35-44">35-44</option>
            <option value="45-54">45-54</option>
            <option value="55-64">55-64</option>
            <option value="65+">65+</option>
          </select>
        </div>
        <div className="form-group">
          <label>Sex:</label>
          <div className="radio-buttons">
            <label>
              <input
                type="radio"
                name="sex"
                value="male"
                checked={formData.sex === 'male'}
                onChange={handleChange}
                required
              />
              Male
            </label>
            <label>
              <input
                type="radio"
                name="sex"
                value="female"
                checked={formData.sex === 'female'}
                onChange={handleChange}
                required
              />
              Female
            </label>
            <label>
              <input
                type="radio"
                name="sex"
                value="non-binary"
                checked={formData.sex === 'non-binary'}
                onChange={handleChange}
                required
              />
              Others
            </label>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="race">Race/Ethnicity:</label>
          <select
            id="race"
            name="race"
            value={formData.race}
            onChange={handleChange}
            required
          >
            <option value="">Select</option>
            <option value="white">White</option>
            <option value="black">Black or African American</option>
            <option value="asian">Asian</option>
            <option value="hispanic">Hispanic or Latino</option>
            <option value="native-american">Native American</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="currentTreatments">Current Treatments:</label>
          <input
            id="currentTreatments"
            name="currentTreatments"
            value={formData.currentTreatments}
            onChange={handleChange}
            placeholder="List any medications or therapies you are currently undergoing"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="diet">Diet:</label>
          <select
            id="diet"
            name="diet"
            value={formData.diet}
            onChange={handleChange}
            required
          >
            <option value="">Select</option>
            <option value="vegetarian">Vegetarian</option>
            <option value="vegan">Vegan</option>
            <option value="balanced-diet">Balanced Diet</option>
            <option value="high-protein">High Protein</option>
            <option value="low-carb">Low Carb</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="exerciseFrequency">Exercise Frequency:</label>
          <select
            id="exerciseFrequency"
            name="exerciseFrequency"
            value={formData.exerciseFrequency}
            onChange={handleChange}
            required
          >
            <option value="">Select</option>
            <option value="never">Never</option>
            <option value="occasionally">Occasionally</option>
            <option value="regularly">Regularly</option>
            <option value="daily">Daily</option>
          </select>
        </div>

        <div className="compact-grid">
          <div className="form-group">
            <label htmlFor="lasixDoses">Number of Lasix doses:</label>
            <input
              id="lasixDoses"
              name="lasixDoses"
              type="number"
              value={formData.lasixDoses}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="minLasixDose">Minimum daily dose of Lasix:</label>
            <input
              id="minLasixDose"
              name="minLasixDose"
              type="number"
              value={formData.minLasixDose}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="meanLasixDose">Mean daily dose of Lasix:</label>
            <input
              id="meanLasixDose"
              name="meanLasixDose"
              type="number"
              step="0.01"
              value={formData.meanLasixDose}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="maxLasixDose">Maximum daily dose of Lasix:</label>
            <input
              id="maxLasixDose"
              name="maxLasixDose"
              type="number"
              value={formData.maxLasixDose}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="creatinineTests">Number of creatinine tests:</label>
            <input
              id="creatinineTests"
              name="creatinineTests"
              type="number"
              value={formData.creatinineTests}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="crpTests">Number of c-reactive protein tests:</label>
            <input
              id="crpTests"
              name="crpTests"
              type="number"
              value={formData.crpTests}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="esrTests">Number of erythrocyte sedimentation rate tests:</label>
            <input
              id="esrTests"
              name="esrTests"
              type="number"
              value={formData.esrTests}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="hctTests">Number of hematocrit tests:</label>
            <input
              id="hctTests"
              name="hctTests"
              type="number"
              value={formData.hctTests}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="ghba1cTests">Number of GHbA1c tests:</label>
            <input
              id="ghba1cTests"
              name="ghba1cTests"
              type="number"
              value={formData.ghba1cTests}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="ldlTests">Number of LDL tests:</label>
            <input
              id="ldlTests"
              name="ldlTests"
              type="number"
              value={formData.ldlTests}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="bnpTests">Number of BNP tests:</label>
            <input
              id="bnpTests"
              name="bnpTests"
              type="number"
              value={formData.bnpTests}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="sodiumTests">Number of sodium tests:</label>
            <input
              id="sodiumTests"
              name="sodiumTests"
              type="number"
              value={formData.sodiumTests}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="triglyceridesTests">Number of triglycerides tests:</label>
            <input
              id="triglyceridesTests"
              name="triglyceridesTests"
              type="number"
              value={formData.triglyceridesTests}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormsSection;
