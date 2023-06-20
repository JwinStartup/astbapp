import React, { useEffect, useState } from 'react'
import ReactPDF, {PDFViewer, Page, Text, View, Document, StyleSheet, renderToStream } from '@react-pdf/renderer';
import { fetchWrapper } from '../../../reducer/helpers/helpers';
import { useParams } from 'react-router-dom';
// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: 'white'
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  },
  sousSection: {
    display:'flex',
    justifyContent:'center',
    margin: 5,
    padding: 5,
    fontSize:'12px'
   
  },
  header: {
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    margin: 5,
    padding: 5,
   
  },
  footer: {
    display:'flex',
    flexDirection:'row',
    justifyContent:'center',
    margin: 5,
    padding: 5,
   
  }
});

const  Mydocument =({data})=> (
          <Document>
                  <Page size="A4" style={styles.page}>
                  <View style={styles.section}>
                    <View style={styles.header}>
                  <Text style={{fontSize:'14px',color:'gray'}}>Astraining Business </Text>
                  <Text style={{fontSize:'13px',color:'gray'}}>Nom du projet </Text>
                 
                  </View>
                  <View style={styles.sousSection}>
                  <Text style={{fontSize:'16px',textAlign:'center',color:'red'}}>Business plan - Etude de marché </Text>
                  </View>
                   
                  <View style={styles.sousSection}>
                  <Text style={{fontSize:'13px',margin:'3px'}}>I. MARCHE A PENETRER PAR L'ENTREPRISE </Text>
                  <Text>L'entreprise entrera sur les circonscriptions de marchés que sont: </Text>
                  <Text>D'abord sur un marché local qu'est:<Text style={{fontSize:'13px',color:'gray',margin:'0px 3px 0px 3px'}}>{data.marche_local}</Text></Text>
                  <Text>Ensuite sur un marché local dispersé qu'est: <Text style={{fontSize:'13px',color:'gray',margin:'0px 3px 0px 3px'}}>{data.marche_local_disperse}  </Text></Text>
                  <Text>Aussi sur un marché national qu'est:<Text style={{fontSize:'13px',color:'gray',margin:'0px 3px 0px 3px'}}>{data.marche_national} </Text></Text>
                  <Text>Enfin sur un marché regional qu'est:<Text style={{fontSize:'13px',color:'gray',margin:'0px 3px 0px 3px'}}>{data.marche_regional} </Text></Text>
                  <Text>Et</Text>
                  <Text>sur un marché international qu'est: <Text style={{fontSize:'13px',color:'gray',margin:'0px 3px 0px 3px'}}> {data.marche_international} </Text></Text>

                  </View>
                  
                  <View style={styles.sousSection}>
                  <Text style={{fontSize:'13px',margin:'3px'}}>II. ETUDE DE LA CONCURRENCE </Text>
                  <Text>L'etude de la concurence révèle que plusieurs (entreprise / personnel) :{data.type_concurrent} exercent dans ce domaine depuis : {data.annee_concurrent}  (années)</Text> 
                  <Text>Les plus reputées sont(listes des entreprises concurrentes de renom): {data.nom_concurrent} </Text>
                  <Text>Elle se localise généralement à: {data.localite_concurrent}</Text>
                  <Text>Elles proposent les (services ou produits) que sont : {data.activite_propose_concurrent} </Text>
                  <Text>Elles s'approvisionnent en moyenne (frequence):{data.frequence_concurrent} fois par (jour /semaine /mois /an) {data.periode_concurrent} en matière première auprès de leurs fournisseurs situés à {data.localisation_fournisseur_concurrent} pour des tarifs variant de {data.tarif_initial_concurrent} à {data.tarif_final_concurrent} par approvisionnement.Ces entreprises emploient géneralement (nombre d'employés):  {data.nombre_employes_concurrent} personnes qu'elle rémunèrent en moyenne à {data.salaire_employes_concurrent} par (heure /jour /semaine /quinzaine /mois) {data.periode_salaire_concurrent} selon les tâches qui les ont assignés et réalisent des chiffres d'affaires mensuels qui varient de {data.chiffre_affaire_initial_concurrent} FCFA à {data.chiffre_affaire_final_concurrent} FCFA pour un bénefice moyen mensuel de {data.benefice_moyen_mensuel_concurrent} FCFA realisé.
                   Pour faire leur promotion, elles procèdent par les moyens suivant:{data.moyens_concurrent} </Text>
                  <Text>Les principales forces de ces entreprises sont:{data.forces_concurrent} </Text>
                  <Text>Leurs faiblesses sont les suivantes: {data.faiblesses_concurrent} </Text>
                  
                  
                  </View>

                  <View style={styles.sousSection}>
                  <Text style={{fontSize:'13px',margin:'3px'}}>III. ETUDE DE LA CLIENTELE </Text>
                  <Text>Etude du marché révèle que les principaux client de ces services ou produit sont les suivants: {data.nom_client}  </Text>
                  <Text>Ceux-ci habitent les localités que sont {data.localisation_client}   </Text>
                  <Text>ils ont un pouvoir d'achat (faible /moyen /elevé):  {data.pouvoir_dachat_client}   </Text>  et ils achètent ces (produits / services) 
                    en moyenne {data.frequence_dachat_client}   fois par (semaine /quinzaine /mois). pour des montants variant de  {data.montant_depense_initial_client}   FCFA à  {data.montant_depense_final_client}  FCFA. 
                    Leurs produits ou services de consommation préférés sont: {data.produit_service_prefere_client}  
                    Les elements que les clients apprécient au niveau de ces produits ou services sont les suivants:  {data.element_apprecie_client}  
                    Ils  déprécient cependant les elements suivants au niveau de ces produits ou services: {data.element_deprecie_client}  
                  </View>

                  <View style={styles.sousSection}>
                  <Text style={{fontSize:'13px',margin:'3px'}}>IV. ANALYSE DES FOURNISSEURS </Text>

                    <Text> Les principaux fournisseurs de ses entreprises:   {data.nom_fournisseur}  </Text>
                    
                    <Text>Ceux-ci se situent géneralement à :   <Text style={{fontSize:'13px',color:'gray',margin:'0px 3px 0px 3px'}}>{data.localisation_forurnisseur}  </Text></Text>
                    <Text>leurs prix de produits ou matières prémières sont:   <Text style={{fontSize:'13px',color:'gray',margin:'0px 3px 0px 3px'}}>{data.prix_fournisseur}  </Text></Text>
                    <Text>Ils exigent un paiement (type de paiement):   <Text style={{fontSize:'13px',color:'gray',margin:'0px 3px 0px 3px'}}>{data.type_paiement_fournisseur}  </Text></Text>
                    <Text>Et ce paiement se fait par (moyen de paiement):   <Text style={{fontSize:'13px',color:'gray',margin:'0px 3px 0px 3px'}}>{data.moyen_paiement_fournisseur}  </Text></Text>
                    <Text>Delais de livraison:   <Text style={{fontSize:'13px',color:'gray',margin:'0px 3px 0px 3px'}}>{data.delais_livraison_fournisseur}  </Text></Text>
                    <Text>Fréquence de livraison:   <Text style={{fontSize:'13px',color:'gray',margin:'0px 3px 0px 3px'}}>{data.frequence_livraison_fournisseur}  </Text></Text>
                    <Text>Leurs forces se trouvent dans:   <Text style={{fontSize:'13px',color:'gray',margin:'0px 3px 0px 3px'}}>{data.forces_fournisseur}  </Text></Text>
                    <Text>Leurs faiblesses se trouvent dans:   <Text style={{fontSize:'13px',color:'gray',margin:'0px 3px 0px 3px'}}>{data.faiblesse_fournisseur} </Text></Text>

                  </View>
                  <View style={styles.footer}>
                  <Text style={{fontSize:'14px',color:'gray'}}>crée par.................... le ..../..../.... à ....h....min....s  </Text>
                  </View>
                  </View>
                  </Page>
                  
          </Document>
          )


export default function Empdf(){
  const [loading,setLoading]= useState(false)
  const [data,setData]= useState()

  const {id} = useParams()
  const datating = async()=>{
    const reponses = await fetchWrapper.get(`https://astrainingbusiness-crud.onrender.com/api/etudeMarche/voir/${id}`)
    if(reponses){
          setData(reponses)
          console.log(reponses)
          setLoading(true)
          return null;
    }
  }
  useEffect( ()=>{
    datating()
    return null;

},[])

  return (
    <div style={{}}> 
      {loading==false?<div style={{}}>chargement des données...</div>: 
       <PDFViewer width='100%' height='640px'>
       <Mydocument data={data}/>
       </PDFViewer>}
    </div>
  )
}
