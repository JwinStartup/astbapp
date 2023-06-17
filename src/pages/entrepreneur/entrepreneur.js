import React from 'react'
import Entete from '../../components/Entete/entete'
import Fmenu from '../../components/fmenu/fmenu'
import "./entrepreneur.css"
function Entrepreneur() {
  return (
    <div className="BusinesPlan">
        <Entete/>
    <div className="HautBp">  
        <div className="droitbsp"><Fmenu/></div>  
        <div className="gaucheB">
           <div> 
            <h1>PRESENTATION DU / DES PROMOTEUR(S)</h1>
             <div>
                <div>
                    <imput className="nomPrenom"/>          
                    <imput className="age"/>
                    <imput className="situation"/>
                    <imput className="contact"/>
                    <imput className="enail"/>
                </div>
                <div></div>
             </div>
             </div> 
             <div>
                <h1>DOMAINES DE COMPETENCES</h1>
                <textarea rows={7} cols={5}/>
             </div>
             <div>
                <h1>CURSUS SCOLAIRE-UNIVERSITAIRE ET DIPLOMES OBTENUS</h1>
                <div>
                    <h4>ANNEES</h4>
                    <h4>LISTES DES FORMATIONS ET DIPLOMES OBTENUS</h4>
                </div>
               <div> <imput className="annee"/>
                <imput className="diplome"/>
                </div>
                
             </div>
             <div>
                <h1>EXPERIENCES PROFESSIONNELLES</h1>
                <div>
                    <h4>ANNEES</h4>
                    <h4>LISTES DES EXPERIENCES PROFESSSIONNELLE ACQUISES</h4>
                </div>
               <div> <imput className="annee"/>
                <imput className="diplome"/>
                </div>
                 </div>
                 <div>
                <h1>ATOUTS ET DIVERS</h1>
                <imput className="nomPrenom"/>
                <imput className="nomPrenom"/>
                <imput className="nomPrenom"/>                   
                 </div>
                     
        </div>
        </div>
    </div>
  )
}

export default Entrepreneur