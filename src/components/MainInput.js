import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { Colors } from '../style/colors';

const MainInput = (props) => {
  return (
    <View style={styles.cont}>
      <TextInput   style={styles.textInput} {...props} />
    </View> 
  )
}

export default MainInput;

const styles = StyleSheet.create({
    cont:{height:48,
        width:"100%",
        backgroundColor:Colors.lightGray,
        borderRadius:10,
        justifyContent:"center",
        marginBottom:8
    },
    textInput:{
        fontSize:16,
        padding:6,
        marginHorizontal:5,
        color:"#9b9b9b"
    },
})