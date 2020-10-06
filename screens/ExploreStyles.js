import { StyleSheet } from "react-native";

export default StyleSheet.create({
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    elevation: 2,
    width: "85%",
    backgroundColor: "#FFF",
    paddingHorizontal: 20,
    height: 35,
    borderRadius: 10,
    marginLeft: 1,
  },
  header1: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#4f4a4a",
  },
  header2: {
    marginTop: 20,
    fontWeight: "bold",
    fontSize: 20,
    color: "#4f4a4a",
  },
  subHeader: {
    fontWeight: "bold",
    fontSize: 9,
    color: "#4f4a4a",
  },
  bulletPoint: {
    height: 5,
    width: 5,
    borderRadius: 5,
    backgroundColor: "#4f4a4a",
    marginHorizontal: 4,
  },
  filterIcon: {
    alignItems: "center",
    elevation: 2,
    width: "15%",
    backgroundColor: "#FFF",
    marginLeft: 5,
    height: 35,
    borderRadius: 10,
    marginLeft: 1,
    justifyContent: "center",
  },
});
