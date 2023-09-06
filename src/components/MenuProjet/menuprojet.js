import React from "react";
import "./menuprojet.css";
import { RiBookMarkFill } from "react-icons/ri";
import { GiReceiveMoney } from "react-icons/gi";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
function Menuprojet({ data }) {
  const navigate = useNavigate();
  const { user: authUser } = useSelector((x) => x.auth);

  return (
    <div className="menuprojet">
      <button
        style={{
          width: "254px",
          height: "250px",
          border: "none",
          borderRadius: "20px",
          margin: "10px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          boxShadow: " 0px 0px 0.5px 1px #4544444d",
        }}
        className="btnStyle"
        onClick={() => navigate(`/projet/businessplan/${data.businessPlan}`)}
      >
        <RiBookMarkFill size={25} />
        <p style={{ fontSize: "16px" }}> Je redige mon business plan</p>
      </button>
      <button
        style={{
          width: "254px",
          height: "250px",
          border: "none",
          borderRadius: "20px",
          margin: "10px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          boxShadow: " 0px 0px 0.5px 1px #4544444d",
        }}
        className="btnStyle"
        onClick={() => {
          data.aChoisirMode == false
            ? navigate(`/projet/rFinancement/${data.rechercheFinancement}/mode`)
            : navigate(`/projet/rFinancement/${data.rechercheFinancement}`);
        }}
      >
        <GiReceiveMoney size={25} />
        <p style={{ fontSize: "16px" }}> Je recherche mon financement</p>
      </button>
    </div>
  );
}

export default Menuprojet;
