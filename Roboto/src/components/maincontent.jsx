import React from 'react';
import RobotData from '../data/RobotData';

const MainContent = () => {
  return (
    <div className='items'>
      <h2 className='my-robots'>My Robots</h2>
      <div className='card-container'>
        {RobotData.map((data) => (
          <div className='card' key={data.id}>
            <img src={data.thumb} alt={data.Robot} />
            <div className='card_header'>
              <h2>{data.Robot}</h2>
              <p>{data.Location}</p>
              <i className="fas fa-share share-icon"></i>
            </div>
            

          </div>
        ))}
      </div>
    </div>
  );
};

export default MainContent;
