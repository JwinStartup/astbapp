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
                  <Text style={{fontSize:'16px',textAlign:'center',color:'red'}}>Business plan - Prevision financiere  </Text>
                  </View>
                   
                  <View style={styles.sousSection}>
                  <Text style={{fontSize:'13px',margin:'3px'}}>I.ETUDE FINANCIERE </Text>
                  <Text style={{fontSize:'13px',margin:'3px'}}>1.Calcul du coût du projet </Text>
                  <View style={styles.table}>
                     <View style={styles.tableRow}>
                        <View style={styles.tableCol}>
                                <Text style={styles.tableCell}> DESIGNATION</Text>
                        </View>
                        <View style={styles.tableCol}>
                                <Text style={styles.tableCell}> NOMBRE </Text>
                        </View>
                        <View style={styles.tableCol}>
                                <Text style={styles.tableCell}> PRIX UNITAIRE </Text>
                        </View>
                        <View style={styles.tableCol}>
                                <Text style={styles.tableCell}> PRIX TOTAL </Text>
                        </View>
                        </View>
                        
                        <View style={styles.tableRow}>
                        <View style={styles.tableCol}>
                                <Text style={styles.tableCell}> Coût des besoins de transport des courses de démarrage </Text>
                        </View>
                        <View style={{width: "25%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 ,
                                      backgroundColor:'black'}}>
                                <Text style={styles.tableCell}>  </Text>
                        </View>
                        <View style={{width: "25%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 ,
                                      backgroundColor:'black'}}>
                                <Text style={styles.tableCell}>  </Text>
                        </View>
                        <View style={{width: "25%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 ,
                                      backgroundColor:'black'}}>
                                <Text style={styles.tableCell}> </Text>
                        </View>
                      </View>

                       <View style={styles.tableRow}>
                        <View style={styles.tableCol}>
                                <Text style={styles.tableCell}>....................... </Text>
                        </View>
                        <View style={{width: "25%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 
                                      }}>
                                <Text style={styles.tableCell}>.....................  </Text>
                        </View>
                        <View style={{width: "25%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}> ........... </Text>
                        </View>
                        <View style={{width: "25%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}>............... </Text>
                        </View>
                      </View>


                  <View style={styles.tableRow}>
                        <View style={styles.tableCol}>
                                <Text style={styles.tableCell}>Coût des besoins de communication telephonique/ Internet
de démarrage</Text>
                        </View>
                        <View style={{width: "25%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 ,
                                      backgroundColor:'black'}}>
                                <Text style={styles.tableCell}>  </Text>
                        </View>
                        <View style={{width: "25%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 ,
                                      backgroundColor:'black'}}>
                                <Text style={styles.tableCell}>  </Text>
                        </View>
                        <View style={{width: "25%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 ,
                                      backgroundColor:'black'}}>
                                <Text style={styles.tableCell}> </Text>
                        </View>
                      </View>

                      <View style={styles.tableRow}>
                        <View style={styles.tableCol}>
                                <Text style={styles.tableCell}>....................... </Text>
                        </View>
                        <View style={{width: "25%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}>.....................  </Text>
                        </View>
                        <View style={{width: "25%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}> ........... </Text>
                        </View>
                        <View style={{width: "25%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}>............... </Text>
                        </View>
                      </View>

                      <View style={styles.tableRow}>
                        <View style={styles.tableCol}>
                                <Text style={styles.tableCell}>Coût des besoins de formalités administratives </Text>
                        </View>
                        <View style={{width: "25%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 ,
                                      backgroundColor:'black'}}>
                                <Text style={styles.tableCell}>  </Text>
                        </View>
                        <View style={{width: "25%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 ,
                                      backgroundColor:'black'}}>
                                <Text style={styles.tableCell}>  </Text>
                        </View>
                        <View style={{width: "25%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 ,
                                      backgroundColor:'black'}}>
                                <Text style={styles.tableCell}> </Text>
                        </View>
                      </View>
                      <View style={styles.tableRow}>
                        <View style={styles.tableCol}>
                                <Text style={styles.tableCell}>....................... </Text>
                        </View>
                        <View style={{width: "25%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}>.....................  </Text>
                        </View>
                        <View style={{width: "25%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}> ........... </Text>
                        </View>
                        <View style={{width: "25%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}>............... </Text>
                        </View>
                      </View>
                      <View style={styles.tableRow}>
                        <View style={styles.tableCol}>
                                <Text style={styles.tableCell}> Coût d'acquisition et aménagement d'un local </Text>
                        </View>
                        <View style={{width: "25%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 ,
                                      backgroundColor:'black'}}>
                                <Text style={styles.tableCell}>  </Text>
                        </View>
                        <View style={{width: "25%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 ,
                                      backgroundColor:'black'}}>
                                <Text style={styles.tableCell}>  </Text>
                        </View>
                        <View style={{width: "25%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 ,
                                      backgroundColor:'black'}}>
                                <Text style={styles.tableCell}> </Text>
                        </View>
                      </View>
                      <View style={styles.tableRow}>
                        <View style={styles.tableCol}>
                                <Text style={styles.tableCell}>....................... </Text>
                        </View>
                        <View style={{width: "25%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}>.....................  </Text>
                        </View>
                        <View style={{width: "25%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}> ........... </Text>
                        </View>
                        <View style={{width: "25%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}>............... </Text>
                        </View>
                      </View>
                      <View style={styles.tableRow}>
                        <View style={styles.tableCol}>
                                <Text style={styles.tableCell}> Coût des besoins d'équipements materiels </Text>
                        </View>
                        <View style={{width: "25%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 ,
                                      backgroundColor:'black'}}>
                                <Text style={styles.tableCell}>  </Text>
                        </View>
                        <View style={{width: "25%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 ,
                                      backgroundColor:'black'}}>
                                <Text style={styles.tableCell}>  </Text>
                        </View>
                        <View style={{width: "25%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 ,
                                      backgroundColor:'black'}}>
                                <Text style={styles.tableCell}> </Text>
                        </View>
                      </View>
                      <View style={styles.tableRow}>
                        <View style={styles.tableCol}>
                                <Text style={styles.tableCell}>....................... </Text>
                        </View>
                        <View style={{width: "25%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}>.....................  </Text>
                        </View>
                        <View style={{width: "25%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}> ........... </Text>
                        </View>
                        <View style={{width: "25%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}>............... </Text>
                        </View>
                      </View>
                      <View style={styles.tableRow}>
                        <View style={styles.tableCol}>
                                <Text style={styles.tableCell}> Coût des besoins de publicité de lancement  </Text>
                        </View>
                        <View style={{width: "25%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 ,
                                      backgroundColor:'black'}}>
                                <Text style={styles.tableCell}>  </Text>
                        </View>
                        <View style={{width: "25%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 ,
                                      backgroundColor:'black'}}>
                                <Text style={styles.tableCell}>  </Text>
                        </View>
                        <View style={{width: "25%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 ,
                                      backgroundColor:'black'}}>
                                <Text style={styles.tableCell}> </Text>
                        </View>
                      </View>
                     <View style={styles.tableRow}>
                        <View style={styles.tableCol}>
                                <Text style={styles.tableCell}>....................... </Text>
                        </View>
                        <View style={{width: "25%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}>.....................  </Text>
                        </View>
                        <View style={{width: "25%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}> ........... </Text>
                        </View>
                        <View style={{width: "25%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0}}>
                                <Text style={styles.tableCell}>............... </Text>
                        </View>
                      </View>

                      <View style={styles.tableRow}>
                        <View style={styles.tableCol}>
                                <Text style={styles.tableCell}> Coût des besoins divers de demarrage </Text>
                        </View>
                        <View style={{width: "25%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 ,
                                      backgroundColor:'black'}}>
                                <Text style={styles.tableCell}>  </Text>
                        </View>
                        <View style={{width: "25%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 ,
                                      backgroundColor:'black'}}>
                                <Text style={styles.tableCell}>  </Text>
                        </View>
                        <View style={{width: "25%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 ,
                                      backgroundColor:'black'}}>
                                <Text style={styles.tableCell}> </Text>
                        </View>
                      </View>
                          <View style={styles.tableRow}>
                        <View style={styles.tableCol}>
                                <Text style={styles.tableCell}>....................... </Text>
                        </View>
                        <View style={{width: "25%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}>.....................  </Text>
                        </View>
                        <View style={{width: "25%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}> ........... </Text>
                        </View>
                        <View style={{width: "25%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0}}>
                                <Text style={styles.tableCell}>............... </Text>
                        </View>
                      
                      </View>

                        <View style={styles.tableRow}>
                        <View style={styles.tableCol}>
                                <Text style={styles.tableCell}>Total </Text>
                        </View>
                        <View style={{width: "25%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0,backgroundColor:'black' }}>
                                <Text style={styles.tableCell}>  </Text>
                        </View>
                        <View style={{width: "25%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0,backgroundColor:'black' }}>
                                <Text style={styles.tableCell}>  </Text>
                        </View>
                        <View style={{width: "25%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0}}>
                                <Text style={styles.tableCell}>............... </Text>
                        </View>
                      
                      </View>
                  </View>
                  <View  >
                    <Text style={{margin:4,padding:5}} >+ Coût des besoins de transport des courses de démarrage ...........FCFA </Text>
                    <Text style={{margin:4,padding:5}} >+ Coût des besoins d'appels telephonique de démarrage ...........FCFA </Text>
                    <Text style={{margin:4,padding:5}} >+ Coût des besoins de formalités administratives .............FCFA </Text>
                    <Text style={{margin:4,padding:5}} >+  Coût d'acquisition et amenagement d'un local.............FCFA </Text>
                    <Text style={{margin:4,padding:5}} >+ Coût des besoins d'équipements materiels .............FCFA </Text>
                    <Text style={{margin:4,padding:5}} >+ Coût des besoins en fonds de roulement .............FCFA </Text>
                    <Text style={{margin:4,padding:5}} >+ Coût des autres besoins divers de démarrage .............FCFA </Text>
                    <Text style={{color:'black',fontSize:'18px'}}>TOTAL COUT DU PROJET = .............FCFA </Text>


                  </View>
                  
              </View>

                  <View style={styles.sousSection}>
                  <Text style={{fontSize:'13px',margin:'3px'}}>2.Plan de financement du projet </Text>
                
                <View style={styles.table}>

                  <View style={styles.tableRow}>
                       
                        <View style={styles.tableCol}>
                                <Text style={styles.tableCell}> APPORTEURS DE FONDS</Text>
                        </View>
                        <View style={styles.tableCol}>
                                <Text style={styles.tableCell}>Montant total apport fixé </Text>
                        </View>
                        <View style={styles.tableCol}>
                                <Text style={styles.tableCell}> Montant dejà mobilisé </Text>
                        </View>
                        <View style={styles.tableCol}>
                                <Text style={styles.tableCell}> Reste à mobiliser </Text>
                        </View>
                    
                        
                        </View>

                        <View style={styles.tableRow}>
                        <View style={styles.tableCol}>
                                <Text style={styles.tableCell}>Ressources internes</Text>
                        </View>
                        <View style={{width: "25%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0,backgroundColor:'black' }}>
                                <Text style={styles.tableCell}>  </Text>
                        </View>
                        <View style={{width: "25%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0,backgroundColor:'black' }}>
                                <Text style={styles.tableCell}>  </Text>
                        </View>
                        <View style={{width: "25%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0,backgroundColor:'black'}}>
                                <Text style={styles.tableCell}> </Text>
                        </View>
                      
                      </View>

                      <View style={styles.tableRow}>
                        <View style={styles.tableCol}>
                                <Text style={styles.tableCell}>...........</Text>
                        </View>
                        <View style={{width: "25%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}> ........... </Text>
                        </View>
                        <View style={{width: "25%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}> ............ </Text>
                        </View>
                        <View style={{width: "25%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0}}>
                                <Text style={styles.tableCell}>.......... </Text>
                        </View>
                      
                      </View>

                      <View style={styles.tableRow}>
                        <View style={styles.tableCol}>
                                <Text style={styles.tableCell}>Ressources exterieures</Text>
                        </View>
                        <View style={{width: "25%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0,backgroundColor:'black' }}>
                                <Text style={styles.tableCell}>  </Text>
                        </View>
                        <View style={{width: "25%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0,backgroundColor:'black' }}>
                                <Text style={styles.tableCell}>  </Text>
                        </View>
                        <View style={{width: "25%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0,backgroundColor:'black'}}>
                                <Text style={styles.tableCell}> </Text>
                        </View>
                      
                      </View>

                      <View style={styles.tableRow}>
                        <View style={styles.tableCol}>
                                <Text style={styles.tableCell}>..........</Text>
                        </View>
                        <View style={{width: "25%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}> ........... </Text>
                        </View>
                        <View style={{width: "25%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}> ............ </Text>
                        </View>
                        <View style={{width: "25%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0}}>
                                <Text style={styles.tableCell}>.......... </Text>
                        </View>
                      
                      </View>

                <View style={styles.tableRow}>
                        <View style={styles.tableCol}>
                                <Text style={styles.tableCell}>Total</Text>
                        </View>
                        <View style={{width: "25%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}> ........... </Text>
                        </View>
                        <View style={{width: "25%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}> ............ </Text>
                        </View>
                        <View style={{width: "25%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0}}>
                                <Text style={styles.tableCell}>.......... </Text>
                        </View>
                      
                      </View>

                    </View>
                  </View>

                  <View style={styles.sousSection}>
                  <Text style={{fontSize:'13px',margin:'3px'}}>II-PREVISIONS FINANCIERES </Text>
                  <Text>1.Evaluation mensuel des charges de production ou de fonctionnement de l'entreprise</Text>
                        <View style={styles.sousSection}>
                  <Text>Coûts d'achat des matières premières ou des marchandises</Text>
                    <View style={styles.table}>
                     <View style={styles.tableRow}>
                        <View style={styles.tableCol}>
                                <Text style={styles.tableCell}> Matières premières et marchandises</Text>
                        </View>
                        <View style={styles.tableCol}>
                                <Text style={styles.tableCell}>Quantité </Text>
                        </View>
                        <View style={styles.tableCol}>
                                <Text style={styles.tableCell}> Prix Unitaire </Text>
                        </View>
                        <View style={styles.tableCol}>
                                <Text style={styles.tableCell}> Total </Text>
                        </View>
                        </View>
                        <View style={styles.tableRow}>
                        <View style={styles.tableCol}>
                                <Text style={styles.tableCell}> </Text>
                        </View>
                        <View style={styles.tableCol}>
                                <Text style={styles.tableCell}> </Text>
                        </View>
                        <View style={styles.tableCol}>
                                <Text style={styles.tableCell}>  </Text>
                        </View>
                        <View style={styles.tableCol}>
                                <Text style={styles.tableCell}>  </Text>
                        </View>
                        </View>

                         <View style={styles.tableRow}>
                        <View style={styles.tableCol}>
                                <Text style={styles.tableCell}>Total </Text>
                        </View>
                        <View style={{width: "25%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 ,backgroundColor:"black"}}>
                                <Text style={styles.tableCell}> </Text>
                        </View>
                        <View style={{width: "25%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 ,backgroundColor:"black"}}>
                                <Text style={styles.tableCell}>  </Text>
                        </View>
                        <View style={styles.tableCol}>
                                <Text style={styles.tableCell}>  </Text>
                        </View>
                        </View>
                        </View>
                          
                          </View> 


                <View style={styles.sousSection}>
                  <Text>Salaire du gérant de l'entreprise et des employés</Text>
                    <View style={styles.table}>
                     <View style={styles.tableRow}>
                        <View style={{width: "33.33%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}> Postes</Text>
                        </View>
                        <View style={{width: "33.33%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}>Salaire (net) </Text>
                        </View>
                        <View style={{width: "33.33%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}> Coût brut (incluant charges et impôts)</Text>
                        </View>
                        </View>


                        <View style={styles.tableRow}>
                        <View style={{width: "33.33%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}> </Text>
                        </View>
                        <View style={{width: "33.33%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}> </Text>
                        </View>
                        <View style={{width: "33.33%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}>  </Text>
                        </View>
                        </View>

                         <View style={styles.tableRow}>
                        <View style={{width: "33.33%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}>Total </Text>
                        </View>
                        <View style={{width: "33.33%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 ,backgroundColor:"black"}}>
                                <Text style={styles.tableCell}> </Text>
                        </View>
                        <View style={{width: "33.33%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 ,backgroundColor:"black"}}>
                                <Text style={styles.tableCell}>  </Text>
                        </View>
                        </View>



                        </View>
                        </View>

                        <View style={styles.sousSection}>
                  <Text>Coût de publicités et marketing</Text>
                    <View style={styles.table}>
                     <View style={styles.tableRow}>
                        <View style={styles.tableCol}>
                                <Text style={styles.tableCell}>Désignation élements de publicité</Text>
                        </View>
                        <View style={styles.tableCol}>
                                <Text style={styles.tableCell}>Nombre</Text>
                        </View>
                        <View style={styles.tableCol}>
                                <Text style={styles.tableCell}> Prix </Text>
                        </View>
                        <View style={styles.tableCol}>
                                <Text style={styles.tableCell}> Total</Text>
                        </View>
                        </View>
                        <View style={styles.tableRow}>
                        <View style={styles.tableCol}>
                                <Text style={styles.tableCell}> </Text>
                        </View>
                        <View style={styles.tableCol}>
                                <Text style={styles.tableCell}> </Text>
                        </View>
                        <View style={styles.tableCol}>
                                <Text style={styles.tableCell}>  </Text>
                        </View>
                        <View style={styles.tableCol}>
                                <Text style={styles.tableCell}>  </Text>
                        </View>
                        </View>

                         <View style={styles.tableRow}>
                        <View style={styles.tableCol}>
                                <Text style={styles.tableCell}>Total </Text>
                        </View>
                        <View style={{width: "25%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 ,backgroundColor:"black"}}>
                                <Text style={styles.tableCell}> </Text>
                        </View>
                        <View style={{width: "25%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 ,backgroundColor:"black"}}>
                                <Text style={styles.tableCell}>  </Text>
                        </View>
                        <View style={styles.tableCol}>
                                <Text style={styles.tableCell}>  </Text>
                        </View>
                        </View>
                        </View>
                          
                          </View> 

                          <View style={styles.sousSection}>
                  <Text>Autres coût de fonctionnement ou de production</Text>
                    <View style={styles.table}>
                     <View style={styles.tableRow}>
                        <View style={{width: "50%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}> Désignation</Text>
                        </View>
                        <View style={{width: "50%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}>Prix </Text>
                        </View>
                        
                        </View>


                        <View style={styles.tableRow}>
                        <View style={{width: "50%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}> </Text>
                        </View>
                        <View style={{width: "50%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}> </Text>
                        </View>
                        
                        </View>

                         <View style={styles.tableRow}>
                        <View style={{width: "50%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}>Total </Text>
                        </View>
                        <View style={{width: "50%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}> </Text>
                        </View>
                        </View>
                        



                        </View>
                        </View>

                          <View style={styles.sousSection}>
                  <Text>Coût de l'amortissement matériel</Text>
                    <View style={styles.table}>
                     <View style={styles.tableRow}>
                        <View style={{width: "20%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}> Désignation</Text>
                        </View>
                        <View style={{width: "20%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}>Prix </Text>
                        </View>
                        <View style={{width: "20%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}> Durée de vie</Text>
                        </View>
                        <View style={{width: "20%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}>Amortissement Annuel</Text>
                        </View>
                        <View style={{width: "20%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}>Amortissement Mensuel</Text>
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
                                <Text style={styles.tableCell}>  </Text>
                        </View>
                        <View style={{width: "20%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}>  </Text>
                        </View>
                        <View style={{width: "20%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}>  </Text>
                        </View>
                        </View>

                         <View style={styles.tableRow}>
                        <View style={{width: "20%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}>Total </Text>
                        </View>
                        <View style={{width: "20%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 ,backgroundColor:"black"}}>
                                <Text style={styles.tableCell}> </Text>
                        </View>
                        <View style={{width: "20%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 ,backgroundColor:"black"}}>
                                <Text style={styles.tableCell}> </Text>
                        </View>
                        <View style={{width: "20%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}>  </Text>
                        </View>
                        <View style={{width: "20%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}>  </Text>
                        </View>
                        </View>



                        </View>
                        </View>


                  </View>
                  
                   <View style={styles.sousSection}>
                  <Text>Coût de l'amortissement de l'emprunt financier</Text>
                  <Text>
                        le montant de .................... FCFA contracté sur  ...................... an(s) donnera les détails de remboursement suivants :
                   </Text> <View style={styles.table}>
                     <View style={styles.tableRow}>
                        <View style={{width: "50%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}> Désignation</Text>
                        </View>
                        <View style={{width: "50%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}>Montant </Text>
                        </View>
                        
                        </View>


                        <View style={styles.tableRow}>
                        <View style={{width: "50%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}> </Text>
                        </View>
                        <View style={{width: "50%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}> </Text>
                        </View>
                        
                        </View>

                         <View style={styles.tableRow}>
                        <View style={{width: "50%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}>Total </Text>
                        </View>
                        <View style={{width: "50%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}> </Text>
                        </View>
                        </View>
                        



                        </View>
                        </View>

                        <View style={styles.sousSection}>
                  <Text>Total de charges de production ou de fonctionnement de l'entreprise</Text>
                    <View style={styles.table}>
                     <View style={styles.tableRow}>
                        <View style={{width: "50%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}> Désignation</Text>
                        </View>
                        <View style={{width: "50%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}>Total mensuel </Text>
                        </View>
                        
                        </View>


                        <View style={styles.tableRow}>
                        <View style={{width: "50%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}> </Text>
                        </View>
                        <View style={{width: "50%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}> </Text>
                        </View>
                        
                        </View>

                         <View style={styles.tableRow}>
                        <View style={{width: "50%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}>Total </Text>
                        </View>
                        <View style={{width: "50%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}> </Text>
                        </View>
                        </View>
                        



                        </View>
                        </View>

                 

                  <View style={styles.sousSection}>
                  <Text> 2.Etude de rentabilité</Text>
                 <Text> a-Estimation du chiffre d'affaire mensuel et annuel</Text>
                   <View>
                   <View style={styles.table}>
                     <View style={styles.tableRow}>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}>Produit/Service</Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}>Mois1</Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}> Mois2 </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}> Mois3</Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}>Mois4</Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}> Mois5 </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}> Mois6</Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}>Mois7</Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}> Mois8 </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}> Mois9</Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}>Mois10</Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}> Mois11 </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}> Mois12</Text>
                        </View>
                        </View>
                        <View style={styles.tableRow}>
                        
                        <View style={{width: "100%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}> ..................</Text>
                        </View>
                        
                        </View>

                        <View style={styles.tableRow}>
                        
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}> Quantité</Text>
                        </View>
                       
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}>  </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}> </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}> </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}>  </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}>  </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}> </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}> </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}>  </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}>  </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}> </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}> </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}>  </Text>
                        </View>
                        
                        </View>

                        
                        <View style={styles.tableRow}>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}> Prix unitaire </Text>
                        </View>
                       
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}>  </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}> </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}> </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}>  </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}>  </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}> </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}> </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}>  </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}>  </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}> </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}> </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}>  </Text>
                        </View>
                        
                        
                        </View>

                         <View style={styles.tableRow}>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}>Total </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}> </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}>  </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}>  </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}> </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}> </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}>  </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}>  </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}> </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}> </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}>  </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}>  </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}>  </Text>
                        </View>
                        </View>
                        </View>

                   </View>
                 <Text style={{margin:4,padding:5}} > b-plan de tresorerie</Text>
                   <View>
                   <Text style={{margin:4,padding:5}}>Prévision des recettes</Text>

                   <View>
                   <View style={styles.table}>
                     <View style={styles.tableRow}>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}>Produit/Service</Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}>Mois1</Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}> Mois2 </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}> Mois3</Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}>Mois4</Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}> Mois5 </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}> Mois6</Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}>Mois7</Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}> Mois8 </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}> Mois9</Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}>Mois10</Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}> Mois11 </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}> Mois12</Text>
                        </View>
                        </View>
                                                
                      

                        <View style={styles.tableRow}>
                        
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}> VENTE</Text>
                        </View>
                       
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}>  </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}> </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}> </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}>  </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}>  </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}> </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}> </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}>  </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}>  </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}> </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}> </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}>  </Text>
                        </View>
                        
                        </View>

                        <View style={styles.tableRow}>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}> TOTAL DES ENTREES </Text>
                        </View>
                       
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}>  </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}> </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}> </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}>  </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}>  </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}> </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}> </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}>  </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}>  </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}> </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}> </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}>  </Text>
                        </View>
                        
                        
                        </View>

                         <View style={styles.tableRow}>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}>TOTAL CUMUL DES ENTREES </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}> </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}>  </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}>  </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}> </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}> </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}>  </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}>  </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}> </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}> </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}>  </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}>  </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}>  </Text>
                        </View>
                        </View>




                        </View>
                         </View>

                   










                   <Text style={{margin:4,padding:5}}>Prévision des décaissements</Text>

                   <View>
                   <View style={styles.table}>
                     <View style={styles.tableRow}>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}>Produit/Service</Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}>Mois1</Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}> Mois2 </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}> Mois3</Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}>Mois4</Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}> Mois5 </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}> Mois6</Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}>Mois7</Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}> Mois8 </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}> Mois9</Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}>Mois10</Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}> Mois11 </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}> Mois12</Text>
                        </View>
                        </View>
                                                
                      

                        <View style={styles.tableRow}>
                        
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}> VENTE</Text>
                        </View>
                       
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}>  </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}> </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}> </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}>  </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}>  </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}> </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}> </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}>  </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}>  </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}> </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}> </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}>  </Text>
                        </View>
                        
                        </View>

                      


 
                        <View style={styles.tableRow}>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}> TOTAL DES ENTREES </Text>
                        </View>
                       
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}>  </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}> </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}> </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}>  </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}>  </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}> </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}> </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}>  </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}>  </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}> </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}> </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}>  </Text>
                        </View>
                        
                        
                        </View>

                         <View style={styles.tableRow}>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}>COÛT D'ACHAT MATIÈRES PREMIÈRES </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}> </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}>  </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}>  </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}> </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}> </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}>  </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}>  </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}> </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}> </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}>  </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}>  </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}>  </Text>
                        </View>
                        </View>
<View style={styles.tableRow}>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}> COÛT DE MAIN D'OEUVRE </Text>
                        </View>
                       
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}>  </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}> </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}> </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}>  </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}>  </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}> </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}> </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}>  </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}>  </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}> </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}> </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}>  </Text>
                        </View>
                        
                        
                        </View>

                         <View style={styles.tableRow}>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}>COÛT DE L'AMORTISSEMENT </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}> </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}>  </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}>  </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}> </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}> </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}>  </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}>  </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}> </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}> </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}>  </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}>  </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}>  </Text>
                        </View>
                        </View>

<View style={styles.tableRow}>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}>COÛT DE L'AMORTISSEMENT </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}> </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}>  </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}>  </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}> </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}> </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}>  </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}>  </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}> </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}> </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}>  </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}>  </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}>  </Text>
                        </View>
                        </View>

                        <View style={styles.tableRow}>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}>REMBOURSEMENT EMPRUNT </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}> </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}>  </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}>  </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}> </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}> </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}>  </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}>  </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}> </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}> </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}>  </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}>  </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}>  </Text>
                        </View>
                        </View>

                        <View style={styles.tableRow}>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}>AUTRES COÛTS </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}> </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}>  </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}>  </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}> </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}> </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}>  </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}>  </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}> </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}> </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}>  </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}>  </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}>  </Text>
                        </View>
                        </View>

                        <View style={styles.tableRow}>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}>TOTAL DES SORTIES </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}> </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}>  </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}>  </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}> </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}> </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}>  </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}>  </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}> </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}> </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}>  </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}>  </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}>  </Text>
                        </View>
                        </View>

                        <View style={styles.tableRow}>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}>TOTAL CUMUL DES SORTIES</Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}> </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}>  </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}>  </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}> </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}> </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}>  </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}>  </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}> </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}> </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}>  </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}>  </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}>  </Text>
                        </View>
                        </View>


                        </View>
                        
                         </View>

                   </View>

                 <Text style={{margin:4,padding:5}}> c-Compte de résultat Prévision</Text>
                   <View>
                 <Text style={{margin:4,padding:5}}>Compte de résultat prévisionnel mensuel et annuel</Text>
                 <View style={styles.table}>
                        <View style={styles.tableRow}>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}>Produit/Service</Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}>Mois1</Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}> Mois2 </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}> Mois3</Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}>Mois4</Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}> Mois5 </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}> Mois6</Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}>Mois7</Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}> Mois8 </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}> Mois9</Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}>Mois10</Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}> Mois11 </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}> Mois12</Text>
                        </View>
                        </View>
                                         <View style={styles.tableRow}>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}> Ventes </Text>
                        </View>
                       
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}>  </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}> </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}> </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}>  </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}>  </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}> </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}> </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}>  </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}>  </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}> </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}> </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}>  </Text>
                        </View>
                        
                        
                        </View>

                         <View style={styles.tableRow}>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}>CHIFFRE D'AFFAIRE (A) </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}> </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}>  </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}>  </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}> </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}> </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}>  </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}>  </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}> </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}> </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}>  </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}>  </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}>  </Text>
                        </View>
                        </View>
