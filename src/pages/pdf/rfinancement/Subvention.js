import React, { useEffect, useState } from "react";
import ReactPDF, {
  PDFViewer,
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  renderToStream,
} from "@react-pdf/renderer";
import { fetchWrapper } from "../../../reducer/helpers/helpers";
import { useParams } from "react-router-dom";

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "white",
    margin: 5,
    padding: 5,
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  sousSection: {
    display: "flex",
    justifyContent: "center",
    margin: 5,
    padding: 5,
    fontSize: "12px",
  },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 5,
    padding: 5,
  },
  footer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    margin: 5,
    padding: 5,
  },
  table: {
    display: "table",
    width: "auto",
    borderStyle: "solid",
    borderWidth: 1,
    borderRightWidth: 0,
    borderBottomWidth: 0,
  },
  tableRow: {
    margin: "auto",
    flexDirection: "row",
  },
  tableCol: {
    width: "25%",
    borderStyle: "solid",
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
  },
  tableCell: {
    margin: "auto",
    //marginTop: 5,
    padding: 3,
    fontSize: 10,
    textAlign: "start",
  },
});

const Mydocument = ({ data }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <View style={styles.header}>
          <Text style={{ fontSize: "14px", color: "gray" }}>
            Astraining Business{" "}
          </Text>
          <Text style={{ fontSize: "13px", color: "gray" }}>
            Nom du projet{" "}
          </Text>
        </View>
        <View style={styles.sousSection}>
          <Text style={{ fontSize: "16px", textAlign: "center", color: "red" }}>
            Recherche financement -Subventions étatique{" "}
          </Text>
        </View>

        <View style={styles.sousSection}>
          <Text>
            A combien s'élève le montant de démarrage de votre activité?:{" "}
            {data?.montant_demarrage}{" "}
          </Text>
          <Text>
            Quelles sont les organisations publiques ou privées/ nationales ou
            internationnales que vous comptez contacter?:{" "}
            {data?.organisation_contacter}
          </Text>
          <Text>
            Et combien espérez-vous avoir auprés de chacun?:{" "}
            {data?.montant_attendu}
          </Text>
        </View>

        <View style={styles.sousSection}>
          <View style={styles.sousSection}>
            <View style={styles.table}>
              <View style={styles.tableRow}>
                <View
                  style={{
                    width: "20%",
                    borderStyle: "solid",
                    borderWidth: 1,
                    borderLeftWidth: 0,
                    borderTopWidth: 0,
                  }}
                >
                  <Text style={styles.tableCell}>Nom de l'organisation</Text>
                </View>
                <View
                  style={{
                    width: "20%",
                    borderStyle: "solid",
                    borderWidth: 1,
                    borderLeftWidth: 0,
                    borderTopWidth: 0,
                  }}
                >
                  <Text style={styles.tableCell}>Montant attendu</Text>
                </View>
                <View
                  style={{
                    width: "20%",
                    borderStyle: "solid",
                    borderWidth: 1,
                    borderLeftWidth: 0,
                    borderTopWidth: 0,
                  }}
                >
                  <Text style={styles.tableCell}>Montant reçu</Text>
                </View>
                <View
                  style={{
                    width: "20%",
                    borderStyle: "solid",
                    borderWidth: 1,
                    borderLeftWidth: 0,
                    borderTopWidth: 0,
                  }}
                >
                  <Text style={styles.tableCell}>Montant atteint?</Text>
                </View>
                <View
                  style={{
                    width: "20%",
                    borderStyle: "solid",
                    borderWidth: 1,
                    borderLeftWidth: 0,
                    borderTopWidth: 0,
                  }}
                >
                  <Text style={styles.tableCell}>Montant reliquat</Text>
                </View>
              </View>

              <View style={styles.tableRow}>
                <View
                  style={{
                    width: "20%",
                    borderStyle: "solid",
                    borderWidth: 1,
                    borderLeftWidth: 0,
                    borderTopWidth: 0,
                  }}
                >
                  <Text style={styles.tableCell}> </Text>
                </View>
                <View
                  style={{
                    width: "20%",
                    borderStyle: "solid",
                    borderWidth: 1,
                    borderLeftWidth: 0,
                    borderTopWidth: 0,
                  }}
                >
                  <Text style={styles.tableCell}> </Text>
                </View>
                <View
                  style={{
                    width: "20%",
                    borderStyle: "solid",
                    borderWidth: 1,
                    borderLeftWidth: 0,
                    borderTopWidth: 0,
                  }}
                >
                  <Text style={styles.tableCell}> </Text>
                </View>
                <View
                  style={{
                    width: "20%",
                    borderStyle: "solid",
                    borderWidth: 1,
                    borderLeftWidth: 0,
                    borderTopWidth: 0,
                  }}
                >
                  <Text style={styles.tableCell}> </Text>
                </View>
                <View
                  style={{
                    width: "20%",
                    borderStyle: "solid",
                    borderWidth: 1,
                    borderLeftWidth: 0,
                    borderTopWidth: 0,
                  }}
                >
                  <Text style={styles.tableCell}> </Text>
                </View>
              </View>
            </View>
          </View>
          <Text>
            Montant total des apports réunis: {data?.montant_total_reunis}{" "}
          </Text>
        </View>

        <View style={styles.sousSection}>
          <Text
            style={{ margin: "3px", fontSize: "15px", textAlign: "center" }}
          >
            {" "}
            Observation durant la periode de financement
          </Text>
          <Text>{data?.observation}</Text>
          <Text>Date de l'atteinte du financement: {data?.delai_attendu}</Text>
          <Text>Periode respecté: {data?.statut_periode}</Text>
        </View>
        <View style={styles.sousSection}>
          <Text
            style={{ margin: "3px", fontSize: "15px", textAlign: "center" }}
          >
            {" "}
            Plan B{" "}
          </Text>
          <Text>
            Quel est votre plan B au cas ou la première Strategie de financement
            ne marche pas?: {data?.planB}
          </Text>
        </View>

        <View style={styles.footer}>
          <Text style={{ fontSize: "14px", color: "gray" }}>
            crée par.................... le ..../..../.... à ....h....min....s{" "}
          </Text>
        </View>
      </View>
    </Page>
  </Document>
);

export default function Subventionpdf() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState();

  const { id } = useParams();
  const datating = async () => {
    const reponses = await fetchWrapper.get(
      `https://astrainingbusiness-crud.onrender.com/api/subvention/voir/${id}`
    );
    if (reponses) {
      setData(reponses);
      console.log(reponses);
      setLoading(true);
      return null;
    }
  };
  useEffect(() => {
    datating();
    return null;
  }, []);
  return (
    <div style={{}}>
      {loading == false ? (
        <div style={{}}>chargement des données...</div>
      ) : (
        <PDFViewer width="100%" height="640px">
          <Mydocument data={data} />
        </PDFViewer>
      )}
    </div>
  );
}
