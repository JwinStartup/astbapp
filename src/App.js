import * as React from "react";
import {history}from './reducer/helpers/helpers'
import { Routes, Route, BrowserRouter, Navigate, useNavigate, useLocation, useParams} from "react-router-dom";
import "./App.css";


import FormationInscription from "./pages/FormationInscription/FormationInscription.js"
import MotDePassOublie from "./pages/MotDePassOublie/MotDePassOublie.js"
import MotDePassChange from "./pages/MotDePassOublie/MotDePassChange.js"
import Profil from "./pages/profil/profil.js"
/* importation des  pages  d'inscription*/
import InscriptionParGoogle from "./pages/inscriptionParGoogle/inscriptionParGoogle.js";
import InscriptionParFacebook from "./pages/inscriptionParFacebook/inscriptionParFacebook.js";


/* importation des  pages  de business*/
import CreerBusinessPLan from "./pages/CreerBusinessPLan/CreerBusinessPLan"


import FormulairePeById from "./pages/pe/pe.js"
import PeById from "./pages/PeById/PeById.js"

import FormulairePfpById from "./pages/FormulairePfpById/FormulairePfpById"
import PfpById from "./pages/PfpById/PfpById.js"

import FormulaireGopById from "./pages/FormulaireGopById/FormulaireGopById"
import GopById from "./pages/GopById/GopById"

import Em from "./pages/em/em.js"
import EmById from "./pages/EmById/EmById"

import Sc from "./pages/sc/sc"
import ScById from "./pages/sc/sc"

import Pfe from "./pages/FormulairePfeById/FormulairePfeById"
import PfeById from "./pages/PfeById/PfeById"

import FormulaireDeById from "./pages/FormulaireDeById/FormulaireDeById.js"
import DeById from "./pages/DeById/DeById"

/* importation des  pages  de rfinancement*/

import CreerRfinancement from "./pages/CreerRfinancement/CreerRfinancement"
import RfinancementById from "./pages/RfinancementById/RfinancementById"


import ModeById from "./pages/ModeById/ModeById"

import FormulaireEpargneById from "./pages/FormulaireEpargneById/FormulaireEpargneById"
import EpargneById from "./pages/EpargneById/EpargneById"

import FormulaireApportById from "./pages/FormulaireApportById/FormulaireApportById.js"
import ApportById from "./pages/ApportById/ApportById.js"


import FormulairePpById from "./pages/FormulairePpById/FormulairePpById.js"
import PpById from "./pages/PpById/PpById.js"


import FormulaireLoveMoneyById from "./pages/FormulaireLoveMoneyById/FormulaireLoveMoneyById"
import LoveMoneyById from "./pages/LoveMoneyById/LoveMoneyById"

import FormulairePretById from "./pages/FormulairePretById/FormulairePretById.js"
import PretById from "./pages/PretById/PretById.js"

import FormulaireAppelAssocieById from "./pages/FormulaireAppelAssocieById/FormulaireAppelAssocieById.js"
import AppelAssocieById from "./pages/AppelAssocieById/AppelAssocieById"


import FormulaireSubventionById from "./pages/FormulaireSubventionById/FormulaireSubventionById.js"
import SubventionById from "./pages/SubventionById/SubventionById.js"



import Formation from "./pages/formation/formation";
import Dashboard from "./pages/dashboard/dashboard.js";
import Apropos from "./pages/apropos/apropos";
import Home from "./pages/home/home";
import CreerProjet from "./pages/creerProjet/creerProjet.js";
import Pe from "./pages/pe/pe.js";
import Inscription from "./pages/inscription/inscription";
import Connexion from "./pages/connexion/connexion";
import MotDePassForbiden from "./pages/MotDePassForbiden/MotDePassForbiden.js";
import Validation from "./pages/validation/Validation";
import InscriptionFormation from "./pages/inscriptionFormation/inscriptionFormation"
import Monprojet from "./pages/monprojet/monprojet";
import Test from "./pages/text/test";
import Pp from "./pages/pp/pp.js";
//import Em from "./pages/em/em.js";
import Gop from "./pages/gop/gop";
import Pfp from "./pages/pfp/pfp";
import Getpp from "./pages/pp/getpp";
import AuthContext from './context/auth-context'
import PrivateRouter from './context/private-router.js'

import Projet from "./pages/projet/projet";
import SupprimerProjet from "./pages/projet/supprimer_projet.js";
import ModifieProjet from "./pages/projet/modifie_projet.js";


