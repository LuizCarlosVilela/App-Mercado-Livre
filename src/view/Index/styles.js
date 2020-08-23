import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 40,
    paddingRight: 40,
  },
  text_white: {
    color: "#FFFFFF",
  },
  text_primary: {
    fontSize: 14,
    color: "#3483FA",
  },
  text_secundary: {
    color: "#000",
  },
  drawer_content: {
    flex: 1,
    backgroundColor: "#CDCDCD",
  },
  drawer_header: {
    flex: 2,
    backgroundColor: "#ffe600",
    paddingTop: 40,
    paddingHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  drawer_body: {
    flex: 6,
    backgroundColor: "#fff",
  },
  mercado_pago: {
    backgroundColor: "#FFF589",
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 5,
    width: "100%",
    height: 30,
    marginTop: 20,
    marginBottom: 20,
    flexDirection: "row",
  },
  mercado_pago_text: {
    marginLeft: 20,
  },
  user: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  footer: {
    flex: 0.5,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    borderTopWidth: 0.5,
    borderTopColor: "#c1c1c1",
    backgroundColor: "#FFF",
  },
});

export default styles;
