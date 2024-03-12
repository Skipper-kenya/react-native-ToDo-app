import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: 25,
  },
  nav: {
    borderBottomColor: "#333",
    height: 60,
    backgroundColor: "coral",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  text: {
    color: "white",
    fontSize: 18,
    flexDirection: "column",
  },
  dashboard_wrapper: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
  },
  head3: {
    fontSize: 18,
    marginTop: 10,
    marginBottom: 5,
    color: "coral",
    letterSpacing: 1,
  },
  input_wrapper: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  inputField: {
    backgroundColor: "#333",
    color: "white",
    textAlign: "center",
    height: 40,
    width: 250,
    borderRadius: 7,
  },
  btn: {
    width: 120,
    paddingLeft: 5,
    borderRadius: 2,
    height: 40,
  },
});
