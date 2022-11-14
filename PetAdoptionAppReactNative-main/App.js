import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DrawerNavigator from './src/views/navigators/DrawerNavigator';
import DetailsScreen from './src/views/screens/DetailsScreen';
import VetCentersScreen from './src/views/screens/VetCentersScreen';
import VetCenterDetailsScreen from './src/views/screens/VetCenterDetailsScreen';

//Login import
import LoginScreen from './src2/views/screens/LoginScreen';
import RegistrationScreen from './src2/views/screens/RegistrationScreen';
import HomeScreen from './src/views/screens/HomeScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Loader from './src2/views/components/Loader';



const Stack = createNativeStackNavigator();


const App = () => {
  const [initialRouteName, setInitialRouteName] = React.useState('');

  React.useEffect(() => {
    setTimeout(() => {
      authUser();
    }, 2000);
  }, []);

  const authUser = async () => {
    try {
      let userData = await AsyncStorage.getItem('userData');
      if (userData) {
        userData = JSON.parse(userData);
        if (userData.loggedIn) {
          setInitialRouteName('HomeScreen');
        } else {
          setInitialRouteName('LoginScreen');
        }
      } else {
        setInitialRouteName('RegistrationScreen');
      }
    } catch (error) {
      setInitialRouteName('RegistrationScreen');
    }
  };
  return (

  // <><NavigationContainer>
  //     <Stack.Navigator screenOptions={{ headerShown: false }}>
       

  //     </Stack.Navigator>
  //   </NavigationContainer></>

  <NavigationContainer>
  {!initialRouteName ? (
    <Loader visible={true} />
  ) : (
    <>
      <Stack.Navigator
        initialRouteName={initialRouteName}
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="RegistrationScreen"component={RegistrationScreen}/>
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="HomeScreen" component={DrawerNavigator} />
        <Stack.Screen name="HomeScreen1" component={DrawerNavigator} />
        <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
        <Stack.Screen name="VetCentersScreen" component={VetCentersScreen} />
        <Stack.Screen name="VetCenterDetailsScreen" component={VetCenterDetailsScreen} />
        <Stack.Screen name="New" component={DrawerNavigator} />
      </Stack.Navigator>
     
    </>
  )}
</NavigationContainer>



  );
};

export default App;
