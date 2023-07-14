import React from "react";
import "./MesReservations.css";
import {
  MdEdit,
  MdOutlineDeleteOutline,
  MdAccessTimeFilled,
} from "react-icons/md";

const MesReservations = () => {
  return (
    <>
      <div>
        <h2 className="title">Mes Réservations </h2>
      </div>

      <div className="container">
        <div className="column">Column1</div>
        <div className="column">
          <MdAccessTimeFilled className="icon-time" />
        </div>
        <div className="column">Column 3 </div>
        <div className="column">Column 4 </div>
        <div className="column">
          <MdEdit className="icon-edit" />
          <MdOutlineDeleteOutline className="icon-delete" />
        </div>
      </div>
    </>
  );
};

export default MesReservations;
