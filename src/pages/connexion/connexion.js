import React, { Component, useContext, useEffect, useState } from "react";
import Homme from "../../Assets/BGSVG/Homme.svg";
import Voile from "../../Assets/BGSVG/voile.svg";
import arc from "../../Assets/BGSVG/Polygone1.svg";
import Vert from "../../Assets/BGSVG/PolygoneV.png";
import Poli from "../../Assets/BGSVG/Polygone3.png";
import { Link, useNavigate } from "react-router-dom";
import "./connexion.css";
import Entete from "../../components/Entete/entete";
import { useForm } from "react-hook-form";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";
//import AuthContext from '../../context/auth-context'
import { useSelector, useDispatch } from "react-redux";

import { history } from "../../reducer/helpers/helpers";
import { authActions } from "../../reducer/store/store_index";
const initialState = {
  email: "",
  password: "",
};

function Connexion() {
  const dispatch = useDispatch();
  const authUser = useSelector((x) => x.auth.user);
  const authError = useSelector((x) => x.auth.error);
  // const context = useContext(AuthContext)
  useEffect(() => {
    // redirect to home if already logged in
    if (authUser) history.navigate("/");

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // const navigate=useNavigate()
  // const [loading,setLoading]=useState(false);
  const { register, handleSubmit, formState } = useForm({
    defaultValues: initialState,
  });
  const { errors, isSubmitting } = formState;

  const onSubmit = ({ email, password }) => {
    return dispatch(authActions.login({ email, password }));
  };

  return (
    <div className="connexion">
      <Entete />
      <img src={arc} className="gaucheArc" />
      <img src={Poli} className="gaucheP" />
      <img src={Vert} className="gaucheV" />
      <div className="form">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="formText">
            <h2>Connectez - Vous</h2>
            <h4>Bienvenu(e)(s), Vous pouvez maintenant vous connecter</h4>
          </div>
          <div className="divEMP">
            {authError && <spam>{authError.message}</spam>}
            <div>
              <p>E-mail</p>
              <input
                {...register("email", {
                  required: `e-mail est requis`,
                  pattern:
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                })}
                type="email"
                id="email"
                className="inputEmail"
                placeholder="Entrer votre Email"
              />
            </div>
            {errors.email && <spam>{errors.email.message}</spam>}
            <div>
              <p>Mot de passe</p>
              <input
                {...register("password", {
                  required: `Password  requis`,
                  minLength: {
                    value: 8,
                    message:
                      "Votre mot de passe doit avoir au mois 8 caractères",
                  },
                })}
                id="password"
                type="password"
                className="inputMot"
                placeholder="Entrer votre mot de passe"
              />
              {errors.password && <spam>{errors.password.message}</spam>}
            </div>
            <button
              type="submit"
              className="btnConf"
              style={{
                cursor: "pointer",
                display: "flex",
                height: "35px",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {isSubmitting && (
                <ThreeDots
                  height="20"
                  width="20"
                  radius="9"
                  color="white"
                  ariaLabel="three-dots-loading"
                  wrapperStyle={{ margin: "5px" }}
                  wrapperClassName=""
                  visible={true}
                />
              )}{" "}
              Connectez-vous
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default Connexion;
