import { StyleSheet, Text, TouchableOpacity, View, ActivityIndicator } from 'react-native';
import React from 'react';
import { Colors } from '../style/colors';

const MainButton = ({ onPress, title, loading, disable }) => {
  return (
    <TouchableOpacity style={[styles.cont, disable && {opacity:.5}]} onPress={
        () => {
           onPress &&  onPress()
        }
       }
         disabled={disable}
       >
      {loading ? (
        <ActivityIndicator size="small" color={Colors.white} />
      ) : (
        <Text style={styles.btntitleText}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

export default MainButton;

const styles = StyleSheet.create({
  cont: {
    height: 48,
    width: '100%',
    backgroundColor: Colors.mainColor,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: '20%',
    borderRadius: 80,
  },
  btntitleText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.white,
  },
});
