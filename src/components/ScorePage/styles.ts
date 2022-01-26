import styled, { css } from 'styled-components/native';

interface StartProps {
  center?: boolean;
}

interface QtProps {
  qt: boolean;
}

export const Container = styled.View`
  display: flex;
  align-items: center;
  height: 500px;
  width: 100%;
`;

export const ScoreMainContainer = styled.ImageBackground`
  display: flex;
  flex: 1;
  align-items: center;
  height: 70px;
  width: 100%;
  border-radius: 10px;
  padding: 20px;
`;

export const CloseButton = styled.TouchableOpacity`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 50px;
  height: 50px;
`;

export const CloseBtnImage = styled.Image`
   height: 50px;
   left: -30px;
`;

export const Header = styled.ImageBackground`
  display: flex;
  align-items: center;
  top: -20px;
  height: 60px;
  width: 220px;
`;

export const HeaderText = styled.Text`
  color: #FFF;
  margin-top: 10px;
  font-size: 15px;
`;

export const StarsContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 60px;
  height: 50px;
  width: 60%;
  margin-top: 20px;
`;

export const StarBG = styled.ImageBackground<StartProps>`
  ${({ center }) => center && css`
    top: -20px;
  `}
  height: 50px;
  width: 50px;
`;

export const Star = styled.Image<StartProps>`
  height: 50px;
  width: 50px;
  ${({ center }) => center && css`
    top: -20px;
  `}
`;

export const ScoreContainer = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

export const ScoreTitle = styled.Text`
  font-size: 35px;
  color: #FFF;
`;

export const Score = styled.Text`
  font-size: 25px;
  color: #FFF;
`;

export const QuizAnswerContainer = styled.View`
  display: flex;
  width: 100%;
  padding: 10px 25px;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const Answer = styled.View<QtProps>`
  display: flex;
  height: 40px;
  width: 40px;
  border-radius: 20px;
  overflow: hidden;
  background-color: ${({ qt }) => qt ? '#00FF7F' : '#EE4000'};
  border: 1px solid #FFF;
  justify-content: center;
  align-items: center;
  margin-right: 5px;
  margin-bottom: 10px;
`;

export const AnswerText = styled.Text<QtProps>`
  font-size: 15px;
  font-weight: bold;
  color: ${({ qt }) => qt ? '#000' : '#FFF'}
`;