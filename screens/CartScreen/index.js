import {useState, useEffect} from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {
  cartTotal,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
} from '../../features/cart/cartSlice';

const CartScreen = () => {
  const cartItems = useSelector(state => state.cart.cartItems);
  const cartTotalPrice = useSelector(cartTotal);

  const dispatch = useDispatch();

  return (
    <View style={{flex: 1}}>
      <Text
        style={{
          backgroundColor: 'lightgrey',
          fontWeight: 'bold',
          fontSize: 20,
          alignSelf: 'center',
        }}>
        CART VIEW
      </Text>

      <FlatList
        data={cartItems}
        renderItem={({item, index}) => {
          return (
            <View
              style={{
                padding: 10,
                marginVertical: 10,
                marginHorizontal: 10,
                backgroundColor: 'lightgrey',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <Text style={{fontSize: 15, fontWeight: 600}}>
                  {item.item.name}
                </Text>

                <TouchableOpacity
                  style={{
                    backgroundColor: 'maroon',
                    alignSelf: 'center',
                  }}
                  onPress={() => {
                    dispatch(removeFromCart(item.item));
                  }}>
                  <Text style={{color: 'white', margin: 5}}>Clear Item</Text>
                </TouchableOpacity>

                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: 'bold',
                    alignSelf: 'flex-end',
                  }}>
                  {item.item.price}
                </Text>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <View
                  style={{
                    flex: 2,
                    marginTop: 10,
                    flexDirection: 'row',
                    alignItems: 'flex-start',
                  }}>
                  <TouchableOpacity
                    style={{
                      marginTop: 25,
                      marginHorizontal: 15,
                      alignSelf: 'flex-start',
                    }}
                    onPress={() => {
                      dispatch(decrementQuantity(item.item));
                    }}>
                    <Text style={{color: 'black', fontWeight: 'bold'}}>-</Text>
                  </TouchableOpacity>

                  <Text
                    style={{
                      fontSize: 20,
                      marginTop: 20,
                      fontWeight: 'bold',
                      alignSelf: 'flex-start',
                    }}>
                    {item.quantity}
                  </Text>

                  <TouchableOpacity
                    style={{
                      marginTop: 25,
                      marginHorizontal: 15,
                      alignSelf: 'flex-start',
                    }}
                    onPress={() => {
                      dispatch(incrementQuantity(item.item));
                    }}>
                    <Text style={{color: 'black', fontWeight: 'bold'}}>+</Text>
                  </TouchableOpacity>
                </View>

                <Text
                  style={{
                    fontSize: 20,
                    marginTop: 10,
                    fontWeight: 'bold',
                    alignSelf: 'flex-end',
                  }}>
                  Item Total: {item.totalPrice}
                </Text>
              </View>
            </View>
          );
        }}
      />
      <Text
        style={{
          flex: 1,
          fontSize: 20,
          marginTop: 10,
          fontWeight: 'bold',
          alignSelf: 'center',
        }}>
        Cart Total : {cartTotalPrice}
      </Text>
    </View>
  );
};

export default CartScreen;
