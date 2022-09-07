import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Linking, Image } from 'react-native';

import { DrawerContentComponentProps } from '@react-navigation/drawer';

import { 
  Container,
  Title,
  Header,
  OpenDrawerButton,
  Main,
  CardAuthor,
  IconContainer,
  InfoContainer,
  Author,
  Social,
  SocialValue,
  ImageContact
 } from './styles';
import { FundoPNG } from '../../components/FundoPNG';

import Ant from '../../assets/contact/01.jpeg';
import Ally from '../../assets/contact/02.jpeg';

export const Authors:React.FC<DrawerContentComponentProps> = ({ navigation }) => {
  return(
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
        <Title>Autores</Title>
      </Header>

      <Main>
        <CardAuthor>
          <IconContainer>
            <ImageContact source={Ant} resizeMode="contain"/>
          </IconContainer>

          <InfoContainer>
            <Author>Antonio Maria Gurgel Junior</Author>
            <Social
              onPress={() => Linking.openURL('instagram://user?username=gurgelamj')}
            >
              <Icon 
                name="instagram"
                size={20}
                color="#FFF"
              />
              <SocialValue>@gurgelamj</SocialValue>
            </Social>

            <Social
              onPress={() => Linking.openURL('mailto:juniorgurgelbio@hotmail.com')}
            >
              <Icon 
                name="envelope"
                size={20}
                color="#FFF"
              />
              <SocialValue>juniorgurgelbio@hotmail.com</SocialValue>
            </Social>

            <Social
              onPress={() => Linking.openURL(`whatsapp://send?text=Olá&phone=558496155749`)}
            >
              <Icon 
                name="whatsapp"
                size={20}
                color="#FFF"
              />
              <SocialValue>(84)9.9615-5749</SocialValue>
            </Social>
          </InfoContainer>
        </CardAuthor>

        <CardAuthor>
          <IconContainer>
            <ImageContact source={Ally} resizeMode="contain"/>
          </IconContainer>

          <InfoContainer>
            <Author>Allyssandra Maria Lima Rodrigues Maia</Author>
            <Social
              onPress={() => Linking.openURL('instagram://user?username=allyssandrarodrigues')}
            >
              <Icon 
                name="instagram"
                size={20}
                color="#FFF"
              />
              <SocialValue>@Allyssadrarodrigues</SocialValue>
            </Social>

            <Social
              onPress={() => Linking.openURL('mailto:allyssandramr@hotmail.com')}
            >
              <Icon 
                name="envelope"
                size={20}
                color="#FFF"
              />
              <SocialValue>allyssandrarodrigues@uern.br</SocialValue>
            </Social>

            <Social>
              <Icon 
                name="whatsapp"
                size={20}
                color="#FFF"
              />
              <SocialValue>Não informado</SocialValue>
            </Social>
          </InfoContainer>
        </CardAuthor>

      </Main>
      <FundoPNG />
    </Container>
  )
}