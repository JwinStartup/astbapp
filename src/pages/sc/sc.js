import React, { useEffect, useState } from 'react'
import Entete from '../../components/Entete/entete'
import Fmenu from '../../components/fmenu/fmenu'
import './sc.css'
import {Controller, FormProvider, useFieldArray, useForm, useWatch} from 'react-hook-form'
import TableProduit from '../../components/table_produit/table_produit'
import { FaChevronLeft } from 'react-icons/fa'
import { useNavigate, useParams } from 'react-router-dom'
import { fetchWrapper } from '../../reducer/helpers/helpers'
import SousEntet from '../../components/functionSousEntet/functionSousEntet'
import { ThreeDots } from 'react-loader-spinner'
const initialSc={
  produit_service_propose:"",
  positionnement:"",
  slogan:"",
  moyen_promotion:"",
  objectif_vente:"",
  moyen_strategique:"",
  chiffre_affaire:"",
  benefice:"",
  nom_lieu:"",
}
function Sc (){
  const navigate = useNavigate()
  const [loading,setLoading]= useState(false)
  const {bid,id} = useParams()
const methods=useForm({
  defaultValues:async ()=>await fetchWrapper.get(`http://localhost:8080/api/strategieCom/voir/${id}`) || initialSc
  })
 
  const onSubmit= async d=>{
      console.log(d)
      const response = await fetchWrapper.post("http://localhost:8080/api/strategieCom/modifie",d); 
      if(response){
        setLoading(false)
        navigate(`/projet/businessplan/${bid}`)
       }
    }
    useEffect(()=>{
      methods.setValue('_id',{id})
 },[])
   
    return(
        <div className="BusinesPlan">
          <Entete/>
          <SousEntet parent='Business plan' enfant='Strategie commerciale'/>
          <div className="HautBp">
          <div >
                    
                    <ol  style={{background:'white',width:"300px",borderRadius:"30px",marging:"5px",padding:"35px",height:"200px",listStyleType:'upper-roman'}}>
                    <li style={{margin:'5px'}}> 
                     <a href="#scbsl" > LA STRATEGIE COMMERCIALE BASEE SUR LES 4P</a>
                    
                       <ol type='1' >
                       <li> 
                       <a href="#pos">Produit ou service</a></li>
                       <li> 
                       <a href="#px" >Prix</a></li>
                       <li> 
                       <a href="#pe">Place</a></li>
                       <li>
                        <a href="#pn">Promotion</a>
                       </li>
                       </ol>
                     </li>

                     <li style={{margin:'5px'}}> 
                     <a href="#om" > OBJECTIFS MARKETING</a>
                    
                       <ol type='1'>
                       <li> 
                       <a href="#odv" >Objectif de vente</a></li>
                       <li> 
                       <a href="#of" >Objectif financier</a></li>
                       
                       </ol>
                       
                     </li>
                     <li style={{margin:'5px'}}> 
                     <a href="#ms" > MOYENS STRATEGIQUES</a></li>

                   </ol>
               
                </div>  
                <div className="gaucheB">
                <FormProvider {...methods} >
                <form onSubmit={methods.handleSubmit(onSubmit)} autoComplete='off'>
                <div class="containers">
               <ol type="I">
                  <h2><li id='scbsl'>LA STRATEGIE COMMERCIALE BASEE SUR LES 4P</li></h2>

                  <ol type="1">
                  <h3><li id='pos'>Produit ou service</li></h3>
                  <p>Produits / services proposés par l'entreprise : <br/><br/><textarea {...methods.register("produit_service_propose")}   id="" cols="50" rows="15"></textarea></p><br/>
                  <h3><li id='px'>Prix</li></h3>
                  <p>
                      La réprésentation des produits / services ci-dessous: <br/><br/>
                      <TableProduit/>
                      <p>
                        Ces prix proposés et la qualité des (produits / services) feront la différence 
                        et leur donneront des offres us alléchantes par rapport à celles des concurents.
                      </p><br/>
                  </p>

                  <h3><li id='pe'>Place (positionnement)</li></h3>
                  <p>Le positionnement choisi pour cette entreprise est la ville de : <input {...methods.register("positionnement")} type="text" />, précisément dans la commune de : (nom de la commune, du quartier et du repère géographique précis) <input {...methods.register("nom_lieu")} type="text" />.
                    <br />   Cette entreprise se différenciera par la qualification de son personnel et la qualité de ces (produits /services). Son  slogan sera : « <input {...methods.register("slogan")} type="text" /> ». 
                  </p><br/>
                  <h3><li id='pn'>Promotion (communication)</li></h3>
                  <p>La promotion ou la communication se fera par les moyens suivants: <br/><br/> <textarea {...methods.register("moyen_promotion")}   id="" cols="50" rows="15"></textarea> </p>
                  </ol><br/>


                  <h2><li id='om'>OBJECTIFS MARKETING</li></h2>
                  <ol type="1">
                      <h3><li id='odv'>Objectif de vente</li></h3>
                      <p>L’entreprise compte atteindre un objectif de vente de <input {...methods.register("objectif_vente")} type="text" /> (Produits /services) par (jour/semaine/mois/trimestre/semestre/an)</p><br/>
                      
                      <h3><li id='of'>Objectif financier</li></h3>
                      <p> Ce qui lui permettra de réaliser un chiffre d’affaire (journalier/hebdomadaire /mensuel/trimestriel/semestriel/annuel) de <input {...methods.register("chiffre_affaire")} type="text"/> de FCFA et un bénéfice de <input {...methods.register("benefice")} type="text"  />. FCFA.</p>
                  </ol><br/>

                  <h2><li id='ms'>MOYENS STRATEGIQUES</li></h2>
                  <ol><p>Pour attirer et fidéliser plus de clients l'entreprise déploiera les moyens strategiques de marketing suivants: <br/><br/>
                     <textarea {...methods.register("moyen_strategique")}   id="" cols="50" rows="15"></textarea></p>
                    </ol><br/>
              </ol>

              <div class="envoyer">
              <button  type="submit" className="submit">
                       {loading===true && <ThreeDots 
                          height="20" 
                          width="20" 
                          radius="9"
                          color="white" 
                          ariaLabel="three-dots-loading"
                          wrapperStyle={{margin:"5px"}}
                          wrapperClassName=""
                          visible={true}
                        />}
                        ENVOYER</button>
                        <button onClick={()=>navigate(`/pdf/sc/${id}`)} type="submit" className="submit">Télècharger le pdf</button> 
             </div><br/>
              </div>
         
    </form>    
    </FormProvider>
                
                 </div>
          
          </div> 

        </div>
            
 
    )
}
export default Sc