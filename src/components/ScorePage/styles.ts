import styled, { css } from 'styled-components/native';

interface StartProps {
  center?: boolean;
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
