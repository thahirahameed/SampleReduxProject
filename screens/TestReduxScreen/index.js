import {useState} from 'react';
import {View, Text, TouchableOpacity, TextInput, FlatList} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {
  decrement,
  increment,
  incrementByAmount,
} from '../../features/counter/counterSlice';
import {addCar} from '../../features/cars/carSlice';

const TestReduxScreen = () => {
  const [inputval, setinputval] = useState('');
  const [currentCar, setCurrentCar] = useState('');
  const dispatch = useDispatch();
  const count = useSelector(state => state.counter.value);
  const cars = useSelector(state => state.car);

  return (
    <View>
      <Text>test redux</Text>

      <Text>{count}</Text>

      <TouchableOpacity
        onPress={() => {
          dispatch(increment());
        }}>
        <Text>Increment</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          dispatch(decrement());
        }}>
        <Text>Decrement</Text>
      </TouchableOpacity>

      <TextInput
        value={inputval}
        onChangeText={changedText => {
          setinputval(changedText);
        }}
        keyboardType="numeric"
        style={{height: 40, backgroundColor: 'yellow', padding: 5, margin: 10}}
      />

      <TouchableOpacity
        onPress={() => {
          dispatch(incrementByAmount(parseInt(inputval)));
        }}>
        <Text>Increment by value</Text>
      </TouchableOpacity>

      <FlatList
        data={cars}
        renderItem={({item, index}) => {
          return (
            <View>
              <Text>{item}</Text>
            </View>
          );
        }}
      />

      <TextInput
        value={currentCar}
        onChangeText={changedText => {
          setCurrentCar(changedText);
        }}
        style={{backgroundColor: 'pink', height: 40, padding: 5, margin: 10}}
      />

      <TouchableOpacity
        onPress={() => {
          dispatch(addCar(currentCar));
        }}>
        <Text>Add Car</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TestReduxScreen;
