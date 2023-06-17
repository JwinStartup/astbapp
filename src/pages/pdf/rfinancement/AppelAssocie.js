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
                  <Text style={{fontSize:'16px',textAlign:'center',color:'red'}}>Recherche financement - Appel à des associés </Text>
                  </View>
                   
                  <View style={styles.sousSection}>
                  <Text>Quelles sont les personnes auxquelles vous comptez-vous associer pour céer votre entreprise ?:............................................................</Text>
                  </View>
                  
                  <View style={styles.sousSection}>
                  <Text style={{margin:'3px',textAlign:'center'}}>(liste des personnes déjà contactées et qui sont engagés officiellement avec vous) </Text>
                  <View style={styles.sousSection}>
                    <View style={styles.table}>
                     <View style={styles.tableRow}>
                        <View style={{width: "12.5%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}>Nom et contact</Text>
                        </View>
                        <View style={{width: "12.5%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}>Quel montant esperez-vous avoir avec lui</Text>
                        </View>
                        <View style={{width: "12.5%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}>lui en avez-vous déja parlé?</Text>
                        </View>
                        <View style={{width: "12.5%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}>Si oui,quel a étè sa reponse ?</Text>
                        </View>
                        <View style={{width: "12.5%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}>Si non, quand comptez-vous le faire?</Text>
                        </View>
                        <View style={{width: "12.5%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}>Quand compte-il/elle vous apporter son soutien?</Text>
                        </View>
                        <View style={{width: "12.5%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}>Montant apporté et date de l'apport?</Text>
                        </View>
                        <View style={{width: "12.5%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}>Montant respecté?</Text>
                        </View>
                        
                        </View>


                        <View style={styles.tableRow}>
                        <View style={{width: "12.5%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}> </Text>
                        </View>
                        <View style={{width: "12.5%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}> </Text>
                        </View>
                        <View style={{width: "12.5%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}> </Text>
                        </View>
                        <View style={{width: "12.5%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}> </Text>
                        </View>
                        <View style={{width: "12.5%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}> </Text>
                        </View>
                        <View style={{width: "12.5%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}> </Text>
                        </View>
                        <View style={{width: "12.5%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}> </Text>
                        </View>
                        <View style={{width: "12.5%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}> </Text>
                        </View>
                       
                        
                        </View>

                  </View>
                  </View>
                  </View>

               
                  <View style={styles.sousSection}>
                 <Text>Montant total des apports réunis:............................................................</Text>
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


export default function AppelAssociepdf(){
  return (
    <div style={{}}> 
       <PDFViewer width='100%' height='640px'>
       <Mydocument/>
       </PDFViewer>
    </div>
  )
}