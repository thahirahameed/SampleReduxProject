import {} from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {addToCart} from '../../features/cart/cartSlice';

const itemList = [
  {name: 'Macbook', details: 'Macbook Pro with core i9', price: 20000},
  {name: 'iPhone 15', details: 'Latest model ', price: 15000},
  {name: 'Dining Table', details: 'Dining Table for 4 people', price: 3000},
  {name: 'Workstation', details: 'Workstation for working', price: 2000},
  {name: 'Sofa', details: ' Sofa for 6 seaters', price: 4000},
  {name: 'Microwave Oven', details: 'Power saver one', price: 1000},
  {name: 'LED', details: 'In a variety of colors', price: 300},
];
const ListScreen = props => {
  const dispatch = useDispatch();

  return (
    <View style={{flex: 1}}>
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate('cartScreen');
        }}
        style={{
          marginHorizontal: 10,
          backgroundColor: 'maroon',
          height: 40,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{color: 'white'}}>Open Cart View</Text>
      </TouchableOpacity>
      <FlatList
        data={itemList}
        renderItem={({item, index}) => {
          return (
            <View
              style={{
                padding: 5,
                marginVertical: 5,
                marginHorizontal: 10,
                backgroundColor: 'lightgrey',
              }}>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text>{item.name}</Text>
                <Text>{item.details}</Text>
              </View>

              <View
                style={{
                  marginTop: 10,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <Text style={{marginHorizontal: 10}}>{item.price}</Text>
                <TouchableOpacity
                  onPress={() => {
                    dispatch(addToCart(item));
                  }}
                  style={{
                    marginRight: 20,
                    backgroundColor: 'maroon',
                    padding: 10,
                    alignItems: 'flex-end',
                  }}>
                  <Text>Add To Cart</Text>
                </TouchableOpacity>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

export default ListScreen;
