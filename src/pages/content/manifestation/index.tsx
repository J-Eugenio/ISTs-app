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
  ContentImage,
  ContentImageDescription
} from './styles';
import { TouchableOpacity } from 'react-native';

import primariaSifilis from '../../../assets/content/sifilis/primaria.png';
import secundariaSifilis from '../../../assets/content/sifilis/secundaria.png';
import terciariaSifilis from '../../../assets/content/sifilis/terciaria.png';

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
  text: Array<string>;
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

      <Main
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', alignItems: 'center' }}
      >
        <TitleConceptContainer>
          <TitleConcept>{title}</TitleConcept>
        </TitleConceptContainer>

        <ConceptNameContainer>
          <ConceptName>Manifestação Clínicas</ConceptName>
        </ConceptNameContainer>

        
          {
            type === 2 ?
            <>
              <Content>
              {content?.text[0]}
              </Content>

              <ContentImage 
                source={primariaSifilis}
                resizeMode='contain'
              />
              <ContentImageDescription>
                {content?.img_description[0]}
              </ContentImageDescription>
              <Content>
                {content?.text[1]}
              </Content>
              {/*--------------------------------*/}
              <ContentImage 
                source={secundariaSifilis}
                resizeMode='contain'
              />
              <ContentImageDescription>
                {content?.img_description[1]}
              </ContentImageDescription>
              <Content>
                {content?.text[2]}
              </Content>
              {/*--------------------------------*/}
              <ContentImage 
                source={terciariaSifilis}
                resizeMode='contain'
              />
              <ContentImageDescription>
                {content?.img_description[2]}
              </ContentImageDescription>
              <Content>
                {content?.text[3]}
              </Content>
            </>
            : 
            <Content>
              {content?.text}
            </Content>
          }
        

      </Main>
    </Container>
  )
}