import React, { useEffect, useState } from 'react';
import { DrawerContentComponentProps } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Animated } from 'react-native';
import { PinchGestureHandler, State } from "react-native-gesture-handler";

import Figure10 from '../../../assets/content/herpes/Figure10.png';
import Figure11 from '../../../assets/content/herpes/Figure11.png';
import Figure12 from '../../../assets/content/herpes/Figure12.png';
import Figure13 from '../../../assets/content/herpes/Figure13.png';

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

import primariaSifilis from '../../../assets/content/sifilis/primaria.png';
import secundariaSifilis from '../../../assets/content/sifilis/secundaria.png';
import terciariaSifilis from '../../../assets/content/sifilis/terciaria.png';
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
  text: Array<string>;
  img_description: Array<String>;
}

export const Manifestation = ({ navigation, route }: any) => {
  const [title, setTitle] = useState<string>('');
  const [type,  setType] = useState<number>(0);
  const [content,  setContent] = useState<IContentProps>();

  const [zIndex001, setZIndex001] = useState(0)
  const [zIndex002, setZIndex002] = useState(0)
  const [zIndex003, setZIndex003] = useState(0)
  const [zIndex004, setZIndex004] = useState(0)
  const [zIndex005, setZIndex005] = useState(0)
  const [zIndex006, setZIndex006] = useState(0)
  const [zIndex007, setZIndex007] = useState(0)

  const scale01 = new Animated.Value(1);
  const scale02 = new Animated.Value(1);
  const scale03 = new Animated.Value(1);
  const scale04 = new Animated.Value(1);
  const scale05 = new Animated.Value(1);
  const scale06 = new Animated.Value(1);
  const scale07 = new Animated.Value(1);

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
              {content?.text[0]}
              </Content>

              <PinchGestureHandler
                onGestureEvent={onZoomEventFunction(scale01)}
                onHandlerStateChange={(event) => onZoomStateChangeFunction(event, scale01)}
                onActivated={() => { 
                  setZIndex001(10);
                  setZIndex002(0);
                  setZIndex003(0);
                  setZIndex004(0);
                  setZIndex005(0);
                  setZIndex006(0);
                  setZIndex007(0);
                }}
              >
                <ContentImage 
                  source={primariaSifilis}
                  style={{ transform: [{ scale:  scale01}], zIndex: zIndex001 }}
                />
              </PinchGestureHandler>
              <ContentImageDescription>
                {content?.img_description[0]}
              </ContentImageDescription>
              <Content>
                {content?.text[1]}
              </Content>
              {/*--------------------------------*/}
              <PinchGestureHandler
                onGestureEvent={onZoomEventFunction(scale02)}
                onHandlerStateChange={(event) => onZoomStateChangeFunction(event, scale02)}
                onActivated={() => { 
                  setZIndex001(0);
                  setZIndex002(10);
                  setZIndex003(0);
                  setZIndex004(0);
                  setZIndex005(0);
                  setZIndex006(0);
                  setZIndex007(0);
                }}
              >
                <ContentImage 
                  source={secundariaSifilis}
                  style={{ transform: [{ scale:  scale02}], zIndex: zIndex002 }}
                />
              </PinchGestureHandler>
              <ContentImageDescription>
                {content?.img_description[1]}
              </ContentImageDescription>
              <Content>
                {content?.text[2]}
              </Content>
              {/*--------------------------------*/}
              <PinchGestureHandler
                onGestureEvent={onZoomEventFunction(scale03)}
                onHandlerStateChange={(event) => onZoomStateChangeFunction(event, scale03)}
                onActivated={() => { 
                  setZIndex001(0);
                  setZIndex002(0);
                  setZIndex003(10);
                  setZIndex004(0);
                  setZIndex005(0);
                  setZIndex006(0);
                  setZIndex007(0);
                }}
              >
                <ContentImage 
                  source={terciariaSifilis}
                  style={{ transform: [{ scale:  scale03}], zIndex: zIndex003 }}
                />
              </PinchGestureHandler>
              <ContentImageDescription>
                {content?.img_description[2]}
              </ContentImageDescription>
              <Content>
                {content?.text[3]}
              </Content>
            </Column>           
          }
        
          {
            type === 3 &&
            <Column>
              <Content>
                {content?.text[0]}
              </Content>

              <Content>
                {content?.text[1]}
              </Content>

              <PinchGestureHandler
                onGestureEvent={onZoomEventFunction(scale04)}
                onHandlerStateChange={(event) => onZoomStateChangeFunction(event, scale04)}
                onActivated={() => { 
                  setZIndex001(0);
                  setZIndex002(0);
                  setZIndex003(0);
                  setZIndex004(10);
                  setZIndex005(0);
                  setZIndex006(0);
                  setZIndex007(0);
                }}
              >
                <ContentImage 
                  source={Figure10}
                  style={{ transform: [{ scale:  scale04}], zIndex: zIndex004 }}
                />
              </PinchGestureHandler>
              <ContentImageDescription>
                {content?.img_description[0]}
              </ContentImageDescription>

              <PinchGestureHandler
                onGestureEvent={onZoomEventFunction(scale05)}
                onHandlerStateChange={(event) => onZoomStateChangeFunction(event, scale05)}
                onActivated={() => { 
                  setZIndex001(0);
                  setZIndex002(0);
                  setZIndex003(0);
                  setZIndex004(0);
                  setZIndex005(10);
                  setZIndex006(0);
                  setZIndex007(0);
                }}
              >
                <ContentImage 
                  source={Figure11}
                  style={{ transform: [{ scale:  scale05}], zIndex: zIndex005 }}
                />
              </PinchGestureHandler>
              <ContentImageDescription>
                {content?.img_description[1]}
              </ContentImageDescription>

              <Content>
                {content?.text[2]}
              </Content>

              <PinchGestureHandler
                onGestureEvent={onZoomEventFunction(scale06)}
                onHandlerStateChange={(event) => onZoomStateChangeFunction(event, scale06)}
                onActivated={() => { 
                  setZIndex001(0);
                  setZIndex002(0);
                  setZIndex003(0);
                  setZIndex004(0);
                  setZIndex005(0);
                  setZIndex006(10);
                  setZIndex007(0);
                }}
              >
                <ContentImage 
                  source={Figure12}
                  style={{ transform: [{ scale:  scale06}], zIndex: zIndex006 }}
                />
              </PinchGestureHandler>

              <ContentImageDescription>
                {content?.img_description[2]}
              </ContentImageDescription>

              <Content>
                {content?.text[3]}
              </Content>

              <Content>
                {content?.text[4]}
              </Content>

              <Content>
                {content?.text[5]}
              </Content>
              
              <PinchGestureHandler
                onGestureEvent={onZoomEventFunction(scale07)}
                onHandlerStateChange={(event) => onZoomStateChangeFunction(event, scale07)}
                onActivated={() => { 
                  setZIndex001(0);
                  setZIndex002(0);
                  setZIndex003(0);
                  setZIndex004(0);
                  setZIndex005(0);
                  setZIndex006(0);
                  setZIndex007(10);
                }}
              >
                <ContentImage 
                  source={Figure13}
                  style={{ transform: [{ scale:  scale07}], zIndex: zIndex007 }}
                />
              </PinchGestureHandler>
              <ContentImageDescription>
                {content?.img_description[3]}
              </ContentImageDescription>

              <Content>
                {content?.text[6]}
              </Content>
            </Column>
          }

          {
            type === 4 &&
            <Column>
              <Content>
                {content?.text}
              </Content>
            </Column>
          }

        <FundoPNG type={2}/>
      </Main>
    </Container>
  )
}