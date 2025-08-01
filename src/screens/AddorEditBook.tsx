// import { Modal, StyleSheet, Text, View, Button } from 'react-native'
// import React from 'react'

// const AddorEditBook = ({visible, onRequestClose}) => {
//   return (
//     <Modal visible={visible} transparent
//     onRequestClose={onRequestClose}
//     animationType='slide'
  

//     >
//       <Button  title="Close Modal" onPress={onRequestClose}/>
//     </Modal>
//   )
// }

// export default AddorEditBook;

// const styles = StyleSheet.create({})


import { Modal, StyleSheet, Text, View, TextInput, Button } from 'react-native';
import React, { useState } from 'react';

const AddorEditBook = ({ visible, onClose, onSubmit }) => {
  const [author, setAuthor] = useState('');
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [coverURL, setCoverURL] = useState('');

  const handleSubmit = () => {
    onSubmit({ author, name_of_book: name, price, cover: coverURL });
    // clear fields
    setAuthor('');
    setName('');
    setPrice('');
    setCoverURL('');
    onClose();
  };

  return (
    <Modal visible={visible} transparent animationType="slide">
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          <Text style={styles.heading}>Add New Book</Text>

          <TextInput
            placeholder="Author"
            value={author}
            onChangeText={setAuthor}
            style={styles.input}
          />
          <TextInput
            placeholder="Book Name"
            value={name}
            onChangeText={setName}
            style={styles.input}
          />
          <TextInput
            placeholder="Price"
            value={price}
            onChangeText={setPrice}
            style={styles.input}
            keyboardType="numeric"
          />
          <TextInput
            placeholder="Cover Image URL"
            value={coverURL}
            onChangeText={setCoverURL}
            style={styles.input}
          />

          <View style={styles.buttonRow}>
            <Button title="Cancel" onPress={onClose} color="red" />
            <Button title="Submit" onPress={handleSubmit} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default AddorEditBook;

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: '85%',
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 12,
    elevation: 5,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
