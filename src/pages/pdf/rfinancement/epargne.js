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
            Recherche financement - Epargne personnelle{" "}
          </Text>
        </View>

        <View style={styles.sousSection}>
          <Text>
            A combien s'élève le cout de demarrage de votre projet?:
            {data?.cout_demarrage_projet}{" "}
          </Text>
          <Text>
            Combien comptez-vous apporter personnellement?:{" "}
            {data?.apport_personnel}{" "}
          </Text>
          <Text>
            Avez-vous déja rassemblez ce montant?:{data?.disponible_montant}
          </Text>
          <Text>
            En combien de temps comptez-vous obtenir ce montant?:
            {data?.duree_obtention_montant}
          </Text>
        </View>

        <View style={styles.sousSection}>
          <Text style={{ margin: "3px", textAlign: "center" }}>
            (veuillez planifier votre épargne dans le tableau ci-dessous.){" "}
          </Text>
          <Text
            style={{ margin: "3px", fontSize: "15px", textAlign: "center" }}
          >
            {" "}
            PROGRAMME D'EPARGNE{" "}
          </Text>
          <View style={styles.sousSection}>
            <Text>
              Total de charges de production ou de fonctionnement de
              l'entreprise
            </Text>
            <View style={styles.table}>
              <View style={styles.tableRow}>
                <View
                  style={{
                    width: "33.33%",
                    borderStyle: "solid",
                    borderWidth: 1,
                    borderLeftWidth: 0,
                    borderTopWidth: 0,
                  }}
                >
                  <Text style={styles.tableCell}>Mois</Text>
                </View>
                <View
                  style={{
                    width: "33.33%",
                    borderStyle: "solid",
                    borderWidth: 1,
                    borderLeftWidth: 0,
                    borderTopWidth: 0,
                  }}
                >
                  <Text style={styles.tableCell}>Montant Epargne</Text>
                </View>
                <View
                  style={{
                    width: "33.33%",
                    borderStyle: "solid",
                    borderWidth: 1,
                    borderLeftWidth: 0,
                    borderTopWidth: 0,
                  }}
                >
                  <Text style={styles.tableCell}>Montant cumulé</Text>
                </View>
              </View>

              <View style={styles.tableRow}>
                <View
                  style={{
                    width: "33.33%",
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
                    width: "33.33%",
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
                    width: "33.33%",
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
        </View>

        <View style={styles.sousSection}>
          <Text
            style={{ margin: "3px", fontSize: "15px", textAlign: "center" }}
          >
            {" "}
            OBSERVATION DURANT LA PERIODE D'EPARGNE
          </Text>
          <Text>{data?.observation_epargne}</Text>
          <Text>
            Date de l'atteinte du montant de l'epargne:{" "}
            {data?.date_atteinte_epargne}
          </Text>
          <Text>
            Avez-vous respecté le delai de financement:{data?.delai_respecte}
          </Text>
          <Text>
            Avez-vous respecté le delai de financement: {data?.delai_respecte}
          </Text>
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

export default function Epargnepdf() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState();

  const { id } = useParams();
  const datating = async () => {
    const reponses = await fetchWrapper.get(
      `https://astrainingbusiness-crud.onrender.com/api/epargnePersonelle/voir/${id}`
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
