import React, { useState } from 'react';

const AddRobot = () => {
  const [Name, setName] = useState('');
  const [Location, setLocation] = useState('');
  const [Image, setImage] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const handleImageChange = (e) => {
    setImage(e.target.value);
  };

  const handleAddRobot = () => {
    console.log('Name:', Name);
  };

  return (
    <div className="add-robot-container">
      <h2>Add Robot</h2>
      <div className="form-group">
        <label>Name:</label>
        <input type="text" value={Name} onChange={handleNameChange} />
      </div>
      <div className="form-group">
        <label>Location:</label>
        <input type="text" value={Location} onChange={handleLocationChange} />
      </div>
      <div className="form-group">
        <label>Image (URL):</label>
        <input type="text" value={Image} onChange={handleImageChange} />
      </div>
      <button className="add-robot-button" onClick={handleAddRobot}>
        Add Robot
      </button>
    </div>
  );
};

export default AddRobot;
