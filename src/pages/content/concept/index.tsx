import React, { useEffect, useState } from 'react';
import { DrawerContentComponentProps } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/FontAwesome5';
import EstruturaHiv from '../../../assets/content/hiv/estrutura_hiv.png';
import conceitoSifilis from '../../../assets/content/sifilis/conceito.png';

//Herpes
import Figure8 from '../../../assets/content/herpes/Figure8.png';
import Figure9 from '../../../assets/content/herpes/Figure9.png';

//Trico
import Figure15 from '../../../assets/content/trico/Figure15.png';


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
  ContentImageDescription,
  Column
} from './styles';
import { TouchableOpacity } from 'react-native';
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

export const Concept:React.FC<ContentPageProps> = ({ navigation, route }) => {
  const [title, setTitle] = useState<string>('');
  const [type,  setType] = useState<number>(0);
  const [content,  setContent] = useState<IContentProps>();

  useEffect(() => {
    setTitle(route.params.title);
    setType(route.params.type);
    setContent(route.params.content);
    
  }, [content])

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
            <ConceptName>Conceito</ConceptName>
          </ConceptNameContainer>

          <Content>
            {content?.text}
          </Content>
        </Column>
        
        {
          type === 1 &&
          <Column>
            <ContentImage 
              source={EstruturaHiv}
              resizeMode='contain'
            />
            <ContentImageDescription>
              {content?.img_description[0]}
            </ContentImageDescription>    
          </Column> 
          
        }

        {
          type === 2 &&
          <Column>
            <ContentImage 
              source={conceitoSifilis}
              resizeMode='contain'
            />
            <ContentImageDescription>
              {content?.img_description[0]}
            </ContentImageDescription>
          </Column> 
        }
        
        {
          type === 3 &&
          <Column>
            <ContentImage 
              source={Figure8}
              resizeMode='contain'
            />
            <ContentImageDescription>
              {content?.img_description[0]}
            </ContentImageDescription>

            <ContentImage 
              source={Figure9}
              resizeMode='contain'
            />
            <ContentImageDescription>
              {content?.img_description[1]}
            </ContentImageDescription>
          </Column>
        }

        {
          type === 4 &&
          <Column>
            <ContentImage 
              source={Figure15}
              resizeMode='contain'
            />
            <ContentImageDescription>
              {content?.img_description[0]}
            </ContentImageDescription>
          </Column>
        }
        <FundoPNG type={2}/>
      </Main>
    </Container>
  )
}