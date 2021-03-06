import React, { useEffect, useState } from 'react';
import { DrawerContentComponentProps } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/FontAwesome5';

import Figure17 from '../../../assets/content/trico/Figure17.jpg';

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
  ContentImage,
  ContentImageDescription
} from './styles';
import { TouchableOpacity } from 'react-native';
import MandalaHiv from '../../../assets/content/hiv/mandala.jpg';
import { FundoPNG } from '../../../components/FundoPNG';

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

export const Prevention:React.FC<ContentPageProps> = ({ navigation, route }) => {
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
          <ConceptName>Formas de Prevenção</ConceptName>
        </ConceptNameContainer>

        <Content>
          {content?.text}
        </Content>

        {
          type === 1 && 
          <>
            <ContentImage 
              source={MandalaHiv}
              resizeMode='contain'
              borderRadius={10}
            />
            <ContentImageDescription>
              {content?.img_description[0]}
            </ContentImageDescription>
          </>
        }

{
          type === 4 && 
          <>
            <ContentImage 
              source={Figure17}
              resizeMode='contain'
              borderRadius={10}
            />
            <ContentImageDescription>
              {content?.img_description[0]}
            </ContentImageDescription>
          </>
        }
        <FundoPNG type={2}/>
      </Main>
    </Container>
  )
}