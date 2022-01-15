import React, { useState, useEffect, useCallback } from 'react';

import Icon from 'react-native-vector-icons/FontAwesome5';

import { ScrollView, Modal } from 'react-native';
import { DrawerContentComponentProps } from '@react-navigation/drawer';

import {
  Quiz as QuizQuestions
} from '../../utils/content';

import {
  ScorePage
} from '../../components/ScorePage';

import Aids from '../../assets/dst-images-button/aids.png';
import Her from '../../assets/dst-images-button/her.png';
import Sifi from '../../assets/dst-images-button/sifi.png';
import Trico from '../../assets/dst-images-button/trico.png';

import {
  Container,
  Row,
  Col,
  ID,
  Question,
  AnswerContainer,
  AnswerID,
  Answer,
  QuestionContainer,
  BtnConfirmar,
  BtnConfirmarText,
  Footer,
  QuizContainer,
  QuizTitle,
  QuizDescription,
  QuizThemeContainer,
  QuizTheme,
  QuizImage,
  QuizImageText,
  GoBackButton,
  ModalContainer
} from './styles';

interface QuizAnswersProps {
  questionID: number;
  answerID: number;
}

export const Quiz:React.FC<DrawerContentComponentProps> = ({ navigation }) => {

  const [quizAnswers, setQuizAnswers] = useState<QuizAnswersProps[]>([]);
  const [modal, openModal] = useState(true);

  const [qt1, setQt1] = useState(false);
  const [qt2, setQt2] = useState(false);
  const [qt3, setQt3] = useState(false);
  const [qt4, setQt4] = useState(false);
  const [qt5, setQt5] = useState(false);
  const [qt6, setQt6] = useState(false);
  const [qt7, setQt7] = useState(false);
  const [qt8, setQt8] = useState(false);
  const [qt9, setQt9] = useState(false);
  const [qt10, setQt10] = useState(false);

  const charQuestions = {
    0: 'A',
    1: 'B',
    2: 'C',
    3: 'D',
    4: 'E',
  }

  const AddAnswer = useCallback((questionID: number, answerID: number) => {
    const data = {
      questionID,
      answerID
    }

    const exists = quizAnswers.find(item => item.questionID === questionID);

    if(!!exists){
      const new_register = quizAnswers.filter(item => item !== exists);
      setQuizAnswers(() => [...new_register, data]);
    }else {
      setQuizAnswers(oldValues => [...oldValues, data])
    }
  },[quizAnswers])

  function CheckSelectedAnswer(questionID: number, answerID: number): boolean{
    const exists = quizAnswers.find(item => item.questionID === questionID && item.answerID === answerID);
    return !!exists;
  }

  function GoBack(){
    navigation.goBack();
    setQuizAnswers([])
  }

  return(
    <Container>
      <ScrollView>
        {
          <>
            <QuizContainer>
              <GoBackButton
                onPress={() => GoBack()}
                style={{ width: 25}}
              >
                <Icon 
                  name="chevron-left"
                  size={30}
                  color="#FFF"
                />
              </GoBackButton>

              <QuizTitle>QUIZ</QuizTitle>
              <QuizDescription>Quiz sobre os temas:</QuizDescription>
              <QuizThemeContainer>
                <QuizTheme>
                  <QuizImage source={Aids} resizeMode='contain'/>
                  <QuizImageText>AIDS</QuizImageText>
                </QuizTheme>

                <QuizTheme>
                  <QuizImage source={Her} resizeMode='contain'/>
                  <QuizImageText>Herpes</QuizImageText>
                </QuizTheme>

                <QuizTheme>
                  <QuizImage source={Sifi} resizeMode='contain'/>
                  <QuizImageText>Sífilis</QuizImageText>
                </QuizTheme>

                <QuizTheme>
                  <QuizImage source={Trico} resizeMode='contain'/>
                  <QuizImageText>Tricomoniase</QuizImageText>
                </QuizTheme>
              </QuizThemeContainer>
            </QuizContainer>
            {
              QuizQuestions && QuizQuestions.map((quiz, index) => (
                <QuestionContainer key={index}>
                  <Row>
                    <Question><ID>( {quiz.id} )</ID> {quiz.question} </Question>
                  </Row>
                    {
                      quiz.answers.map((answer, indexAnswer: number) => (
                        <Col key={answer.id}>
                          <AnswerContainer 
                            isSelected={CheckSelectedAnswer(quiz.id, answer.id)}
                            onPress={() => AddAnswer(quiz.id, answer.id)}
                            isCorrect={answer.isCorrect}
                          >
                            <AnswerID>{`${
                              //@ts-ignore
                              charQuestions[indexAnswer]
                              })`}</AnswerID>
                            <Answer>{answer.text}</Answer>
                          </AnswerContainer>
                        </Col>
                      ))
                    }
                </QuestionContainer>
              ))
            }
          </>
        }

        <BtnConfirmar
          onPress={() => console.log(quizAnswers)}
          isDisabled={quizAnswers.length < 10}
          disabled={quizAnswers.length < 10}
        >
          <BtnConfirmarText>CONFIRMAR</BtnConfirmarText>
        </BtnConfirmar>

        <Footer />

        <Modal
          visible={modal}
          transparent
          animationType='slide'
        >
          <ModalContainer>
            <ScorePage 
              onClose={() => openModal(false)}
            />
          </ModalContainer>
        </Modal>
      </ScrollView>
    </Container>
  )
}