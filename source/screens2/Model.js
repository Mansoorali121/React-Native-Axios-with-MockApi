import { StyleSheet, Text, View , Modal, Button, SafeAreaView} from 'react-native'
import React from 'react'

const Model = ({visible, onRequestClose}) => {
  return (
    <Modal visible={visible} 
    onRequestClose={onRequestClose}
    animationType="slide"
    >
      <SafeAreaView>
        <Text>Modal</Text>
      <Button title="Close Modal" 
      onPress={()=> onRequestClose()}
      />
      </SafeAreaView>
    </Modal>
  )
}

export default Model;

const styles = StyleSheet.create({})