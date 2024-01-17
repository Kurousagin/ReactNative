import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ffff",
        paddingTop: 20
    },
    iconButton: {
        color:"#ffff",
        fontSize: 26,
        fontWeight: "bold"

    },
    buttonNewTask: {
        width:60,
        height:60,
        position:"absolute",
        bottom: 30,
        left: 20,
        backgroundColor:"#f92e6a",
        borderRadius:50,
        justifyContent: "center",
        alignItems: "center",
    }

});

export default styles
