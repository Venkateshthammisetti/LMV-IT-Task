import React, { useState } from "react";
import "./index.css";
import MaleCard from "../MaleCard";
import FemaleCard from "../FemaleCard";

const Home = () => {
  const [isClickedMale, setIsClickedMale] = useState(true);
  const [isClickedFemale, setIsClickedFemale] = useState(false);
  const [pincode, setPincode] = useState("");
  const [pincodeError, setPincodeError] = useState("");

  const maleFunction = () => {
    setIsClickedMale(true);
    setIsClickedFemale(false);
    console.log("male clicked");
  };
  const femaleFunction = () => {
    setIsClickedFemale(true);
    setIsClickedMale(false);
    console.log("female clicked");
  };

  const handlePincodeChange = (event) => {
    const { value } = event.target;
    if (/^\d{0,6}$/.test(value)) {
      setPincode(value);
      setPincodeError("");
    } else {
      setPincodeError("Please enter a valid 6-digit pincode.");
    }
  };

  const handleSubmit = () => {};

  return (
    <>
      <div className="home-conatiner">
        <h1 className="heading1">Find the right health plan for you </h1>
      </div>

      <div className="main-elements-container">
        <div className="elemets">
          <div className="main-items">
            <button
              className={isClickedMale ? "clicked" : "gender-button"}
              onClick={maleFunction}
            >
              Male
            </button>
            <button
              className={isClickedFemale ? "clicked" : "gender-button"}
              onClick={femaleFunction}
            >
              Female
            </button>
          </div>

          {isClickedMale && <MaleCard />}
          {isClickedFemale && <FemaleCard />}

          <div className="input-container">
            <label>Pincode</label>
            <input
              type="text"
              placeholder="SEARCH YOUR AREA PINCODE"
              className="input-pincode"
              value={pincode}
              onChange={handlePincodeChange}
            />
            {pincodeError && (
              <p className="error-message" style={{ color: "red" }}>
                {pincodeError}
              </p>
            )}
          </div>

          <div className="button-next">
            <button onClick={handleSubmit}>Next</button>
          </div>
        </div>

        <img
          src="https://www.squareinsurance.in/assets/newdesign/square_images_web/health_page_proquotes.svg"
          alt="doc-image"
          className="doc-image"
        />
      </div>
    </>
  );
};

export default Home;
