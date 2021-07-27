import React from 'react';
import { 
  createDrawerNavigator,
} from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import { Platform, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import Icon from 'react-native-vector-icons/FontAwesome5';

import { CustomSidebarMenu } from './src/components/CustomSidebarMenu';
import { Home } from './src/pages/home';
import { Contact } from './src/pages/Contact';
import { Rate } from './src/pages/Rate';
import { Authors } from './src/pages/Authors';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function StackPages() {
  return(
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        headerTransparent: false
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Home2" component={Authors} />
    </Stack.Navigator>
  )
}
export default function App(){
  return(
    <>
      <StatusBar 
        style={Platform.OS === 'ios' ? 'light' : 'light'}
        animated
        backgroundColor="#5EB098"
      />
      <NavigationContainer>
        <Drawer.Navigator 
          initialRouteName="Home"
          drawerStyle={{
            backgroundColor:'#5EB098',
          }}
          drawerContentOptions={{
            labelStyle: {
              color: 'white'
            }
          }}
          drawerContent={
            (props) =><CustomSidebarMenu {...props} />
          }
        >
          <Drawer.Screen 
            name="Home" 
            component={StackPages}
            options={{
              drawerIcon: () => (
                <Icon 
                  name="home"
                  size={20}
                  color="#FFF"
                />
              )             
            }} 
          />

          <Drawer.Screen 
            name="Contato" 
            component={Contact}
            options={{
              drawerIcon: () => (
                <Icon 
                  name="user-alt"
                  size={20}
                  color="#FFF"
                />
              )
            }}
          />

          <Drawer.Screen 
            name="Avaliação" 
            component={Rate}
            options={{
              drawerIcon: () => (
                <Icon 
                  name="crown"
                  size={20}
                  color="#FFF"
                />
              )
            }}
          />

          <Drawer.Screen 
            name="Autores" 
            component={Authors}
            options={{
              drawerIcon: () => (
                <Icon 
                  name="users"
                  size={20}
                  color="#FFF"
                />
              )
            }}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    </>
  )
}