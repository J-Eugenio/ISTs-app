import React, { useEffect, useState } from 'react';
import { DrawerContentComponentProps } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/FontAwesome5';

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

export const Manifestation:React.FC<ContentPageProps> = ({ navigation, route }) => {
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
        <TitleConceptContainer>
          <TitleConcept>{title}</TitleConcept>
        </TitleConceptContainer>

        <ConceptNameContainer>
          <ConceptName>Manifestação Clínicas</ConceptName>
        </ConceptNameContainer>

        <Content>
          {content?.text}
        </Content>
      </Main>
    </Container>
  )
}