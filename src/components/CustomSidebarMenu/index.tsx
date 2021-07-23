import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text
} from 'react-native';

import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';

import Logo from '../../assets/logo.png';
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
      </DrawerContentScrollView>
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
