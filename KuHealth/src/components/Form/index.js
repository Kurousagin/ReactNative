import React, {useState} from "react"
import { View, Text, TextInput, TouchableOpacity, Vibration, Pressable, Keyboard } from "react-native"
import ResultImc from "./ResultImc"
import styles from "./style"

export default function Form (){

    const [height, setHeight]=React.useState(null)
    const [weight, setWeight]=React.useState(null)
    const [messageImc, setMessageImc]=useState(null);
    const [imc, setImc]=useState(null)
    const [textButton, setTextButton]=useState("Calculate")
    const [errorMessage, setErrorMessage] = useState(null)


    function imcCalculator(){
        let heightFormat = height.replace(",",".")
        return setImc((weight/(heightFormat*heightFormat)).toFixed(2))
    }

    function verifImc(){
        if(imc == null){
            Vibration.vibrate();
            setErrorMessage("Required Field*")
        }
    }



    function validationImc(){
        if(weight != null && height != null){
            imcCalculator()
            setHeight(null)
            setWeight(null)
            setMessageImc("You imc is:")
            setTextButton("Recalculate")
            setErrorMessage(null)
           
            return
        }
        verifImc()
        setImc(null)
        setTextButton("Calculate")
        setMessageImc("Fill weight an height")
        
        
       
    }
    
    return(
       <Pressable onPress={Keyboard.dimiss} style={styles.formContext}>
            <View style={styles.form}>
            <Text style={styles.formLabel}>Height</Text>
            <Text style={styles.errorMessage}>{errorMessage}</Text>
                <TextInput
                    style={styles.formInput}
                    onChangeText={setHeight}
                    value={height}
                    placeholder="Ex. 1.75" 
                    keyboardType="numeric"/>
                
                
                <Text style={styles.formLabel}>Weight</Text>
                <Text style={styles.errorMessage}>{errorMessage}</Text>
                <TextInput
                    style={styles.formInput}
                    onChangeText={setWeight}
                    value={weight}
                    placeholder="Ex. 76.560" 
                    keyboardType="numeric"/>

               <TouchableOpacity
                    style={styles.buttonCalculator}
                    onPress={() =>{
                        validationImc()
                        }}
                        >
                        <Text style={styles.textButtonCalculator}>{textButton}</Text>
               </TouchableOpacity>

               
            </View>
            <ResultImc messageResultImc={messageImc} resultImc={imc}/>
       </Pressable>
    );

}