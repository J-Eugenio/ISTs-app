import styled from 'styled-components/native';
import { SafeAreaView } from 'react-native';

export const Container = styled.SafeAreaView`
  display: flex;
  height: 100%;
  background: #1E88E5;
  justify-content: center;
  align-items: center;
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
  flex: 1;
  flex-wrap: wrap;
  margin-top: 15%;
`;

export const MainButton = styled.TouchableOpacity`
  display: flex;
  background: #FFFFFF;
  width: 150px;
  height: 130px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 15px;
`;

export const MainButtonImage = styled.Image``;

export const MainButtonText = styled.Text`
  color: #514766;
  font-weight: 600;
`;

export const MainQuiz = styled.View`

`;
