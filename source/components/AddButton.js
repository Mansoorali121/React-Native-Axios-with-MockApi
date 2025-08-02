import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { Colors } from '../Constants/Theme';
import { hp } from '../commom/Helpers';

const AddButton = ({onPress}) => {
  return (
    <TouchableOpacity style={styles.btn} onPress={onPress}>
      <Image
        source={require('../assets/plus.png')}
        style={styles.book}
      />
    </TouchableOpacity>
  );
};

export default AddButton;

const styles = StyleSheet.create({
    btn:{position:"absolute",
        backgroundColor:Colors.mainColor,
        bottom:20,
        alignSelf:"center",
        zIndex:1,
        height:60,
        width:60,
        borderRadius:30,
        justifyContent:"center",
        alignItems:"center"
    },
    book:{ height: 45, width: 45 , tintColor:Colors.white}
});
