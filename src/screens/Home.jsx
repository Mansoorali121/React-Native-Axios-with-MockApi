// import { Button, FlatList, StyleSheet, Text, View } from 'react-native';
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useIsFocused } from '@react-navigation/native';

// const Home = () => {
//   const [data, setData] = useState([]);

//   const URL = 'https://6885d470f52d34140f6aa891.mockapi.io/books';
//   const Isfocused = useIsFocused();

//   useEffect(() => {
//     const getData = async () => {
//       try {
//         const response = await axios.get(URL);
//         // console.log(JSON.stringify(response.data, null, 3));
//         setData(response.data);
//         // console.log(data);
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     getData();
//   }, [Isfocused]);

//   const addData = async () => {
//     const response = await axios.post(
//       URL,
//       {
//         author: 'Syeda Naz Fvrt Wali Student ',
//         cover:
//           'https://www.linkshop.pk/the-forty-rules-of-love?srsltid=AfmBOopHbmwqy89w6QYKC8j6qTMJrrUHQPsNHafPaTZMq4hYBaz47NTt',
//         name_of_book: 'The Character',
//       },
//       // console.log("=============== RESPONSE OF DATA ====================== "),
//       // console.log(JSON.stringify(response.data,null, 3))
//     );
//   };
//   const deleteData = async () => {
//     const response = await axios.delete(`${URL}/2`);
//     setData(response.data);
//     console.log('Data Deleted Successfully');
//   };

//   const editData = async () => {
//     const response = await axios.put(`${URL}/3`, {
//       author: 'Lorence ',
//       cover:
//         'https://www.linkshop.pk/the-forty-rules-of-love?srsltid=AfmBOopHbmwqy89w6QYKC8j6qTMJrrUHQPsNHafPaTZMq4hYBaz47NTt',
//       name_of_book: 'The Gold',
//     });
//   };
//   return (
//     <View style={{ alignItems: 'center', marginTop: 60, gap: 40 }}>
//       {/* <Button onPress={addData} title='Add Data' /> */}
//       <Button onPress={addData} title="Add Data" />
//       <Button onPress={deleteData} title="Delete Data" />
//       <Button  onPress={editData} title='Edit Data '/>

//       <FlatList
//         showsVerticalScrollIndicator={false}
//         data={data}
//         keyExtractor={item => item.id}
//         renderItem={({ item }) => (
//           <View style={{ padding: 10, borderBottomWidth: 1 }}>
//             <Text style={{ fontSize: 16, fontWeight: 'bold' }}>
//               {item.author}
//             </Text>
//           </View>
//         )}
//       />
//     </View>
//   );
// };

// export default Home;

// const styles = StyleSheet.create({});

