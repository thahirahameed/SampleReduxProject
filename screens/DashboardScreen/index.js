import {} from 'react';
import {Button, Text, TouchableOpacity, View} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {logoutUser} from '../../features/user/userSlice';

const DashboardScreen = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);

  return (
    <View>
      <Text>Welcome Back!! You are logged in! </Text>

      <Text
        style={{
          backgroundColor: 'lightgrey',
          height: 40,
          margin: 10,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        {user}
      </Text>

      <View>
        <TouchableOpacity
          style={{
            height: 40,
            margin: 10,
            backgroundColor: 'lightblue',

            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => {
            dispatch(logoutUser());
          }}>
          <Text>LOGOUT</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DashboardScreen;
