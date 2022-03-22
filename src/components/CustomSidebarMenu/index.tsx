import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import * as Linking from 'expo-linking';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';

import {
  SharedContainer,
  SharedButton,
  SharedText,

} from './styles';

import Logo from '../../assets/logo.png';
import { FundoPNG } from '../FundoPNG';

//@ts-ignore
const CustomSidebarMenu = (props) => {

  return (
    <View style={{ flex: 1, paddingTop: 50 }}>
      <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
        <Image
          source={Logo}
          style={styles.sideMenuProfileIcon}
        />
        <Text style={{fontWeight: 'bold', fontSize: 22, color: 'white'}}>IST's</Text>
      </View>
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        
        <SharedContainer>
          <SharedButton
            onPress={() => Linking.openURL("http://play.google.com/store/apps/details?id=com.JeugS.itis")}
          >
            <Icon 
              name="share-alt"
              size={20}
              color="#FFF"
            />
            <SharedText>Compartilhe o APP</SharedText>
          </SharedButton>
        </SharedContainer>

      </DrawerContentScrollView>
      <FundoPNG />
    </View>
  );
};

const styles = StyleSheet.create({
  sideMenuProfileIcon: {
    resizeMode: 'contain',
    width: 60,
    height: 60,
    alignSelf: 'flex-start',
    paddingHorizontal: 50,
  },
  iconStyle: {
    width: 15,
    height: 15,
    marginHorizontal: 5,
  },
  customItem: {
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export { CustomSidebarMenu };
