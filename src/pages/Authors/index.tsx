import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Linking } from 'react-native';

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
 } from './styles';

export const Authors:React.FC<DrawerContentComponentProps> = ({ navigation }) => {
  /**
   * Antonio Maria Gurgel Junior
    Instagram: @gurgelamj
    WhatsApp: 84 9.9615-5749
    E-mail: juniorgurgelbio@hotmail.com
   */
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
            <Icon 
              name="user-md"
              size={80}
              color="#FFF"
            />
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
            <Icon 
              name="user-md"
              size={80}
              color="#FFF"
            />
          </IconContainer>

          <InfoContainer>
            <Author>Allyssandra Maria Lima Rodrigues Maia</Author>
            <Social
              onPress={() => Linking.openURL('instagram://user?username=allyssadrarodrigues')}
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
              <SocialValue>allyssandramr@hotmail.com</SocialValue>
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
    </Container>
  )
}