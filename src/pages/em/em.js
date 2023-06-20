import React, { useEffect, useState } from 'react'
import Entete from '../../components/Entete/entete'
import Fmenu from '../../components/fmenu/fmenu'
import './em.css'
import {Controller, FormProvider, useFieldArray, useForm, useWatch} from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'
import { FaChevronLeft } from 'react-icons/fa'
import { fetchWrapper } from '../../reducer/helpers/helpers'
import SousEntet from '../../components/functionSousEntet/functionSousEntet'
import { ThreeDots } from 'react-loader-spinner'


const initial={
  marche_local:"",
  marche_local_disperse:"",
  marche_regional:"",
  marche_national:"",
  marche_international:"",
  type_concurrent:"",
  annee_concurrent:"",
  nom_concurrent:"",
  localite_concurrent:"",
  activite_propose_concurrent:"",
  frequence_concurrent:"",
  periode_concurrent:"",
  localisation_fournisseur_concurrent:"",
  tarif_initial_concurrent:"",
  tarif_final_concurrent:"",
  nombre_employes_concurrent:"",
  salaire_employes_concurrent:"",
  chiffre_affaire_initial_concurrent:"",
  chiffre_affaire_final_concurrent:"",
  moyens_concurrent:"",
  forces_concurrent:"",
  nom_client:"",
  localisation_client:"",
  pouvoir_dachat_client:"",
  montant_depense_initial_client:"",
  montant_depense_final_client:"",
  produit_service_prefere_client:"",
  element_apprecie_client:"",
  element_deprecie_client:"",
  nom_fournisseur:"",
  localisation_forurnisseur:"",
  prix_fournisseur:"",
  type_paiement_fournisseur:"",
  moyen_paiement_fournisseur:"",
  delais_livraison_fournisseur:"",
  frequence_livraison_fournisseur:"",
  forces_fournisseur:"",
  faiblesse_fournisseur:""
}
function Em() {
const [loading,setLoading]= useState(false)
const {bid,id} = useParams()
  const navigate = useNavigate()
const methods =useForm({
  defaultValues:async ()=>await fetchWrapper.get(`https://astrainingbusiness-crud.onrender.com/api/etudeMarche/voir/${id}`)})
const onSubmit= async d=>{
  console.log(d)
  const response = await fetchWrapper.post("https://astrainingbusiness-crud.onrender.com/api/etudeMarche/modifie",d); 
  if(response){
    setLoading(false)
    navigate(`/projet/businessplan/${bid}`)
   }  
}
  useEffect(()=>{
    methods.setValue('_id',{id})
},[])
  return (
    <div className="BusinesPlan">
    <Entete/>
   
    <SousEntet parent='Business plan' enfant='Etude de marché'/>
    
    <div className="HautBp">
    <div >
                    
                    <ol  style={{background:'white',width:"300px",borderRadius:"30px",marging:"5px",padding:"30px",height:"200px",listStyleType:'upper-roman'}}>
                    <li style={{margin:'0px 0px 10px 10px'}}> 
                     <a href="#mpe" > MARCHE A PENETRER PAR L'ENTREPRISE</a>
                     </li>

                     <li style={{margin:'10px'}}> 
                     <a href="#econ" > ETUDE DE LA CONCURRENCE</a>
                     </li>
                     
                    <li style={{margin:'10px'}}> 
                      <a href="#ec">ETUDE DE LA CLIENTELE</a>
                     </li>
                     
                    <li style={{margin:'10px'}}> 
                      <a href="#af">ANALYSE DES FOURNISSEURS</a>
                     </li>
                   </ol>
               
                </div>  
        <div className="gaucheB">  
        <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)} autoComplete='off'>
        <div class="containers">

     <ol type="I">

            <h2><li><a id="mpe">MARCHE A PENETRER PAR L'ENTREPRISE</a></li></h2>
             <p>L'entreprise entrera sur les circonscriptions de marchés que sont:</p>
             <ul>
                
                 <li> D'abord sur un marché local qu'est: <input {...methods.register('marche_local')} type="text"  /></li>
                <br /> <li>Ensuite sur un marché local dispersé qu'est:<input {...methods.register('marche_local_disperse')} type="text"  /></li>
                 <br /><li>Aussi sur un marché national qu'est:<input {...methods.register('marche_national')} type="text" /></li> 
                 <br /><li>Enfin sur un marché regional qu'est:<input {...methods.register('marche_regional')} type="text" /></li> 
               <br /> Et <br /> <br /> <li>  sur un marché international qu'est: <input {...methods.register('marche_international')} type="text" />  </li>
                
             </ul>


             <h2><li><a id="econ">ETUDE DE LA CONCURRENCE</a></li></h2>

             <p>L'etude de la concurence révèle que plusieurs (entreprise / personnel) : <input {...methods.register('type_concurrent')} type="text" /> exercent dans ce domaine depuis : (années) <input {...methods.register('annee_concurrent')} type="text"/><br/><br/>
                Les plus reputées sont(listes des entreprises concurrentes de renom): <br/><textarea {...methods.register('nom_concurrent')}  id="" cols="60" rows="10"></textarea><br/><br/>
                Elle se localise généralement à: <input {...methods.register('localite_concurrent')} type="text" /><br/><br/>
                Elles proposent les (services ou produits) que sont : <br/>
                <textarea {...methods.register('activite_propose_concurrent')}  id="" cols="60" rows="10"  ></textarea>
                <br/> Elles s'approvisionnent en moyenne (frequence): <span><input {...methods.register('frequence_concurrent')} type="text" /></span> fois par (jour /semaine /mois /an)
                <span><input {...methods.register('periode_concurrent')} type="text" /></span> en matière première auprès de leurs fournisseurs situés à <input {...methods.register('localisation_fournisseur_concurrent')} type="text" />
                pour des tarifs variant de <span><input {...methods.register('tarif_initial_concurrent')} type="text" /></span> à <span><input {...methods.register('tarif_final_concurrent')} type="text"/></span> par approvisionnement. <br/>
                Ces entreprises emploient géneralement (nombre d'employés): <span><input {...methods.register('nombre_employes_concurrent')} type="text" /></span> personnes qu'elle rémunèrent en moyenne à 
                <span><input {...methods.register('salaire_employes_concurrent')} type="text" /></span> par (heure /jour /semaine /quinzaine /mois)<span><input {...methods.register('periode_salaire_concurrent')} type="text"/></span>
                selon les tâches qui les ont assignés et réalisent des chiffres d'affaires mensuels qui varient de <span><input {...methods.register('chiffre_affaire_initial_concurrent')} type="text" /></span>
                FCFA   à <span><input {...methods.register('chiffre_affaire_final_concurrent')} type="text" /></span> FCFA pour un bénefice moyen mensuel de <input type="text" {...methods.register('benefice_moyen_mensuel_concurrent')}/> FCFA realisé. <br/>
                Pour faire leur promotion, elles procèdent par les moyens suivant: <input {...methods.register('moyens_concurrent')} type="text" /><br/> <br/> 
                 Les principales forces de ces entreprises sont: <br/>
                 <textarea {...methods.register('forces_concurrent')}  id="" cols="60" rows="10" ></textarea><br/>
                 Leurs faiblesses sont les suivantes: <br/>
                 <textarea {...methods.register('faiblesses_concurrent')}  id="" cols="60" rows="10" ></textarea>
            </p> <br/>
            
            
            <h2><li><a id="ec">ETUDE DE LA CLIENTELE</a></li></h2>        
            <p>
                Etude du marché révèle que les principaux client de ces services ou produit sont les suivants: <input {...methods.register('nom_client')} type="text" /><br/>
                Ceux-ci habitent les localités que sont <input {...methods.register('localisation_client')} type="text"/><br/>
                ils ont un pouvoir d'achat (faible /moyen /elevé): <input {...methods.register('pouvoir_dachat_client')} type="text" /> et ils achètent ces (produits / services) 
                en moyenne <span><input {...methods.register('frequence_dachat_client')} type="text"/></span> fois par (semaine /quinzaine /mois). pour des montants variant de <span><input {...methods.register('montant_depense_initial_client')} type="text" /></span> FCFA à <span><input {...methods.register('montant_depense_final_client')} type="text" /></span>FCFA. <br/>
                Leurs produits ou services de consommation préférés sont: <br/>
                <textarea {...methods.register('produit_service_prefere_client')}  id="" cols="60" rows="10" ></textarea><br/>
                Les elements que les clients apprécient au niveau de ces produits ou services sont les suivants: <br/>
                <textarea {...methods.register('element_apprecie_client')}  id="" cols="60" rows="10" ></textarea><br/>
                Ils  déprécient cependant les elements suivants au niveau de ces produits ou services:<br/>
                <textarea {...methods.register('element_deprecie_client')}  id="" cols="60" rows="10" ></textarea>
            </p><br/>


            <h2><li> <a id="af">ANALYSE DES FOURNISSEURS</a></li></h2> 

                <p>
                    Les principaux fournisseurs de ses entreprises: <br/>
                    <textarea {...methods.register('nom_fournisseur')}  id="" cols="60" rows="10" ></textarea> <br/>
                    Ceux-ci se situent géneralement à : <br/>
                    <textarea {...methods.register('localisation_forurnisseur')}  id="" cols="60" rows="10" ></textarea><br/>
                    leurs prix de produits ou matières prémières sont: <br/>
                    <textarea {...methods.register('prix_fournisseur')}  id="" cols="60" rows="10" ></textarea><br/>
                    Ils exigent un paiement (type de paiement): <input {...methods.register('type_paiement_fournisseur')} type="text" /><br/>
                    Et ce paiement se fait par (moyen de paiement): <input {...methods.register('moyen_paiement_fournisseur')} type="text"/><br/>
                    Delais de livraison: <input {...methods.register('delais_livraison_fournisseur')} type="text" /> <br/>
                    Fréquence de livraison: <input {...methods.register('frequence_livraison_fournisseur')} type="text"/><br/>
                    leurs forces se trouvent dans: <br/> <textarea {...methods.register('forces_fournisseur')}  id="" cols="60" rows="10"></textarea><br/>
                    Leurs faiblesses se trouvent dans: <br/> <textarea {...methods.register('faiblesse_fournisseur')}  id="" cols="60" rows="10"></textarea>
                </p>
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
                        <button onClick={()=>navigate(`/pdf/em/${id}`)} type="submit" className="submit">PDF</button>
        </div>
</div>

</form>
</FormProvider>
    </div>
        </div> 
</div>    
  )
}

export default Em
