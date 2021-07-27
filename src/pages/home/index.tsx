import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';

import {
  View
} from 'react-native';

import Aids from '../../assets/dst-images-button/aids.png';
import Her from '../../assets/dst-images-button/her.png';
import Sifi from '../../assets/dst-images-button/sifi.png';
import Trico from '../../assets/dst-images-button/trico.png';

import { DrawerContentComponentProps } from '@react-navigation/drawer'
import { StackHeaderProps } from '@react-navigation/stack'

import { 
  Container,
  Header,
  OpenDrawerButton,
  Title,
  Main,
  MainButton,
  MainButtonImage,
  MainButtonText,
  MainQuiz
} from './styles';

export const Home: React.FC<DrawerContentComponentProps> = ({navigation}) => {
  return (
    <View style={{backgroundColor:"#5EB098", padding: 20}}>
      <Container>
        <Header>
          <OpenDrawerButton
            onPress={() => navigation.openDrawer()}
          >
            <Icon 
              name="bars"
              size={30}
              color="#FFF"
            />
          </OpenDrawerButton>
          <Title>Bem vindo!</Title>
        </Header>

        <Main>
          <MainButton
            activeOpacity={0.7}
          >
            <MainButtonImage source={Aids} resizeMode='contain'/>
            <MainButtonText>
              AIDS
            </MainButtonText>
          </MainButton>

          <MainButton
            activeOpacity={0.7}
            onPress={() => navigation.navigate("Home2")}
          >
            <MainButtonImage source={Trico} resizeMode='contain'/>
            <MainButtonText>
              Tricomoníase
            </MainButtonText>
          </MainButton>

          <MainButton
            activeOpacity={0.7}
          >
            <MainButtonImage source={Sifi} resizeMode='contain'/>
            <MainButtonText>
              Sífilis
            </MainButtonText>
          </MainButton>

          <MainButton
            activeOpacity={0.7}
          >
            <MainButtonImage source={Her} resizeMode='contain'/>
            <MainButtonText>
              Herpes
            </MainButtonText>
          </MainButton>
        </Main>

        <MainQuiz>
          <MainButton
              activeOpacity={0.7}
          >
            <MainButtonText>
              Quiz
            </MainButtonText>
          </MainButton>
        </MainQuiz>
      </Container>
    </View>
  )
}