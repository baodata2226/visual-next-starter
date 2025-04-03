
import React from 'react';
import { Slider } from '@/components/ui/slider';

interface CustomSliderProps {
  label: string;
  min: number;
  max: number;
  step?: number;
  value: number;
  onChange: (value: number) => void;
}

const CustomSlider: React.FC<CustomSliderProps> = ({
  label,
  min,
  max,
  step = 0.1,
  value,
  onChange
}) => {
  const handleChange = (newValues: number[]) => {
    onChange(newValues[0]);
  };

  return (
    <div className="w-full">
      <div className="flex justify-between mb-1">
        <label className="text-sm text-gray-300">{label}</label>
        <span className="text-sm text-white font-medium">{value.toFixed(1)}</span>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-xs text-gray-400">{min}</span>
        <Slider
          value={[value]}
          min={min}
          max={max}
          step={step}
          onValueChange={handleChange}
          className="flex-1"
        />
        <span className="text-xs text-gray-400">{max}</span>
      </div>
    </div>
  );
};

export default CustomSlider;
