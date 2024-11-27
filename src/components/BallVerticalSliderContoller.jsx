import React, { useState } from 'react';

const BallVerticalSliderContoller = ({onBallStrengthValueChange}) => {
    
  const [value, setValue] = useState(30);

  const handleChange = (event) => {
    setValue(event.target.value);
    onBallStrengthValueChange(-1 * Number(event.target.value));
  };

  return (
    <div className="absolute top-1/3 right-14 transform translate-y-1/2 z-50 flex items-center">
      <div className="relative h-64 w-10">
        <input
          type="range"
          min="0"
          max="100"
          value={value}
          onChange={handleChange}
          className="absolute w-fit h-fit transform -rotate-90 bg-blue-500 rounded-lg appearance-none cursor-pointer"
        />
        <div className="absolute top-0 text-lg font-bold text-blue-500">{value}%</div>
      </div>
    </div>
  );
};

export default BallVerticalSliderContoller;
