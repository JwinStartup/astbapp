import React, { useEffect, useState } from 'react'
import ReactPDF, {PDFViewer, Page, Text, View, Document, StyleSheet, renderToStream } from '@react-pdf/renderer';
import { fetchWrapper } from '../../../reducer/helpers/helpers';
import { useParams } from 'react-router-dom';

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: 'white',
    margin: 5,
    padding: 5,
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
   
  },
  table: { 
    display: "table", 
    width: "auto", 
    borderStyle: "solid", 
    borderWidth: 1, 
    borderRightWidth: 0, 
    borderBottomWidth: 0 
  }, 
  tableRow: { 
    margin: "auto", 
    flexDirection: "row" 
  }, 
  tableCol: { 
    width: "20%", 
    borderStyle: "solid", 
    borderWidth: 1, 
    borderLeftWidth: 0, 
    borderTopWidth: 0 
  }, 
  tableCell: { 
    margin: "auto", 
    //marginTop: 5, 
    padding:3,
    fontSize: 10 ,
    textAlign:'start'
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
                  <Text style={{fontSize:'16px',textAlign:'center',color:'red'}}>Business plan - Presentation projet </Text>
                  
                  </View>
                   
                  <View style={styles.sousSection}>
                  <Text style={{fontSize:'13px',margin:'3px'}}>1.Nom , type et localisation du projet </Text>
                  <Text>Mon projet intitulé <Text style={{fontSize:'13px',color:'gray',margin:'0px 3px 0px 3px'}}>  {data.nom} </Text>
                    est le/la:<Text style={{fontSize:'13px',color:'gray',margin:'0px 3px 0px 3px'}}>   {data.le}  </Text>
                    il se situera en (Pays) <Text style={{fontSize:'13px',color:'gray',margin:'0px 3px 0px 3px'}}>   {data.pays}  </Text> 
                    dans la ville de : <Text style={{fontSize:'13px',color:'gray',margin:'0px 3px 0px 3px'}}>  {data.ville}   </Text>
                    précisement de: (nom de la commune du quartier et du répère géographique précis) 
                    <Text style={{fontSize:'13px',color:'gray',margin:'0px 3px 0px 3px'}}>  {data.autrelieu} </Text>
                    Et s'étendra sur un espace : <Text style={{fontSize:'13px',color:'gray',margin:'0px 3px 0px 3px'}}>  {data.etatespace} </Text>d'environ   <Text style={{fontSize:'13px',color:'gray',margin:'0px 3px 0px 3px'}}> {data.dimension}  </Text> mètres carrés
                     </Text>
                  </View>
                  
                  <View style={styles.sousSection}>
                  <Text style={{fontSize:'13px',margin:'3px'}}>2.Justification du projet </Text>
                  <Text>Les raisons qui motivent la mise en place du projet sont les suivantes: <Text style={{fontSize:'13px',color:'gray',margin:'0px 3px 0px 3px'}}>   {data.raisons} </Text></Text>
                  </View>

                  <View style={styles.sousSection}>
                  <Text style={{fontSize:'13px',margin:'3px'}}>3.Bésoins auxquels répond le projet </Text>
                  <Text>Ce projet vise en géneral à répondre aux bésoins que sont: <Text style={{fontSize:'13px',color:'gray',margin:'0px 3px 0px 3px'}}> {data.besoins}</Text> </Text>
                  
                  </View>

                  <View style={styles.sousSection}>
                  <Text style={{fontSize:'13px',margin:'3px'}}>4.Objectif du projet </Text>
                  <Text>Les objectifs à court terme sont : <Text style={{fontSize:'13px',color:'gray',margin:'0px 3px 0px 3px'}}>  {data.objectifcourtterme}</Text> </Text>
                  <Text>Les objectifs à moyen terme sont : <Text style={{fontSize:'13px',color:'gray',margin:'0px 3px 0px 3px'}}>  {data.objectifmoyenterme}</Text> </Text>
                  <Text>Les objectifs à long terme sont : <Text style={{fontSize:'13px',color:'gray',margin:'0px 3px 0px 3px'}}>  {data.objectiflongterme} </Text></Text>
                 
                  </View>

                  <View style={styles.sousSection}>
                  <Text style={{fontSize:'13px',margin:'3px'}}>5.Clientèle visée </Text>
                  <Text>Cette offre vise comme clientèle: <Text style={{fontSize:'13px',color:'gray',margin:'0px 3px 0px 3px'}}>   {data.clientel} </Text> </Text>
                 
                  </View>

                  <View style={styles.sousSection}>
                  <Text style={{fontSize:'13px',margin:'3px'}}>6.Services ou produits de l'entreprise </Text>
                  <Text>Pour satisfaire une telle clientèle l'entreprise offrira les services ou produits suivants : <Text style={{fontSize:'13px',color:'gray',margin:'0px 3px 0px 3px'}}>  {data.serviceproduit} </Text></Text>
                
                  </View>

                  <View style={styles.sousSection}>
                 
                  <Text style={{fontSize:'13px',margin:'3px'}}>7.Avantages concurrentiels (les forces) des produits / services </Text>
                  <Text style={{fontSize:'13px',margin:'3px'}}>Les avantages concurrentiels des services / produits de l'entreprise <Text style={{fontSize:'13px',color:'gray',margin:'0px 3px 0px 3px'}}>   {data.avantageCon} </Text> sont les suivants : <Text style={{fontSize:'13px',color:'gray',margin:'0px 3px 0px 3px'}}>  {data.avantage} </Text> </Text>
                  </View>

                  <View style={styles.sousSection}>
                  <Text style={{fontSize:'13px',margin:'3px'}}>8.Models de vente</Text>
                  <Text style={{fontSize:'13px',margin:'3px'}}>Les modes de vente des (services/produits) seront les suivants :<Text style={{fontSize:'13px',color:'gray',margin:'0px 3px 0px 3px'}}>   {data.model}</Text> </Text>

                  </View>

                  <View style={styles.sousSection}>
                  <Text style={{fontSize:'13px',margin:'3px'}}>9.Contraintes du projet </Text>
                  <Text style={{fontSize:'13px',margin:'3px'}}>Les Contraintes (difficultés) liées au projet sont les suivants :  <Text style={{fontSize:'13px',color:'gray',margin:'0px 3px 0px 3px'}}> {data.contrainte} </Text></Text>
                  </View>

                  <View style={styles.sousSection}>
                  <Text style={{fontSize:'13px',margin:'3px'}}>10.Forme juridique de l'entreprise </Text>
                  <Text style={{fontSize:'13px',margin:'3px'}}>le présent projet d'entreprise sera exploité dans le cadre (forme juridique choisie) <Text style={{fontSize:'13px',color:'gray',margin:'0px 3px 0px 3px'}}> {data.formejuridique} </Text>.Le propriétaire de cette entreprise est la personne de (M/Mme/Mile) : <Text style={{fontSize:'13px',color:'gray',margin:'0px 3px 0px 3px'}}> {data.proprietaire} </Text> Elle a pour associer , </Text>
                  {data.associe.map((i,j,k)=>
                  {return(
                    <> - <Text key={j} style={{fontSize:'13px',margin:'3px'}}> {i.nom} </Text>   </>
                  )})}
                  </View>
                  <View style={styles.sousSection}>
                  <Text style={{fontSize:'13px',margin:'3px'}}>11. Interêt du projet </Text>
                  <Text style={{fontSize:'13px',margin:'3px'}}>Au plan économique : </Text>
                  <Text style={{fontSize:'13px',margin:'3px'}}> Dans le contexte actuel que connaît notre pays, la mise en place d'une telle entreprise :
                    contibuera à la création de PME tant souhaitée par l'Etat ivoirien; constituera une source de revenu pour l'Etat par l'assujettissement aux différents impôts et taxes  permettra la création d'emplois paticipant ainsi à la résorption du chômage 
                    <Text style={{fontSize:'13px',color:'gray',margin:'0px 3px 0px 3px'}}>   {data.plan_economique}  </Text>
                    </Text>
                    <View style={styles.sousSection}> 
                     <Text> Au plan social</Text>
                     <Text style={{fontSize:'13px',margin:'3px'}}>  Ce projet que promoteur(s), ce projet me/nous permettra : 
                     <Text style={{fontSize:'13px',color:'gray',margin:'0px 3px 0px 3px'}}>  {data.plansocial} 
                     </Text></Text>
                     </View>
                     <View style={styles.sousSection}> 
                    <Text> Au plan personnel</Text>
                    <Text style={{fontSize:'13px',margin:'3px'}}>En tant que promoteur(s), ce projet me/nous permettra :
                    <Text style={{fontSize:'13px',color:'gray',margin:'0px 3px 0px 3px'}}> {data.planpersonnel} 
                    </Text> </Text>
                    </View>

                    <View style={styles.sousSection}> 
                    {data.autreplan.map((i,j,k)=>{
                    return (<Text key={j}> Au plan {i.nom}
                   <Text > Ce projet sera le bienvenue parce qu'il permettra :</Text>
                    <Text style={{fontSize:'13px',color:'gray',margin:'0px 3px 0px 3px'}}>  {i.description} 
                    </Text></Text>)})}
                    </View>
                


                  </View>
                 

                  <View style={styles.sousSection}>
                  <Text style={{fontSize:'13px',margin:'3px'}}>12.Programme de réalisation </Text>
                  <View style={styles.table}>
                     <View style={styles.tableRow}>
                        <View style={styles.tableCol}>
                                <Text style={styles.tableCell}> Activités </Text>
                        </View>
                        <View style={styles.tableCol}>
                                <Text style={styles.tableCell}> Date prévisionnelle de début de réalisation </Text>
                        </View>
                        <View style={styles.tableCol}>
                                <Text style={styles.tableCell}> Date prévisionnelle de fin de réalisation </Text>
                        </View>
                        <View style={styles.tableCol}>
                                <Text style={styles.tableCell}> Responsable de la réalisation </Text>
                        </View>
                        <View style={styles.tableCol}>
                                <Text style={styles.tableCell}>Objectifs à atteindre </Text>
                        </View>
                        </View>
                        
                        <>
                        {data.realisation.map((i,j,k)=>{
                    return ( <View style={styles.tableRow} key={j}>
                        <View style={styles.tableCol}>
                                <Text style={{ 
                                  margin: "auto", 
                                color:'gray', 
                                  padding:3,
                                  fontSize: 10 ,
                                  textAlign:'start'
                                }} > {i.activite} </Text>
                        </View>
                        <View style={styles.tableCol}>
                                <Text style={{ 
                                  margin: "auto", 
                                color:'gray', 
                                  padding:3,
                                  fontSize: 10 ,
                                  textAlign:'start'
                                }} > {i.datedebut}</Text>
                        </View>
                        <View style={styles.tableCol}>
                                <Text style={{ 
                                  margin: "auto", 
                                color:'gray', 
                                  padding:3,
                                  fontSize: 10 ,
                                  textAlign:'start'
                                }} >{i.datefin} </Text>
                        </View>
                        <View style={styles.tableCol}>
                                <Text style={{ 
                                  margin: "auto", 
                                color:'gray', 
                                  padding:3,
                                  fontSize: 10 ,
                                  textAlign:'start'
                                }} >{i.responsable} </Text>
                        </View>
                        <View style={styles.tableCol}>
                                <Text style={{ 
                                  margin: "auto", 
                                color:'gray', 
                                  padding:3,
                                  fontSize: 10 ,
                                  textAlign:'start'
                                }} >{i.objectif} </Text>
                        </View>
                      </View>)
                  })}
                      </>
                  </View>
                  </View>
                  
                

                  <View style={styles.footer}>
                  <Text style={{fontSize:'14px',color:'gray'}}>crée par. le ..../..../.... à ....h....min....s  </Text>
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
    const reponses = await fetchWrapper.get(`https://astrainingbusiness-crud.onrender.com/api/presentProjet/voir/${id}`)
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
       <Mydocument data={data} />
       </PDFViewer>}
    </div>
  )
}
