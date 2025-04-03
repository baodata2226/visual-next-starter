
import React, { useState } from 'react';

interface RandomSeedProps {
  initialValue?: string;
  onChange?: (value: string) => void;
}

const RandomSeed: React.FC<RandomSeedProps> = ({ initialValue = '1247', onChange }) => {
  const [value, setValue] = useState(initialValue);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);
    if (onChange) {
      onChange(newValue);
    }
  };

  const generateRandom = () => {
    const randomValue = Math.floor(Math.random() * 10000).toString();
    setValue(randomValue);
    if (onChange) {
      onChange(randomValue);
    }
  };

  return (
    <div className="w-full p-4 bg-latent-lighter rounded-md">
      <h3 className="text-white text-sm mb-2">Random Seed</h3>
      <div className="flex">
        <input
          type="text"
          value={value}
          onChange={handleChange}
          className="flex-1 bg-latent border border-latent-border rounded-l-md px-3 py-2 text-white"
        />
        <button
          onClick={generateRandom}
          className="bg-latent-border rounded-r-md px-2 hover:bg-latent-orange/30"
        >
          🔄
        </button>
      </div>
    </div>
  );
};

export default RandomSeed;
