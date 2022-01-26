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
import { ContentPage } from './src/pages/ContentPage';
import { Concept } from './src/pages/content/concept';
import { Manifestation } from './src/pages/content/manifestation';
import { Transmitting } from './src/pages/content/transmitting';
import { Prevention } from './src/pages/content/prevention';
import { Treatment } from './src/pages/content/treatment';
import { Quiz } from './src/pages/Quiz';

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
      <Stack.Screen name="ContentPage" component={ContentPage} />
      <Stack.Screen name="Concept" component={Concept} />
      <Stack.Screen name="Manifestation" component={Manifestation} />
      <Stack.Screen name="Transmitting" component={Transmitting} />
      <Stack.Screen name="Treatment" component={Treatment} />
      <Stack.Screen name="Prevention" component={Prevention} />
      <Stack.Screen name="Quiz" component={Quiz} />
    </Stack.Navigator>
  )
}
export default function App(){
  return(
    <>
      <StatusBar 
        style={Platform.OS === 'ios' ? 'light' : 'light'}
        animated
        backgroundColor="#1E88E5"
      />
      <NavigationContainer>
        <Drawer.Navigator 
          initialRouteName="Home"
          drawerStyle={{
            backgroundColor:'#1E88E5',
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

          <Drawer.Screen 
            name="Referências" 
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
            name="Sobre o APP" 
            component={Contact}
            options={{
              drawerIcon: () => (
                <Icon 
                  name="info-circle"
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