import ProjetById from "./pages/projetById/projetById";
import ListeProjet from "./pages/ListeProjet/ListeProjet.js";

import ProjetByIdVerouiller from './pages/projetVerouiller/projetVerouiller.js'
import { useSelector } from "react-redux";
import EmPdf from "./pages/pdf/busimessPlan/em";
import PPpdf from "./pages/pdf/busimessPlan/pp";
import Pepdf from "./pages/pdf/busimessPlan/pe";
import Scpdf from "./pages/pdf/busimessPlan/sc";
import Goppdf from "./pages/pdf/busimessPlan/gop";
import Pfppdf from "./pages/pdf/busimessPlan/pfp";

import Epargnepdf from "./pages/pdf/rfinancement/epargne.js";
import AppelAssociepdf from "./pages/pdf/rfinancement/AppelAssocie.js";
import Subventionpdf from "./pages/pdf/rfinancement/Subvention.js";
import Pretpdf from "./pages/pdf/rfinancement/Pret.js";
import LoveMoneypdf from "./pages/pdf/rfinancement/LoveMoney.js";
import Apportpdf from "./pages/pdf/rfinancement/Apport.js";
import ListeUtilisateurs from './pages/liste/utilisateurs.js'
import DashboardProjet from './pages/DashboardProjet/DashboardProjet.js'

