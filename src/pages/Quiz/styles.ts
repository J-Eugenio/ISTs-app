import styled, { css } from 'styled-components/native';

interface AnswerSelected {
  isSelected: boolean;
  isCorrect: boolean;
}

interface ConfirmBtnProps {
  isDisabled: boolean;
}

export const Container = styled.SafeAreaView`
  display: flex;
  flex: 1;
  background: #1E88E5;
  align-items: center;
  padding: 10px;
`;

export const QuestionContainer = styled.View`
  display: flex;
  margin-bottom: 20px;
`;

export const Row = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const Col = styled.View`
  display: flex;
  flex-direction: column;
`;

export const ID = styled.Text`
  color: #FFF;
  font-size: 15px;
  font-weight: bold;
`;

export const Question = styled.Text`
  color: #FFF;
  margin-right: 10px;
  font-size: 15px;
  width: 90%;
  text-align: justify;
  font-weight: bold;
`;

export const AnswerContainer = styled.TouchableOpacity<AnswerSelected>`
  display: flex;
  flex-direction: row;
  margin-top: 10px;
  margin-left: 10px;
  background-color: ${({ isSelected, isCorrect }) => isSelected ? '#4d9900' : 'transparent'};
  border: 0.5px solid ${({ isSelected }) => isSelected ? '#FFF' : 'transparent'};
  border-radius: 5px;
`;

export const AnswerID = styled.Text`
  margin-right: 5px;
  color: #FFF;
`;

export const Answer = styled.Text`
  margin-right: 5px;
  color: #FFF;
  width: 90%;
  font-style: italic;
`;

export const BtnConfirmar = styled.TouchableOpacity<ConfirmBtnProps>`
  display: flex;
  background-color: ${({ isDisabled }) => isDisabled ? '#AAA' : '#4d9900'};
  justify-content: center;
  align-items: center;
  height: 50px;
  margin: 10px;
  border: 0.3px solid #FFF;
  border-radius: 5px;
`;

export const BtnConfirmarText = styled.Text`
  color: #FFF;
`;

export const Footer = styled.View`
  height: 100px;
`;

export const QuizContainer = styled.View`
  display: flex;
  justify-content: center;
  margin: 20px 0;
`;

export const QuizTitle = styled.Text`
  font-size: 40px;
  color: #FFF;
  text-align: center;
`;

export const QuizDescription = styled.Text`
  font-size: 12px;
  color: #FFF;
  margin-left: 10px;
`;

export const QuizThemeContainer = styled.View`
  padding: 10px 0;
`;

export const QuizTheme = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
`;

export const QuizImage = styled.Image`
  height: 50px;
  width: 50px;
  border-radius: 25px;
  overflow: hidden;
  background-color: #FFF;
  margin: 0 10px;
`;

export const QuizImageText = styled.Text`
  font-size: 12px;
  color: #FFF;
`;

export const GoBackButton = styled.TouchableOpacity`
  position: absolute;
  top: 10px;
  left: 10px;;
  z-index: 10;
`;

export const ModalContainer = styled.View`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: rgba(0,0,0,0.4);
  padding: 20px;
`;