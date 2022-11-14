import React from 'react';
import {
  createDrawerNavigator,
  useDrawerProgress,
  DrawerContentScrollView,
  DrawerItemList,
  useDrawerStatus,
} from '@react-navigation/drawer';
import {View, Image, Text, StatusBar} from 'react-native';
import Animated from 'react-native-reanimated';
//pet management
import HomeScreen from '../screens/HomeScreen';
import New from '../screens/New';
//accessories
import HomeScreen1 from'../../../src1/views/screens/HomeScreen';
import VetCentersScreen from '../screens/VetCentersScreen';
import HomeScree from '../screens/Logout';
import Userprofile from '../screens/Userprofile';
import COLORS from '../../const/colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';








const Drawer = createDrawerNavigator();

const DrawerScreenContainer = ({children}) => {
  const isDrawerOpen = useDrawerStatus();
  const progress = useDrawerProgress();
  const scale = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [1, 0.8],
  });
  const borderRadius = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [0, 25],
  });

  return (
    <Animated.View
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
        borderRadius,
        transform: [{scale}],
        overflow: 'hidden',
      }}>
      <StatusBar
        backgroundColor={isDrawerOpen == 'open' ? COLORS.primary : COLORS.white}
        barStyle="dark-content"
      />
      {children}
    </Animated.View>
  );
};

const CustomDrawerContent = props => {
  const [userDetails, setUserDetails] = React.useState();
    React.useEffect(() => {
      getUserData();
    }, []);                                          //get username for drawer
  
    const getUserData = async () => {
      const userData = await AsyncStorage.getItem('userData');
      if (userData) {
        setUserDetails(JSON.parse(userData));
      }
    };
  return (
    <DrawerContentScrollView
      style={{
        paddingVertical: 30,
      }}>
      <View
        style={{
          marginLeft: 20,
          marginVertical: 40,
        }}>
        <Image
          source={require('../../assets/person.jpg')}
          style={{height: 70, width: 70, borderRadius: 20}}
        />
        <Text
          style={{
            color: COLORS.white,
            fontWeight: 'bold',
            fontSize: 13,
            marginTop: 10,
          }}>
                  {userDetails?.fullname} 

        </Text>
      </View>

      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};
const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerType: 'slide',
        drawerStyle: {
          width: 200,
          backgroundColor: COLORS.primary,
        },
        overlayColor: null,
        drawerLabelStyle: {
          fontWeight: 'bold',
        },
        drawerActiveTintColor: COLORS.white,
        drawerInactiveTintColor: COLORS.secondary,
        drawerItemStyle: {backgroundColor: null},
        sceneContainerStyle: {
          backgroundColor: COLORS.primary,
        },
      }}
      drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen
        name="Home"
        options={{
          title: 'PETS',
          drawerIcon: ({color}) => (
            <Icon name="paw" size={25} style={{marginRight: -20, color}} />
          ),
        }}>
        {props => (
          <DrawerScreenContainer>
            <HomeScreen {...props} />
          </DrawerScreenContainer>
        )}
      </Drawer.Screen>

      <Drawer.Screen
        name="ACCESSORIES"
        options={{
          drawerIcon: ({color}) => (
            <Icon name="shopping-outline" size={25} style={{marginRight: -20, color}} />
          ),
        }}>
        {props => (
          <DrawerScreenContainer>
            <HomeScreen1 {...props} />
          </DrawerScreenContainer>
        )}
      </Drawer.Screen>

      <Drawer.Screen
        name="VET CENTERS"
        options={{
          drawerIcon: ({color}) => (
            <Icon name="store" size={25} style={{marginRight: -20, color}} />
          ),
        }}>
        {props => (
          <DrawerScreenContainer>
            <VetCentersScreen {...props} />
          </DrawerScreenContainer>
        )}
      </Drawer.Screen>

      <Drawer.Screen
        name="FAVOURITES"
        options={{
          drawerIcon: ({color}) => (
            <Icon name="heart" size={25} style={{marginRight: -20, color}} />
          ),
        }}>
        {props => (
          <DrawerScreenContainer>
            <New {...props} />
          </DrawerScreenContainer>
        )}
      </Drawer.Screen>

      <Drawer.Screen
        name="PROFILE"
        options={{
          drawerIcon: ({color}) => (
            <Icon name="account" size={25} style={{marginRight: -20, color}} />
          ),
        }}>
        {props => (
          <DrawerScreenContainer>
            <Userprofile {...props} />
          </DrawerScreenContainer>
        )}
      </Drawer.Screen>
      <Drawer.Screen
        name="LOGOUT"
        options={{
          drawerIcon: ({color}) => (
            <Icon name="logout" size={25} style={{marginRight: -20, color}} />
          ),
        }}>
        {props => (
          <DrawerScreenContainer>
            <HomeScree {...props} />
          </DrawerScreenContainer>
        )}
      </Drawer.Screen>
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
