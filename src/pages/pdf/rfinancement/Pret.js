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
      width: "25%", 
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
  
const  Mydocument =()=> (
          <Document>
                  <Page size="A4" style={styles.page}>
                  <View style={styles.section}>
                    <View style={styles.header}>
                  <Text style={{fontSize:'14px',color:'gray'}}>Astraining Business </Text>
                  <Text style={{fontSize:'13px',color:'gray'}}>Nom du projet </Text>
                 
                  </View>
                  <View style={styles.sousSection}>
                  <Text style={{fontSize:'16px',textAlign:'center',color:'red'}}>Recherche financement - Epargne personnelle </Text>
                  </View>
                   
                  <View style={styles.sousSection}>
                  <Text>A combien s'élève le cout de demarrage de votre projet?:............................................................</Text>
                  <Text>Combien allez-vous rembouser pour chaque période? :............................................................</Text>
                  <Text>Nom et adresse de la banque ou de la microfinance où vous avez contracté le pret?:............................................................</Text>
                  </View>
                  
                  <View style={styles.sousSection}>
                  <Text style={{margin:'3px',fontSize:'15px',textAlign:'center'}}> PROGRAMME DE REMBOURSEMENT </Text>
                  <View style={styles.sousSection}>
                    <View style={styles.table}>
                     <View style={styles.tableRow}>
                        <View style={{width: "25%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}>Mois</Text>
                        </View>
                        <View style={{width: "25%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}>Montant Epargne</Text>
                        </View>
                        <View style={{width: "25%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}>Montant cumulé</Text>
                        </View>
                        <View style={{width: "25%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}>Observation</Text>
                        </View>
                        
                        </View>


                        <View style={styles.tableRow}>
                        <View style={{width: "25%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}> </Text>
                        </View>
                        <View style={{width: "25%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}> </Text>
                        </View>
                        <View style={{width: "25%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}> </Text>
                        </View>
                        <View style={{width: "25%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}> </Text>
                        </View>
                        
                        </View>

                  </View>
                  </View>
                  <Text>Date de la finalisation du remboursement?:............................................................</Text>
                  <Text>Delai de remboursement respecté?:............................................................</Text>
                 
                  </View>

               
                  <View style={styles.sousSection}>
                       </View>
                       <View style={styles.sousSection}>
                  <Text style={{margin:'3px',fontSize:'15px',textAlign:'center'}}> Plan B </Text>
                  <Text>Quel est votre plan B au cas ou la première Strategie de financement ne marche pas?:............................................................</Text>

                       </View>


                  <View style={styles.footer}>
                  <Text style={{fontSize:'14px',color:'gray'}}>crée par.................... le ..../..../.... à ....h....min....s  </Text>
                  </View>
                  </View>
                  </Page>
                  
          </Document>
          )


export default function Pretpdf(){
  return (
    <div style={{}}> 
       <PDFViewer width='100%' height='640px'>
       <Mydocument/>
       </PDFViewer>
    </div>
  )
}