import React from 'react'
import ReactPDF, {PDFViewer, Page, Text, View, Document, StyleSheet, renderToStream } from '@react-pdf/renderer';

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
    width: "33,33%", 
    borderStyle: "solid", 
    borderWidth: 1, 
    borderLeftWidth: 0, 
    borderTopWidth: 0 
  },tableCol1: { 
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
    textAlign:'center'
  },
  organigramme:{
    width: '90%'
  },
  service1:{
    display: 'flex',
    justifyContent: 'center',
    paddingTop:10 ,
    },
    service2:{
      display: 'flex',
      justifyContent: 'space-between',
    },
    service3:{
    display: 'flex',
    justifyContent: 'space-between',
    },
    service4:{
      display: 'flex',
      justifyContent: 'space-between',
      }
});

const  Mydocument =()=> (
          <Document>
                  <Page size="A4" style={styles.page}>
                  <View style={styles.section}>
                    <View style={styles.header}>
                  <Text style={{fontSize:'14px',color:'gray'}}>Astraining Business </Text>
                  <Text style={{fontSize:'13px',color:'gray'}}>Nom du projet </Text>
                 
                  </View>
                  <View style={styles.sousSection}>
                  <Text style={{fontSize:'16px',textAlign:'center',color:'red'}}>Business plan - Gestion operationnelle </Text>
                  </View>
                   
                  <View style={styles.sousSection}>
                  <Text style={{fontSize:'13px',margin:'3px'}}>I.GESTION TECHNIQUE </Text>
                  <Text>1.Description de la procédure de travail dans l'entreprise</Text>
                  <Text>Les différentes étapes de la procédure du travail:......................................................................... </Text>
                  <Text>  Le but de la réunion avec tout le personnel chaque (jour/ semaine/ quinzaine/ mois /trimestre):
                  </Text>
                  </View>
                  
                  <View style={styles.sousSection}>
                  <Text style={{fontSize:'13px',margin:'3px'}}>2.Description des infrastuctures et besoin en équipement de l'entreprise</Text>
                  <Text style={{fontSize:'13px',margin:'3px'}}>le local de l'entreprise séra aménagé et compartimenté de sorte à comporter les différentes pièces (salles/ bureaux /équipement):</Text>
                  <View style={styles.sousSection}>
                  <View style={styles.table}>
                     <View style={styles.tableRow}>
                        <View style={styles.tableCol}>
                                <Text style={styles.tableCell}> Espace </Text>
                        </View>
                        <View style={styles.tableCol}>
                                <Text style={styles.tableCell}>Equipements</Text>
                        </View>
                        <View style={styles.tableCol}>
                                <Text style={styles.tableCell}>Quantité</Text>
                        </View>
                        </View>
                        
                        <View style={styles.tableRow}>
                        <View style={styles.tableCol}>
                                <Text style={styles.tableCell}> ............ </Text>
                        </View>
                        <View style={styles.tableCol}>
                                <Text style={styles.tableCell}> ............ </Text>
                        </View>
                        <View style={styles.tableCol}>
                                <Text style={styles.tableCell}> ............ </Text>
                        </View>
                      </View>
                  </View>
                  </View>
                  <Text>Ces prix proposés et la qualité des (produits / services) feront la différence et leur donneront des offres us alléchantes par rapport à celles des concurents.</Text>
                  </View>

                  <View style={styles.sousSection}>
                  <Text style={{fontSize:'13px',margin:'3px'}}>3.Place (positionnement) </Text>
                  <Text>Le positionnement choisi pour cette entreprise est la ville de :..........................................................., précisément dans la commune de : (nom de la commune, du quartier et du repère géographique précis)......................................................................................Cette entreprise se différenciera par la qualification de son personnel et la qualité de ces (produits /services). Son slogan sera : «.............................».</Text>
                  </View>

                  <View style={styles.sousSection}>
                  <Text style={{fontSize:'13px',margin:'3px'}}>4.Promotion (communication) </Text>
                  <Text>La promotion ou la communication se fera par les moyens suivants:..........................................</Text>
                  </View>

                  <View style={styles.sousSection}>
                  <Text style={{fontSize:'13px',margin:'3px'}}>II.GESTION RESSOURCES HUMAINES </Text>
                  <Text>1.Définition des postes et fixation des profils et salaires des employés</Text>
                  <View style={styles.table}>
                     <View style={styles.tableRow}>
                        <View style={styles.tableCol1}>
                                <Text style={styles.tableCell}> POSTES </Text>
                        </View>
                        <View style={styles.tableCol1}>
                                <Text style={styles.tableCell}>NOMBRE</Text>
                        </View>
                        <View style={styles.tableCol1}>
                                <Text style={styles.tableCell}>RESPONSABILITES</Text>
                        </View>
                        <View style={styles.tableCol1}>
                                <Text style={styles.tableCell}>COMPETENCES REQUISES</Text>
                        </View>
                        <View style={styles.tableCol1}>
                                <Text style={styles.tableCell}>SALAIRE</Text>
                        </View>
                        
                        </View>
                        
                        <View style={styles.tableRow}>
                        <View style={styles.tableCol1}>
                                <Text style={styles.tableCell}> ............ </Text>
                        </View>
                        <View style={styles.tableCol1}>
                                <Text style={styles.tableCell}> ............ </Text>
                        </View>
                        <View style={styles.tableCol1}>
                                <Text style={styles.tableCell}> ............ </Text>
                        </View>
                        <View style={styles.tableCol1}>
                                <Text style={styles.tableCell}> ............ </Text>
                        </View>
                        <View style={styles.tableCol1}>
                                <Text style={styles.tableCell}> ............ </Text>
                        </View>
                      </View>
                  </View>

                  </View>

                  <View style={styles.sousSection}>
                  <Text style={{fontSize:'13px',margin:'3px'}}>2.Organigramme de l'entreprise </Text>
                  <Text>L'organigramme de l'entreprise se présente comme suit :</Text>
                   
                  <View  style={styles.organigramme}>
                        <View style={styles.service1}>
                            <View>
                                <Text >Service 1</Text>
                                <Text ></Text>
                            </View>
                        </View>
                        <View style={styles.service2}>
                            <View>
                                <Text>Service 2</Text>
                                <Text >..............</Text>
                            </View>
                            <View><Text>Service 3</Text><Text >............</Text></View>
                            <View><Text>Service 4</Text><Text >..............</Text></View>
                        </View>    
                        <View style={styles.service3}>
                            <View><Text>Service 5</Text><Text >...............</Text></View>
                            <View><Text>Service 6</Text><Text >...............</Text></View>
                            <View><Text>Service 7</Text><Text >...............</Text></View>
                        </View>
                        <View style={styles.service4}>
                            <View><Text>Service 8</Text><Text >..............</Text></View>
                            <View><Text>Service 9</Text><Text >.............</Text></View>
                            <View><Text>Service 10</Text><Text >............</Text></View>
                        </View>
                    </View>


                  </View>

                

                  <View style={styles.footer}>
                  <Text style={{fontSize:'14px',color:'gray'}}>crée par.................... le ..../..../.... à ....h....min....s  </Text>
                  </View>
                  </View>
                  </Page>
                  
          </Document>
          )


export default function Goppdf(){
  return (
    <div style={{}}> 
       <PDFViewer width='100%' height='640px'>
       <Mydocument/>
       </PDFViewer>
    </div>
  )
}