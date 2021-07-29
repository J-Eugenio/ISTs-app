import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';

import { TouchableOpacity } from 'react-native';

import { DrawerContentComponentProps } from '@react-navigation/drawer'

import { 
  Container,
  Header,
  OpenDrawerButton,
  Title,
  Main,
  TitleMain,
  TitleContainer,
  ButtonGroup,
  ButtonContainer,
  Line,
  Button,
  ButtonTitle,
} from './styles';
import { useEffect } from 'react';
import { useState } from 'react';

interface ContentPageProps extends DrawerContentComponentProps {
  route:{
    params:{
      type: number,
      title: string
    }
  }
}
export const ContentPage:React.FC<ContentPageProps> = ({ navigation, route}) => {
  const [title, setTitle] = useState<string>('');
  const [type,  setType] = useState<number>(0);

  useEffect(() => {
    setTitle(route.params.title);
    setType(route.params.type);
  }, [])
  
  return (
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
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{ width: 25}}
        >
          <Icon 
            name="chevron-left"
            size={30}
            color="#FFF"
          />
        </TouchableOpacity>
      </Header>
      
      <Main>
        <TitleContainer>
          <TitleMain>
            {title}
          </TitleMain>
        </TitleContainer>

        <ButtonGroup>
          <ButtonContainer>
            <Line/>
            <Button
              activeOpacity={0.7}
            >
              <ButtonTitle>
                Conceito
              </ButtonTitle>
            </Button>
          </ButtonContainer>

          <ButtonContainer>
            <Line/>
            <Button
              activeOpacity={0.7}
            >
              <ButtonTitle>
                Manifestações Clínicas
              </ButtonTitle>
            </Button>
          </ButtonContainer>

          <ButtonContainer>
            <Line/>
            <Button
              activeOpacity={0.7}
            >
              <ButtonTitle>
                Formas de transmissão
              </ButtonTitle>
            </Button>
          </ButtonContainer>

          <ButtonContainer>
            <Line/>
            <Button
              activeOpacity={0.7}
            >
              <ButtonTitle>
                Tratamento e prognóstico
              </ButtonTitle>
            </Button>
          </ButtonContainer>

          <ButtonContainer>
            <Line/>
            <Button
              activeOpacity={0.7}
            >
              <ButtonTitle>
                Formas de Prevenção
              </ButtonTitle>
            </Button>
          </ButtonContainer>
        </ButtonGroup>
      </Main>
    </Container>
  )
}