import "./btnHome.css";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../../reducer/store/store_index";

const BtnHome = () => {
  const dispatch = useDispatch();
  const { auth } = useSelector((state) => state);
  const navigate = useNavigate();
  console.log(auth);
  return (
    <div>
      {/* <button onClick={()=>navigate("/dashboard/inscription")} className="button1">Je m'inscris </button > */}
      {auth.user == null ? (
        <div>
          <button onClick={() => navigate("/connexion")} className="button1">
            Je me connecte
          </button>
        </div>
      ) : (
        <div>
          {auth.isLoader == false && (
            <div>
              {auth.estTeste === false ? (
                <div>
                  {auth.user.user.estTeste === false ? (
                    <button
                      onClick={() => navigate("/test")}
                      className="button2"
                    >
                      Je passe mon test du profil d'entrepeneur
                    </button>
                  ) : (
                    <button
                      onClick={() => navigate(`/projet/creer`)}
                      className="button3"
                    >
                      Je cree un nouveau projet
                    </button>
                  )}
                </div>
              ) : (
                <div>
                  <button
                    onClick={() => navigate(`/projet/creer`)}
                    className="button3"
                  >
                    Je cree un nouveau projet
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
export default BtnHome;
