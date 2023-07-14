import React from "react";
import "./Step1.css";
import "./Step3.css";

export default function Step3({
  firstName,
  lastName,
  email,
  address,
  city,
  telephone,
  error,
  handleInputChange,
  handleNextStep,
  handleBackStep,
}) {
  return (
    <>
      <label>Step 3: Informations</label>
      <div className="information-inputs step-3">
        <div className="form-group">
          <label className="label-infos" htmlFor="firstName">
            Prénom:
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={firstName}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label className="label-infos" htmlFor="lastName">
            Nom:
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={lastName}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            className="input-email"
            name="email"
            value={email}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label className="label-infos" htmlFor="address">
            Addresse:
          </label>
          <input
            type="text"
            id="address"
            name="address"
            value={address}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label className="label-infos" htmlFor="city">
            Ville:
          </label>
          <input
            type="text"
            id="city"
            name="city"
            value={city}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label className="label-infos" htmlFor="telephone">
            Téléphone:
          </label>
          <input
            type="text"
            id="telephone"
            name="telephone"
            value={telephone}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <button type="button" className="next-button" onClick={handleNextStep}>
        Suivant
      </button>
      <button type="button" className="back-button" onClick={handleBackStep}>
        Précédent
      </button>
      {error && <p className="error-message">{error}</p>}
    </>
  );
}
