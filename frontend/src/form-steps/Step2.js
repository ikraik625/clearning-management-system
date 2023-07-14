import React from "react";
import "./Step1.css";
import "./Step2.css";

export default function Step2({
  selectedAddons,
  handleAddonToggle,
  handleNextStep,
  handleBackStep,
}) {
  return (
    <>
      <label>Step 2: Options:</label>
      <div className="addon-buttons">
        <button
          className={`addon-button ${
            selectedAddons.includes("fridge") ? "selected" : ""
          }`}
          onClick={() => handleAddonToggle("fridge")}
          type="button"
        >
          Réfrigérateur
          <br /> 200 Dhs
        </button>
        <button
          className={`addon-button ${
            selectedAddons.includes("oven") ? "selected" : ""
          }`}
          onClick={() => handleAddonToggle("oven")}
          type="button"
        >
          Four <br />
          200 Dhs
        </button>
        <button
          className={`addon-button ${
            selectedAddons.includes("cabinet") ? "selected" : ""
          }`}
          onClick={() => handleAddonToggle("cabinet")}
          type="button"
        >
          Placard
          <br /> 200 Dhs
        </button>
        <button
          className={`addon-button ${
            selectedAddons.includes("windows") ? "selected" : ""
          }`}
          onClick={() => handleAddonToggle("windows")}
          type="button"
        >
          Fenêtres <br /> 200 Dhs
        </button>
        <button
          className={`addon-button ${
            selectedAddons.includes("laundry") ? "selected" : ""
          }`}
          onClick={() => handleAddonToggle("laundry")}
          type="button"
        >
          Laverie
          <br /> 200 Dhs
        </button>
      </div>
      <button type="button" className="next-button" onClick={handleNextStep}>
        Suivant
      </button>
      <button type="button" className="back-button" onClick={handleBackStep}>
        Précédant
      </button>
    </>
  );
}