<View style={styles.tableRow}>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}> Coût d'achat marchandises </Text>
                        </View>
                       
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}>  </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}> </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}> </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}>  </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}>  </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}> </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}> </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}>  </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}>  </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}> </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}> </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}>  </Text>
                        </View>
                        
                        
                        </View>

                         <View style={styles.tableRow}>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}>Coût main d'oeuvre(Salaire) </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}> </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}>  </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}>  </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}> </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}> </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}>  </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}>  </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}> </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}> </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}>  </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}>  </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}>  </Text>
                        </View>
                        </View>

<View style={styles.tableRow}>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}>Coût publicité et marketing</Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}> </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}>  </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}>  </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}> </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}> </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}>  </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}>  </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}> </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}> </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}>  </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}>  </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}>  </Text>
                        </View>
                        </View>

                        <View style={styles.tableRow}>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}>Dotation aux amortissements </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}> </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}>  </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}>  </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}> </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}> </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}>  </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}>  </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}> </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}> </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}>  </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}>  </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}>  </Text>
                        </View>
                        </View>

                        <View style={styles.tableRow}>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}>AUTRES COÛTS </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}> </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}>  </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}>  </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}> </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}> </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}>  </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}>  </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}> </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}> </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}>  </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}>  </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}>  </Text>
                        </View>
                        </View>

                        <View style={styles.tableRow}>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}>TOTAL CHARGES(B) </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}> </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}>  </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}>  </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}> </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}> </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}>  </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}>  </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}> </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}> </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}>  </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}>  </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}>  </Text>
                        </View>
                        </View>

                        <View style={styles.tableRow}>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}>Autres coût de fonctionnement</Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}> </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}>  </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}>  </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}> </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}> </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}>  </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}>  </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}> </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}> </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}>  </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}>  </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}>  </Text>
                        </View>
                        </View>
                        <View style={styles.tableRow}>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}>RESULTAT NET (A-B)</Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}> </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}>  </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}>  </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}> </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}> </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}>  </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}>  </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}> </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}> </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}>  </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}>  </Text>
                        </View>
                        <View style={{width: "7.69%", 
                                      borderStyle: "solid", 
                                      borderWidth: 1, 
                                      borderLeftWidth: 0, 
                                      borderTopWidth: 0 }}>
                                <Text style={styles.tableCell}>  </Text>
                        </View>
                        </View>
                        </View>
                   </View>

                 <Text style={{margin:4,padding:5}}>d-Determination du seuil de rentabilité</Text>
                   <View>
                 <Text>Au vu des tableaux du compte de résultat prévisionnel, le projet atteindra son seuil de rentabilité à partir du ............ ième mois d'activité c'est-à-dire dans le courant du mois de ............................de l'année .../.../... avec un chiffre d'affaire de :........FCFA.</Text>

                   </View>

                  </View>

                

                  <View style={styles.footer}>
                  <Text style={{fontSize:'14px',color:'gray'}}>crée par.................... le ..../..../.... à ....h....min....s  </Text>
                  </View>
                  </View>
                  </Page>
                  
          </Document>
          )


export default function Pfppdf(){
  return (
    <div style={{}}> 
       <PDFViewer width='100%' height='640px'>
       <Mydocument/>
       </PDFViewer>
    </div>
  )
}