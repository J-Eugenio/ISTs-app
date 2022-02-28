import styled from 'styled-components/native';
import { SafeAreaView } from 'react-native';

interface ButtonType {
  type?: number;
}

export const Container = styled.SafeAreaView`
  display: flex;
  height: 100%;
  background: #1E88E5;
  align-items: center;
  z-index: 1;
`;

export const Header = styled.View`
  margin-top: 15px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const OpenDrawerButton = styled.TouchableOpacity``;

export const Title = styled.Text`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-weight: bold;
  color: white;
  font-size: 32px;
`;

export const Main = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
 
  flex-wrap: wrap;
  margin-top: 15%;
`;

export const MainButton = styled.TouchableOpacity<ButtonType>`
  display: flex;
  background: ${({ type }) => type === 1 ? '#DC143C': type === 2 ? '#0000EE' : type === 3 ? '#3CB371' : type === 4 ? '#CDCD00' : '#FFF'};
  width: 150px;
  height: 130px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 15px;
`;

export const MainButtonImage = styled.Image`
  border-radius: 20px;
`;

export const MainButtonText = styled.Text<ButtonType>`
  color: #514766;
  font-weight: 600;
  color:${({ type }) => type ? '#FFF' : '#000'};
`;

export const MainQuiz = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-end;
`;

export const Fundo = styled.Image`
  position: absolute;
  bottom: -18px;
  left: -15%;
  height: 500px;
  width: 350px;
  border-radius: 25px;
  overflow: hidden;
`;