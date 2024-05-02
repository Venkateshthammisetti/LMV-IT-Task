import React, { useState } from "react";

const userData = [
  {
    img: "https://www.squareinsurance.in/assets/newdesign/square_images_web/wife_icon.svg",
    name: "Self",
  },
  {
    img: "https://www.squareinsurance.in/assets/newdesign/square_images_web/self_icon.svg",
    name: "Spouse",
  },
  {
    img: "https://www.squareinsurance.in/assets/newdesign/square_images_web/son_icon.svg",
    name: "Son",
  },
  {
    img: "https://www.squareinsurance.in/assets/newdesign/square_images_web/daughter_icon.svg",
    name: "Daughter",
  },
  {
    img: "https://www.squareinsurance.in/assets/newdesign/square_images_web/father_icon.svg",
    name: "Father",
  },
  {
    img: "https://www.squareinsurance.in/assets/newdesign/square_images_web/mother_icon.svg",
    name: "Mother",
  },
];

function FemaleCard() {
  const [selected, setSelected] = useState([]);

  const handleColorChange = (index) => {
    // If the index is already selected, remove it, otherwise add it to the selected array
    const selectedIndex = selected.indexOf(index);
    if (selectedIndex === -1) {
      setSelected([...selected, index]);
    } else {
      const updatedSelected = [...selected];
      updatedSelected.splice(selectedIndex, 1);
      setSelected(updatedSelected);
    }
  };

  return (
    <>
      <div className="card-items-conatiner">
        {userData.map((each, index) => {
          const { img, name } = each;
          const isSelected = selected.includes(index);
          return (
            <div
              className="cards"
              key={index}
              onClick={() => handleColorChange(index)}
              style={{
                backgroundColor: isSelected ? "#03a9f4" : "white",
                color: isSelected ? "white" : "black",
              }}
            >
              <img src={img} alt="img" />
              <p>{name}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default FemaleCard;
