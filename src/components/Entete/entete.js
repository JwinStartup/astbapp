import "./entete.css";
import photoLo from "../../Assets/BGSVG/paulPhoto.jpg";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../../reducer/store/store_index";
import { FaUserCircle } from "react-icons/fa";

const Entete = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const { auth } = useSelector((state) => state);
  const onSubmit = (e) => {
    e.preventDefault();
    return dispatch(authActions.logout());
  };
  console.log(auth);
  return (
    <div>
      <nav className="entete">
        <div>
          <Link to="/" id="logo">
            AsTraining Business
          </Link>{" "}
        </div>
        <ul>
          {auth.user != null && (
            <li>
              {auth.user.user.typeUser == "admin" && (
                <Link
                  style={{
                    textDecoration:
                      /^\/dashboard/.test(location.pathname) == true &&
                      "underline 2px double #9ccbf2",
                  }}
                  to="/dashboard"
                >
                  Dashboard
                </Link>
              )}
            </li>
          )}
          <li>
            {auth.user != null && (
              <Link
                style={{
                  textDecoration:
                    /^\/projet/.test(location.pathname) == true &&
                    "underline 2px double #9ccbf2",
                }}
                to="/projet"
              >
                Projet
              </Link>
            )}
          </li>
          <li>
            <Link
              style={{
                textDecoration:
                  /^\/apropos/.test(location.pathname) == true &&
                  "underline 2px double #9ccbf2",
              }}
              to="/apropos"
            >
              A propos
            </Link>
          </li>

          {auth.user == null ? (
            <li className="btnCon">
              <Link to="/connexion">Connectez-vous</Link>
            </li>
          ) : (
            <li>
              <ul className="menuProfil">
                <li>
                  <a>
                    <FaUserCircle size={40} color={"gray"} className="faUser" />
                    {auth.user.user.nom == undefined ? (
                      <p className="nomProfile">
                        {auth.user.user.nom_utilisateur}
                      </p>
                    ) : (
                      <p className="nomProfile">
                        {auth.user.user.nom} {auth.user.user.prenom}{" "}
                      </p>
                    )}
                  </a>

                  <ul className="sous-menu">
                    <li>
                      <Link to={`/profil/${auth.user.user._id}`}>
                        Voir profil
                      </Link>
                    </li>
                    {auth.user != null && (
                      <li
                        style={{
                          border: "1px solid red",
                          borderRadius: "20px",
                          height: "40px",
                          marginBottom: "10px",
                        }}
                      >
                        <a onClick={(e) => onSubmit(e)}>Déconnecter</a>
                      </li>
                    )}
                  </ul>
                </li>
              </ul>
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
};
export default Entete;
