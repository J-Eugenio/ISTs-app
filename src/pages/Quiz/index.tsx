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
import QuizLogo from '../../assets/quiz.png';

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
  ModalContainer,
  QuizLg,
  QuizLogoContainer
} from './styles';

interface QuizAnswersProps {
  questionID: number;
  answerID: number;
}

export const Quiz:React.FC<DrawerContentComponentProps> = ({ navigation }) => {

  const [quizAnswers, setQuizAnswers] = useState<QuizAnswersProps[]>([]);
  const [modal, openModal] = useState(false);
  const [result, setResult] = useState(0);
  const [score, setScore] = useState(0);

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

  function QuizResult(){
    setScore(0)
    //Questao_01
    if(quizAnswers.find(quiz => quiz.questionID === 1)?.answerID === 3){
      setQt1(true);
      setScore(oldValue => oldValue+=1);
    }

    //Questao_02
    if(quizAnswers.find(quiz => quiz.questionID === 2)?.answerID === 5){
      setQt2(true);
      setScore(oldValue => oldValue+=1);
    }

    //Questao_03
    if(quizAnswers.find(quiz => quiz.questionID === 3)?.answerID === 4){
      setQt3(true);
      setScore(oldValue => oldValue+=1);
    }

    //Questao_04
    if(quizAnswers.find(quiz => quiz.questionID === 4)?.answerID === 2){
      setQt4(true);
      setScore(oldValue => oldValue+=1);
    }

    //Questao_05
    if(quizAnswers.find(quiz => quiz.questionID === 5)?.answerID === 3){
      setQt5(true);
      setScore(oldValue => oldValue+=1);
    }

    //Questao_06
    if(quizAnswers.find(quiz => quiz.questionID === 6)?.answerID === 2){
      setQt6(true);
      setScore(oldValue => oldValue+=1);
    }

    //Questao_07
    if(quizAnswers.find(quiz => quiz.questionID === 7)?.answerID === 1){
      setQt7(true);
      setScore(oldValue => oldValue+=1);
    }

    //Questao_08
    if(quizAnswers.find(quiz => quiz.questionID === 8)?.answerID === 1){
      setQt8(true);
      setScore(oldValue => oldValue+=1);
    }

    //Questao_09
    if(quizAnswers.find(quiz => quiz.questionID === 9)?.answerID === 5){
      setQt9(true);
      setScore(oldValue => oldValue+=1);
    }

    //Questao_10
    if(quizAnswers.find(quiz => quiz.questionID === 10)?.answerID === 2){
      setQt10(true);
      setScore(oldValue => oldValue+=1);
    }

    openModal(true);
  }

  function CloseModal(){
    openModal(false);
    setScore(0);
    setQuizAnswers([]);
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

              <QuizLogoContainer>
                <QuizLg source={QuizLogo}resizeMode='contain'/>
              </QuizLogoContainer>

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
          onPress={() => QuizResult()}
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
              onClose={() => CloseModal()}
              qt1={qt1}
              qt2={qt2}
              qt3={qt3}
              qt4={qt4}
              qt5={qt5}
              qt6={qt6}
              qt7={qt7}
              qt8={qt8}
              qt9={qt9}
              qt10={qt10}
              score={score}
            />
          </ModalContainer>
        </Modal>
      </ScrollView>
    </Container>
  )
}