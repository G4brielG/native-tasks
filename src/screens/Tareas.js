import React, {useState} from 'react'
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, TextInput, Button, CheckBox, InputGroup } from "react-native";

const Tareas = () => {
  const [selectedId, setSelectedId] = useState(null)
  const [text, onChangeText] = React.useState('')
  const [data, setData] = useState([])

  const Item = ({ item, onPress, backgroundColor, textColor }) => (
    <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
      <Text style={[styles.title, textColor]}>{item.text}</Text>
    </TouchableOpacity>
  );

  const valor = () => {
    console.log(data)
    setData([...data, {text: text, id: data.length, checked: false}]);
    onChangeText('')
  }

  const onChangeCheck = (id) => {
    setData((data) => data.map(item => {
      if (item.id === id) {
        item.checked = !item.checked
      }
      return item
    }));
  }

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#f9c2ff";
    const color = item.id === selectedId ? 'white' : 'black';

    return (
      <>
        <Item
          item={item}
          onPress={() => setSelectedId(item.id)}
          backgroundColor={{ backgroundColor }}
          textColor={{ color }}
        />
        <CheckBox
          value={item.checked}
          onValueChange={() => onChangeCheck(item.id)}
          style={styles.checkbox}
        />
      </>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
      <Button
        title="+"
        onPress={() => valor()}
        disabled={text == '' ? true : false}
      />
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item, key) => key}
        extraData={selectedId}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default Tareas