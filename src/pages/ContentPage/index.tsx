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

interface IClinicalProps {
  text: Array<string>;
  img_description: Array<String>;
}

export const ContentPage:React.FC<ContentPageProps> = ({ navigation, route }) => {
  const [title, setTitle] = useState<string>('');
  const [type,  setType] = useState<number>(0);
  const [concept,  setConcept] = useState<IContentProps>();
  const [clinicalManifestation, setClinicalManifestation] = useState<IClinicalProps>();
  const [prevention, setPrevention] = useState<IContentProps>();
  const [transmissionForm, setTransmissionForm] = useState<IContentProps>();
  const [treatmentAndPrognosis, setTreatmentAndPrognosis] = useState<IContentProps>()

  const content_filtered = Content.find(item => item.type === type);
  useEffect(() => {
    setTitle(route.params.title);
    setType(route.params.type);
    setConcept(content_filtered?.concept);
    setClinicalManifestation(content_filtered?.clinical_manifestations);
    setTransmissionForm(content_filtered?.transmission_forms);
    //@ts-ignore
    setTreatmentAndPrognosis(content_filtered?.treatment_and_prognosis)
    setPrevention(content_filtered?.forms_of_prevention)
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
              onPress={() => navigation.navigate("Concept", { type , title , content: concept })}
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
              onPress={() => navigation.navigate("Manifestation", { type, title , content: clinicalManifestation})}
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
              onPress={() => navigation.navigate("Transmitting", { type, title, content: transmissionForm })}
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
              onPress={() => navigation.navigate("Treatment", { type , title, content: treatmentAndPrognosis })}
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
              onPress={() => navigation.navigate("Prevention", { type, title, content: prevention })}
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