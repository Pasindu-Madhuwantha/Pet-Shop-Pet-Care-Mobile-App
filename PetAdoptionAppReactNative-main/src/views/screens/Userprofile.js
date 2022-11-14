import {
  Dimensions,
  SafeAreaView,
  View,
  Image,
  TextInput,
  Text,
  TouchableOpacity,
  FlatList,
  ScrollView,
  StyleSheet,
} from 'react-native';
import COLORS from '../../const/colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import pets from '../../const/pets';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
const {height} = Dimensions.get('window');
const Userprofile = ({navigation}) => {
    const [userDetails, setUserDetails] = React.useState();
    React.useEffect(() => {
      getUserData();
    }, []);
  
    const getUserData = async () => {
      const userData = await AsyncStorage.getItem('userData');
      if (userData) {
        setUserDetails(JSON.parse(userData));
      }
    };
  
    const logout = () => {
      AsyncStorage.setItem(
        'userData',
        JSON.stringify({...userDetails, loggedIn: false}),
      );
      navigation.navigate('LoginScreen');
    };
  
    return (
        <SafeAreaView style={{flex: 1, color: COLORS.white}}>
      <View style={style.header}>
        <Icon name="sort-variant" size={28} onPress={navigation.toggleDrawer} />
        <Text style={{color: COLORS.primary, fontWeight: 'bold', fontSize: 16}}>
        {userDetails?.fullname} 
        </Text>
        <Image
          source={require('../../assets/person.jpg')}
          style={{height: 30, width: 30, borderRadius: 25}}
        />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>

      <View>
          <Image
           source={require('../../assets/person.jpg')}
           style={{height:200,width:200,marginLeft:70}}       
              />
           </View>

          
    <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          paddingHorizontal: 40,
          marginTop:20,
          
        }}>
        <Text style={{fontSize: 17, fontWeight: 'bold',marginBottom:10,marginLeft:1}}>
          User Name: {userDetails?.fullname} 
         
        </Text>
        <Text style={{fontSize: 17, fontWeight: 'bold',marginBottom:3,marginLeft:1}}>
           Email: {userDetails?.email} 
          
        </Text>
        <Text style={{fontSize: 17, fontWeight: 'bold',marginTop:15,marginLeft:1}}>
         
         Mobile: {userDetails?.phone}
        </Text>
      </View>
          

      </ScrollView>

      </SafeAreaView>

    );
  };
  
  

const style = StyleSheet.create({
  header: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  mainContainer: {
    flex: 1,
    backgroundColor: COLORS.light,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    marginTop: 20,
    paddingHorizontal: 20,
    paddingVertical: 40,
    minHeight: height,
  },
  searchInputContainer: {
    height: 50,
    backgroundColor: COLORS.white,
    borderRadius: 7,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  categoryBtn: {
    height: 50,
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  categoryBtnName: {
    color: COLORS.dark,
    fontSize: 10,
    marginTop: 5,
    fontWeight: 'bold',
  },
  cardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  cardDetailsContainer: {
    height: 120,
    backgroundColor: COLORS.white,
    flex: 1,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    padding: 20,
    justifyContent: 'center',
  },
  cardImageContainer: {
    height: 150,
    width: 140,
    backgroundColor: COLORS.background,
    borderRadius: 20,
  },
});
export default Userprofile;