import {
  Alert,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import Book from '../components/Book';
import axios from 'axios';
import { useIsFocused } from '@react-navigation/native';
import AddButton from '../components/AddButton';
import MainButton from '../components/MainButton';
import MainInput from '../components/MainInput';
import AddorEditBook from './AddorEditBook';

const Home = () => {
  const [data, setData] = useState([]);

  // const [value , setValue] = useState("")

  // console.log(value)

  const isfocused = useIsFocused();
  const tempData = [
    {
      author: 'Syeda Naz',
      nameOfBook: 'Turn It out',
      price: 20,
      coverURL:
        'https://booksicedlattesblessed.wordpress.com/wp-content/uploads/2020/03/tuneitout.jpg?w=1366',
      categoryColor: 'brown',
    },
    {
      author: 'Syeda Naz',
      nameOfBook: 'Turn It out',
      price: 20,
      coverURL:
        'https://booksicedlattesblessed.wordpress.com/wp-content/uploads/2020/03/tuneitout.jpg?w=1366',
      categoryColor: 'brown',
    },
    {
      author: 'Syeda Naz',
      nameOfBook: 'Turn It out',
      price: 20,
      coverURL:
        'https://booksicedlattesblessed.wordpress.com/wp-content/uploads/2020/03/tuneitout.jpg?w=1366',
      categoryColor: 'brown',
    },
    {
      author: 'Syeda Naz',
      nameOfBook: 'Turn It out',
      price: 20,
      coverURL:
        'https://booksicedlattesblessed.wordpress.com/wp-content/uploads/2020/03/tuneitout.jpg?w=1366',
      categoryColor: 'brown',
    },
    {
      author: 'Syeda Naz',
      nameOfBook: 'Turn It out',
      price: 20,
      coverURL:
        'https://booksicedlattesblessed.wordpress.com/wp-content/uploads/2020/03/tuneitout.jpg?w=1366',
      categoryColor: 'brown',
    },
    {
      author: 'Syeda Naz',
      nameOfBook: 'Turn It out',
      price: 20,
      coverURL:
        'https://booksicedlattesblessed.wordpress.com/wp-content/uploads/2020/03/tuneitout.jpg?w=1366',
      categoryColor: 'brown',
    },
    {
      author: 'Syeda Naz',
      nameOfBook: 'Tune It out',
      price: 20,
      coverURL:
        'https://booksicedlattesblessed.wordpress.com/wp-content/uploads/2020/03/tuneitout.jpg?w=1366',
      categoryColor: 'brown',
    },
    {
      author: 'Syeda Naz',
      nameOfBook: 'Turn It out',
      price: 20,
      coverURL:
        'https://booksicedlattesblessed.wordpress.com/wp-content/uploads/2020/03/tuneitout.jpg?w=1366',
      categoryColor: 'brown',
    },
    {
      author: 'Syeda Naz',
      nameOfBook: 'Turn It out',
      price: 20,
      coverURL:
        'https://booksicedlattesblessed.wordpress.com/wp-content/uploads/2020/03/tuneitout.jpg?w=1366',
      categoryColor: 'brown',
    },
    {
      author: 'Syeda Naz',
      nameOfBook: 'Turn It out',
      price: 20,
      coverURL:
        'https://booksicedlattesblessed.wordpress.com/wp-content/uploads/2020/03/tuneitout.jpg?w=1366',
      categoryColor: 'brown',
    },
  ];

  const getList = async () => {
    try {
      const response = await axios.get(
        'https://6885d470f52d34140f6aa891.mockapi.io/books',
      );
      setData(response.data);
      Alert.alert('Success..! ', 'Data fetched Successfully');
    } catch (error) {
      console.log('Error Fetching Data', error);
    }
  };
  useEffect(() => {
    getList();
  }, [isfocused]);

  const onDeletehandler = async bookdId => {
    try {
      const response = await axios.delete(
        `https://6885d470f52d34140f6aa891.mockapi.io/books/${bookdId}`,
        Alert.alert('Book deleted Successfully'),
        getList(),
      );
    } catch (error) {
      console.log('Error ', error);
    }
  };
  // const btnfunction = () => {
  //   Alert.alert("Button Pressed");
  // }

  const [modalvisible, setModalVisible] = useState(false);
  return (
    <View>
      {/* <MainButton onPress={btnfunction} title='Submit' disable={true}/> */}
      {/* <View style={{alignItems:"center", justifyContent:"center", marginTop:20}}>
        <MainInput value={value} onChangeText={setValue} />
      </View> */}

      <FlatList
        data={data}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.columncontain}
        columnWrapperStyle={styles.column}
        keyExtractor={(_, index) => index.toString}
        renderItem={({ item }) => (
          <Book
            {...item}
            author={item.author}
            nameOfBook={item.name_of_book}
            price={item.price}
            coverURL={item.cover}
            // categoryColor="brown"
            onDeletePress={() => onDeletehandler(item.id)}
          />
        )}
      />
      {/* <AddButton onAddPress={() => setModalVisible(true)} /> */}
      <AddButton onAddPress={() => setModalVisible(true)} />


      {/* <AddorEditBook
        visible={modalvisible}
        onRequestClose={() => setModalVisible(false)}
      /> */}
      <AddorEditBook
  visible={modalvisible}
  onClose={() => setModalVisible(false)}
  // onSubmit={addBook}

/>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  column: { flex: 1, justifyContent: 'space-between' },
  columncontain: {
    paddingHorizontal: 30,
    marginTop: 50,
    justifyContent: 'space-between',
  },
});
