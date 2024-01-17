import React, { useState, useEffect } from "react";
import {
    View, Text,
    TouchableOpacity,
    FlatList, TextInput
} from "react-native";
import styles from "./style";
import q from "../../config/firebaseconfig";
import { FontAwesome } from "@expo/vector-icons"

export default function Task() {
      const [task, setTask] = useState([])

    //   function deleteTask(id) {
    //       app.collection("task").doc(id).delete()
    //   }

    //  useEffect(() => {
    //       q.collection("task").taskSnapshot((query) => {
    //           const list = []
    //           query.forEach((doc) => {
    //               list.push({ ...doc.data(), id: doc.id })
    //           })
    //           setTask(list)
    //       })
   //    }, [])
    // const [A, setA] = useState(q)




    return (
       // console.warn({A}),
      
        <View style={styles.container}>

    
             {/* <FlatList/>
            <TouchableOpacity 
            style={styles.buttonNewTask}>
                <Text style={styles.iconButton}>+</Text>
            </TouchableOpacity> */}
        </View>


    )

}