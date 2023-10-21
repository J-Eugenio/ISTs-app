import React, { useEffect, useState } from 'react';
import { PinchGestureHandler, State } from "react-native-gesture-handler";
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
import { Animated, TouchableOpacity } from 'react-native';
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

export const Concept = ({ navigation, route }: any) => {
  const [title, setTitle] = useState<string>('');
  const [type,  setType] = useState<number>(0);
  const [content,  setContent] = useState<IContentProps>();

  const [zIndex001, setZIndex001] = useState(0)
  const [zIndex002, setZIndex002] = useState(0)
  const [zIndex003, setZIndex003] = useState(0)
  const [zIndex004, setZIndex004] = useState(0)
  const [zIndex005, setZIndex005] = useState(0)

  useEffect(() => {
    setTitle(route.params.title);
    setType(route.params.type);
    setContent(route.params.content);
    
  }, [content])

    const scale01 = new Animated.Value(1);
    const scale02 = new Animated.Value(1);
    const scale03 = new Animated.Value(1);
    const scale04 = new Animated.Value(1);
    const scale05 = new Animated.Value(1);

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
            <PinchGestureHandler
              onGestureEvent={onZoomEventFunction(scale01)}
              onHandlerStateChange={(event) => onZoomStateChangeFunction(event, scale01)}
              onActivated={() => { 
                setZIndex001(10);
                setZIndex002(0);
                setZIndex003(0);
                setZIndex004(0);
                setZIndex005(0);
              }}
            >
              <ContentImage 
                source={EstruturaHiv}
                style={{ transform: [{ scale:  scale01}], zIndex: zIndex001 }}
              />
            </PinchGestureHandler>
              
            <ContentImageDescription>
              {content?.img_description[0]}
            </ContentImageDescription>    
          </Column> 
          
        }

        {
          type === 2 &&
          <Column>
            <PinchGestureHandler
              onGestureEvent={onZoomEventFunction(scale02)}
              onHandlerStateChange={(event) => onZoomStateChangeFunction(event, scale02)}
              onActivated={() => { 
                setZIndex001(0);
                setZIndex002(10);
                setZIndex003(0);
                setZIndex004(0);
                setZIndex005(0);
              }}

            >
              <ContentImage 
                source={conceitoSifilis}
                style={{ transform: [{ scale: scale02 }], zIndex: zIndex002}}
              />
            </PinchGestureHandler>
            
            <ContentImageDescription>
              {content?.img_description[0]}
            </ContentImageDescription>
          </Column> 
        }
        
        {
          type === 3 &&
          <Column>
            <PinchGestureHandler
              onGestureEvent={onZoomEventFunction(scale03)}
              onHandlerStateChange={(event) => onZoomStateChangeFunction(event, scale03)}
              onActivated={() => { 
                setZIndex001(0);
                setZIndex002(0);
                setZIndex003(10);
                setZIndex004(0);
                setZIndex005(0);
              }}

            >
              <ContentImage 
                source={Figure8}
                style={{ transform: [{ scale: scale03 }], zIndex: zIndex003}}
              />
            </PinchGestureHandler>
            <ContentImageDescription>
              {content?.img_description[0]}
            </ContentImageDescription>

            <PinchGestureHandler
              onGestureEvent={onZoomEventFunction(scale04)}
              onHandlerStateChange={(event) => onZoomStateChangeFunction(event, scale04)}
              onActivated={() => { 
                setZIndex001(0);
                setZIndex002(0);
                setZIndex003(0);
                setZIndex004(10);
                setZIndex005(0);
              }}

            >
              <ContentImage 
                source={Figure9}
                style={{ transform: [{ scale: scale04 }], zIndex: zIndex004}}
              />
            </PinchGestureHandler>
            <ContentImageDescription>
              {content?.img_description[1]}
            </ContentImageDescription>
          </Column>
        }

        {
          type === 4 &&
          <Column>
            <PinchGestureHandler
              onGestureEvent={onZoomEventFunction(scale05)}
              onHandlerStateChange={(event) => onZoomStateChangeFunction(event, scale05)}
              onActivated={() => { 
                setZIndex001(0);
                setZIndex002(0);
                setZIndex003(0);
                setZIndex004(0);
                setZIndex005(10);
              }}
            >
              <ContentImage 
                source={Figure15}
                style={{ transform: [{ scale: scale05 }], zIndex: zIndex005}}
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