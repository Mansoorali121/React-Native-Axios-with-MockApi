import { Alert, Button, FlatList, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BASE_URL } from '../apis/Api';
import Book from '../components/Book';
import AddButton from '../components/AddButton';
import Model from './Model';

const Home = () => {
  const [data, setData] = useState([]);
  const [modalvisible,setModalVisible] = useState(false)
  const getdata = async () => {
    try {
      const response = await axios.get(`${BASE_URL}`);
      console.log(JSON.stringify(response.data, null, 3));
      setData(response.data);
      // Alert.alert('Data fetched successfully');
    } catch (error) {
      console.log('Error', error);
    }
  };

  useEffect(() => {
    getdata();
  }, []);
  const postData = async () => {
    try {
      const response = await axios.post(`${BASE_URL}`, {
        author: 'Mansoor',
        cover:
          'https://www.weidenfeldandnicolson.co.uk/wp-content/uploads/2018/12/hbg-title-9781474602686-9.jpg?resize=674,1024',
        name_of_boook: 'Rise',
        price: '30',
      });
      //   getdata();
      console.log(JSON.stringify(response.data, null, 3));
      Alert.alert('Success', 'Data posted successfully');
    } catch (error) {
      console.log('Error potsting data', error);
    }
  };

  const deleteData = async () => {
    try {
      const response = await axios.delete(`${BASE_URL}/14`);
      console.log(JSON.stringify(response.data, null, 3));
      Alert.alert('success', 'Data deleted successfully');
      getdata();
    } catch (error) {
      console.log('Error deleting data', error);
    }
  };

  const editData = async () => {
    try {
      const response = await axios.put(`${BASE_URL}/21`, {
        author: 'Mansoor Sahito',
        cover:
          'https://www.weidenfeldandnicolson.co.uk/wp-content/uploads/2018/12/hbg-title-9781474602686-9.jpg?resize=674,1024',
        name_of_book: 'Detector',
        price: '40',
      });
      console.log(JSON.stringify(response.data, null, 3));
      Alert.alert('success', 'Data Updated successfully');
      getdata();
    } catch (error) {
      console.log('Error Updating data', error);
    }
  };
  return (
    <View>
      <FlatList
        data={data}
        keyExtractor={item => item.toString}
        contentContainerStyle={styles.cont}
        columnWrapperStyle={styles.col}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <Book
            {...item}
            coverURL={item.cover}
            author={item.author}
            nameOfBook={item.name_of_book}
            price={item.price}
            categoryColor="brown"
          />
        )}
      />
      <AddButton  onPress={()=>setModalVisible(true)}/>

      <Model visible={modalvisible} onRequestClose={()=>setModalVisible(false)} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  cont: {
    paddingTop: 100,
    justifyContent: 'space-between',
    paddingHorizontal: 30,
  },
  col: {
    justifyContent: 'space-around',
    flex: 1,
  },
});
