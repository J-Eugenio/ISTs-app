import React, { useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';

import { TouchableOpacity } from 'react-native';
import { DrawerContentComponentProps } from '@react-navigation/drawer';
import { Content } from '../../utils/content';

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


interface ContentPageProps extends DrawerContentComponentProps {
  route:{
    params:{
      type: number,
      title: string
    }
  }
}

interface IContentProps {
  text: string;
  img_description: Array<String>;
}

export const ContentPage:React.FC<ContentPageProps> = ({ navigation, route }) => {
  const [title, setTitle] = useState<string>('');
  const [type,  setType] = useState<number>(0);
  const [content,  setContent] = useState<IContentProps>();

  const content_filtered = Content.find(item => item.type === type);
  useEffect(() => {
    setTitle(route.params.title);
    setType(route.params.type);
    setContent(content_filtered?.concept)
  }, [content_filtered])
  
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
              onPress={() => navigation.navigate("Concept", { type , title: 'AIDS', content })}
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
              onPress={() => navigation.navigate("Manifestation", { type: 1, title: 'AIDS' })}
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
              onPress={() => navigation.navigate("Transmitting", { type: 1, title: 'AIDS' })}
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
              onPress={() => navigation.navigate("Treatment", { type: 1, title: 'AIDS' })}
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
              onPress={() => navigation.navigate("Prevention", { type: 1, title: 'AIDS' })}
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