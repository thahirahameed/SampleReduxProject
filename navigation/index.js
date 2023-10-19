import {Button} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useDispatch, useSelector} from 'react-redux';
import {
  TestReduxClassScreen,
  TestReduxScreen,
  LoginScreen,
  DashboardScreen,
  CartScreen,
  ListScreen,
  ListApiScreen,
} from '../screens';

const Stack = createNativeStackNavigator();

const Navigator = () => {
  //const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  const dispatch = useDispatch();
  const user = useSelector(state => state.user);

  // useEffect(() => {
  //   checkuserLoggedIn();
  // }, [user]);

  // const checkuserLoggedIn = () => {
  //   if (user.email == '') {
  //     setIsUserLoggedIn(false);
  //   } else {
  //     setIsUserLoggedIn(true);
  //   }
  // };

  const isUserLoggedIn = () => {
    return user?.data?.id && user?.data?.id?.length > 15;
  };

  const getMainStack = () => {
    return (
      <Stack.Group>
        <Stack.Screen
          name="listApiScreen"
          component={ListApiScreen}
          options={{title: 'List Api Screen'}}
        />
        <Stack.Screen
          name="listScreen"
          component={ListScreen}
          options={{title: 'List Screen'}}
        />
        <Stack.Screen
          name="cartScreen"
          component={CartScreen}
          options={{
            title: 'Cart Screen',
            headerRight: () => (
              <Button
                onPress={() => {
                  dispatch(clearCart());
                }}
                title="Clear cart"
                color="red"
              />
            ),
          }}
        />
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
      {isUserLoggedIn() ? getMainStack() : loginStack()}
    </Stack.Navigator>
  );
};

export default Navigator;
