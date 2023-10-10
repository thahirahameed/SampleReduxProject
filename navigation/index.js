import {useEffect, useState} from 'react';
import {} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useDispatch, useSelector} from 'react-redux';

import {
  TestReduxClassScreen,
  TestReduxScreen,
  LoginScreen,
  DashboardScreen,
} from '../screens';

const Stack = createNativeStackNavigator();

const Navigator = () => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);
  console.log('The value is : ' + user);
  useEffect(() => {
    checkuserLoggedIn();
  }, [user]);

  const checkuserLoggedIn = () => {
    if (user.email == '') {
      setIsUserLoggedIn(false);
    } else {
      setIsUserLoggedIn(true);
    }
  };

  const getMainStack = () => {
    return (
      <Stack.Group>
        <Stack.Screen
          name="dashboardScreen"
          component={DashboardScreen}
          options={{title: 'Dashboard Screen'}}
        />
        <Stack.Screen
          name="testReduxScreen"
          component={TestReduxScreen}
          options={{title: 'Test Redux Screen'}}
        />
        <Stack.Screen
          name="testReduxClassScreen"
          component={TestReduxClassScreen}
          options={{title: 'Test Redux Class Screen'}}
        />
      </Stack.Group>
    );
  };

  const loginStack = () => {
    return (
      <Stack.Group>
        <Stack.Screen
          name="loginScreen"
          component={LoginScreen}
          options={{title: 'Login Screen'}}
        />
      </Stack.Group>
    );
  };

  return (
    <Stack.Navigator>
      {isUserLoggedIn ? getMainStack() : loginStack()}
    </Stack.Navigator>
  );
};

export default Navigator;
