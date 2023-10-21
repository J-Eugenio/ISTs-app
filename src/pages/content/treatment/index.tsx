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
import { TouchableOpacity, Animated } from 'react-native';
import { FundoPNG } from '../../../components/FundoPNG';
import { PinchGestureHandler, State } from "react-native-gesture-handler";
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


export const Treatment = ({ navigation, route }: any) => {
  const [title, setTitle] = useState<string>('');
  const [type,  setType] = useState<number>(0);
  const [content,  setContent] = useState<IContentProps>();

  const [zIndex001, setZIndex001] = useState(0)
  const [zIndex002, setZIndex002] = useState(0)

  const scale01 = new Animated.Value(1);
  const scale02 = new Animated.Value(1);

  const onZoomEventFunction = (scale: any) => Animated.event(
    [{
      nativeEvent: { scale: scale }
    }],
    {
      useNativeDriver: true
    }
  )

  const onZoomStateChangeFunction = (event: any, scale: any) => {
    if(event.nativeEvent.oldState == State.ACTIVE){
      Animated.spring(scale, {
        toValue: 1,
        useNativeDriver: true
      }).start();
    }
  }

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

            <PinchGestureHandler
              onGestureEvent={onZoomEventFunction(scale01)}
              onHandlerStateChange={(event) => onZoomStateChangeFunction(event, scale01)}
              onActivated={() => { 
                setZIndex001(10);
                setZIndex002(0);
              }}
            >
              <ContentImage 
                source={Figure14}
                style={{ transform: [{ scale:  scale01}], zIndex: zIndex001 }}
              />
            </PinchGestureHandler>
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

            <PinchGestureHandler
              onGestureEvent={onZoomEventFunction(scale02)}
              onHandlerStateChange={(event) => onZoomStateChangeFunction(event, scale02)}
              onActivated={() => { 
                setZIndex001(0);
                setZIndex002(10);
              }}
            >
              <ContentImage 
                source={Figure18}
                style={{ transform: [{ scale:  scale02}], zIndex: zIndex002 }}
              />
            </PinchGestureHandler>
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