import React from 'react';
import {FlatList, Text, View} from 'react-native';

const itemList = [
  {name: 'Macbook', details: 'Macbook Pro with core i9', price: 20000},
  {name: 'iPhone 15', details: 'iPhone 15 with ', price: 15000},
  {name: 'Dining Table', details: 'Dining Table for 4 people', price: 3000},
  {name: 'Workstation', details: 'Workstation for working', price: 2000},
  {name: 'Sofa', details: ' Sofa for 6 seaters', price: 4000},
];
const ListScreen = () => {
  return (
    <View
      style={{
        padding: 5,
        marginVertical: 5,
        marginHorizontal: 10,
        backgroundColor: 'pink',
      }}>
      <View
        style={{flexDirection: 'row', justifyContent: 'space-between'}}></View>
      <Text>test</Text>
      <FlatList
        data={itemList}
        renderItem={({item, index}) => {
          return (
            <View>
              <Text>{item.name}</Text>
            </View>
          );
        }}
      />
    </View>
  );
};

export default ListScreen;
