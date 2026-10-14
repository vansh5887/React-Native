import React from 'react';
import {
  FlatList,
  Text,
  View,
  StyleSheet,
} from 'react-native';
const FlatListExample = () => {
    const data=[ { id: '1', name: 'Apple' },
  { id: '2', name: 'Banana' },
  { id: '3', name: 'Mango' },];

  return (
    <FlatList
        data={data}
        renderItem={({item})=>(<Text style={styles.item}>{item.name}</Text>)}

        keyExtractor={(item)=>item.id}>
    </FlatList>
  )
}

export default FlatListExample;
const styles = StyleSheet.create({
  item: {
    padding: 15,
    margin: 5,
    backgroundColor: 'lightblue',
    borderRadius: 8,
  },
});