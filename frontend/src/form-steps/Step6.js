import React from "react";
import "./Step1.css";
import "./Step6.css";

export default function Step6() {
  return (
    <>
      <div className="step-6">
        <h2 className="confirmation">Réservation confirmée !</h2>
        <p className="confirmation-succes">
          Votre réservation a été confirmée avec succès.
        </p>
        <p className="modification">
          Si vous souhaitez modifier votre réservation, veuillez Cliquez ici.
        </p>
      </div>
    </>
  );
}
