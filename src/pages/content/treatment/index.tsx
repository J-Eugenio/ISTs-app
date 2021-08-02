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
      title: string
    }
  }
}

export const Treatment:React.FC<ContentPageProps> = ({ navigation, route }) => {
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
        <TitleConceptContainer>
          <TitleConcept>{title}</TitleConcept>
        </TitleConceptContainer>

        <ConceptNameContainer>
          <ConceptName>Tratamento e prognóstico</ConceptName>
        </ConceptNameContainer>

        <Content>
          A síndrome da imunodeficiência adquirida, 
          ou Aids (da sigla em inglês), é uma doença 
          causada pelo HIV, que ataca o sistema 
          himunológico e deixa o orgasmo vulnerável 
          a doenças.
        </Content>
      </Main>
    </Container>
  )
}