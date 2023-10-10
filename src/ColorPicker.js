import { useState } from "react";

const ColorPicker = () => {
  const colors = [
    "#FF5733",
    "#33FF57",
    "#5733FF",
    "#FFFF33",
    "#FF3366",
    "#3399FF",
    "#FFCC00",
    "#66CC66",
    "#FF9900",
    "#CC99FF",
    "#99FFCC",
    "#9933CC",
    "#66FF99",
    "#FF6633",
    "#CCCC00",
  ];
  const [selectedColor, setSelectedColor] = useState(null);
  const [bgColor, setbgColor] = useState(null);

  const handleColorClick = (color) => {
    setSelectedColor(color);
  };

  const handlePickColor = () => {
    setbgColor(selectedColor);
  };

  return (
    <div>
      <h1 style={{fontSize:"35px"}}>Color Picker</h1>

      <div
        className="color-picker p-4 m-2 rounded-lg py-24"
        style={{
          backgroundColor: bgColor,
        }}
      >
        
        <div className="color-blocks mt-4 flex">
          {colors.map((color, index) => (
            <div
              key={index}
              onClick={() => handleColorClick(color)}
              style={{
                backgroundColor: color,
                width: "2rem",
                height: "2rem",
                transform: selectedColor === color ? "scale(1.2)" : "scale(1)",
              }}
              className="rounded-lg border-2 m-2 cursor-pointer transition-transform duration-300 ease-in-out"
            ></div>
          ))}
        </div>
        <button
          onClick={handlePickColor}
          className="bg-green-500 text-white px-4 py-2  hover:bg-blue-600"
        >
          Pick a Color
        </button>
      </div>
      
    </div>
  );
};

export default ColorPicker;