function App() {
  const{id} =useParams()
  history.navigate = useNavigate();
  history.location = useLocation();
 
  return (
   
       
    <div className="App">
       <Routes>

                 {/*  ------------------------------------------- Redirection des pages -----------------------------*/}

          <Route path="*" element={<Navigate to="/" />} />
          
          {/*  ------------------------------------------- Routage des pages rubriques et autres -----------------------------*/}

          <Route path="/" element={<Home/>} />
          <Route path="/apropos" element={<Apropos/>} /> 
          <Route path="/connexion" element={<Connexion/>} />
          <Route path="/MotdepassOublie" element={<MotDePassForbiden/>}/>
       
          {/*  ------------------------------------------- Routage des pages inscription -----------------------------*/}
        <Route path="/inscription/parFacebook" element={< InscriptionParGoogle/>} />
        <Route path="/inscription/parGoogle" element={<InscriptionParGoogle />} />
        <Route path="/inscription/:id/validation" element={<Validation />} />

          {/*  ------------------------------------------- Routage des pages connexion -----------------------------*/}

          <Route path="/MotdepasseChange" element={<MotDePassChange/>} />





          {/*  ------------------------------------------- Routage des pages formation  -----------------------------
          <Route path="/formation/inscription" element={<InscriptionFormation />} />
        <Route path="/formation/test" element={<PrivateRouter> <Test/> </PrivateRouter>} />*/}


                  {/****************************** Routage de  la page formation ************************************/}
        
         <Route path="/modifie_informations/:id" element={<InscriptionFormation/>} />
         <Route path="/test" element={<PrivateRouter><Test/></PrivateRouter>}/>

          {/****************************** Routage de  la page inscription ************************************/}
        

        
        { /*----------------------------- ******************* routage de projet **************** ----------------------------  */ }
        <Route path="/projet" element={<PrivateRouter><Projet/></PrivateRouter>}/>        
        <Route path="/projet/creer" element={<CreerProjet/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/dashboard/projet" element={<DashboardProjet/>}/>
        <Route path="/dashboard/inscription" element={<Inscription/>}/>
        <Route path="/dashboard/utilisateurs" element={<ListeUtilisateurs/>}/>
        <Route path="/projet/:id" element={<ProjetById/>}/>
        <Route path='/projet/:id/verouiller' element={<ProjetByIdVerouiller/>}/>
        <Route path="/projet/supprimer" element={<SupprimerProjet/>} />
        <Route path="/projet/modifie" element={<ModifieProjet/>} />

         { /* -------------------- ******** routage des elements de projet/:id ******* ----------------------- */ }
                      
          { /* ---------- ***** routage des elements de projet/:id/projet/businessplan ***** ---------- */ }
        
        <Route path="/projet/businessplan/:id" element={<CreerBusinessPLan/>}/>
      
        
                     {/* --routage des elements de projet/:id/projet/businessplan/pe--*/ }

        <Route path="/projet/businessplan/:bid/pe/:id" element={<FormulairePeById/>}/>

                     {/* --routage des elements de projet/:id/projet/businessplan/pp--*/ }

        <Route path="/projet/businessplan/:bid/pp/:id" element={<Pp/>}/>
                     {/* --routage des elements de projet/:id/projet/businessplan/pfp--*/ }

        <Route path="/projet/businessplan/:bid/pfp/:id" element={<Pfp/>}/>


                      {/* --routage des elements de projet/:id/projet/businessplan/gop--*/ }

        <Route path="/projet/businessplan/:bid/gop/:id" element={<Gop/>}/>


                     {/* --routage des elements de projet/:id/projet/businessplan/em--*/ }

        <Route path="/projet/businessplan/:bid/em/:id" element={<Em/>}/>


                    {/* --routage des elements de projet/:id/projet/businessplan/sc--*/ }

        <Route path="/projet/businessplan/:bid/sc/:id" element={<Sc/>}/>


                     {/* --routage des elements de projet/:id/projet/businessplan/pfe--*/ }




                    {/* --routage des elements de projet/:id/projet/businessplan/de--*

        <Route path="/de/:id" element={<FormulaireDeById/>}/>/ }


       { /* ------------------ **** routage des elements de projet/:id/projet/rFinancement **** --------------- */ }

       
       <Route path="/projet/rFinancement/:id" element={<CreerRfinancement/>}/>
       
      {/* <Route path="/projet/:id/rFinancement/:id" element={<RfinancementById/>}/>*/}
        
                     {/* --routage des elements de projet/:id/rFinancement/:id/mode--*/ }
         <Route path="/projet/rFinancement/:rid/mode" element={<ModeById/>}/>

                     {/* --routage des elements de projet/:id/projet/projet/projet/projet/rFinancement/:id/Epargne--*/ }

        <Route path="/projet/rFinancement/:rid/Epargne/:id" element={<FormulaireEpargneById/>}/>
     { /*<Route path="/:id/Epargne/:id" element={<EpargneById/>}/>*/}

                     {/* --routage des elements de projet/:id/projet/rFinancement/:id/Apport--*/ }

        <Route path="/projet/rFinancement/:rid/Apport/:id" element={<FormulaireApportById/>}/>
        {/*<Route path="/:id/Apport/:id" element={<ApportById/>}/>*/}


                      {/* --routage des elements de projet/:id/rFinancement/:id/loveMoney--*/ }

        <Route path="/projet/rFinancement/:rid/LoveMoney/:id" element={<FormulaireLoveMoneyById/>}/>
      { /* <Route path="/:id/LoveMoney/:id" element={<LoveMoneyById/>}/>*/}


                     {/* --routage des elements de projet/:id/rFinancement/:id/pret--*/ }

        <Route path="/projet/rFinancement/:rid/pret/:id" element={<FormulairePretById/>}/>
        {/*<Route path="/:id/pret/:id" element={<PretById/>}/>*/}


                    {/* --routage des elements de projet/:id/rFinancement/:id/AppelAssocie--*/ }

        <Route path="/projet/rFinancement/:rid/AppelAssocie/:id" element={<FormulaireAppelAssocieById/>}/>
       {/* <Route path="/AppelAssocie/:id" element={<AppelAssocieById/>}/>*/}


                     {/* --routage des elements de projet/:id/rFinancement/:id/Subvention--*/ }

        <Route path="/projet/rFinancement/:rid/Subvention/:id" element={<FormulaireSubventionById/>}/>
       {/* <Route path="/:id/Subvention/:id" element={<SubventionById/>}/>*/}

                                                      {/* -- routage page profil */}

        <Route path="/profil/:id" element={<Profil/>}/>



        
        
        {/*<Route path='/projet/:id/verouiller' element={<ById/>}/>*/}
        {/*pdf page */}

        <Route path="/pdf/em/:id" element={<EmPdf/>}/>
        <Route path="/pdf/pp/:id" element={<PPpdf/>}/>
        <Route path="/pdf/pe" element={<Pepdf/>}/>
        <Route path="/pdf/sc/:id" element={<Scpdf/>}/>
        <Route path="/pdf/gop" element={<Goppdf/>}/>
        <Route path="/pdf/pfp" element={<Pfppdf/>}/>

        <Route path="/pdf/epargne" element={<Epargnepdf/>}/>
        <Route path="/pdf/AppelAssocie" element={<AppelAssociepdf/>}/>
        <Route path="/pdf/Subvention" element={<Subventionpdf/>}/>
        <Route path="/pdf/Pret" element={<Pretpdf/>}/>
        <Route path="/pdf/LoveMoney" element={<LoveMoneypdf/>}/>
        <Route path="/pdf/Apport" element={<Apportpdf/>}/>








         
        

      </Routes>
    </div>
    
  );
}

export default App;
