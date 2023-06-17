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
                  <Text style={{fontSize:'16px',textAlign:'center',color:'red'}}>Recherche financement -Subventions étatique </Text>
                  </View>
                   
                  <View style={styles.sousSection}>
                  <Text>A combien s'élève le montant de démarrage de votre activité?:............................................................</Text>
                  <Text>Quelles sont les organisations publiques ou privées/ nationales ou internationnales que vous comptez contacter?:............................................................</Text>
                  <Text>Et combien espérez-vous avoir auprés de chacun?:............................................................</Text>
                  </View>
                  
                  <View style={styles.sousSection}>
                  <View style={styles.sousSection}>
                    <View style={styles.table}>
                     <View style={styles.tableRow}>
                        <View style={{width: "20%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}>Nom de l'organisation</Text>
                        </View>
                        <View style={{width: "20%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}>Montant attendu</Text>
                        </View>
                        <View style={{width: "20%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}>Montant reçu</Text>
                        </View>
                        <View style={{width: "20%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}>Montant atteint?</Text>
                        </View>
                        <View style={{width: "20%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}>Montant reliquat</Text>
                        </View>
                        </View>


                        <View style={styles.tableRow}>
                        <View style={{width: "20%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}> </Text>
                        </View>
                        <View style={{width: "20%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}> </Text>
                        </View>
                        <View style={{width: "20%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}> </Text>
                        </View>
                        <View style={{width: "20%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}> </Text>
                        </View>
                        <View style={{width: "20%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}> </Text>
                        </View>
                        
                        </View>

                  </View>
                  </View>
                  <Text>Montant total des apports réunis:............................................................</Text>
                  </View>

               
                  <View style={styles.sousSection}>
                  <Text style={{margin:'3px',fontSize:'15px',textAlign:'center'}}> Observation durant la periode de financement</Text>
                  <Text>............................................................</Text>
                  <Text>Date de l'atteinte du financement:............................................................</Text>
                  <Text>Periode respecté:............................................................</Text>

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


export default function Subventionpdf(){
  return (
    <div style={{}}> 
       <PDFViewer width='100%' height='640px'>
       <Mydocument/>
       </PDFViewer>
    </div>
  )
}