import React from 'react';
import {
  Text,
  ImageBackground,
  SafeAreaView,
  StatusBar,
  View,
  Image,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import COLORS from '../../const/colors';

const VetCenterDetailsScreen = ({navigation, route}) => {
  const pet = route.params;
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
      <StatusBar backgroundColor={COLORS.background} />
      <View style={{height: 400, backgroundColor: COLORS.background}}>
        <ImageBackground
          resizeMode="contain"
          source={pet?.image}
          style={{
            height: 280,
            top: 20,
          }}>
          {/* Render  Header */}
          <View style={style.header}>
            <Icon
              name="arrow-left"
              size={32}
              color={COLORS.dark}
              onPress={navigation.goBack}
            />
            <Icon name="dots-vertical" size={32} color={COLORS.dark} />
          </View>
        </ImageBackground>

        <View style={style.detailsContainer}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text
              style={{fontSize: 25, color: COLORS.dark, fontWeight: 'bold', marginTop: 22}}>
              {pet.name}
            </Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 5,
            }}>
            <Text style={{fontSize: 18, color: COLORS.grey}}>{pet.city}</Text>
            <Text style={{fontSize: 13, color: COLORS.dark}}>{pet.age}</Text>
          </View>


          <View style={{marginTop: 5, flexDirection: 'row'}}>
            <Text style={{fontSize: 16, color: COLORS.grey, marginLeft: 5}}>
            {pet.discount}
            </Text>
          </View>
        </View>
      </View>

      {/* Comment container */}
      <View style={{marginTop: 70, justifyContent: 'space-between', flex: 1}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingLeft: 50, paddingRight: 50}}>
            <Text
              style={{fontSize: 18, color: COLORS.dark, marginTop: 22}}>
              {pet.description}
            </Text>
          </View>

        {/* Render footer */}
        <View style={style.footer}>
          <View style={style.iconCon}>
            <Icon name="heart-outline" size={30} color={COLORS.white} />
          </View>
          <View style={style.btn}>
            <Text style={{color: COLORS.white, fontWeight: 'bold', fontSize: 20}}>
              Contact
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  detailsContainer: {
    height: 120,
    backgroundColor: COLORS.white,
    marginHorizontal: 20,
    flex: 1,
    bottom: -60,
    borderRadius: 18,
    elevation: 10,
    padding: 20,
    justifyContent: 'center',
  },
  comment: {
    marginTop: 10,
    fontSize: 12.5,
    color: COLORS.dark,
    lineHeight: 20,
    marginHorizontal: 20,
  },
  footer: {
    height: 100,
    backgroundColor: COLORS.light,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 30,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  iconCon: {
    backgroundColor: COLORS.primary,
    width: 50,
    height: 50,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  btn: {
    backgroundColor: COLORS.primary,
    flex: 1,
    height: 50,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    padding: 20,
    justifyContent: 'space-between',
  },
});
export default VetCenterDetailsScreen;
