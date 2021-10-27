import React, { useEffect, useState } from 'react';
import { DrawerContentComponentProps } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/FontAwesome5';

import Figure14 from '../../../assets/content/herpes/Figure14.png';
import Figure18 from '../../../assets/content/trico/Figure18.png';

import { 
  Container,
  Header,
  OpenDrawerButton,
  Title,
  Main,
  TitleConcept,
  ConceptName,
  Content,
  TitleConceptContainer,
  ConceptNameContainer,
  Column,
  ContentImage,
  ContentImageDescription
} from './styles';
import { TouchableOpacity } from 'react-native';

interface ContentPageProps extends DrawerContentComponentProps {
  route:{
    params:{
      type: number,
      title: string,
      content: IContentProps,
    }
  }
}

interface IContentProps {
  text: string;
  img_description: Array<String>;
}


export const Treatment:React.FC<ContentPageProps> = ({ navigation, route }) => {
  const [title, setTitle] = useState<string>('');
  const [type,  setType] = useState<number>(0);
  const [content,  setContent] = useState<IContentProps>();

  useEffect(() => {
    setTitle(route.params.title);
    setType(route.params.type);
    setContent(route.params.content);
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
        <Column>
          <TitleConceptContainer>
            <TitleConcept>{title}</TitleConcept>
          </TitleConceptContainer>

          <ConceptNameContainer>
            <ConceptName>Tratamento e prognóstico</ConceptName>
          </ConceptNameContainer>
        </Column>
        
        {
          type === 1 &&
          <Column>
            <Content>
              {content?.text}
            </Content>
          </Column>
        }

        { 
          type === 2 &&
          <Column>
            <Content>
              {content?.text}
            </Content>
          </Column>
        }

        { 
          type === 3 &&
          <Column>
            <Content>
              {content?.text[0]}
            </Content>

            <ContentImage 
              source={Figure14}
              resizeMode='contain'
            />
            <ContentImageDescription>
              {content?.img_description[0]}
            </ContentImageDescription>

            <Content>
              {content?.text[1]}
            </Content>
          </Column>
        }

        { 
          type === 4 &&
          <Column>
            <Content>
              {content?.text}
            </Content>

            <ContentImage 
              source={Figure18}
              resizeMode='contain'
            />
            <ContentImageDescription>
              {content?.img_description[0]}
            </ContentImageDescription>

          </Column>
        }
        
      </Main>
    </Container>
  )
}