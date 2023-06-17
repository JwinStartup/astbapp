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
  tableCuCol: { 
    width: "33.33%", 
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
    textAlign:'left'
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
                  <Text style={{fontSize:'16px',textAlign:'center',color:'red'}}>Business plan - Presentation entrepreneur </Text>
                  </View>
                   
                  <View style={styles.sousSection}>
                  <Text style={{fontSize:'13px',margin:'3px',textAlign:"center"}}>ETAT CIVIL </Text>
                  <Text>Nom et prénoms :........................................................................................................................... </Text>
                  <Text>Age:........................................................................................................................... </Text>
                  <Text>Situation matrimoniale :.................................................................................................................... </Text>
                  <Text>Contacts télephonique:........................................................................................................................... </Text>
                  <Text>Email :........................................................................................................................... </Text>
                  </View>
                  
                  <View style={styles.sousSection}>
                  <Text style={{fontSize:'13px',margin:'3px',textAlign:"center"}}>DOMAINES DES COMPETENCES </Text>
                  <Text>...........................................................</Text>
                  </View>

                  <View style={styles.sousSection}>
                  <Text style={{fontSize:'13px',margin:'3px',textAlign:"center"}}>CURSUS SCOLAIRE-UNIVERSITAIRE ET DIPLOMES OBTENUS (à énumerer) </Text>
                  <View style={styles.table}>
                     <View style={styles.tableRow}>
                        <View style={styles.tableCuCol}>
                                <Text style={styles.tableCell}> ANNEE DE DEBUT </Text>
                        </View>
                        <View style={styles.tableCuCol}>
                                <Text style={styles.tableCell}>ANNEE DE FIN</Text>
                        </View>
                        <View style={styles.tableCuCol}>
                                <Text style={styles.tableCell}>FORMATION OU DIPLOMES OBTENUS</Text>
                        </View>
                        </View>
                        
                        <View style={styles.tableRow}>
                        <View style={styles.tableCuCol}>
                                <Text style={styles.tableCell}> ............ </Text>
                        </View>
                        <View style={styles.tableCuCol}>
                                <Text style={styles.tableCell}> ............ </Text>
                        </View>
                        <View style={styles.tableCuCol}>
                                <Text style={styles.tableCell}>............. </Text>
                        </View>
                      </View>
                  </View>
                  </View>

                  <View style={styles.sousSection}>
                  <Text style={{fontSize:'13px',margin:'3px',textAlign:"center"}}>EXPERIENCES PROFESSIONNELLES (à énumerer) </Text>
                  <View style={styles.table}>
                     <View style={styles.tableRow}>
                        <View style={styles.tableCuCol}>
                                <Text style={styles.tableCell}> ANNEE DE DEBUT </Text>
                        </View>
                        <View style={styles.tableCuCol}>
                                <Text style={styles.tableCell}>ANNEE DE FIN</Text>
                        </View>
                        <View style={styles.tableCuCol}>
                                <Text style={styles.tableCell}>LISTE DES EXPERIENCES PROFESSIONNELLES ACQUISES</Text>
                        </View>
                        </View>
                        
                        <View style={styles.tableRow}>
                        <View style={styles.tableCuCol}>
                                <Text style={styles.tableCell}> ............ </Text>
                        </View>
                        <View style={styles.tableCuCol}>
                                <Text style={styles.tableCell}> ............ </Text>
                        </View>
                        <View style={styles.tableCuCol}>
                                <Text style={styles.tableCell}>............. </Text>
                        </View>
                      </View>
                  </View>
                  </View>
                  <View style={styles.sousSection}>
                  <Text style={{fontSize:'13px',margin:'3px',textAlign:"center"}}>ATOUTS ET DIVERS</Text>
                  <Text>Informatique :........................................................................................................................... </Text>
                  <Text>Langues :........................................................................................................................... </Text>
                  <Text>Loisirs :........................................................................................................................... </Text>
                  <Text>Permis de conduire :........................................................................................................................... </Text>
                  </View>
                 

                

                  <View style={styles.footer}>
                  <Text style={{fontSize:'14px',color:'gray'}}>crée par.................... le ..../..../.... à ....h....min....s  </Text>
                  </View>
                  </View>
                  </Page>
                  
          </Document>
          )


export default function Pepdf(){
  return (
    <div style={{}}> 
       <PDFViewer width='100%' height='640px'>
       <Mydocument/>
       </PDFViewer>
    </div>
  )
}