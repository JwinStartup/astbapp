import React, { useEffect, useState } from 'react'
import ReactPDF, {PDFViewer, Page, Text, View, Document, StyleSheet, renderToStream } from '@react-pdf/renderer';
import { useParams } from 'react-router-dom';
import { fetchWrapper } from '../../../reducer/helpers/helpers';

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
    width: "50%", 
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
    textAlign:'center',
    
  }
});

const  Mydocument =(  {data})=> (
          <Document>
                  <Page size="A4" style={styles.page}>
                  <View style={styles.section}>
                    <View style={styles.header}>
                  <Text style={{fontSize:'14px',color:'gray'}}>Astraining Business </Text>
                  <Text style={{fontSize:'13px',color:'gray'}}>Nom du projet </Text>
                 
                  </View>
                  <View style={styles.sousSection}>
                  <Text style={{fontSize:'16px',textAlign:'center',color:'red'}}>Business plan - Strategie commerciale </Text>
                  </View>
                   
                  <View style={styles.sousSection}>
                  <Text style={{fontSize:'13px',margin:'3px'}}>I.LA STRATEGIE COMMERCIALE BASEE SUR LES 4P </Text>
                  <Text>1.Produit ou service </Text>
                  <Text>Produits / services proposés par l'entreprise :  <Text style={{fontSize:'13px',color:'gray',margin:'0px 3px 0px 3px'}}>  {data.produit_service_propose} </Text></Text>

                  </View>
                  
                  <View style={styles.sousSection}>
                  <Text style={{fontSize:'13px',margin:'3px'}}>2.Prix </Text>
                  <Text style={{fontSize:'13px',margin:'3px'}}>La réprésentation des produits / services ci-dessous:</Text>
                  <View style={styles.sousSection}>
                  <View style={styles.table}>
                     <View style={styles.tableRow}>
                        <View style={styles.tableCol}>
                                <Text style={styles.tableCell}> SERVICES DU PRODUITS </Text>
                        </View>
                        <View style={styles.tableCol}>
                                <Text style={styles.tableCell}>TARIFS</Text>
                        </View>
                        </View>
                        {data.produit.map((i,j)=>{return(<View style={styles.tableRow}>
                          <View key={j} style={styles.tableCol}>
                                <Text style={styles.tableCell}> {i.service_produit} </Text>
                        </View>
                        <View style={styles.tableCol}>
                                <Text style={styles.tableCell}> {i.tarif} </Text>
                        </View>
                      </View>)})}
                  </View>
                  </View>
                  <Text>Ces prix proposés et la qualité des (produits / services) feront la différence et leur donneront des offres us alléchantes par rapport à celles des concurents.</Text>
                  </View>

                  <View style={styles.sousSection}>
                  <Text style={{fontSize:'13px',margin:'3px'}}>3.Place (positionnement) </Text>
                  <Text>Le positionnement choisi pour cette entreprise est la ville de : <Text style={{fontSize:'13px',color:'gray',margin:'0px 3px 0px 3px'}}>  {data.positionnement}  </Text>, précisément dans la commune de : (nom de la commune, du quartier et du repère géographique précis)  <Text style={{fontSize:'13px',color:'gray',margin:'0px 3px 0px 3px'}}>  {data.nom_lieu}  </Text> .Cette entreprise se différenciera par la qualification de son personnel et la qualité de ces (produits /services). Son slogan sera : «  <Text style={{fontSize:'13px',color:'gray',margin:'0px 3px 0px 3px'}}>  {data.slogan} ». </Text></Text>
                  </View>

                  <View style={styles.sousSection}>
                  <Text style={{fontSize:'13px',margin:'3px'}}>4.Promotion (communication) </Text>
                  <Text>La promotion ou la communication se fera par les moyens suivants: <Text style={{fontSize:'13px',color:'gray',margin:'0px 3px 0px 3px'}}>  {data.moyen_promotion} </Text> </Text>
                  </View>

                  <View style={styles.sousSection}>
                  <Text style={{fontSize:'13px',margin:'3px'}}>II.OBJECTIFS MARKETING </Text>
                  <Text>1.Objectif de vente</Text>
                  <Text>L’entreprise compte atteindre un objectif de vente de   <Text style={{fontSize:'13px',color:'gray',margin:'0px 3px 0px 3px'}}>  {data.objectif_vente}  </Text>(Produits /services) par (jour/semaine/mois/trimestre/semestre/an)
                  </Text>

                  </View>

                  <View style={styles.sousSection}>
                  <Text style={{fontSize:'13px',margin:'3px'}}>2.Objectif financier </Text>
                  <Text>Ce qui lui permettra de réaliser un chiffre d’affaire (journalier/hebdomadaire /mensuel/trimestriel/semestriel/annuel) de  <Text style={{fontSize:'13px',color:'gray',margin:'0px 3px 0px 3px'}}>  {data.chiffre_affaire}  </Text>de FCFA et un bénéfice de  <Text style={{fontSize:'13px',color:'gray',margin:'0px 3px 0px 3px'}}>  {data.benefice}  </Text> FCFA.</Text>
                
                  </View>

                  <View style={styles.sousSection}>
                 
                  <Text style={{fontSize:'13px',margin:'3px'}}>III.MOYENS STRATEGIQUES</Text>
                  <Text style={{fontSize:'13px',margin:'3px'}}>Pour attirer et fidéliser plus de clients l'entreprise déploiera les moyens strategiques de marketing suivants: <Text style={{fontSize:'13px',color:'gray',margin:'0px 3px 0px 3px'}}>  {data.moyen_strategique}  </Text></Text>
                  </View>

                  
                

                  <View style={styles.footer}>
                  </View>
                  </View>
                  </Page>
                  
          </Document>
          )


export default function Scpdf(){
  const [loading,setLoading]= useState(false)
  const [data,setData]= useState()

  const {id} = useParams()
  const datating = async()=>{
    const reponses = await fetchWrapper.get(`http://localhost:8080/api/strategieCom/voir/${id}`)
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
       <Mydocument data=  {data}/>
       </PDFViewer>}
    </div>
  )
}